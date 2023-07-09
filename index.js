//BASE CREADA POR KEVMO-OFC



// MODULOS 
const {default: makeWASocket, makeInMemoryStore, useMultiFileAuthState, delay, downloadContentFromMessage, DisconnectReason, templateMessage, MediaType, GroupSettingChange, isBaileys, WASocket, WAProto, getStream, relayWAMessage, Miimetype, proto, mentionedJid, processTime, MessageTypeProto, BufferJSON, GroupMetadata, getContentType} = require("@adiwajshing/baileys")

const P = require("pino")
const fs = require("fs")
const util = require("util")
const clui = require("clui")
const ms = require("ms")
const speed = require("performance-now")
const fetch = require("node-fetch")
const axios = require("axios")
const webp = require("node-webpmux")
const chalk = require("chalk")
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const ffmpeg = require("fluent-ffmpeg")
const acrcloud = require("acrcloud")
const { Boom } = require("@hapi/boom")
const { exec, spawn, execSync } = require("child_process")
const { getBuffer, generateMessageTag, tempRuntime, clockString, color, fetchJson, getGroupAdmins, getRandom, parseMention, getExtension, banner, uncache, nocache, isFiltered, addFilter } = require('./archivos/herramientas')
const varping = speed()
const ping = speed() - varping
const timestamp = speed()
const latensi = speed() - timestamp
const antilink = JSON.parse(fs.readFileSync('./archivos/antilink.json'))
const { TelegraPh } = require("./archivos/telegraPh.js")
 const {
 tmpdir
} = require("os")
const { error } = require("console")
const { mimeTypes } = require("file-type")
const { everyLimit } = require("async")
const { env } = require("process")
// CONSTANTES CREADAS

prefixo = "/" // Cambiar Prefijo
nomebot = "luci 1.0" // Cambiar nombre del Bot
var Creador = "Kev OFC" // No cambiar
const welkom = JSON.parse(fs.readFileSync('./archivos/welkom.json'))
const autostick = JSON.parse(fs.readFileSync('./archivos/autostick.json'))

// No borrar
nomedono = "Kev OFC" // No cambiar
numerodono = "+573136462636" // No cambiar
nomover= `
● Creado Por Juls Modders y Kev mo
● Suscribete a Guedel Innovatión
● Versión 4.0
● Modulos Actualizados
`
nomober2 = "Creditos Kev OFC julsModerss"

//Conexión 
async function connectToWhatsApp () {
const store = makeInMemoryStore({ logger: P().child({ level: "silent", stream: "store" })})
console.log(nomober2)
console.log(banner.string)
console.log(nomover)
const { state, saveCreds } = await useMultiFileAuthState('./qr_code')

const anita = makeWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['Base - anita','macOS','desktop'], auth: state })

anita.ev.on("creds.update", saveCreds)
store.bind(anita.ev)

anita.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
anita.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
anita.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update

if (connection === "close") {
const shouldReconnect = lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
console.log("Uhh, Ocurrió un Error :", lastDisconnect.error, "Esperame Estoy Intentando Conectar...", shouldReconnect)

if (shouldReconnect) {
connectToWhatsApp()}
} else if (connection === "open") {
console.log("Luci-BOT Esta ConectadA Exitosamente")
}
})

anita.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
if (!info.message) return 
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ? info.message.templateButtonenviarMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// Constantes Creadas Por Juls y kev

const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await anita.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const isAntiLink = isGroup ? antilink.includes(from) : true
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anita.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = anita.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const colom = moment().tz('America/Bogota').format('DD/MM HH:mm')
const data = new Date().toLocaleDateString('pt-BR', { ...colom, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('pt-BR', colom)
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = mimeTypes
const isAutoSt = isGroup ? autostick.includes(from) : false
const isAdmin = groupAdmins.includes(sender) || false

// ASYNC FUNCION

anita.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options)
    } else {
        buffer = await imageToWebp(buff)
    }

    await anita.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
}

anita.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await anita.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}
anita.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }
let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}

anita.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
}
    
return buffer
 } 

//        ---------------- B I E N V E N I D A ---------------------------

/*anita.ev.on('group-participants.update', async (anu) => {
  if(!welkom.includes(anu.id)) return 
  try{
    const datosgp = await anita.groupMetadata(anu.id)

    if(anu.action == 'add') {

      const numerodep = anu.participants[0]

      const fotito = fs.readFileSync('./archivos/media/Bienvenida.jpg')

      const Bienvenida = `
      ╭━〘𝓐𝓝𝓘𝓣𝓐-𝓑𝓞𝓣𝐎𝐓〙\n┃  ⛥╭──────────────\n๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${numerodep}\n💖 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳@\n┃ ⛥│🤴ᩭ✎𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁\n┃ ⛥│📔ᩭ✎http://wa.me/573136463626\n┃ ⛥│📚ᩭ✎𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁\n┃ ⛥│🍀ᩭ✎𝙰𝙼𝙸𝚂𝚃𝙰𝙳𝙴𝚂\n┃ ⛥│🤝ᩭ✎𝙰𝙼𝙸𝙶𝙾𝚂\n┃ ⛥│❤️📚ᩭ✎𝙳𝙴𝚂𝙼𝙰𝙳𝚁𝙴┃ ⛥│◦➛😇ᩭ✎𝙲𝙾𝚃𝙾𝚁𝚁𝙴𝙾 𝚈 𝙼Á𝚂\n┃ ⛥│⁉️ᩭ✎𝙰𝚅𝙸𝚂𝙾 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴:\n𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝙻𝚎𝚎 𝚕𝚊𝚜 𝚛𝚎𝚐𝚕𝚊𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚎𝚟𝚒𝚝𝚎𝚜 𝚜𝚎𝚛 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚢 𝚎𝚟𝚒𝚝𝚎𝚜 𝚝𝚎𝚗𝚎𝚛 𝚙𝚛𝚘𝚋𝚕𝚎𝚖𝚊𝚜 𝚌𝚘𝚗 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 𝚍𝚎𝚕 𝚐𝚛𝚞o\n┃ ⛥│\n┃ ⛥│◦➛🌱OF-KEV𝐈\n┃ ⛥╰───────────\n╰━━━━━━━━━━━──⊷'

      ${numerodep}

      `
      anita.sendMessage(anu.id,{image : fotito, caption : Bienvenida})
     }

     if(anu.action == 'remove') {

      const numerodep = anu.participants[0]

      const fotito2 = fs.readFileSync('./archivos/media/Despedida.jpg')

      const Despedida = `
     
       ╭━〘𝓐𝓝𝓘𝓣𝓐-𝓑𝓞𝓣𝐎𝐓〙\n┃ ⛥╭──────────────\n${numerodep}\n𝐒𝐚𝐥𝐢ó 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐧𝐢 𝐦𝐨𝐝𝐨 𝐪𝐮𝐞 𝐭𝐞 𝐯𝐚𝐲𝐚 𝐛𝐢𝐞𝐧 𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫ó𝐱𝐢𝐦𝐚 𝐪𝐮𝐞 𝐃𝐢𝐨𝐬 𝐭𝐞 𝐛𝐞𝐧𝐝𝐢𝐠𝐚\n┃ ⛥│🌱OF-KEV𝐈☘\n┃ ⛥╰───────────\n╰━━━━━━━━━━━──⊷'
      `
      anita.sendMessage(anu.id,{image : fotito2, caption : Despedida})
    }

  } catch(e) {
      console.log('Error: % s', color("red"))
     }
    })

// ----------------------- FIN BIENVENIDA -------------------

*/












 //  ASYNC


// Constantes Nuevas

// STICKER 

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
     buffer = await writeExifImg(buff, options)
    } else {
     buffer = await imageToWebp(buff)
    }
    
    await anita.sendMessage(jid, {
     sticker: {
    url: buffer
     }, ...options
    }, {
     quoted
    })
    return buffer
     }
     
     const enviarfiguvid = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
     buffer = await writeExifVid(buff, options)
    } else {
     buffer = await videoToWebp(buff)
    }
    
    await anita.sendMessage(jid, {
     sticker: {
    url: buffer
     }, ...options
    }, {
     quoted
    })
    return buffer
     }
     
     const getFileBuffer1 = async (mediakey, MediaType) => { 
    const stream = await downloadContentFromMessage(mediakey, MediaType)
    
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
    }



// fin sticker



const enviarsticker = (Sticker) => {
  anita.sendMessage(from,{ Sticker : Sticker }, {quoted :  contato})
}

const enviartexto = (texto) => {
    anita.sendMessage(from,{ text : texto }, {quoted :  info})
  }
const enviar = (text) => {
anita.sendMessage(from, {text: text}, {quoted: contato})}
const enviarimagencap = (imagen,caption) => {
anita.sendMessage(from,{ image : imagen,caption : caption }, {quoted :  contato})
  }
//                                            ---------------------------ANTILINK--------------------------------

if (budy.includes("https://")){
  if (!isGroup) return
  if (!isAntiLink) return
  if (isGroupAdmins) return enviartexto(`*${pushname}*UFF de la que te salvas, eres admin, así que no te voy a prohibir`)
         var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
          enviartexto(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑el 𝑔𝑟𝑢𝑝𝑜*`)
           }, 100)
           enviartexto(`*_「 link  detectado 」_*\n* ${pushname} *--Uy grave la cosa, vas a morir--*${groupMetadata.subject}*`)
  setTimeout( () => {
  anita.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviartexto(`*ERROR:* ${e}`)}) 
            }, 10)
   setTimeout( () => {
              
              }, 0)
   }
  if (budy.includes("wa.me")){
  if (!isGroup) return
  if (!isAntiLink) return
  if (isGroupAdmins) return enviar(`*${pushname}*UFF de la que te salvas, eres admin, así que no te voy a prohibir`)
         var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
          enviartexto(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑el 𝑔𝑟𝑢𝑝𝑜*`)
           }, 100)
           enviartexto(`*_「 link  detectado 」_*\n*${pushname}* --Uy grave la cosa vas a morir-- *${groupMetadata.subject}*`)
  setTimeout( () => {  
  anita.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviartexto(`*ERROR:* ${e}`)}) 
            }, 10)
   setTimeout( () => {
              
              }, 0)
   }
  if (budy.includes("http://")){
  if (!isGroup) return
  if (!isAntiLink) return
  if (isGroupAdmins) return enviartexto(`*${pushname}* eres admin, así que no te voy a prohibir`)
         var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
          enviartexto(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑el 𝑔𝑟𝑢𝑝𝑜*`)
           }, 100)
           enviartexto(`*_「 link  detectado 」_*\n*${pushname}* vas hacer baneado del grupo *${groupMetadata.subject}*`)
  setTimeout( () => {  
  anita.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviartexto(`*ERROR:* ${e}`)}) 
            }, 10)
   setTimeout( () => {
              
              }, 0)
   }

   //                                   ----------------------- FIN ANTILINK------------------------

//        ---------------- B I E N V E N I D A ---------------------------


// ----------------------- FIN BIENVENIDA -------------------

//Const is (Extras)

const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")
const iswelkom = isGroup ? welkom.includes(from) : false 
const {videoToWebp,imageToWebp,writeExifImg,writeExifVid} = require('./archivos/stickersss.js')


const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

//Respuestas Automaticas
respuesta = {
espere: " *💫  Querido Usuario , espere un momento Porfavor* ",
registrate: ` *💫  Hola ${pushname}*, *registrese Porfavor*: ${prefixo}rg nombre/edad`,
rg: " *💫  Querido Usuario , usted ya se encuentra registrado, no haga spam porfavor* ",
premium: " *💫  Querido Usuario , para poder usar este comando debes comprar la versión premiun* ",
bot: " *💫  Querido Usuario , este comando es exclusivo solo para el Bot* ",
dono: " *💫  Querido Usuario , este comando está bloqueado y solo puede ser usado por kev OFC* ",
grupo: " *💫  Querido Usuario , este comando es solo para grupos* ",
privado: " *💫  Querido Usuario , este comando es solo para chats Privados* ",
admin: " *💫  Querido Usuario , este comando es solo para Administradores* ",
botadmin: " *💫  Querido Usuario , Para usar este comando el bot debe ser Administrador* ",
error: " *💫  Querido Usuario , intentelo nuevamente, si el error persiste comuniquese con kev OFC* ",
link : " *💫  Querido Usuario , Porfavor coloque un Link* ",
nombre: " *💫  Querido Usuario , Porfavor indiqueme que debo buscar*",
gif: " *💫  Querido Usuario , remarque un Sticker en Movimiento Porfavor*",
especial : "*💫  Querido Usuario , está Prohibido escribir emojis o caracteres especiales*",
menu : "*💫 🤖:)PorFavor Espere , El Menu se esta enviando :)🤖"
}

// Anti Spam

if (isCmd) {
if (isFiltered(sender)) {
return enviar('Eh Pendejo Sin spam... Espera 5 Segundos...')
} else {
addFilter(sender)}}

// prefixo falso

if(budy == `${prefixo}`) {
  enviar('¿Amm y el comando?')}


//Mensage en Consola

if (isGroup) {
if (isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'yellow')}\n${color('┃', 'yellow')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'yellow')} ${color('Nombre:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'yellow')} ${color('Horário:', 'yellow')} ${color(hora, 'white')}\n${color('┃', 'yellow')} ${color('comando:', 'yellow')} ${color(comando)}\n${color('┃', 'white')} ${color('Palabras:', 'yellow')} ${color(budy.length, 'yellow')}\n${color('┃', 'yellow')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'yellow')}`)
 if (!isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'yellow')}\n${color('┃', 'yellow')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'yellow')} ${color('Nombre:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'yellow')} ${color('Horário:', 'yellow')} ${color(time, 'white')}\n${color('┃', 'yellow')} ${color('comando:', 'yellow')} ${color('No', 'white')}\n${color('┃', 'yellow')} ${color('Palabras:', 'yellow')} ${color(budy.length, 'white')}\n${color('┃', 'yellow')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'yellow')}`)
}

//comandos con prefixo




switch(comando) {



    case "promover":
    if (!isGroup) return enviar(respuesta.grupo)
    if (!isGroupAdmins) return enviar(respuesta.admin)
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
    if (q < 1) return enviar("🎭 ¿Dónde está el número? ")
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
    try {
    anita.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "promote")
    enviar(`🎭 ${q} Promovido con éxito al cargo de admin `)
    } catch(e) {
    console.log(e)
    enviar(respuesta.error)
    }
    break
    
    case 'tagall':
    case 'invocar':
    case 'hidetag':
    if (!isGroup) return enviar(respuesta.grupo)
    if (!isGroupAdmins) return enviar(respuesta.admin)
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
    members_id = []
    const mentions = (teks, memberr, id) => {
    (id == null || id == undefined || id == false) ? anita.sendMessage(from, {
    text: '@12345678901', contextInfo: {
    "mentionedJid": memberr
    }}): anita.sendMessage(from, {
    text: teks.trim(), contextInfo: {
    "mentionedJid": memberr
    }}, {
    quoted: info
    })
    }
    teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n`: ''}$\n`
    for (let mem of groupMembers) {
    teks += `♧ @${mem.id.split('@')[0]}\n`
    members_id.push(mem.id)
    }
    mentions(teks, members_id, true)
    break

    case "promover":
        if (!isGroup) return enviar(respuesta.grupo)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
        if (q < 1) return enviar("🎭 ¿Dónde está el número? ")
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
        try {
        anita.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "promote")
        enviar(`🎭 ${q} Promovido con éxito al cargo de admin `)
        } catch(e) {
        console.log(e)
        enviar(respuesta.error)
        }
        break
        
