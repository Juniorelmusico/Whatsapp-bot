const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
require('dotenv').config();

// Configuración
const config = {
    botName: process.env.BOT_NAME || 'Bot de Mamá',
    welcomeMessage: process.env.WELCOME_MESSAGE || '¡Hola! Soy tu bot personal. Envíame cualquier texto y te lo convertiré a PDF. 📄',
    pdfConfirmationMessage: process.env.PDF_CONFIRMATION_MESSAGE || '¿Quieres que convierta este texto a PDF? Responde "sí" para confirmar.',
    pdfGeneratedMessage: process.env.PDF_GENERATED_MESSAGE || '¡PDF generado exitosamente! 📄✨',
    errorMessage: process.env.ERROR_MESSAGE || 'Lo siento, hubo un error al procesar tu solicitud. Inténtalo de nuevo.',
    pdfFilenamePrefix: process.env.PDF_FILENAME_PREFIX || 'texto_de_mama',
    pdfOutputDir: process.env.PDF_OUTPUT_DIR || './pdfs'
};

// Crear directorio de PDFs si no existe
if (!fs.existsSync(config.pdfOutputDir)) {
    fs.mkdirSync(config.pdfOutputDir, { recursive: true });
}

// Inicializar cliente de WhatsApp
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ]
    }
});

// Almacenar mensajes pendientes de confirmación
const pendingMessages = new Map();

// Función para generar PDF
async function generatePDF(text, filename) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
                '--disable-gpu'
            ]
        });
        
        const page = await browser.newPage();
        
        // Crear HTML con el texto
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Texto de Mamá</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 40px;
                    color: #333;
                    background-color: #fff;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #4CAF50;
                    padding-bottom: 20px;
                }
                .content {
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #666;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>📄 Texto de Mamá</h1>
                <p>Generado el ${new Date().toLocaleString('es-ES')}</p>
            </div>
            <div class="content">${text}</div>
            <div class="footer">
                <p>Generado por el Bot de WhatsApp</p>
            </div>
        </body>
        </html>
        `;
        
        await page.setContent(html);
        
        const pdfPath = path.join(config.pdfOutputDir, filename);
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '20mm'
            }
        });
        
        await browser.close();
        return pdfPath;
    } catch (error) {
        console.error('Error generando PDF:', error);
        throw error;
    }
}

// Eventos del cliente
client.on('qr', (qr) => {
    console.log('Escanea este código QR con WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log(`${config.botName} está listo! 🤖`);
    console.log('El bot está funcionando y esperando mensajes...');
});

client.on('message', async (message) => {
    try {
        const contact = await message.getContact();
        const chat = await message.getChat();
        
        // Ignorar mensajes del bot mismo
        if (message.fromMe) return;
        
        // Ignorar mensajes de grupos (opcional)
        if (chat.isGroup) {
            return;
        }
        
        const messageText = message.body.toLowerCase().trim();
        const originalMessage = message.body;
        
        // Comandos especiales
        if (messageText === '/start' || messageText === '/inicio') {
            await message.reply(config.welcomeMessage);
            return;
        }
        
        if (messageText === '/help' || messageText === '/ayuda') {
            const helpMessage = `
🤖 *${config.botName} - Ayuda*

*Comandos disponibles:*
• /start o /inicio - Mensaje de bienvenida
• /help o /ayuda - Mostrar esta ayuda

*Uso:*
1. Envía cualquier texto
2. El bot te preguntará si quieres convertirlo a PDF
3. Responde "sí" para generar el PDF
4. Recibirás el archivo PDF generado

*Ejemplo:*
Tú: "Hola, este es mi texto"
Bot: "¿Quieres que convierta este texto a PDF? Responde 'sí' para confirmar."
Tú: "sí"
Bot: [Envía el PDF]
            `;
            await message.reply(helpMessage);
            return;
        }
        
        // Procesar confirmación de PDF
        if (pendingMessages.has(contact.id._serialized)) {
            const pendingData = pendingMessages.get(contact.id._serialized);
            
            if (messageText === 'sí' || messageText === 'si' || messageText === 'yes' || messageText === 'y') {
                await message.reply('🔄 Generando PDF... Por favor espera un momento.');
                
                try {
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const filename = `${config.pdfFilenamePrefix}_${timestamp}.pdf`;
                    
                    const pdfPath = await generatePDF(pendingData.text, filename);
                    
                    // Enviar el PDF
                    const media = MessageMedia.fromFilePath(pdfPath);
                    await message.reply(media, undefined, { caption: config.pdfGeneratedMessage });
                    
                    // Limpiar mensaje pendiente
                    pendingMessages.delete(contact.id._serialized);
                    
                    // Opcional: eliminar el archivo PDF después de enviarlo
                    // fs.unlinkSync(pdfPath);
                    
                } catch (error) {
                    console.error('Error generando PDF:', error);
                    await message.reply(config.errorMessage);
                    pendingMessages.delete(contact.id._serialized);
                }
            } else if (messageText === 'no' || messageText === 'n') {
                await message.reply('Entendido. No se generará el PDF. Puedes enviarme otro texto cuando quieras. 😊');
                pendingMessages.delete(contact.id._serialized);
            } else {
                await message.reply('Por favor responde "sí" o "no" para confirmar si quieres generar el PDF.');
            }
            return;
        }
        
        // Si es un mensaje de texto normal, preguntar si quiere PDF
        if (originalMessage.trim().length > 0) {
            const confirmationMessage = `${config.pdfConfirmationMessage}\n\n*Tu texto:*\n"${originalMessage}"`;
            await message.reply(confirmationMessage);
            
            // Guardar el mensaje pendiente
            pendingMessages.set(contact.id._serialized, {
                text: originalMessage,
                timestamp: new Date()
            });
        }
        
    } catch (error) {
        console.error('Error procesando mensaje:', error);
        try {
            await message.reply(config.errorMessage);
        } catch (replyError) {
            console.error('Error enviando mensaje de error:', replyError);
        }
    }
});

// Manejar errores
client.on('auth_failure', (msg) => {
    console.error('Error de autenticación:', msg);
});

client.on('disconnected', (reason) => {
    console.log('Cliente desconectado:', reason);
});

// Iniciar el cliente
client.initialize();

// Manejo de cierre graceful
process.on('SIGINT', async () => {
    console.log('\nCerrando el bot...');
    await client.destroy();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('\nCerrando el bot...');
    await client.destroy();
    process.exit(0);
});
