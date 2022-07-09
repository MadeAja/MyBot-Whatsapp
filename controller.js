
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
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/functions')
const translate = require('@vitalets/google-translate-api');
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const openAPI = require('xfarr-api');

module.exports = server = async (server, Whatsapp, chatUpdate, store) => {
    try {
        var body = (Whatsapp.mtype === 'conversation') ? Whatsapp.message.conversation : (Whatsapp.mtype == 'imageMessage') ? Whatsapp.message.imageMessage.caption : (Whatsapp.mtype == 'videoMessage') ? Whatsapp.message.videoMessage.caption : (Whatsapp.mtype == 'extendedTextMessage') ? Whatsapp.message.extendedTextMessage.text : (Whatsapp.mtype == 'buttonsResponseMessage') ? Whatsapp.message.buttonsResponseMessage.selectedButtonId : (Whatsapp.mtype == 'listResponseMessage') ? Whatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (Whatsapp.mtype == 'templateButtonReplyMessage') ? Whatsapp.message.templateButtonReplyMessage.selectedId : (Whatsapp.mtype === 'messageContextInfo') ? (Whatsapp.message.buttonsResponseMessage?.selectedButtonId || Whatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || Whatsapp.text) : ''
        var budy = (typeof Whatsapp.text == 'string' ? Whatsapp.text : '')
        var prefix = global.bot.prefixs ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.bot.prefixs ?? global.bot.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = Whatsapp.pushName || "No Name"
        const botNumber = await server.decodeJid(server.user.id)
        const isCreator = [botNumber, ...global.owner.number].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(Whatsapp.sender)
        const itsMe = Whatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = Whatsapp.quoted ? Whatsapp.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = Whatsapp.isGroup ? await server.groupMetadata(Whatsapp.chat).catch(e => {}) : ''
        const groupName = Whatsapp.isGroup ? groupMetadata.subject : ''
        const participants = Whatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = Whatsapp.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = Whatsapp.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = Whatsapp.isGroup ? groupAdmins.includes(Whatsapp.sender) : false
    
        if (!server.public) {
            if (!Whatsapp.key.fromMe) return
        }

        if (global.bot.fase === "beta" && Whatsapp.message) {
            server.sendReadReceipt(Whatsapp.chat, Whatsapp.sender, [Whatsapp.key.id])    
            console.log(`\nNew Messages:\nPesan: ${(budy || Whatsapp.mtype)}\nDari: ${pushname + Whatsapp.sender}\nDi: ${(Whatsapp.isGroup ? pushname : 'Private Chat') + Whatsapp.chat}\nWaktu: ${wita}`);
        }



       switch(command){

        //TRANSLATE COMMAND
        case "translate":
        case "tr":
        let inputText = args[0]
        let language = args.slice(1).join(' ')
        if(!bahasa || sebelum === ""){
            Whatsapp.reply("error")
            return;
        }
            translate(inputText, {to: language}).then(res => {
                Whatsapp.reply(res.text)
            }).catch(err => {
                Whatsapp.reply("Error kak!")
            });
        break;


        //AIUEO COMMAND
        case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!Whatsapp.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = Whatsapp.quoted ? Whatsapp.quoted.text ? Whatsapp.quoted.text : q ? q : Whatsapp.text : q ? q : Whatsapp.text
            Whatsapp.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()));
        break;

        //MEME COMMAND
        case "meme":
            let err = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`;
	        if (!/image/.test(mime) || !text) {
                Whatsapp.reply(err)
                return;
            }
            let titleMeme = {
                top: text.split('|')[0] ? text.split('|')[0] : '',
                bottom: text.split('|')[1] ? text.split('|')[1] : ''
            }
            let srcImage = await quoted.download()
            server.sendMemeAsSticker(Whatsapp.chat, srcImage, titleMeme, Whatsapp, { packname: global.bot.packageName, author: "MAdeAja"});
            break;

            //STICKER COMMAND
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                      Whatsapp.reply("TUnggu")
                    if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let afterProcessSticker = await server.sendImageAsSticker(Whatsapp.chat, media, Whatsapp, { packname: global.bot.packageName, author: "MadeAja" })
                     await fs.unlinkSync(afterProcessSticker)
                } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 11) return Whatsapp.reply('Maksimal 10 detik!')
                        let media = await quoted.download()
                    let afterProcessSticker = await server.sendVideoAsSticker(Whatsapp.chat, media, Whatsapp, { packname: global.bot.packageName, author: "MadeAjA"})
                    await fs.unlinkSync(afterProcessSticker)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                    } 
                }
                break

                //TIKTOK DONWLOADER COMMAND
                case "tiktok":
                    if (!q) return Whatsapp.reply('Linknya?')
			    if (!isUrl(q) && !q.includes('tiktok.com')) return Whatsapp.reply('Invalid link')
                    openAPI.downloader.tiktok(q).then(result => {
                        let txt = `*----「 TIKTOK DOWNLOAD MP4 」----*\n\n`
                        txt += `*• Title :* ${result.title}\n`
                        txt += `*• Duration :* ${result.duration}\n`
                        txt += `*• Quality :* ${result.media[1].quality}\n`
                        txt += `*• Ext :* ${result.media[1].extension}\n`
                        txt += `*• Size :* ${result.media[1].formattedSize}\n`
                        txt += `*• Url  :* ${q}\n\n`
                        txt += `*Tunggu sedang dikirim*`
                        Whatsapp.reply(txt)
                        for(let i of result.media){
                          if(i.quality.includes('hd')){
                            server.sendFileUrl(Whatsapp.chat, i.url, "Ni cui", Whatsapp)
                          }
                        };
                      });
                break;
                case "soundcloud":
                    if(!q)return Whatsapp.reply(`Example : ${prefix + command} link SoundCloud`)
                    if (!q.includes('m.soundcloud.com')) return Whatsapp.reply('Itu bukan link SoundCloud')
                    openAPI.downloader.soundcloud(q).then(async (result) => {
                        let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                        txt += `*• Title :* ${result.title}\n`
                        txt += `*• Duration :* ${result.duration}\n`
                        txt += `*• Quality :* ${result.quality}\n`
                        txt += `*Tunggu sedang dikirim*`
                    
                        server.sendFileUrl(Whatsapp.chat, result.thumbnail, txt, Whatsapp)
                        server.sendFileUrl(Whatsapp.chat, result.download, "Ni cui", Whatsapp)
                    });


                    break;
                    case "youtube":
                        if(!q)return Whatsapp.reply(`Example : ${prefix + command} link Youtube`)
                        openAPI.downloader.youtube(q).then(async (result) => {
                            let txt = `*----「 YOUTUBE DOWNLOAD 」----*\n\n`
                            txt += `*• Title :* ${result.title}\n`
                            txt += `*• Author :* ${result.username}\n`
                            txt += `*• Quality :* ${result.fquality}\n`
                            txt += `*Tunggu sedang dikirim*`
                            server.sendFileUrl(Whatsapp.chat, result.thumbnail, txt, Whatsapp)
                            server.sendFileUrl(Whatsapp.chat, result.download_url, "Ni cui", Whatsapp)
                        });


                            break;


       }
    
    
    }catch(e){
        console.log("Error -> "+e)
    }
}