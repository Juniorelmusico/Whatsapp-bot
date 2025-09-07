# 🆓 Despliegue GRATIS en Render

## 🎯 **Render - 100% Gratis**

Render es perfecto para tu bot porque:
- ✅ **Completamente gratis** para siempre
- ✅ **Sin límite de tiempo**
- ✅ **Se despierta automáticamente** cuando tu mamá envía un mensaje
- ✅ **Fácil de configurar**

### **Paso 1: Crear cuenta en Render**

1. **Ve a [render.com](https://render.com)**
2. **Haz clic en "Get Started for Free"**
3. **Regístrate con GitHub** (es más fácil)
4. **Autoriza Render** para acceder a tus repositorios

### **Paso 2: Crear Web Service**

1. **En el dashboard de Render, haz clic en "New +"**
2. **Selecciona "Web Service"**
3. **Conecta tu repositorio de GitHub:**
   - Busca `whatsapp-pdf-bot`
   - Haz clic en "Connect"

### **Paso 3: Configurar el servicio**

**Configuración básica:**
- **Name**: `whatsapp-pdf-bot`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Variables de entorno:**
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

1. **Haz clic en "Create Web Service"**
2. **Render construirá y desplegará automáticamente**
3. **Espera 2-3 minutos** para que termine el despliegue

### **Paso 5: Conectar WhatsApp**

1. **Ve a tu servicio en Render**
2. **Haz clic en "Logs"**
3. **Aparecerá el código QR**
4. **Escanéalo con WhatsApp** desde el celular de tu mamá:
   - Abre WhatsApp
   - Ve a Configuración > Dispositivos vinculados
   - Toca "Vincular un dispositivo"
   - Escanea el código QR

---

## ⚠️ **Importante sobre el plan gratuito**

### **"Sleep Mode" (Modo Sueño)**
- El bot se "duerme" después de **15 minutos** de inactividad
- Se **despierta automáticamente** cuando tu mamá envía un mensaje
- **No hay problema** - solo toma 10-15 segundos en despertarse

### **Límites del plan gratuito**
- ✅ **Sin límite de tiempo**
- ✅ **Sin límite de mensajes**
- ✅ **Sin límite de PDFs**
- ⚠️ **Solo se duerme** después de 15 minutos de inactividad

---

## 🎉 **¡Listo!**

Una vez completado:
- ✅ Tu bot funcionará **24/7 GRATIS**
- ✅ Tu mamá podrá usarlo desde su celular
- ✅ No necesitarás tener tu computadora encendida
- ✅ **Costo: $0/mes**

---

## 🔧 **Alternativas gratuitas**

### **Vercel (Gratis)**
- ✅ Completamente gratis
- ⚠️ Funciones serverless (puede tener problemas con WhatsApp Web)

### **Netlify (Gratis)**
- ✅ Completamente gratis
- ⚠️ Más para sitios web estáticos

### **Railway (Gratis con límites)**
- ✅ Plan gratuito disponible
- ⚠️ Límite de $5/mes de uso

---

## 🎯 **Recomendación Final**

**Render es la mejor opción gratuita** porque:
- ✅ Es completamente gratis para siempre
- ✅ Funciona perfectamente con WhatsApp
- ✅ Se despierta automáticamente
- ✅ Muy fácil de configurar

¿Quieres que te ayude con el despliegue en Render paso a paso?
