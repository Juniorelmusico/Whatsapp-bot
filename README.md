# 🤖 Bot de WhatsApp - Convertidor de Texto a PDF

Un bot de WhatsApp que permite convertir cualquier texto enviado en un chat a un archivo PDF con formato profesional.

## ✨ Características

- 📱 **Integración con WhatsApp**: Funciona directamente con WhatsApp Web
- 📄 **Generación de PDF**: Convierte texto a PDF con formato profesional
- 🎨 **Diseño atractivo**: PDFs con encabezado, contenido formateado y pie de página
- 🔄 **Confirmación**: Pregunta antes de generar el PDF
- 🛡️ **Seguro**: Solo funciona en chats privados (no en grupos)
- ⚙️ **Configurable**: Mensajes y configuraciones personalizables

## 🚀 Instalación

### Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn
- WhatsApp instalado en tu teléfono

### Pasos de instalación

1. **Clona o descarga este proyecto**
   ```bash
   cd "Whatsapp bot"
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   - Copia `config.env.example` a `config.env`
   - Personaliza los mensajes según tus necesidades

4. **Inicia el bot**
   ```bash
   npm start
   ```

5. **Escanea el código QR**
   - Aparecerá un código QR en la consola
   - Escanéalo con WhatsApp desde tu teléfono
   - Ve a WhatsApp > Dispositivos vinculados > Vincular un dispositivo

## 📱 Cómo usar

### Comandos disponibles

- `/start` o `/inicio` - Mensaje de bienvenida
- `/help` o `/ayuda` - Mostrar ayuda

### Flujo de uso

1. **Envía cualquier texto** al bot
2. **El bot preguntará** si quieres convertirlo a PDF
3. **Responde "sí"** para generar el PDF
4. **Recibe el archivo PDF** generado

### Ejemplo de conversación

```
Tú: Hola, este es mi texto importante
Bot: ¿Quieres que convierta este texto a PDF? Responde "sí" para confirmar.

    Tu texto:
    "Hola, este es mi texto importante"

Tú: sí
Bot: 🔄 Generando PDF... Por favor espera un momento.
Bot: [Envía el archivo PDF] ¡PDF generado exitosamente! 📄✨
```

## ⚙️ Configuración

Edita el archivo `config.env` para personalizar:

- **BOT_NAME**: Nombre del bot
- **WELCOME_MESSAGE**: Mensaje de bienvenida
- **PDF_CONFIRMATION_MESSAGE**: Mensaje de confirmación
- **PDF_GENERATED_MESSAGE**: Mensaje cuando se genera el PDF
- **ERROR_MESSAGE**: Mensaje de error
- **PDF_FILENAME_PREFIX**: Prefijo para los archivos PDF
- **PDF_OUTPUT_DIR**: Directorio donde se guardan los PDFs

## 📁 Estructura del proyecto

```
Whatsapp bot/
├── index.js              # Archivo principal del bot
├── package.json          # Dependencias del proyecto
├── config.env            # Configuración personalizable
├── config.env.example    # Ejemplo de configuración
├── README.md            # Este archivo
└── pdfs/                # Directorio donde se guardan los PDFs
```

## 🔧 Desarrollo

### Modo desarrollo

```bash
npm run dev
```

Esto iniciará el bot con nodemon para reinicio automático cuando cambies el código.

### Estructura del código

- **index.js**: Contiene toda la lógica del bot
- **Configuración**: Variables de entorno para personalización
- **Generación de PDF**: Usa Puppeteer para crear PDFs profesionales
- **WhatsApp**: Usa whatsapp-web.js para la integración

## 🛠️ Solución de problemas

### El bot no responde
- Verifica que hayas escaneado el código QR correctamente
- Asegúrate de que el bot esté ejecutándose
- Revisa la consola para errores

### Error al generar PDF
- Verifica que el directorio `pdfs` existe
- Asegúrate de tener permisos de escritura
- Revisa que Puppeteer esté instalado correctamente

### El bot no funciona en grupos
- Por diseño, el bot solo funciona en chats privados
- Esto evita spam en grupos

## 📝 Notas importantes

- **Privacidad**: El bot solo funciona en chats privados
- **Almacenamiento**: Los PDFs se guardan localmente en el directorio `pdfs`
- **Sesión**: La sesión de WhatsApp se mantiene activa entre reinicios
- **Seguridad**: No compartas el código QR con otras personas

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el bot:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la sección de solución de problemas
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de seguir los pasos de instalación correctamente

---

¡Disfruta usando tu bot de WhatsApp! 🤖✨
