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

  sessionName:process.env.SESSION_ID || "SUHAIL_11_22_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLWVhYckhLRnViWFR1UUxzTVB5Y0F0VU5oRFkwbFBNU2lNV29IemVOcUtzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzZGo0dk51V1NsNmJMeGFONkRUOTl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhZDIxNmZlLWEwNzUtNDhhMS1iMmJkLTZiMDU2M2UyMWYzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxOTAsXG4gICAgICA5OCxcbiAgICAgIDEzOCxcbiAgICAgIDIyMixcbiAgICAgIDE5MSxcbiAgICAgIDE5LFxuICAgICAgODgsXG4gICAgICAyMDAsXG4gICAgICAyMzYsXG4gICAgICAzMSxcbiAgICAgIDI1LFxuICAgICAgODgsXG4gICAgICA1NSxcbiAgICAgIDQ1LFxuICAgICAgMTY0LFxuICAgICAgNjIsXG4gICAgICA0OSxcbiAgICAgIDk5LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAxOCxcbiAgICAgIDQ1LFxuICAgICAgNDcsXG4gICAgICA0MixcbiAgICAgIDE2OCxcbiAgICAgIDE4NCxcbiAgICAgIDE3NyxcbiAgICAgIDExNyxcbiAgICAgIDYsXG4gICAgICA5LFxuICAgICAgNTEsXG4gICAgICAxNDksXG4gICAgICAzNSxcbiAgICAgIDE1NCxcbiAgICAgIDE4MCxcbiAgICAgIDExNCxcbiAgICAgIDI4LFxuICAgICAgODgsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEw3RjRXMVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDA0ODY1OTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFpc2hhdCBNdWhhbW1hZCBrYXlhKCDYp9mFINmI2KfZhNmK2K/YpylcIixcbiAgICBcImxpZFwiOiBcIjk2MjY3NDk3NjY4Nzg4OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXZJbWQ0R0VQYk4zN2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzUFR4QnZmZ3lJM0NrSWVQYlV1eDkrdSt5VnpYeEtXMUxQK0NGRVdjeGdvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVldFhkYW1vRHd1MFh2R1RQaE5qOTBlS283Rm5ENGJiUkZ6aWJXNERxWnltdEl4bjFRWUtrVi85bTlPN3NZSlNpc2JaQkVuTlVaZGhJZlVwL2lTZ0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9WQXRtTGJWM2FXR0hSeUtCSVVqSGxHanpybTBhbm5ERUl5ZFRhMHZTWCtjYjlzeHgzelVYdGxCTFF3alF2azRjL3VIbjZwQXZRUFA4UUNrMUo5MER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDA0ODY1OTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc1MjI1NTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