// ---BAN Y ADD ---

case 'agregar' :
    case 'add' : 
    case 'añadir' :
      case 'unir' :
        if(args.length<0 ) return 
        enviar('👀✍𝔼𝕤𝕔𝕣𝕚𝕓𝕖 𝕖𝕝 𝕟𝕦𝕞𝕖𝕣𝕠 𝕕𝕖 𝕝𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒 𝕢𝕦𝕖 𝕕𝕖𝕤𝕖𝕒𝕤 𝕒𝕘𝕣𝕖𝕘𝕒𝕣 𝕤𝕠𝕪 𝕦𝕟 𝔹𝕆𝕋 𝕟𝕠 𝕒𝕕𝕚𝕧𝕚𝕟𝕠🔮')
        if(!isOwner) return enviar(respuesta.dono)
        let pepe = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await anita.groupParticipantsUpdate(from, [pepe] , 'add')
        break
   
        case "ban":
          if (!isGroup) return enviar(respuesta.grupo)
          if (!isGroupAdmins) return enviar(respuesta.admin)
          if (q < 1) return enviar("🎭 👀✍𝔼𝕤𝕔𝕣𝕚𝕓𝕖 𝕖𝕝 𝕟𝕦𝕞𝕖𝕣𝕠 𝕕𝕖 𝕝𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒 𝕢𝕦𝕖 𝕕𝕖𝕤𝕖𝕒𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕤𝕠𝕪 𝕦𝕟a 𝔹𝕆𝕋 𝕟𝕠 𝕒𝕕𝕚𝕧𝕚𝕟a🤔🔮 ")
          if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
          if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
          kicka = info.message.extendedTextMessage.contextInfo.participant
          anita.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "remove")
          } else { 
          enviar("࿐ Marcar el mensaje de la persona")
          }
          break

          case 'welcome' : 
          case 'bienvenida': 
          enviar('*HOLA QUERIDO USUARIO DEVIDO A UN ERROR EL COMANDO WELCOME(BIENVENIDA) ESTA SIN FUNCIONAR, GRACIAS POR SU ATENCION..*')
          /*if(!isGroup) return enviar(respuesta.grupos)
          if(args.length<1 ) return 
          enviar('👀✍ESCRIBA 1 PARA ACTIVAR Y 0 PARA DESACTIVAR')
          if(!isGroupAdmins) return enviar ('✨😎𝕝𝕠 𝕤𝕚𝕖𝕟𝕥𝕠 𝕞𝕚 𝕜𝕚𝕟𝕘 , 𝕟𝕠 𝕖𝕣𝕖𝕤 𝕦𝕟 𝕒𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕕𝕠𝕣 𝕕𝕖 𝕝𝕠𝕤 𝔾𝕆𝔻𝕊😎✨')
          if(!isBotGroupAdmins) return enviar(respuesta.botadmin)
          if(Number(args[0])==1) {
            if(iswelkom) return enviar('𝕄𝕀 𝕂𝕀ℕ𝔾 , 𝕐𝔸 𝔼𝕊𝕋𝔸 𝔸ℂ𝕋𝕀𝕍𝕆')
            welkom.push(from)
            fs.writeFileSync('./archivos/welkom.json',JSON.stringify(welkom)) ; return enviar('𝔸ℂ𝕋𝕀𝕍𝔸𝔻𝕆 ℂ𝕆ℝℝ𝔼ℂ𝕋𝔸𝕄𝔼ℕ𝕋𝔼')
          } else if (Number(args[0]==0)) {
            if(!iswelkom) return enviar('ℕ𝕆 𝔼𝕊𝕋𝔸 𝔸ℂ𝕋𝕀𝕍𝔸𝔻𝕆')
            const elsy = from 
            const processo = welkom.indexOF(elsy)
            while(processo>=0) {
              welkom.splice(processo, 1)
              processo = welkom.indexOF(elsy)
            }
            fs.writeFileSync('./archivos/welkom.json',Json.stringify(welkom))
            enviar('𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸𝔻𝕆 ℂ𝕆ℝℝ𝔼ℂ𝕋𝔸𝕄𝔼ℕ𝕋𝔼')
          } else {
            enviar('1 para activar y 0 para desactivar')
          }
          break
*/

          

// Crea tus comandos Aqui
case "hola":
enviar("Hola hermano , todo funciona bien")
break
case "creador":
anita.sendMessage(from,{ text : "Mi creador es Kevin OFC"},{ quoted : info})
break
case "ping":
enviar(`🎭 velocidad de respuesta ${latensi.toFixed(4)} segundos `)
break
//                                      -------------------- ANTILINK-----------------------    

case 'antilink':
    if (!isGroupAdmins) return enviar(respuesta.admin)
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
    if (!isGroup) return enviar (respuesta.grupo)
              if (args.length < 1) return enviar('digite 1 para ativar o 0 para desativar ')
              if (Number(args[0]) === 1) {
                if (isAntiLink) return enviar('Anti-Link está activo')
                antilink.push(from)
                fs.writeFileSync('./archivos/antilink.json', JSON.stringify(antilink))
                enviar('Anti-link estaba activo en el grupo ✔️')
              } else if (Number(args[0]) === 0) {			
                antilink.splice(from, 1)
                fs.writeFileSync('./archivos/antilink.json', JSON.stringify(antilink))
                enviar('El antilink se ha deshabilitado correctamente en este grupo✔️')
              } else {
                enviar('1 para activar, 0 para desactivar ')
              }
              break

//                             ---------------------------------PERFIL----------------------------------------------

              case "perfil": case 'info':
                try {
                ppimg = await anita.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
                } catch(e) {
                ppimg = logo
                }
                perfil = await getBuffer(ppimg)
                enviar(respuesta.espere)
                try {
                anita.sendMessage(from, {
                image: perfil,
                caption: `
                🎭 Aqui está su informacion
                
                ☆ Name: ${pushname}
                ☆ Número: ${sender.split("@")[0]}
                ☆ Wa.me: https://wa.me/${sender.split("@")[0]}
                ☆ Grupo: ${groupName}
                `
                }, {quoted: info})
                } catch(e) {
                console.log(e)
                enviar(respuesta.error)
                }
                break

// ------------------ C A S I N O ----------------

case 'casino':
  a = '🍇'
  b = '🍎'
  c = '🍓'
  e = '🍑'
  f = '💰'
  g = '🥝'
  pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck = pw[Math.floor(Math.random() * pw.length)]
  pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck1 = pw1[Math.floor(Math.random() * pw1.length)]
  pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck2 = pw2[Math.floor(Math.random() * pw2.length)]
  pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck3 = pw3[Math.floor(Math.random() * pw3.length)]
  pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck4 = pw4[Math.floor(Math.random() * pw4.length)]
  pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck5 = pw5[Math.floor(Math.random() * pw5.length)]
  pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck6 = pw6[Math.floor(Math.random() * pw6.length)]
  pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck7 = pw7[Math.floor(Math.random() * pw7.length)]
  pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
  luck7 = pw7[Math.floor(Math.random() * pw7.length)]
  s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
  a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
  m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
  u = `
  ╭──╼┥𝐂𝐀𝐒𝐈𝐍𝐎┝╾──╮
  ╽ ┌──────────┐ ┃
  ${s}
  ┃ ├──────────┤ ┃
  ${a}
  ┃ ├──────────┤ ┃
  ${m}
  ╿ └──────────┘ ╿
  ╰─┨⃞ 𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠─╯`
  enviar(`${u}`)
  break


// ----------------- S T I C K E R S ----------------

// CASE COMPLETA

case 'figu': case "figu2" : case "stickergif":  case "stickergif2": case 's':
 if ((isMedia && !info.message.videoMessage || isQuotedImage)) {      
var stream = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
    let ran = 'stickers.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./dados/${ran} -o ./${ran}`, async (error) => {
      
       await enviarfiguimg(from, fs.readFileSync(`./${ran}`), info, {
 packname: 'luci-BOT', author: 'Kev-OFC'
})
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	"scale=320:320:force_original_aspect_ratio=decrease,fps=15, pad=320:320:(ow-iw)/2:(oh-ih)/2:color=green@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)	 
    } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: 'luci-BOT', author: 'Kev-OFC'
}) 
}
          break 

// YTMP3








//                                                  ----------------- M E N U S ---------------------------
case 'menu': case 'help': case 'bot':
enviar(respuesta.menu)
const menus = fs.readFileSync('./archivos/media/menu.jpg')
const menuss = `

╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ estos son los menus disponibles
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷

╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ:${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷

╭─────────────◆ 
┃✯- M E N U S
┃ ✯╭──────────◆
┃ ✯│${prefixo} menu1
┃ ✯│${prefixo} menu2
┃ ✯│${prefixo} menu3
┃ ✯│${prefixo} menu4
┃ ✯│${prefixo} menu5
┃ ✯│${prefixo} menu6
┃ ✯│${prefixo} menu7
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷

╭─────────────◆ 
┃✯----luci-BOT----⦿
┃✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷



`
enviarimagencap(menus,menuss)
break


//                   --------- I N F O ------------

case 'infobot':
  enviar(respuesta.espere)
const infos = fs.readFileSync('./archivos/media/menu.jpg')  
const infoo= `


╔══✪〘 INFORMATION 〙✪══
║
╠➥ *FECHA : ${data}*
╠➥ *HORA : ${hora}
╠➥ *NAME : MARI BOT*
╠➥ *VERSION : 1.0*
╠➥ *OWNER : kev OFC
╠➥ *GITHUB : NA no lo paso aun XD*
╠➥ *Grupo Oficial : https://chat.whatsapp.com/IngPf7dz8GLE6duvYsyCMC *
║
╚═〘 MARI BOT 〙



`
enviarimagencap(info,infoo)
break

//                           ----------------------M E N N U 1 ---- N S F W  --------------------

