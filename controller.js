
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

        // Push Message To Console && Auto Read
        if (Whatsapp.message) {
            server.sendReadReceipt(Whatsapp.chat, Whatsapp.sender, [Whatsapp.key.id])    
            console.log(`\nNew Messages:\nPesan: ${(budy || Whatsapp.mtype)}\nDari: ${pushname + Whatsapp.sender}\nDi: ${(Whatsapp.isGroup ? pushname : 'Private Chat') + Whatsapp.chat}\nWaktu: ${wita}`)
        }



       switch(command){
            case "translate":
            let bahasa = args[0]
            let sebelum = args.slice(1).join(' ')
            if(!bahasa || sebelum === ""){
                Whatsapp.reply("error")
                return;
            }
                translate("sebelum", {to: 'en'}).then(res => {
                    Whatsapp.reply("Nih kak\n" + res.text)
                }).catch(err => {
                    Whatsapp.reply("Error kak! -> " + err)
                });
            break;
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                if (!Whatsapp.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                ter = command[1].toLowerCase()
                tex = Whatsapp.quoted ? Whatsapp.quoted.text ? Whatsapp.quoted.text : q ? q : Whatsapp.text : q ? q : Whatsapp.text
                Whatsapp.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()));
            break;
            

           
       }
    
    
    }catch(e){
        console.log("Error -> "+e)
    }
}