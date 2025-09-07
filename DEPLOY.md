# 🚀 Despliegue en Servicios de Nube

## 🌟 **Railway (Recomendado)**

### **Paso 1: Crear cuenta en Railway**
1. Ve a [railway.app](https://railway.app)
2. Regístrate con GitHub
3. Conecta tu repositorio

### **Paso 2: Configurar variables de entorno**
En Railway, ve a tu proyecto > Variables:
```
BOT_NAME=Bot de Mamá
WELCOME_MESSAGE=¡Hola! Soy tu bot personal. Envíame cualquier texto y te lo convertiré a PDF. 📄
PDF_CONFIRMATION_MESSAGE=¿Quieres que convierta este texto a PDF? Responde "sí" para confirmar.
PDF_GENERATED_MESSAGE=¡PDF generado exitosamente! 📄✨
ERROR_MESSAGE=Lo siento, hubo un error al procesar tu solicitud. Inténtalo de nuevo.
PDF_FILENAME_PREFIX=texto_de_mama
PDF_OUTPUT_DIR=./pdfs
```

### **Paso 3: Desplegar**
1. Railway detectará automáticamente que es un proyecto Node.js
2. Instalará las dependencias
3. Ejecutará `npm start`
4. Tu bot estará funcionando 24/7

### **Paso 4: Conectar WhatsApp**
1. Ve a los logs de Railway
2. Aparecerá el código QR
3. Escanéalo con WhatsApp desde el celular de tu mamá

---

## 🌐 **Render (Alternativa Gratuita)**

### **Paso 1: Crear cuenta en Render**
1. Ve a [render.com](https://render.com)
2. Regístrate con GitHub
3. Conecta tu repositorio

### **Paso 2: Crear Web Service**
1. Selecciona tu repositorio
2. Configura:
   - **Name**: whatsapp-pdf-bot
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### **Paso 3: Variables de entorno**
En Render, ve a Environment:
```
BOT_NAME=Bot de Mamá
WELCOME_MESSAGE=¡Hola! Soy tu bot personal. Envíame cualquier texto y te lo convertiré a PDF. 📄
PDF_CONFIRMATION_MESSAGE=¿Quieres que convierta este texto a PDF? Responde "sí" para confirmar.
PDF_GENERATED_MESSAGE=¡PDF generado exitosamente! 📄✨
ERROR_MESSAGE=Lo siento, hubo un error al procesar tu solicitud. Inténtalo de nuevo.
PDF_FILENAME_PREFIX=texto_de_mama
PDF_OUTPUT_DIR=./pdfs
```

### **Paso 4: Desplegar**
1. Render construirá y desplegará automáticamente
2. Tu bot estará disponible 24/7

---

## ☁️ **Heroku (Profesional)**

### **Paso 1: Instalar Heroku CLI**
```bash
# Windows
winget install Heroku.HerokuCLI

# macOS
brew tap heroku/brew && brew install heroku

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

### **Paso 2: Crear aplicación**
```bash
heroku login
heroku create whatsapp-pdf-bot
```

### **Paso 3: Configurar variables**
```bash
heroku config:set BOT_NAME="Bot de Mamá"
heroku config:set WELCOME_MESSAGE="¡Hola! Soy tu bot personal. Envíame cualquier texto y te lo convertiré a PDF. 📄"
heroku config:set PDF_CONFIRMATION_MESSAGE="¿Quieres que convierta este texto a PDF? Responde 'sí' para confirmar."
heroku config:set PDF_GENERATED_MESSAGE="¡PDF generado exitosamente! 📄✨"
heroku config:set ERROR_MESSAGE="Lo siento, hubo un error al procesar tu solicitud. Inténtalo de nuevo."
heroku config:set PDF_FILENAME_PREFIX="texto_de_mama"
heroku config:set PDF_OUTPUT_DIR="./pdfs"
```

### **Paso 4: Desplegar**
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

---

## 🔧 **Configuración para Servicios de Nube**

### **Archivos necesarios:**
- ✅ `package.json` - Dependencias
- ✅ `railway.json` - Configuración de Railway
- ✅ `Procfile` - Configuración de Heroku
- ✅ `index.js` - Bot principal (ya optimizado para nube)

### **Optimizaciones incluidas:**
- ✅ Puppeteer configurado para servidores
- ✅ Argumentos de Chrome optimizados
- ✅ Manejo de memoria mejorado
- ✅ Logs para monitoreo

---

## 💰 **Comparación de Precios**

| Servicio | Precio | Ventajas |
|----------|--------|----------|
| **Railway** | $5/mes | Fácil, rápido, base de datos incluida |
| **Render** | Gratis/$7/mes | Plan gratuito disponible |
| **Heroku** | $7/mes | Muy estable, muchas integraciones |

---

## 🎯 **Recomendación Final**

**Para tu caso, recomiendo Railway porque:**
- ✅ Es el más fácil de configurar
- ✅ Precio justo ($5/mes)
- ✅ Funciona perfectamente con WhatsApp
- ✅ Soporte excelente
- ✅ Despliegue automático desde GitHub

¿Quieres que te ayude con el despliegue en Railway paso a paso?