case 'menu1':
    enviar(respuesta.menu)
    const menu1 = fs.readFileSync('./archivos/media/menu.jpg')  
    const men1 = `
  
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│  MENU SUCULENTO 
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ:${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷

╭─────────────◆ 
┃✯- ℕ𝕊𝔽𝕎
┃ ✯╭──────────◆
┃ ✯│𝔼𝕁𝔼𝕄ℙ𝕃𝕆 (${prefixo}nsfwero)
┃ ✯│${prefixo} nsfwahegao
┃ ✯│${prefixo} nsfwass
┃ ✯│${prefixo} nsfwloli
┃ ✯│${prefixo} nsfwneko
┃ ✯│${prefixo} nsfwpussy
┃ ✯│${prefixo} nsfwyuri
┃ ✯│${prefixo} nsfwero
┃ ✯│${prefixo} nsfwbdsm
┃ ✯│${prefixo} nsfworgy
┃ ✯│${prefixo} nsfwcum
┃ ✯│${prefixo} nsfwhentai
┃ ✯│${prefixo} nsfwbdsm
┃ ✯│${prefixo} nsfwmangas
┃ ✯│${prefixo} nsfwfoot
┃ ✯│${prefixo} nsfwgifs
┃ ✯│${prefixo} nsfwglasses
┃ ✯│${prefixo} nsfwcuckold
┃ ✯│${prefixo} nsfwfemdom
┃ ✯│${prefixo} nsfwpanties
┃ ✯│${prefixo} nsfwtentacles
┃ ✯│${prefixo} nsfwzentai
┃ ✯│${prefixo} nsfwthighs
┃ ✯│${prefixo} nsfwblowjob
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃ ✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷



`
enviarimagencap(menu1,men1)
break
//--------------------- C A S E S --- D E ---- N S F W ------------------

 //NSFW
 case 'lolis':
    case 'nsfwloli':{
      enviar(respuesta.espere)
      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/nsfwloli?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'LOLI encerio?!',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break
  
      case 'nekos':
      case 'nsfwneko':{
        enviar(respuesta.espere)
        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/neko?apikey=clover')
        templateMassage = {
        image: {url:waifuddd.data.url,
        quoted: info},
        caption: 'Neko!',
        footer: "ꪶ͓Ckev",
        }
        anita.sendMessage(from, templateMassage)
        }
        break
  
        case 'ahegao' :
        case 'nsfwahegao':{
          enviar(respuesta.espere)
          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/ahegao?apikey=clover')
          templateMassage = {
          image: {url:waifuddd.data.url,
          quoted: info},
          caption: 'mmm!',
          footer: "ꪶ͓Ckev",
          }
          anita.sendMessage(from, templateMassage)
          }
          break
   
          case 'pussy':
          case 'nsfwpussy':{
            enviar(respuesta.espere)
            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/pussy?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'pussy?!',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break
  
           case 'ero':
            case 'nsfwero':{
              enviar(respuesta.espere)
              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/ero?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'ta bien!',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break
  
              case 'cum':
              case 'nsfwcum':{
                enviar(respuesta.espere)
                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/cum?apikey=clover')
                templateMassage = {
                image: {url:waifuddd.data.url,
                quoted: info},
                caption: 'cum?!',
                footer: "ꪶ͓Ckev",
                }
                anita.sendMessage(from, templateMassage)
                }
                break
  
                case 'orgy':
                case 'nsfworgy':{
                  enviar(respuesta.espere)
                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/orgy?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: 'xd!',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break
  
                  case 'bdsm' :
                  case 'nsfwbdsm':{
                    enviar(respuesta.espere)
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/bdsm?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: ':v!',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break
  
                    case 'yuri':
                    case 'nsfwyuri':{
                      enviar(respuesta.espere)
                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/yuri?apikey=clover')
                      templateMassage = {
                      image: {url:waifuddd.data.url,
                      quoted: info},
                      caption: 'hay esta!',
                      footer: "ꪶ͓Ckev",
                      }
                      anita.sendMessage(from, templateMassage)
                      }
                      break
  
                    case 'hentai' :
                    case 'nsfwhentai':{
                      enviar(respuesta.espere)
                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/hentai?apikey=clover')
                      templateMassage = {
                      image: {url:waifuddd.data.url,
                      quoted: info},
                      caption: 'rico!',
                      footer: "ꪶ͓Ckev",
                      }
                      anita.sendMessage(from, templateMassage)
                      }
                      break
  
                      case 'ass' :
                    case 'nsfwass':{
                      enviar(respuesta.espere)
                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/ass?apikey=clover')
                      templateMassage = {
                      image: {url:waifuddd.data.url,
                      quoted: info},
                      caption: 'mmm rico?!',
                      footer: "ꪶ͓Ckev",
                      }
                      anita.sendMessage(from, templateMassage)
                      }
                      break
  
                      case 'cuckold' :
                        case 'nsfwcuckold':{
                          enviar(respuesta.espere)
                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/cuckold?apikey=clover')
                          templateMassage = {
                          image: {url:waifuddd.data.url,
                          quoted: info},
                          caption: '🤔👍?!',
                          footer: "ꪶ͓Ckev",
                          }
                          anita.sendMessage(from, templateMassage)
                          }
                          break
  
                          case 'femdom' :
                            case 'nsfwfemdom':{
                              enviar(respuesta.espere)
                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/femdom?apikey=clover')
                              templateMassage = {
                              image: {url:waifuddd.data.url,
                              quoted: info},
                              caption: 'fem?🤔?!',
                              footer: "ꪶ͓Ckev",
                              }
                              anita.sendMessage(from, templateMassage)
                              }
                              break
  
                              case 'glasses' :
                                case 'nsfwglasses':{
                                  enviar(respuesta.espere)
                                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/glasses?apikey=clover')
                                  templateMassage = {
                                  image: {url:waifuddd.data.url,
                                  quoted: info},
                                  caption: 'glass?🤔?!',
                                  footer: "ꪶ͓Ckev",
                                  }
                                  anita.sendMessage(from, templateMassage)
                                  }
                                  break
  
                                  case 'foot' :
                                    case 'nsfwfoot':{
                                      enviar(respuesta.espere)
                                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/foot?apikey=clover')
                                      templateMassage = {
                                      image: {url:waifuddd.data.url,
                                      quoted: info},
                                      caption: 'tus gustos no mios!',
                                      footer: "ꪶ͓Ckev",
                                      }
                                      anita.sendMessage(from, templateMassage)
                                      }
                                      break
  
                                     case 'gifs' :
                                       case 'nsfwgifs':{
                                        enviar(respuesta.espere)
                                         waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/gifs?apikey=clover')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'tus gustos no mios!',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break                      
                          
                                          case 'mangas' :
                                           case 'nsfwmangas':{
                                            enviar(respuesta.espere)
                                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/manga?apikey=clover')
                                               templateMassage = {
                                               image: {url:waifuddd.data.url,
                                               quoted: info},
                                               caption: 'no lo se rick!',
                                               footer: "ꪶ͓Ckev",
                                               }
                                               anita.sendMessage(from, templateMassage)
                                               }
                                               break
  
                                               case 'panties' :
                                                case 'nsfwpanties':{
                                                  enviar(respuesta.espere)
                                                   waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/panties?apikey=clover')
                                                    templateMassage = {
                                                    image: {url:waifuddd.data.url,
                                                    quoted: info},
                                                    caption: 'no lo se rick!',
                                                    footer: "ꪶ͓Ckev",
                                                    }
                                                    anita.sendMessage(from, templateMassage)
                                                    }
                                                    break     
  
   case 'tentacles' :
   case 'nsfwtentacles':{
    enviar(respuesta.espere)
   waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/tentacles?apikey=clover')
   templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'cada quien con sus Gustos!',
   footer: "ꪶ͓Ckev",
    }
   anita.sendMessage(from, templateMassage)
   }
   break 
  
   case 'zentai' :
    case 'nsfwzentai':{
      enviar(respuesta.espere)
       waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/zettai?apikey=clover')
        templateMassage = {
        image: {url:waifuddd.data.url,
        quoted: info},
        caption: 'no lo se rick!',
        footer: "ꪶ͓Ckev",
        }
        anita.sendMessage(from, templateMassage)
        }
        break 
  
        case 'thighs' :
          case 'nsfwthighs':{
            enviar(respuesta.espere)
             waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/thighs?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'no lo se rick!',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break   
                                               
              case 'blowjob' :
                case 'nsfwblowjob':{
                  enviar(respuesta.espere)
                   waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/blowjob?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: 'a!',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break 
//         ------------------------- F I N ------------ C A S E S ---- D E ------- N S F W ----------------

//           --------------------------------- M E N U 2 ------- I M A G E N E S ----------------

case 'menu2':
enviar(respuesta.menu)
 const menu2 = fs.readFileSync('./archivos/media/menu.jpg')
 const men2 = `
  
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│  MENU DE IMAGENES
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ:${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯- 𝕀𝕄𝔸𝔾𝔼ℕ𝔼𝕊
┃ ✯╭──────────◆
┃ ✯│${prefixo} waifu
┃ ✯│${prefixo} waifu2
┃ ✯│${prefixo} loli
┃ ✯│${prefixo} neko
┃ ✯│${prefixo} wallpaperanime
┃ ✯│${prefixo} wallpaperaesthetic
┃ ✯│${prefixo} wallpapergamer
┃ ✯│${prefixo} wallpapersatanic
┃ ✯│${prefixo} wallpaperciberspace
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷

`
enviarimagencap(menu2,men2)
break

// -------------------- C A S E S ---- D E --- I M A G E N E S ------------

case 'loli' :{
  enviar(respuesta.espere)
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/loli?apikey=clover')
    templateMassage = {
    image: {url:waifuddd.data.url,
    quoted: info},
    caption: 'eres un(a) lolicon?🤔!',
    footer: "ꪶ͓Ckev",
    //templateButtons: templateButtons
    }
    anita.sendMessage(from, templateMassage)
    }
    break
    
    case 'neko':{
      enviar(respuesta.espere)
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
    templateMassage = {
    image: {url:waifuddd.data.url,
    quoted: info},
    caption: 'Neko!',
    footer: "ꪶ͓Ckev",
    }
    anita.sendMessage(from, templateMassage)
    }
    break
    
    case 'waifu':{
      enviar(respuesta.espere)
      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/waifu?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'waifu!',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break

    case 'waifu2':{
      enviar(respuesta.espere)
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
    templateMassage = {
    image: {url:waifuddd.data.url,
    quoted: info},
    caption: 'waifu!',
    footer: "ꪶ͓Ckev",
    }
    anita.sendMessage(from, templateMassage)
    }
    break

    case 'wallpaperaesthetic':{
      enviar(respuesta.espere)
      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/aesthetic?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'wallpaper!',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break

      case 'wallpaperanime':{
        enviar(respuesta.espere)
        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/anime?apikey=clover')
        templateMassage = {
        image: {url:waifuddd.data.url,
        quoted: info},
        caption: 'wallpaper!',
        footer: "ꪶ͓Ckev",
        }
        anita.sendMessage(from, templateMassage)
        }
        break

        case 'wallpapersatanic':{
          enviar(respuesta.espere)
          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/satanic?apikey=clover')
          templateMassage = {
          image: {url:waifuddd.data.url,
          quoted: info},
          caption: 'wallpaper!',
          footer: "ꪶ͓Ckev",
          }
          anita.sendMessage(from, templateMassage)
          }
          break

          case 'wallpaperciberspace':{
            enviar(respuesta.espere)
            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/cyberspace?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'wallpaper!',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break

        case 'wallpapergamer':{
          enviar(respuesta.espere)
          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/gaming?apikey=clover')
          templateMassage = {
          image: {url:waifuddd.data.url,
          quoted: info},
          caption: 'wallpaper!',
          footer: "ꪶ͓Ckev",
          }
          anita.sendMessage(from, templateMassage)
          }
          break

 

// ------------------ F I N ------- C A S E S ------ D E ---- I M A G E N E S -----------

// ----------------- M E N U 3 ------ W A I F U S ----------------

case 'menu3':
enviar(respuesta.menu)
 const menu3 = fs.readFileSync('./archivos/media/menu.jpg')
const men3 = `
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│  MENU WAIFUS --- ANIME
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ:${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃ ✯╭──────────◆
┃ ✯│▢ ℙ𝕆ℝ 𝔽𝔸𝕍𝕆ℝ ℕ𝕆 𝕊ℙ𝔸𝕄𝔼𝔸ℝ ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯-𝕄𝔼ℕ𝕌 𝔸ℕ𝕀𝕄𝔼
┃ ✯- ᴇꜱᴄʀɪʙᴇ ᴛᴀʟ ᴄᴏᴍᴏ ᴇꜱᴛᴀ
┃ ✯╭──────────◆
┃ ✯│${prefixo} cosplay
┃ ✯│${prefixo} yotsuna
┃ ✯│${prefixo} shinomiya
┃ ✯│${prefixo} yumeko
┃ ✯│${prefixo} tejina
┃ ✯│${prefixo} chiho
┃ ✯│${prefixo} boruto
┃ ✯│${prefixo} kaori
┃ ✯│${prefixo} shizuka  
┃ ✯│${prefixo} kaga
┃ ✯│${prefixo} katori
┃ ✯│${prefixo} mikasa
┃ ✯│${prefixo} akiyama
┃ ✯│${prefixo} gremory
┃ ✯│${prefixo} isuzu
┃ ✯│${prefixo} shina
┃ ✯│${prefixo} kagura
┃ ✯│${prefixo} shinka
┃ ✯│${prefixo} eba
┃ ✯│${prefixo} elaina
┃ ✯│${prefixo} yuri
┃ ✯│${prefixo} erza
┃ ✯│${prefixo} hinata
┃ ✯│${prefixo} minato
┃ ✯│${prefixo} naruto
┃ ✯│${prefixo} sagiri
┃ ✯│${prefixo} nezuko
┃ ✯│${prefixo} rize
┃ ✯│${prefixo} anna
┃ ✯│${prefixo} deidara
┃ ✯│${prefixo} yuki
┃ ✯│${prefixo} anna
┃ ✯│${prefixo} asuna
┃ ✯│${prefixo} ayuzawa
┃ ✯│${prefixo} chitoge
┃ ✯│${prefixo} emilia
┃ ✯│${prefixo} hestia
┃ ✯│${prefixo} inori
┃ ✯│${prefixo} itachi
┃ ✯│${prefixo} madara
┃ ✯│${prefixo} sakura
┃ ✯│${prefixo} sasuke
┃ ✯│${prefixo} tsunade
┃ ✯│${prefixo} onepiece
┃ ✯│${prefixo} mobil
┃ ✯│${prefixo} kaneki
┃ ✯│${prefixo} megumin
┃ ✯│${prefixo} toukachan
┃ ✯│${prefixo} akira
┃ ✯│${prefixo} itori
┃ ✯│${prefixo} kurimi
┃ ✯│${prefixo} miku
┃ ✯│${prefixo} pokemon
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷

`
enviarimagencap(menu3,men3)
break

//                           ------------- C A S E S ----- D E ---- W A I F U S -----------------

case 'yotsuba':{
  enviar(respuesta.espere)
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yotsuba?apikey=clover')
    templateMassage = {
    image: {url:waifuddd.data.url,
    quoted: info},
    caption: 'yotsuba!',
    footer: "ꪶ͓Ckev",
    }
    anita.sendMessage(from, templateMassage)
    }
    break
  
    case 'shinomiya':{
      enviar('Un momento porfavor')
      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shinomiya?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'shinomiya !',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break
  
      case 'yumeko':{
        enviar('Un momento porfavor')
        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yumeko?apikey=clover')
        templateMassage = {
        image: {url:waifuddd.data.url,
        quoted: info},
        caption: 'yumeko !',
        footer: "ꪶ͓Ckev",
        }
        anita.sendMessage(from, templateMassage)
        }
        break
  
        case 'tejina':{
          enviar('Un momento porfavor')
          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/tejina?apikey=clover')
          templateMassage = {
          image: {url:waifuddd.data.url,
          quoted: info},
          caption: 'tejina !',
          footer: "ꪶ͓Ckev",
          }
          anita.sendMessage(from, templateMassage)
          }
          break
  
          case 'chiho':{
            enviar('Un momento porfavor')
            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/chiho?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'chiho !',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break
  
  
            case 'boruto':{
              enviar('Un momento porfavor')
              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/boruto?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'Por bruto digo Boruto !',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break
  
  
              case 'kaori':{
                enviar('Un momento porfavor')
                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kaori?apikey=clover')
                templateMassage = {
                image: {url:waifuddd.data.url,
                quoted: info},
                caption: 'kaori !',
                footer: "ꪶ͓Ckev",
                }
                anita.sendMessage(from, templateMassage)
                }
                break
  
                case 'shizuka':{
                  enviar('Un momento porfavor')
                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shizuka?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: 'shizuk !',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break
  
  
                  case 'kaga':{
                    enviar('Un momento porfavor')
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kaga?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: ' kaga !',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break
  
  
                    case 'kotori':{
                      enviar('Un momento porfavor')
                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kotori?apikey=clover')
                      templateMassage = {
                      image: {url:waifuddd.data.url,
                      quoted: info},
                      caption: 'Kotori !',
                      footer: "ꪶ͓Ckev",
                      }
                      anita.sendMessage(from, templateMassage)
                      }
                      break
  
  
                      case 'mikasa':{
                        enviar('Un momento porfavor')
                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/mikasa?apikey=clover')
                        templateMassage = {
                        image: {url:waifuddd.data.url,
                        quoted: info},
                        caption: 'mikasita !',
                        footer: "ꪶ͓Ckev",
                        }
                        anita.sendMessage(from, templateMassage)
                        }
                        break
  
  
                        case 'akiyama':{
                          enviar('Un momento porfavor')
                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/akiyama?apikey=clover')
                          templateMassage = {
                          image: {url:waifuddd.data.url,
                          quoted: info},
                          caption: 'akiyama !',
                          footer: "ꪶ͓Ckev",
                          }
                          anita.sendMessage(from, templateMassage)
                          }
                          break
  
                          case 'gremory':{
                            enviar('Un momento porfavor')
                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/gremory?apikey=clover')
                            templateMassage = {
                            image: {url:waifuddd.data.url,
                            quoted: info},
                            caption: 'Gremory !',
                            footer: "ꪶ͓Ckev",
                            }
                            anita.sendMessage(from, templateMassage)
                            }
                            break
  
                            case 'isuzu':{
                              enviar('Un momento porfavor')
                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/isuzu?apikey=clover')
                              templateMassage = {
                              image: {url:waifuddd.data.url,
                              quoted: info},
                              caption: 'isu !',
                              footer: "ꪶ͓Ckev",
                              }
                              anita.sendMessage(from, templateMassage)
                              }
                              break
  
                              case 'shina':{
                                enviar('Un momento porfavor')
                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shina?apikey=clover')
                                templateMassage = {
                                image: {url:waifuddd.data.url,
                                quoted: info},
                                caption: 'shina !',
                                footer: "ꪶ͓Ckev",
                                }
                                anita.sendMessage(from, templateMassage)
                                }
                                break
  
                                case 'kagura':{
                                  enviar('Un momento porfavor')
                                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kagura?apikey=clover')
                                  templateMassage = {
                                  image: {url:waifuddd.data.url,
                                  quoted: info},
                                  caption: ' kagura!',
                                  footer: "ꪶ͓Ckev",
                                  }
                                  anita.sendMessage(from, templateMassage)
                                  }
                                  break
  
                                  case 'shinka':{
                                    enviar('Un momento porfavor')
                                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shinka?apikey=clover')
                                    templateMassage = {
                                    image: {url:waifuddd.data.url,
                                    quoted: info},
                                    caption: 'shinka!',
                                    footer: "ꪶ͓Ckev",
                                    }
                                    anita.sendMessage(from, templateMassage)
                                    }
                                    break
  
                                    case 'eba':{
                                      enviar('Un momento porfavor')
                                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/eba?apikey=clover ')
                                      templateMassage = {
                                      image: {url:waifuddd.data.url,
                                      quoted: info},
                                      caption: 'Eba !',
                                      footer: "ꪶ͓Ckev",
                                      }
                                      anita.sendMessage(from, templateMassage)
                                      }
                                      break
  
                                      case 'elaina':{
                                        enviar('Un momento porfavor')
                                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/elaina?apikey=clover ')
                                        templateMassage = {
                                        image: {url:waifuddd.data.url,
                                        quoted: info},
                                        caption: ' elaina!',
                                        footer: "ꪶ͓Ckev",
                                        }
                                        anita.sendMessage(from, templateMassage)
                                        }
                                        break
  
                                        case 'yuri':{
                                           enviar('Un momento porfavor')
                                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yuri?apikey=clover ')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'Yuri !',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break
  
                                          case 'erza':{
                                            enviar('Un momento porfavor')
                                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/erza?apikey=clover ')
                                            templateMassage = {
                                            image: {url:waifuddd.data.url,
                                            quoted: info},
                                            caption: 'Erza !',
                                            footer: "ꪶ͓Ckev",
                                            }
                                            anita.sendMessage(from, templateMassage)
                                            }
                                            break
  
                                            case 'hinata':{
                                              enviar('Un momento porfavor')
                                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/hinata?apikey=clover')
                                              templateMassage = {
                                              image: {url:waifuddd.data.url,
                                              quoted: info},
                                              caption: 'Hinata !',
                                              footer: "ꪶ͓Ckev",
                                              }
                                              anita.sendMessage(from, templateMassage)
                                              }
                                              break
  
                                              case 'minato':{
                                                enviar('Un momento porfavor')
                                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/minato?apikey=clover ')
                                                templateMassage = {
                                                image: {url:waifuddd.data.url,
                                                quoted: info},
                                                caption: ' Minato!',
                                                footer: "ꪶ͓Ckev",
                                                }
                                                anita.sendMessage(from, templateMassage)
                                                }
                                                break 
                                                
                                                case 'naruto':{
                                                  enviar('Un momento porfavor')
                                                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/naruto?apikey=clover ')
                                                  templateMassage = {
                                                  image: {url:waifuddd.data.url,
                                                  quoted: info},
                                                  caption: 'Naruto !',
                                                  footer: "ꪶ͓Ckev",
                                                  }
                                                  anita.sendMessage(from, templateMassage)
                                                  }
                                                  break                                        
  
  
  case 'sagiri':{
    enviar('Un momento porfavor')
   waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/sagiri?apikey=clover ')
   templateMassage = {
  image: {url:waifuddd.data.url,
  quoted: info},
   caption: 'Sagirii !',
  footer: "ꪶ͓Ckev",
  }
  anita.sendMessage(from, templateMassage)
  }
  break
  
  case 'nezuko':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/nezuko?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Nezu !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'rize':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/rize?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Rize !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'anna':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/ana?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Anna !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'deidara':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/deidara?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Deidara !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'yuki':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yuki?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Yuki !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
  
   case 'ana':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/ana?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'no c we !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
  
   case 'asuna':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/asuna?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Azuna !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'ayuzawa':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/ayuzawa?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Ayuzawa !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'chitoge':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/chitoge?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'chitoge !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'emilia':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/emilia?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Emiria !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'hestia':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/hestia?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Hestia !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'inori':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/inori?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Inori !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'itachi':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/itachi?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Itachi !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'madara':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/madara?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Madera digo Madara\nNo te enojes cristal !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'sakura':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/sakura?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Sakura !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'sasuke':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/sasuke?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Sasuke !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'tsunade':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/tsunade?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'uff esas tetas\n Tsunade !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'onepiece':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/onepiece?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'onepiece !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
   case 'mobil':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/mobil?apikey=clover ')
    templateMassage = {
   image: {url:waifuddd.data.url,
   quoted: info},
    caption: 'Mobil?? !',
   footer: "ꪶ͓Ckev",
   }
   anita.sendMessage(from, templateMassage)
   }
   break
  
                                      case 'kaneki':{
                                        enviar('Un momento porfavor')
                                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/keneki?apikey=clover')
                                        templateMassage = {
                                        image: {url:waifuddd.data.url,
                                        quoted: info},
                                        caption: 'Kaneki !',
                                        footer: "ꪶ͓Ckev",
                                        }
                                        anita.sendMessage(from, templateMassage)
                                        }
                                        break
  
                                        case 'megumin':{
                                          enviar('Un momento porfavor')
                                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/megumin?apikey=clover')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'exploosiooón !',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break
  
                                          case 'touka':{
                                            enviar('Un momento porfavor')
                                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/toukachan?apikey=clover')
                                            templateMassage = {
                                            image: {url:waifuddd.data.url,
                                            quoted: info},
                                            caption: 'Toukachan !',
                                            footer: "ꪶ͓Ckev",
                                            }
                                            anita.sendMessage(from, templateMassage)
                                            }
                                            break
  
  
  
                                        case 'akira':{
                                          enviar('Un momento porfavor')
                                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/akira?apikey=clover ')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'Akira !',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break
  
  
                                          case 'itori':{
                                            enviar('Un momento porfavor')
                                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/itori?apikey=clover ')
                                            templateMassage = {
                                            image: {url:waifuddd.data.url,
                                            quoted: info},
                                            caption: 'Itori !',
                                            footer: "ꪶ͓Ckev",
                                            }
                                            anita.sendMessage(from, templateMassage)
                                            }
                                            break
  
  
                                            case 'kurumi':{
                                              enviar('Un momento porfavor')
                                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kurumi?apikey=clover ')
                                              templateMassage = {
                                              image: {url:waifuddd.data.url,
                                              quoted: info},
                                              caption: 'Kurumi !',
                                              footer: "ꪶ͓Ckev",
                                              }
                                              anita.sendMessage(from, templateMassage)
                                              }
                                              break
  
  
                                              case 'miku':{
                                                enviar('Un momento porfavor')
                                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/miku?apikey=clover ')
                                                templateMassage = {
                                                image: {url:waifuddd.data.url,
                                                quoted: info},
                                                caption: 'Mikuu !',
                                                footer: "ꪶ͓Ckev",
                                                }
                                                anita.sendMessage(from, templateMassage)
                                                }
                                                break
  
                                                case 'pokemon':{
                                                   enviar('Un momento porfavor')
                                                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/pokemon?apikey=clover')
                                                  templateMassage = {
                                                  image: {url:waifuddd.data.url,
                                                  quoted: info},
                                                  caption: 'Pokemon !',
                                                  footer: "ꪶ͓Ckev",
                                                  }
                                                  anita.sendMessage(from, templateMassage)
                                                  }
                                                  break
  
                                                  case 'cosplay':{
                                                    enviar('Un momento porfavor')
                                                   waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/cosplay?apikey=clover')
                                                   templateMassage = {
                                                   image: {url:waifuddd.data.url,
                                                   quoted: info},
                                                   caption: 'mm !',
                                                   footer: "ꪶ͓Ckev",
                                                   }
                                                   anita.sendMessage(from, templateMassage)
                                                   }
                                                   break

// ------------------ M E N U 4 ------------- G R U P O S ------------

    case 'menu4':
        enviar(respuesta.menu)
         const menu4 = fs.readFileSync('./archivos/media/menu.jpg')
        const men4 = `
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│  MENU GRUPOS
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ:${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯- 𝔾ℝ𝕌ℙ𝕆𝕊
┃ ✯╭──────────◆
┃ ✯│${prefixo} gplink
┃ ✯│${prefixo} resetlink
┃ ✯│${prefixo} antilink (1 activar 0 desactivar)
┃ ✯│${prefixo} ban (ejemplo: @kev)
┃ ✯│${prefixo} promover @
┃ ✯│${prefixo} welcome 
┃ ✯│${prefixo} add   (numero)
┃ ✯│${prefixo} hidetag , invocar ,tagall (le puedes agregar el mensaje que quieras)
┃ ✯│${prefixo} infogp
┃ ✯│${prefixo} perfil 
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷ 
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷


`
enviarimagencap(menu4,men4)
break

// -------------- C A S E S ------- G R U P O S ----------

 //GRUPOS//
 case "infogp":
    if (!isGroup) return enviar(respuesta.grupos)
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
    enviar(`
    ╭─────────────◆ 
    ┃✯----�𝑰𝑵𝑭𝑶 𝑮𝑹𝑼𝑷𝑶�----⦿
    ┃ ✯╭──────────◆
    ┃ ✯│▢𝑁𝑂𝑀𝐵𝑅𝐸: ${groupName}
    ┃ ✯│▢𝐷𝐸𝑆𝐶𝑅𝐼𝑃𝐶𝐼𝑂𝑁: ${groupDesc}
    ┃ ✯│▢𝐼𝐷: ${from}
    ┃ ✯│▢𝐹𝐸𝐶𝐻𝐴: ${colom}
    ┃ ✯│▢𝐻𝑂𝑅𝐴: ${hora}
    ┃ ✯╰───────────◆
    ╰━━━━━━━━━━━──⊷
    `)
    break

    case "gplink":
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
const link = await anita.groupInviteCode(from)
enviar(`🎭 Link de grupo : https://chat.whatsapp.com/${link} `)
break

case "resetlink":
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
try {
await anita.groupRevokeInvite(from)
enviar("🎭 El link de invitación se restableció correctamente ✓ ")
} catch(e) {
console.log(e)
enviar(respuesta.erro)
}
break


case 'adminlist':
  if (!isGroup) return enviar(from, 'admins del grupo!', id)
  let mimin = ''
  for (let admon of groupAdmins) {
      mimin += `➸ @${admon.split(/@c.us/g, '')}\n` 
  }
  await anita.sendMessage(from, mimin)
  break


//                 -------------------- J U E G O S -----------------

case 'menu5':
    case 'menu5':
        enviar(respuesta.menu)
         const menu5 = fs.readFileSync('./archivos/media/Games.jpg')
        const men5 = `

╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ: ${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│  MENU GAMES
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ: ${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ: ${data} , ${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯- 𝕁𝕌𝔼𝔾𝕆𝕊
┃ ✯╭──────────◆
┃ ✯│${prefixo} gay 
┃ ✯│${prefixo} lindo
┃ ✯│${prefixo} retos o aleatorio
┃ ✯│${prefixo} feura
┃ ✯│${prefixo} delicia
┃ ✯│${prefixo} pendejo
┃ ✯│${prefixo} puto o puta (la que quieras xd :v)
┃ ✯│${prefixo} humornegro 
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷

`
enviarimagencap(menu5,men5)
break

// ------------------- C A S E S ---- D E ---- J U E G O S ------------

case 'gay':// Sem Fotos
  const aleta = `${Math.floor(Math.random() * 105)}`
  enviar('Aguarde, confirmando su porcentaje...')
  await delay(5000)
  enviar(`${pushname} Su Porcentage de gay es de : ${aleta}%`)
  break
  
  case 'lindo':
  const aletc = `${Math.floor(Math.random() * 105)}`
  enviar('Aguarde, confirmando su porcentaje...')
  await delay(5000)
  enviar(`${pushname} Su porcentaje de lindo(a) es de  : ${aletc}%`)
  break
  
  case 'feura': // Sem Fotos
  const aletb = `${Math.floor(Math.random() * 105)}`
  enviar('Aguarde, confirmando su porcentaje...')
  await delay(5000)
  enviar(`${pushname} Su porcentaje de feo(a)es de : ${aletb}%`)
  break
  
  case 'delicia':
  const aletd = `${Math.floor(Math.random() * 105)}`
  enviar('Aguarde, confirmando su porcentaje...')
  await delay(5000)
  enviar(`${pushname} Su porcentaje de delicioso(a) es de  : ${aletd}%`)
  break
  
  case 'pendejo':
  const aletz = `${Math.floor(Math.random() * 105)}`
  enviar('Aguarde, confirmando su porcentaje...')
  await delay(5000)
  enviar(`${pushname} Su porcentaje de pendejo(a) es de  : ${aletz}%`)
  break
  
  case 'puta':
  case 'puto':
  const aletq = `${Math.floor(Math.random() * 105)}`
  enviar('Aguarde, confirmando su porcentaje...')
  await delay(5000)
  enviar(`${pushname} Su porcentaje de puto(@) es de  : ${aletq}%`)
  break

  case 'retos':
    case 'aleatorio':
      const ale = ['Pasa el pack de una hormiga',
      'Dile a tus amigos que te vas a vivir a EU y mándame una captura de lo que te haya dicho',
      'Grita desde la ventana que quieres mamar y mándame el vídeo','Escribe el nombre de tu crush',
      'Debes de poner el nombre de mi creador en tu estado de WhatsApp, sin dar contexto',
      'Envíame una fotografía tuya',
      'Debes de dibujar en alguna parte de tu cuerpo el nombre de algún integrante del grupo, luego realiza una foto y envíala',
      'Hazte una foto dándole un beso a una Televisión',
      'Mándame una fotografía en ropa interior',
      'Escribe en tu estado de WhatsApp que te gusta comer tierra',
      'Debes de poner la fotografía de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 3 días 📸📸',
      'Tienes que mandar un audio cantando la canción: Un pato que va cantando alegremente cua cua 🦆',
      "Envía un mensaje a tu ex y dile todavía me gustas", 'Envía un audio diciendo amo a a todos ','Dile a tu crush que la amas y pasa captura al grupo", "Envía un audio cantando', 
      'Envía una foto en la que salgas tu sin taparte la cara ni nada", "Envía un video bailando', 
      'Invita a personas que no conoces a tomarse una selfi contigo y luego envíalo al grupo', 
      "Elija algunos números aleatorios de sus contactos y envíeles un mensaje de texto con el mensaje 'Estoy embarazad@'.", 
      "¡Tome cualquier bebida que esté cerca de usted, luego mézclela con chile y beba!", 
      "Tome un número aleatorio de sus contactos, llámelo y dígale 'te amo' ", 
      "Compre la comida más barata en la cafetería (o compre una botella de agua) y diga entre sollozos a sus compañeros de clase: 'Esta ... es la comida más cara que he comprado)' ", 
      " Compre una botella de coca cola y salpique flores con ella frente a la multitud."," Párese cerca del refrigerador, cierre los ojos, elija alimentos al azar en él, incluso cuando coma, sus ojos deben estar cerrados.", 
      " De pie en medio de la cancha de baloncesto y gritando: 'TE AMO MI PRÍNCIPE / PRINCESA' ", 
      "Presenta tus respetos a alguien de la clase y luego di: 'Estoy a su servicio, Majestad' ", 
      " Caminando aplaudiendo y cantando la canción 'Feliz cumpleaños' de la clase al pasillo.", 
      " Arrodíllate sobre una rodilla y di '¿Cásate conmigo?' la primera persona en entrar a la habitación.", 
      " Haz un tocado absurdo con tejido, sea lo que sea, sigue pidiendo poses frente a la cámara, sigue subiendo", 
      "Dile 'ERES HERMOSA / MUY HERMOSA, NO MIENTES' a la chica que crees que es la más bonita de esta clase.", 
      " Dile a alguien en clase: 'Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto es lo más serio que he dicho' ", 
      " Tirar el cuaderno de alguien a la basura, frente a sus ojos, diciendo 'Este libro nadie puede entender' ", 
      " ¡Arranca el pelo de tu propia pierna 3 veces!", 
      " Chatea con tus padres, diles que los extrañas con emoticonos tristes.", 
      " Intente buscar en Google cosas aterradoras o ridículas como tripofobia, etc.", 
      " Siéntese relajado en medio de la cancha de baloncesto mientras finge que es una playa para tomar el sol.", 
      " Llena tu boca de agua y tienes que aguantar hasta dos rondas, si te ríes y derramas o bebes, entonces tienes que volver a llenar y agregar una ronda más.", 
      " Salude a la primera persona que entre en esta sala y diga '¡Bienvenido a Quién quiere ser millonario!' ", 
      "Envía un mensaje de texto a tus padres '¡Hola, hermano! ¡Acabo de comprar el último número de la revista Playboy!' ", 
      "Envíales un mensaje de texto a tus padres: 'Mamá, papá, ya sé que soy un niño adoptado del orfanato. No ocultes esto más'.", 
      " Envía tres números aleatorios en tus contactos y escribe 'Me acabo de convertir en modelo de la revista Playboy' ", 
      " ¡Come una cucharada de salsa de soja dulce y salsa de soja!", 
      " Come algo pero no uses las manos.", 
      " Enojarse con sus amigos que no vienen a pesar de que tienen una cita para jugar 'Verdad o Reto' juntos", 
      "¡Rompe el huevo con la cabeza!", 
      "Coma alimentos que se hayan mezclado y tendrán un sabor extraño, pero asegúrese de que los alimentos no sean dañinos para la salud a largo o corto plazo.", 
      "Baila como Girls 'Generation para los niños frente a la clase, o baila como Super Junior para las niñas.", 
      "Izar el asta de la bandera sin la bandera.", 
      "Hablando de la persona que te gusta, de tus amigos más cercanos, del sexo opuesto que no conoces en absoluto y cosas por el estilo.", 
      "Copia los peinados de todos tus amigos.", 
      "Cantando la canción HAI TAYO frente a mucha gente mientras baila", 
      "Cante la canción Baby Shark en voz alta en el aula.", 
      "Pedir prestado algo a los vecinos", 
      "Pide la firma de uno de los profesores más feroces mientras dices 'Eres verdaderamente la persona que más admiro en el mundo' ", 
      " Pídale dinero a alguien (al azar ) en la calle diciendo 'No tengo dinero para tomar un angkot'.", 
      " Beba algo que haya sido preparado / acordado, pero asegúrese de que no sea peligroso, puede ser como beber jarabe mezclado con salsa de soja.", 
      " Hablando con el emoticono-miedo de la persona que te gusta, está bien conversar con lo que quieras, a través de cualquier medio que puedas.", 
      " Canta tu película de Disney favorita fuera de casa mientras gritas.", 
      " Nombra de 1 azul a 20 azules rápidamente y no debes cometer ningún error. Si está mal, debe repetirse desde el principio.", 
      " Póngase una corona de papel de copia y diga a todos en la habitación 'HONOR AL REY' mientras señala a cada persona con una regla.", 
      " Vuelve a ponerte los pantalones hasta la mañana siguiente.", 
      " Abraza a la persona que NO te agrada en clase y di: 'Muchas gracias por ser la mejor persona para mí' ", 
      " Ve a un campo amplio, luego corre lo más rápido posible mientras dices 'Estoy loco, estoy loco' ", 
      " Elija una flor y luego conéctela a alguien que no conoce (debe ser del sexo opuesto)", 
      " Elige a una persona al azar en la calle, luego di 'No sabes que eres hermosa' (ala One Direction)", 
      " Fingir estar poseído ejm: poseído por un tigre, etc.", 
      " Pídale que silbe ya que su boca está nuevamente llena de comida.", 
      " Pide ser un mesero para que te sirva con tus amigos para el almuerzo.", 
      " Dígales que usen calcetines para hacer guantes.", 
      "Dígales que usen el sombrero más extraño / el casco más absurdo durante la próxima ronda.", 
      "Llama a tu mamá y dile 'mamá, quiero casarme lo antes posible' ", 
      "Llama a tu ex y di 'te extraño' ", 
      "Cambia de ropa con la persona más cercana hasta la siguiente ronda.", 
      "Actualice el estado en WhatsApp lo que sea con palabras que comiencen con 'S' ", 
      "Sube un video de canto a YouTube que esté cantando canciones populares.", 
      "Colorea tus uñas de las manos y de los pies de diferentes colores durante una semana.", 
      "come 2 cucharadas de arroz sin guarniciones", 
      "Envie el emoji '🦄💨' cada vez que escriba en un grupo 1 día", 
      "diga '¡Bienvenido a Quién quiere ser millonario!' a todos los grupos que tienes", 
      "canta el coro de la última canción que tocaste", 
      "Envia un audio de voz a tu ex / enamorado / novia, dile hola (nombre), quiero llamar, solo un momento. Te Extraño🥺👉🏼👈🏼 ", 
      "Dile a la gente al azar: Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto", 
      "¡Haz 1 rima para el primer jugador!", 
      "cuenta tu propia versión de cosas vergonzosas", 
      "cambiar el nombre a 'Gay' durante 24 horas", 
      "¡Menciona tu tipo de novia!", 
      "Di 'Estoy enamorado de ti, ¿quieres ser mi novio o no?' al último sexo opuesto con el que conversaste en WhatsApp, espera a que responda", 
      "Háblale a tu ex por WhatsApp y dile 'te amo, por favor vuelve'. Manda una captura de pantalla como evidencia de reto cumplido!"]
      const ale2 = Math.floor(Math.random()*ale.length)
      const ale3 = ale[ale2]
      enviar(ale3)
      break

      case 'chistenegro': case 'humornegro':
        const negro = ['- papá que es ¿el humor negro? +¿ves ése hombre sin brazos?. Dile que aplauda -pero papá soy ciego +exacto',
      '¿Por qué no tiran bombas a África? Porque no encuentran el blanco',
      '¿Qué hace un negro vomitando? Presumir de que comió',
      '¿Porqué los negros son zurds? Porque no tienen derechos',
      'Dos amigos se encuentran y le dice uno al otro: - Oye, ¿tu abuela es mecanica?. - No, ¿por qué?. - Porque la he visto en la autopista debajo de un camión.',
      'Cual es la diferencia entre albert einstein y el nene de 2 años? que tengo que albert einstein murio virgen',
      '- Doctor, ¿tendré cura? - ¡Por supuesto, cura, misa y funeral!' ,
      'Entra un negrito a estudiar derecho y le preguntan: - Señor, ¿qué rama va a escoger? Y el negro responde: - Ninguna rama, hijo puta... a mí me dan un pupitre como a los blancos.' ,
      'Qué escala las Torres gemelas? Spiderman Qué las sobrevuela? Superman Qué las atraviesa? Musulman' ,
      'Dos hermanitos de 4 años peleándose: - Jaja... yo me voy a disney y vos ¡¡nooooo!!. - Si... pero yo no tengo leucemia.' ,
      'La mamá le dice a la niña ciega: - Y si te vuelves a portar mal, te cambio los muebles de lugar.', 
      'Un niño pequeño pregunta a su madre: - Mamá, mamá. ¿Cómo se llama eso que yo tengo?. ¿Tauro, virgo, sagitario?... - Cáncer, hijo, cáncer.', 
      '- ¿Qué haces con gorra, camiseta de los Lakers y collares de oro? ¡Es el velatorio de tu madre! - ¿No había que venir de negro?',
      '¿Qué hacen 2 epilépticos en una cabina de teléfono?. - La fiesta de la espuma.',
      '¿Qué diferencia hay entre el amor y el sida?. Pues que el sida es para toda la vida.',
      'Esto es una pareja que alquila un piso para ir a echar un polvo, y cuando ya acaban le dice la chica al chico. - Manolo, yo tengo el SIDA y otras muchas enfermedades y te las acabo de pegar. Y le dice Manolo: - Pues eso no es nada, ya que yo tengo la lepra y te he dejado la polla dentro.',
      '¿Qué hace un leproso tocando la guitarra?. - Carne picada.',
      '- Mamá, mamá, ¿me das una galleta?. - Niño, están encima del frigorífico. - Mamá, es que no tengo brazos... - Si no hay brazos, no hay galletas',
      'Un matrimonio va por la calle y se encuentran con un amigo que se dirige al marido:- Hola, Paco. ¿Qué tal estás? - Mal, Pedro, tengo un SIDA terrible. El médico me ha dado tres meses de vida. El amigo se despide rápidamente y se va todo acongojado. La mujer le recrimina al marido: - Pero, Paco. ¿Cómo le dices a la gente que tienes SIDA, si lo que tienes en realidad es cáncer de pulmón? - Yo me voy a morir, pero contigo nadie se acuesta...',
      'Un tipo entra en el dormitorio y le dice a su mujer: - Claro, yo como un estúpido buscando el cinturón por toda la casa, y tu aquí ahorcada con él, ¡no te jode!.',
      'Estaba Bush en la Casa Blanca cuando suena el teléfono y habla Bin Laden: - Tengo dos noticias, una buena y otra mala. A lo que responde Bush: - La buena primero. - La buena es que me voy a entregar. - ¿Y la mala?. - La mala es que voy en avión.',
      'Suena el teléfono: - ¿Diga? - contesta el hombre -. - Hola, soy su médico. Tengo que comunicarle una noticia buena y otra mala. ¿Cuál quiere oír primero?. - Pues empiece con la buena. - Padece usted una enfermedad que mata en 24 horas, dice el médico sin inmutarse. - ¡Joder!. ¡Y esa es la buena!. ¿Cuál es la mala entonces?. - Que estoy intentando localizarle desde ayer.',
      '¿Porque en África no ven bob esponja? Porque lo echan después de comer',
      'Un niño llama a un telefonillo: - ¿Baja Juanito a jugar al fútbol?. - ¡Pero si Juanito no tiene ni brazos ni piernas!. - Ya, pero bota muy bien.',
      '¿Por qué los alemanes no comen frijoles? Porque en otros países se les llama JUDÍAS',
      '-Acepta usted a María en la salud y en la enfermedad, en la riqueza y en la pobreza hasta que la muerte os separe? -Si,no,si,no,no',
      'Un niño vuelve a su casa despues del colegio... -Mamá, ¿Por qué huele tan mal?, mamá, mamá...',
      'Tu novía me guiño un ojo el otro día +No, es que tiene un tick -Pues yo ya me la he follao',
      'Una niña le pregunta a su madre: ¿Me queda bien este vestido de bailarina?. Y la madre le contesta: Sí, pero se te ve un poco la silla de ruedas.',
      '- ¡Doctor, doctor! ¿Qué tal ha ido la operación? - ¿Operación, no era una autopsia?',
      '¿De qué color era el coche de Lady di?. - Negro estampado.',]
      const negro2 = Math.floor(Math.random()*negro.length)
      const negro3 = negro[negro2]
      enviar(negro3)
      break

//                                     ------------ F R A S E S ------- H I S T O R I A S ---------- F I L O S O F I A -------------

case 'menu6':
    case 'menu6':
        enviar(respuesta.menu)
         const menu6 = fs.readFileSync('./archivos/media/Filosofia.jpg')
        const men6 = `

╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ: ${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│  MENU GAMES
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ✯〘luci-BOT〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ: ${pushname}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ: wa.me/+573136463626
┃ ✯│▢ғᴇᴄʜᴀ: ${data} , ${hora}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷

╭─────────────◆ 
┃✯- ℝ𝔼𝕃𝔸𝕋𝕆𝕊 𝕐 𝔽ℝ𝔸𝕊𝔼𝕊
┃ ✯ 𝕃𝔸𝕊 ℍ𝕀𝕊𝕋𝕆ℝ𝕀𝔸𝕊 𝕌ℕ ℙ𝕆ℚ𝕌𝕀𝕋𝕆 ℂ𝕌𝕋ℝ𝔼𝕊 
┃ ✯ 𝔼𝕊 𝕋𝕌 𝔼𝕃𝔼ℂℂ𝕀𝕆ℕ
┃ ✯╭──────────◆
┃ ✯│${prefixo} piropo
┃ ✯│${prefixo} frases o fraseromantica
┃ ✯│${prefixo} historia o terror
┃ ✯│${prefixo} suspenso
┃ ✯│${prefixo} filosofia 
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----luci-Bᴏᴛ----⦿
┃✯----V-1.0----⦿
╰━━━━━━━━━━━──⊷

`
enviarimagencap(menu6,men6)
break

//          ------------------C A S E S ----- F I L O S O F I C A S ---------------

case 'fraseromantica': case 'frases' : 
    const frase = ['Hace un año no sabía quién eras, y hoy no sabría cómo vivir sin ti.' , 'Tú eres mi meta, el camino que decidí tomar, la mujer de mi vida, mi vida sin más.' , 'Si lloras, te regalaré mis sonrisas. Si tienes frío, te regalaré mi calor.' , ' Si te duele, yo te curaré. Vida mía, siempre te protegeré.' , 'Por arte de magia, un día todos mis pensamientos se centraron en ti.' , 'Tumbémonos juntos, susurrémonos cosas lindas al oído, sonriamos cogidos de la mano, y todas las noches dormiré contigo.' , 
    'Pareces el brujo del tiempo, contigo pasa tan deprisa y sin ti tan lento…' , 'Con un beso tuyo puedo tocar las estrellas.' , ' No hay paisaje más hermoso que el que encuentro en la mirada de tus ojos.' , 'Tú me diste la luz, y mientras duerma contigo no le tendré miedo a la noche.' , ' Me cautivaste con tu sonrisa, me enamoraste con tu corazón.' , ' Tu voz es la sinfonía más bonita que he escuchado en toda mi vida.' , ' Sabrás que le amas porque hará que dejes de sufrir por el pasado, que vivas el presente y que dejes de preocuparte por el futuro.' ,' Saboreemos nuestros cuerpos, amémonos sin complejos, convirtamos esta historia, en un cuento de amor eterno.' , ' Tu amor nació en mi corazón, y ahora recorre mis venas llenándome de ilusión.' , ' Yo no fui quien escogió amarte, sino mi alma, y me dijo que te amaría eternamente.' , ' No tienes ni idea de cómo me tiemblan las piernas cada vez que me miras…' , 'i me dices «Te quiero», te regalo mi corazón entero.']
    const frase2 = Math.floor(Math.random()*frase.length)
    const frase3 = frase[frase2]
    enviar(frase3)
    break

    case 'suspenso':
        const suspen = ['El barco se mecía por las holas como un juguete que es sumergido por un niño, la noche había caído sobre sus cabezas. Padre e hijo habían decidido pasar un fin de semana en alta mar para pescar un poco y olvidarse de la cotidianidad, pero el destino les había tomado por sorpresa con una tormenta que haría temblar hasta el más apto contramaestre, no había opciones a la vista, era obvio que el barco no soportaría más las imponentes olas. ahogarse es una manera terrible de morir pensó el padre agobiado mientras sostenía a su hijo, en ese momento tomo una decisión que ningún padre querría decidir, no quería que su hijo muriera de la peor forma y con rifle en mano apunto a su pequeño y diciéndole cuanto lo amaba disparo contra su humanidad, sin duda un disparo era una manera más rápida y menos dolorosa, tomo el rifle pero ahora apuntándose para quitarse la vida y cuando estaba decidido a jalar del gatillo una ola volteo el barco dejándolo inconsciente. Despertó el hombre pensando que había muerto, pero fue un médico quien en frente de él le comento que había sido encontrado en la playa, que la tormenta había cesado. Las decisiones que tomamos son las que marcan y moldean nuestro futuro.',
      'El gordo como había sido apodado por el forense, acababa de llegar a la morgue, su obesidad mórbida le impedía entrar en la cámara frigorífica. El forense era un hombre algo peculiar, obviando su humor negro y su manera de relacionarse con la muerte era de esperarse cualquier broma o eso pensaba su ayudante quien era apenas un joven aprendiz. Decidieron ubicar el cadáver en una tina con hielo para el día siguiente realizar la autopsia. Antes de retirarse el forense decide invitar a manera de reto al joven a ver una película y comer algo de pizza en el salón donde se encontraba el obeso cadáver ´´el gordo´´ el aprendiz lo vio como una prueba puesto sabia la reputación de su mentor, acepta  y se dispusieron a ver la película mientras comían. Al día siguiente retornan a su trabajo, deciden practicar la autopsia y fue el último día que dijeron en su vida la palabra gordo sin sentir un profundo terror en sus entrañas, puesto que el cadáver tenía en su interior restos de pizza.',
      'Tus ojos se abren y descubres que estas corriendo por un oscuro bosque descalzo, sientes una respiración pesada y un olor nauseabundo, miras atrás y no vez absolutamente nada, miras hacia delante y vez a alguien escapando de ti, y ahí comprendes quien es el monstruo.',
      'Era el momento más importante de la humanidad, el primer contacto con esos seres irradiados de luz, sus naves eran imponentes y a su vez aterradoras. El mundo estaba detrás de las pantallas de noticieros en vivo con la pregunta ¿Qué querrán con nosotros? ¿Serán amigables? Faltaban solamente minutos para que los científicos lograran hacer contacto, ya estaban frente a frente con los seres y en ese mismo instante las cámaras se apagaron, el mundo quedo completamente desconectado y SI, algo malo estaba sucediendo.',
      'Llevaba semanas atrapado en aquel agujero con su mano fracturada y lleno de cortadas, las gotas de agua caían del cielo siendo su respiro para menguar la sed, pasaban los días y cada vez más el hambre hacía eco en su cabeza. El rescate se llevó a cabo a la tercera semana, ´´carne es carne´´ decía el mal nutrido hombre mientras se alejaba con los rescatistas, ahí comprendieron que tenía un acompañante.',
      'Golpe de estado, inminente guerra civil, militares en las calles enfrentándose a los leales del gobierno, la muerte se nombraba reina esa tarde mientras el joven trabajador se alejaba en su auto hacia su casa, todos los trabajadores habían desalojado sus puestos de trabajo, apenas una hora atrás todo parecía ser un día normal y que el terminaría viendo su canal de televisión favorito y limpiaría su acuario, puesto que la vida de soltero realmente no tiene tantas responsabilidades, en cambio se encontraba manejando desesperado para salir a los suburbios y llegar a su casa, las alarmas sonaban y generaban una sensación que le paralizaba la respiración, en ese momento su auto se detuvo, debió hacerle mantenimiento una semana antes. El mecánico tenía razón.',
      'Despertó de una pesadilla y no podía ver nada, la oscuridad estaba donde dirigiera la mirada, agarro su celular pero a pesar de encenderlo no lograba ver nada, tropieza desesperado a encender la luz y tampoco lograba ver ni un rayo de luz, en ese momento se paraliza totalmente logra abrir la puerta en pánico y ve al fondo la luz tenue de la luna, simplemente tenía su celular descargado y recordó el problema eléctrico que vivía su país.',
      'Todo parecía perfecto, el crucero era de lo mejor, mi esposa y yo habíamos reunido para lograr costear el viaje, ya había trascurrido cinco días y esa noche nos encontrábamos sentados en la popa del barco, me percate que algo no transcurría bien, un tripulante corría en dirección hacia el puente de mando, solo hubiera deseado no recordar una cosa ´´no sé nadar´´',
      'Estaba nervioso, presentaría para la carrera de medicina, el joven se había esforzado para lograr cumplir esa meta tan preciada y esperada por su familia, comenzaron a llamar a los participantes, el joven se sienta en su mesa y espera las indicaciones mientras un dolor abdominal comenzaba a hacer estragos, el profesor a cargo les da la orden de iniciar el examen y justamente en ese momento se le rompe la punta del lápiz, el joven se percata que había dejado su sacapuntas en el bolso que minutos antes había dejado en un casillero y solo le quedaba el lápiz de repuesto. Fue el examen más largo de su vida ´´era de desarrollo´ ',
      'Era joven e inexperto, el pequeño violista tocaría con la orquesta de los más grandes, tenía que demostrar que era apto para continuar en ese puesto, los ensayos habían sido agobiantes, el miedo de pasar por un regaño o quedar en ridículo lo tenían con un trauma constante, el día del concierto ensayaron en el gran anfiteatro, era de proporciones titánicas y la elegancia de aquel lugar hacían alarde de su fama, antes de iniciar el ensayo el joven se percata como colocan pequeños micrófonos en los instrumentos incluido el de él. Al momento de iniciar la afinación se percata que solo debía hacer un mínimo de esfuerzo para que su sonido retumbara en todo el anfiteatro un mínimo error seria escuchado hasta por el oído menos entrenado. Adivinen quien toco los más silencioso posible o como dicen los músicos ´´piano´´ para no ser escuchado. Luego de ese día tomo más enserio el practicar horas extra.',
      '´´Si algo es seguro es que no estoy seguro de nada ´´ así pensaba el joven médico que hacia su primera guardia sin supervisión, rogaba que fuera tranquila y sin nada que lo tomara de sorpresa puesto que no hay nada más tenebroso para un médico que la inexperiencia y estar en un pueblo alejado de cualquier hospital. En ese mismo instante llega un joven a la emergencia con convulsiones, el joven médico siguiendo el protocolo le administra fármacos para tratar las convulsiones. A que no se imaginan quien tuvo una reacción adversa al medicamento. Investiguen ´´síndrome de Steven Johnson´´ ',
      'El joven toco la puerta de una vieja casa, eran las doce de la noche y su vehículo estaba averiado. -puedo ayudarlo joven- sonrió un viejo al abrir la puerta -puedo usar su teléfono por favor, mi auto esta averiado- -claro adelante- El joven se adentra en la vieja casa y prosigue detrás del viejo que a pasos lentos lo llevaba a una habitación, el joven hace la llamada cuando pensó que sus problemas habían acabado ve una máscara en el suelo, la toma y un grito desgarrador retumbo en la habitación, era la cara del viejo y un hombre sin rostro enfrente decía -eres joven vendrá muy bien para mi colección -El joven luego de eso solo ve mascaras dentro de una habitación colgadas en la pared.',
      '-Hola papa aún no llegamos, el bus parece que se perdió- – Hola hija no comprendo ya deberían haber llegado estamos en el terminal esperándolos- – Lo sé papa es extraño el GPS no funciona y los pasajeros están empezando a asustarse- – Tranquila ¿no ves nada por la ventana?- -Está muy oscuro afuera y los teléfonos de los demás están fallando al igual que el mío- -Llamaremos a la policía estén tranquilos ¿cómo se ve el chofer?- -No lo sé estamos en el segundo piso del bus, espera estamos entrando en un cementerio ¡papa!…- -Hija responde-',
      'En nuestra casa hay una puerta en el sótano Que más que se intente no podemos abrir Han pasado largos años sigue de la misma manera Creemos que está blindada del otro lado Bueno creo que seguiremos encerrados aquí abajo',]
      const suspen2 = Math.floor(Math.random()*suspen.length)
      const suspen3 = suspen[suspen2]
      enviar(suspen3)
      break
      
      
      case 'filosofia':
        const filo = ['A Francia\nEs mejor entender un poco que malinterpretar',
        'Abraham Lincoln\nCasi todos los hombres son capaces de soportar la adversidad Sin embargo, si quieres probar el verdadero carácter de un hombre, dale poder',
      'Esquilo"\nCuando la determinación de uno es fuerte y firme, Dios se unirá a sus esfuerzos',
      'Esopo\nEl sufrimiento es una lección',
      'Albert Einstein\nLa ciencia sin religión es patética',
      'Albert Einstein\nLa vida es como una bicicleta, para mantener el equilibrio tenemos que seguir moviéndonos',
      'Albert Einstein\nLa diferencia entre pasado, presente y futuro no es más que una obstinada ilusión',
      'Albert Einstein\nUna mesa, una silla, un frutero y un violín; ¿qué más se necesita para ser feliz?',
      'Albert Einstein\nTen piedad de los demás, sé duro contigo mismo',
      'Alex Osborn\nLa mejor manera de motivarse es asignarse tareas',
      'Alexander A Bogomoletz\nNo debemos desanimarnos La pasión es el estímulo más fuerte para amar, ser creativo y desear vivir más',
      'Alexander Solzhenitsyn\nEl hombre será feliz mientras elija ser feliz',
      'Arte Buchwald\nSi puedes hacer reír a otras personas, obtendrás todo el amor que deseas',   
      'Artemus Ward\nLos problemas llegarán tarde o temprano Si surge un problema, dale la bienvenida lo mejor que puedas Cuanto más amistoso lo saludes, más rápido irá',
      'Ashleigh Brillante\nNo podemos hacer nada para cambiar el pasado Pero cualquier cosa que hagamos puede cambiar el futuro',
      'Agustín\nLa paciencia es amiga de la sabiduría',
      'Ayn Rand\nLas personas creativas están motivadas por el deseo de salir adelante, no por el deseo de vencer a los demás',
      'B J Habibie\nDondequiera que estés siempre sé el mejor y da lo mejor que podamos dar',
      'Balzac\nEl odio es como el amor, inflamado por pequeñas cosas',
      'Bárbara Sher\nNo necesariamente tienes que tener éxito la primera vez',
      'Beecher\nUna hora intensa, mucho mejor y rentable que años de soñar y meditar',
      'Benjamin Disraeli\nLo mejor que puedes hacer por otra persona no es compartir tu riqueza, sino ayudarla a tener la suya propia',
      'Bill Clinton\nNo hay garantía de éxito, pero no intentarlo es garantía de fracaso',
      'Ali Javán\nNo espero ser todo para todos Solo quiero ser algo para alguien',
      'Ali bin Abi Talib\Cuando el intelecto de un hombre es perfecto, tiene pocas palabras',
      'Ali bin Abi Talib\nFeliz el hombre que puede ser su propio amo, el auriga de sus pasiones y el capitán del arca de su vida',
      'Ali bin Abi Talib\nUn amigo honesto vale más que las posesiones heredadas de tus antepasados',
      'Anne M Lindbergh\nLo que más cansa en la vida es no ser sincero', 
      'Anónimo\nÁbrete a ti, así es como Dios nos da un camino para probar Nunca pienses que el camino está cerrado',
      'Anónimo\nLa procrastinación es la tumba donde se entierra la oportunidad',
      'Antonie De Saint\nAmar no es mirarse a los ojos, sino mirar juntos en la misma dirección',
      'Aristóteles\nSomos lo que hacemos repetidamente Por lo tanto, la excelencia no es un acto, sino un hábito',
      'Arnold Glasow\nNunca intentes agradar a tu hijo o hija Tú eres solo uno',
      'Bill Cosby\nNo sé cuál es la clave del éxito, pero la clave del fracaso es tratar de hacer felices a todos',
      'Bill Gates\nEl consumidor más insatisfecho es un recurso valioso para el aprendizaje',
      'Bill McCartney\nNo estamos aquí para competir entre nosotros Estamos aquí para complementarnos',
      'Brian Koslow\nCuanto más dispuestos estemos a asumir la responsabilidad de nuestras acciones, más credibilidad tendremos',
      'Browning\nSiempre es bueno perdonar, pero es mejor olvidar un error',
      'Bruce Lee\nNo seas un árbol rígido que se rompe con facilidad Sé un bambú que puede soportar doblarse contra el viento',
      'Buda Gautama\nNo llores por el fracaso del amor, porque el hombre dejará todo lo que ama',
      'Madre Teresa\nSi juzgas a otras personas, no tienes tiempo para amarlas',
      'Madre Teresa\nSi no hay paz, es porque nos hemos olvidado de que nos necesitamos unos a otros',
      'Bung Hatta\nSe puede mejorar menos inteligencia con el aprendizaje, la falta de habilidad se puede mejorar con la experiencia, la falta de honestidad es difícil de arreglar',
      'Grabar\nMuchas personas tienen éxito gracias a las muchas dificultades y penurias que deben enfrentar',
      'Carol Burnet\nSolo yo puedo cambiar mi vida, nadie puede hacerlo por mí',
      'Charles Darwin\nNo es la especie más fuerte la que sobrevive Ni la especie más inteligente Sino la especie que responde mejor al cambio',
      'Charles R Swindoll\nLa vida es un 10 por ciento lo que te sucede, un 90 por ciento cómo reaccionas ante ello', 
      'Ching Hai\nMejorarnos a nosotros mismos es mejorar el mundo',
      'Ching Hai\nNo discrimines entre buenos y malos trabajos Los problemas surgen cuando discriminamos y tomamos partido',
      'Ching Hai\nDebemos trabajar sin ataduras Eso se aplica a todos los trabajos La devoción incondicional es lo mejor',
      'Ching Hai\nPrimero debemos encontrar el poder del amor dentro de nosotros mismos, luego podremos amar verdaderamente a los demás',
      'Ching Hai\npensamiento: "Busca el dinero suficiente para pagar tu vida, de modo que puedas reservar tiempo y energía para la práctica espiritual',
      'Cristóbal Colón\nLa riqueza no enriquece a una persona, solo la hace más ocupado',
      'Cicerón\nUn corazón agradecido no es solo la mayor virtud, sino la madre de todas las demás virtudes',
      'CicerónUn corazón agradecido no es solo la mayor virtud, sino la madre de todas las demás virtudes',
      'Clarence DarrowLa libertad viene de las personas, no de las leyes o instituciones',
      'ConfucioLa vida es realmente simple, pero insistimos en complicarla',
      'Confucio\nDondequiera que vayas, ve con todo tu corazón',
      'Confucio\nLas personas que cometen errores y no corrigen sus errores cometen otros errores',
      'Confucio\nNuestro mayor orgullo no es no fallar nunca, sino levantarnos cada vez que nos caemos',
      'Cobre\nLa flor que nunca se marchitará en la tierra es una virtud',
      'Cynthia Ozick\nImaginar lo inimaginable requiere una imaginación extraordinaria',
      'D J Schwartz\nCualquier dificultad no resiste la tenacidad y la perseverancia Sin tenacidad, las personas más inteligentes y talentosas a menudo fracasan en la vida',
      'Dale Carnegie\nLa única forma en que podemos obtener amor, no es exigir que nos amen, sino comenzar a dar amor a los demás sin esperar nada a cambio',
      'Dale Carnegie\nCuando las personas que se preocupan por sus defectos están agradecidas por la riqueza que tienen, dejarán de preocuparse',
      'Dale Carnegie\nIntenta formar una conexión de "cable" entre tu cerebro y tu corazón',
      'Dale Carnegie\nUna sonrisa enriquecerá el alma de quien la recibe, sin empobrecer a quien la da']
      const filo2 = Math.floor(Math.random()*filo.length)
      const filo3 = filo[filo2]
      enviar(filo3)
      break
      
      case 'historia': case 'terror':
        const miedo = ['Una familia, compuesta por dos pequeños y sus padres, viajaban por carretera hacia [....] cuando el coche se les averió. Los padres salieron a buscar ayuda y, para que los niños no se aburrieran, les dejaron con la radio encendida. Cayó la noche y los padres seguían sin volver cuando escucharon una inquietante noticia en la radio: un asesino muy peligroso se había escapado de un centro penitenciario cercano a [....] y pedían que se extremaran las precauciones.Las horas pasaban y los padres de los niños no regresaban. De pronto, empezaron a escuchar golpes sobre sus cabezas. “Poc, poc, poc”. Los golpes, que parecían provenir de algo que golpeaba la parte de arriba del coche, eran cada vez más rápidos y más fuertes. “POC, POC, POC”. Los niños, aterrados, no pudieron resistir más: abrieron la puerta y huyeron a toda prisa.Solo el mayor de los niños se atrevió a girar la cabeza para mirar qué provocaba los golpes. No debería haberlo hecho: sobre el coche había un hombre de gran tamaño, que golpeaba la parte superior del vehículo con algo que tenía en las manos: eran las cabezas de sus padres.' ,
        ' Hace unos años, en un campamento, hubo un grupo de jóvenes que, durante una excusión, se perdió. Tras varias horas perdidos, encontraron a un hombre solitario: llevaba un hacha a la espalda y no les daba buena espina pero, desesperados, le preguntaron cómo se llegaba al pueblo. A pesar de la primera impresión, el hombre resultó ser supergradable: les dijo que se llamaba Yoduloso y les acompañó hasta el pueblo, donde se despidió. Antes, se hizo una foto junto a los jóvenes.El grupo de jóvenes contó en el pueblo que el hombre que los había llevado hasta allí se llamaba Yoduloso, pero los vecinos de la localidad dijeron que aquello era imposible. El único Yoduloso que había habido en el pueblo falleció hace más de 100 años, y murió de una forma horrible: un grupo de niños jugaba a la pelota y se le escapó, y Yoduloso fue a por ella. Llevaba un hacha en la mano y tuvo la mala suerte de tropezar y cortarse su propia pierna. Murió desangrado.Los jóvenes escucharon incrédulos y pensaron que, incluso a pesar de las coincidencias del nombre y de que aquel señor también llevaba un hacha, era imposible que se trata de la misma persona. Sin embargo, cuando revelaron aquella foto que se habían hecho al llegar al pueblo, se percataron de algo que les hizo cambiar de parecer: Yoduloso había desaparecido de la fotografía.' ,
        ' Hace muchísimos años venía a los campamentos un joven llamado Manitou. Debido a su mal comportamiento, fue expulsado del campamento, y decidió vengarse. Durante toda la eternidad: aunque esto ocurrió hace muchísimo tiempo, Manitou sigue visitando los campamentos. Podemos saber que está cerca porque antes de su llegada puede escucharse un sonido similar al de un tambor.En ocasiones, al despertar, algunos niños se han dado cuenta de que les habían dibujado en la frente, o por el cuerpo, una letra M en color roja. Está pintada con sangre.' , 'Esta es la historia de una joven de [....], llamémosla Sara. De pequeña, Sara tenía miedo a la oscuridad, hasta que adoptó a un perro que le hacía compañía. Durante años, Sara dormía tranquila porque sabía que bajo la cama estaba su perro, y si tenía miedo solo tenía que extender la mano: entonces, el perro empezaba a lamerla hasta que se quedaba dormida.Así pasaron los años y Sara se hizo adulta. Una noche, en la radio, escuchó que cerca de [....] estaba en busca y captura un asesino muy peligroso. Sara, acompañada de su perro, no tenía miedo: se metió en la cama, extendió la mano hacia el borde y el perro, como todas las noches, empezó a lamerla.Durmió del tirón y, al despertar, le sorprendió que el perro no se hubiera cansado de lamerle la mano en toda la noche. O eso creía: al abrir los ojos, encontró al perro muerto sobre el suelo de la habitación. Bajo la cama, un hombre seguía lamiéndole la mano.',
        'Varias adolescentes habían ido a pasar la noche en casa de una amiga, aprovechando que sus padres estaban de viaje. Cuando apagaron las luces se pusieron a hablar de un viejo al que acababan de enterrar en un cementerio cercano. Se decía que lo habían enterrado vivo y que se le podía escuchar arañando el ataúd, intentando salir.Una de las chicas se burló de aquella idea, así que las otras la desafiaron a que se levantara y fuera a visitar la tumba. Como prueba de que había ido, tenía que clavar una estaca de madera sobre la tierra de la tumba. La chica se fue y sus amigas apagaron la luz otra vez y esperaron a que volviera.Pero pasó una hora, y otra más, sin que tuvieran noticias de su amiga. Se quedaron en la cama despiertas, cada vez más aterradas. Llegó la mañana y la chica no había aparecido. Aquel mismo día, los padres de la chica regresaron a casa y, junto al resto de padres, acudieron al cementerio. Encontraron a la chica tirada sobre la tumba… Muerta. Al agacharse para clavar la estaca en el suelo, había pillado también el bajo de su falda. Cuando intentó levantarse y no pudo, creyó que el viejo muerto la había agarrado. Murió del susto en el acto.',
        'Una adolescente está cuidando por primera vez a unos niños en una casa enorme y lujosa. Acuesta a los niños en el piso de arriba, y, cuando apenas se ha sentado delante de la televisión, suena el teléfono. A juzgar por su voz, el que llama es un hombre. Jadea, ríe de forma amenazadora y pregunta: “¿Has subido a ver a los niños?”.La canguro cuelga convencido de que sus amigos le están gastando una broma, pero el hombre vuelve a llamar y pregunta de nuevo: “¿Has subido a ver a los niños?”. Ella cuelga a toda prisa, pero el hombre llama por tercera vez, y esta vez dice: “¡Ya me he ocupado de los niños, ahora voy a por ti!”.La canguro está verdaderamente asustada. Llama a la policía y denuncia las llamadas amenazadoras. La policía pide que, si vuelve a llamar, intente distraerle al teléfono para que les de tiempo a localizar la llamada.Como era de esperar, el hombre llama de nuevo a los pocos minutos. La canguro le suplica que la deje en paz, y así le entretiene. Él acaba por colgar. De repente, el teléfono suena de nuevo, y a cada timbrazo el tono es más alto y más estridente. En esta ocasión, es la policía, que le da una orden urgente: “¡Salga de la casa inmediatamente! ¡Las llamadas vienen del piso de arriba!”.',
      ' Un grupo de amigas había decidido ir a [...] para pasar unos días. Se registraron en el hotel y subieron a su habitación a dejar el equipaje, pero notaron un olor peculiar, como si se les hubiera olvidado sacar la basura o no hubieran tirado de la cadena del váter. Sin embargo, todo parecía estar en orden, así que se fueron y no volvieron hasta la última hora de la noche.El olor había empeorado notablemente a lo largo del día y ya era casi insoportable, de modo que llamaron a mantenimiento para que localizara su origen. La persona que les mandaron miró debajo de las camas, dentro de los armarios, incluso olfateó los desagües y las ventilaciones, pero no pudo encontrar la fuente del olor. Al final, limpiaron la habitación con generosas cantidades de productos perfumados, pusieron la ventilación al máximo y desearon las buenas noches al grupo de amigas. La peste estaba, por el momento, enmascarada, y como ellas estaban agotadas, se fueron a la cama. Una de ellas escondió la cartera debajo del colchón, como acostumbraba a hacer en los hoteles.Todas durmieron hasta bien entrada la mañana: grandes rayos de sol entraban ya en la habitación, caldeándola en extremo. El hedor seguía presente y más potente que nunca. Una de las mujeres, ya bastante irritada, volvió a llamar al departamento de mantenimiento para quejarse. Luego llamó al director del hotel para quejarse un poco más. Un pequeño ejército de personal de dirección y mantenimiento se presentó en breve, y una vez más, rebuscaron por todas partes sin resultado. Sin embargo, todos estuvieron de acuerdo en que el olor era inaguantable, así que dirección ofreció cambiar a las amigas de habitación.Recogieron sus cosas para bajar al vestíbulo, pero cuando la señora que había escondido la cartera hurgó debajo del colchón, tocó algo que parecía sospechosamente una mano humana. Quitaron el colchón de encima de la cama y ahí, en un hueco practicado entre los muelles del somier, había un hombre muerto. Era evidente que lo habían asesinado en la habitación y el asesino lo había escondido entre el colchón y el somier. Había recortado una parte de los muelles del somier para que el cuerpo no formara un bulto en la cama.',
      'Una niña de siete años se había quedado con su abuela en su pequeño piso porque sus padres se habían ido al cine. Todo fue normal, cenaron y se rieron un rato charlando juntas. A las diez de la noche, la abuela se puso a hacer labores de costura, y la niña se puso a ver la tele, pero de repente a la abuela le entró una sed increíble, y le dijo a su nieta si le podía traer un vaso de agua.-Está oscuro -dijo la niña.-No temas, sigue el pasillo, que justo al lado de la puerta del baño hay un interruptor.La niña se decidió, y al entrar al pasillo no veía nada porque estaba muy oscuro, por lo que se arrimó a una pared y fue palpando y tanteando a ciegas en busca de un interruptor. Al seguir andando y llegar al marco de la puerta del baño, se paró y siguió tanteando, y de repente notó como una mano huesuda intentaba arrastrarla a la oscuridad del baño. La niña logró apartarse y fue llorando a su abuela. Desde entonces, la niña está en tratamiento psicológico. ¿Que pasó, si solo estaban ellas dos en la casa y la abuela estaba en el salón cosiendo?',
      'Lo que me dispongo a relatar es absolutamente verídico y relativamente reciente, me ocurrió a mí hace aproximadamente seis meses. A mí el mundo del espiritismo, las psicofonías y demás me produce mucha curiosidad, pero a la vez me asusta.Un compañero de clase me proporcionó un CD que tenía grabadas algunas psicofonías. Mi hermano me propuso llevarme un portátil para escuchar el CD mientras se duchaba, y así lo hicimos. Antes de escuchar la primera psicofonía una voz presentaba el CD y hacía una advertencia: “Nunca lo escuchen a oscuras”. En ese momento, para asustar a mi hermano, apagué la luz del cuarto de baño y él gritó: “¡Enciende la luz!”. Cuando la encendí, el disco ya no sonaba. Alguien le había dado al stop. Yo no fui, de eso estoy seguro porque tenía el dedo en el interruptor de la luz, y mi hermano tampoco, estaba dentro de la bañera y a más de dos metros del portátil. ¿Quién apagó las psicofonías? No lo sé, y no estoy seguro de querer saberlo.',
      'Ted Martin y Sam Miller eran buenos amigos. Ambos pasaban mucho tiempo juntos. En esa noche en particular estaban sentados sobre una valla cerca de la oficina de correos hablando sobre nada en particular.Había un campo de nabos enfrente de la carretera. De repente vieron algo arrastrarse fuera del campo y ponerse en pie. Parecía un hombre, pero en la oscuridad resultaba difícil saberlo a ciencia cierta. Luego desapareció. Pero pronto apareció de nuevo. Se acercó hasta la mitad de la carretera, en ese momento se dio la vuelta y regresó al campo.Después salió por tercera vez y se dirigió hacia ellos. Llegados a ese punto Ted y Sam sentían miedo y comenzaron a correr. Pero cuando finalmente se detuvieron, pensaron que se estaban comportando como unos bobos. No estaban seguros de lo que les había asustado. Por lo que decidieron volver y comprobarlo.Lo vieron muy pronto, porque venía a su encuentro. Llevaba puestos unos pantalones negros, camisa blanca y tirantes oscuros. Sam dijo: “Intentaré tocarlo. De ese modo sabremos si es real”.Se acercó y escudriñó su rostro. Tenía unos ojos brillantes y maliciosos profundamente hundidos en su cabeza. Parecía un esqueleto. Ted echó una mirada y gritó, y de nuevo él y Sam corrieron, pero esta vez el esqueleto los siguió. Cuando llegaron a casa de Ted, permanecieron frente a la puerta y lo observaron. Se quedó un momento en el camino y luego desapareció.Un año más tarde Ted enfermó y murió. En sus últimos momentos, Sam se quedó con él todas las noches. La noche en que Ted murió, Sam dijo que su aspecto era exactamente igual al del esqueleto.',
      'Un hombre llamado Joseph Blackwell llegó a [....] en un viaje de negocios. Se hospedó en la gran casa que unos amigos poseían en las afueras de la ciudad. Esa noche pasaron un buen rato conversando y rememorando viejos tiempos. Pero cuando Blackwell fue a la cama, comenzó a dar vueltas y no era capaz de dormir.En un momento de la noche, oyó un coche llegar a la entrada de la casa. Se acercó a la ventana para ver quién podía arribar a una hora tan tardía. Bajo la luz de la luna vio un coche fúnebre de color negro lleno de gente. El conductor alzó la mirada hacia él. Cuando Blackwell vio su extraño y espantoso rostro, se estremeció. El conductor le dijo: “Hay sitio para uno más”. Entonces el conductor esperó uno o dos minutos, y se retiró.Por la mañana, Blackwell les contó a sus amigos lo que había pasado. “Estabas soñando”, dijeron ellos. “Eso debe haber sido”, repuso él, “pero no parecía un sueño”. Después del desayuno se marchó a la ciudad. Pasó el día en las oficinas de uno de los nuevos y altos edificios de la urbe.A última hora de la tarde, él estaba esperando un ascensor que lo llevara de vuelta a la calle. Pero cuando se detuvo en su piso, este se encontraba muy lleno. Uno de los pasajeros lo miró y le dijo: “Hay sitio para uno más”. Se trataba del conductor del coche fúnebre. “No, gracias”, dijo Blackwell. “Esperaré al siguiente”.Las puertas se cerraron y el ascensor empezó a bajar. Se oyeron voces y gritos, y un gran estruendo. El ascensor se había desplomado contra el fondo. Todas las personas que habían a bordo murieron.']
      const miedo2 = Math.floor(Math.random()*miedo.length)
      const miedo3 = miedo[miedo2]
      enviar(miedo3)
      break

      case 'piropo' :
        const piro = ['Me gustaría ser papel para poder envolver ese bombón.' , 'Eres como wifi sin contraseña, todo el mundo te busca' , 'Quién fuera bus para andar por las curvas de tu corazón.' , 'Quiero volar sin alas y salir de este universo, entrar en el tuyo y amarte en silencio.' , 'Quisiera ser mantequilla para derretirme en tu arepa.' , 'Si la belleza fuera pecado vos ya estarías en el infierno.' , 'Me Gustaría Ser Un Gato Para Pasar 7 Vidas A Tu Lado.' , 'Robar Está Mal Pero Un Beso De Tu Boca Sí Me Lo Robaría.' , 'Qué Hermoso Es El Cielo Cuando Está Claro Pero Más Hermoso Es El Amor Cuando Te Tengo A Mi Lado.' , 'Bonita, Camina Por La Sombra, El Sol Derrite Los Chocolates.' , 'Si Fuera Un Correo Electrónico Serías Mi Contraseña.' , 'Quisiera que fueses monte para darte machete' , 'Perdí mi número de teléfono ¿Me das el tuyo?' , '¿Cómo te llamas para pedirte de regalo a Santa Claus?' , ' En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.' , '¿Acaba de salir el sol o es la sonrisa que me regalas hoy?' , 'No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza' , 'Si hablamos de matemáticas eres la suma de todos mis deseos.' , 'Pareces Google porque tienes todo lo que yo busco.' , 'Mi café favorito, es el de tus ojos.' , 'Quiero ser photoshop para retocarte todo el cuerpo.' , 'Quisiera que fueras cereal, para cucharearte en las mañanas.' , 'Quien fuera hambre, para darte tres veces al día.',]
        const piro2 = Math.floor(Math.random()*piro.length)
        const piro3 = piro[piro2]
        enviar(piro3)
        break

 case 'menu7':
  enviar('EL MENU7 ESTA EN DESARROLLO')


        break

        case 'autostick':            
if (!isGroup) return enviar(respuesta.grupo)
if (!isAdmin) return enviar(respuesta.groupAdmins)     
if (args.length < 1) return enviar('Escribe *1* para activar')                    
if (args[0] === '1') {                             
	if (isAutoSt) return enviar('*Ya está activo*')          
	autostick.push(from)             
	fs.writeFileSync('./archivos/autostick.json', JSON.stringify(autostick))      
	enviar(`*[ Activado ]*`)  
	enviar(`*ahora, todas las fotos que se envien en el grupo se convertiran en sticker automaticamente*`)  
} else if (args[0] === '0') {           
	var ini = autostick.indexOf(from)
	autostick.splice(ini, 1)                  
	fs.writeFileSync('./archivos/autostick.json', JSON.stringify(autostick))      
	reply(`Desactivado`)              
} else {                                
	enviar('1 para activar, 0 para desactivar')        
}                          
break

case 'takestick':
case 'robar':
if (!isQuotedSticker) return enviar(`Etiqueta un stiquer y escribe: *${prefixo}takestick nombre|autor*`)
const encmediats = JSON.parse(JSON.stringify(quoted).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!q) return enviar('*Y el nombre de autor y paquete?*')
if (!pack) return enviar(`*Porfavor escribe bien el formato: ${prefixo}robar nombre|autor*`)
if (!author2) return enviar(`*Porfavor escribe bien el formato: ${prefixo}robar nombre|autor*`)
const dlfile = await anita.downloadMediaMessage(encmediats)
enviar(respuesta.espere)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
anita.sendMessage(from, imageBuffer, sticker, {quoted: contato})
addFilter(from)
break

//Comandos sin prefixo

default:
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
}

})

}
connectToWhatsApp()