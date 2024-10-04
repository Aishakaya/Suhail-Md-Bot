const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_01_21_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJaVmpPTHVSYkJYUW8xbEtlZHRpSzVIWm5LcHQvRTZuZDZTQjMwYndBVms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJxeTdHV3YwVFZlVzhfUHpHbTByVlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjQxYmQ4MGEtMDZmMi00YTFkLWEyYmYtNGVlYmJiNzM4ZTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDU5LFxuICAgICAgOTAsXG4gICAgICAxNjMsXG4gICAgICAxNzYsXG4gICAgICAyMTgsXG4gICAgICA0OCxcbiAgICAgIDIxMyxcbiAgICAgIDE5MCxcbiAgICAgIDE3NSxcbiAgICAgIDI2LFxuICAgICAgMTAwLFxuICAgICAgNSxcbiAgICAgIDI1NSxcbiAgICAgIDI0MixcbiAgICAgIDY4LFxuICAgICAgMjEzLFxuICAgICAgMTgyLFxuICAgICAgMjYsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgOTEsXG4gICAgICAyMjMsXG4gICAgICAxOCxcbiAgICAgIDEzNixcbiAgICAgIDI1MCxcbiAgICAgIDE0OCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NixcbiAgICAgIDIwMCxcbiAgICAgIDEwNSxcbiAgICAgIDEyMCxcbiAgICAgIDY0LFxuICAgICAgMTk2LFxuICAgICAgMTk2LFxuICAgICAgMTE4LFxuICAgICAgOTEsXG4gICAgICA4MSxcbiAgICAgIDkxLFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREZXM0tBOTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDA0ODY1OTI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFpc2hhdCBNdWhhbW1hZCBrYXlhKCDYp9mFINmI2KfZhNmK2K/YpylcIixcbiAgICBcImxpZFwiOiBcIjk2MjY3NDk3NjY4Nzg4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXpJbWQ0R0VQT0YvYmNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzUFR4QnZmZ3lJM0NrSWVQYlV1eDkrdSt5VnpYeEtXMUxQK0NGRVdjeGdvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRzc2RwVDk3WnVMUURVRUZLS2Z5L1JJcDJjSU5ac25ob3V0ajdqcTNaM09qbVM3ZktjN1hwV1lLd0YvbytDMy94UXFpTk9qeHg0eXBJcFM2RE5zWEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlREenBUWTVraG5WZnNmTC9EcUVNRUltekl4VFhrYUI2RXIxQUlTdStRK0ppMXJFbkdweWY5Z3BjbnZjeTNNcXcxcmtMcUJTMXMrSDBpWXV1SFU4SWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDA0ODY1OTI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgwMDQ4NTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
