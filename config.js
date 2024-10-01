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

  sessionName:process.env.SESSION_ID || "SUHAIL_11_34_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZTJLL2R6amtaZW52V3pRRzFoOG1UQ3ZURXFnZXNURzd5Wlhrb0xadU93MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2plbERaRjhTenFtX09jcHZxVFhOUVwiLFxuICBcInBob25lSWRcIjogXCIyNDhlM2YxNC0wY2Q0LTQ3NjctYTUzNi03Mjg0ODE1ZjhlYjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyNTIsXG4gICAgICAxMTksXG4gICAgICA2NSxcbiAgICAgIDM1LFxuICAgICAgMTUzLFxuICAgICAgNTcsXG4gICAgICAxNzEsXG4gICAgICA1MCxcbiAgICAgIDEsXG4gICAgICAxMTcsXG4gICAgICAxMDcsXG4gICAgICAyMDMsXG4gICAgICAxNSxcbiAgICAgIDEzNCxcbiAgICAgIDYwLFxuICAgICAgMTc4LFxuICAgICAgMjIsXG4gICAgICA4MyxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDExMixcbiAgICAgIDgyLFxuICAgICAgMTQzLFxuICAgICAgMjEsXG4gICAgICAxNDAsXG4gICAgICA0OCxcbiAgICAgIDkwLFxuICAgICAgNjksXG4gICAgICAyMzQsXG4gICAgICAxOTMsXG4gICAgICAyMzQsXG4gICAgICAxODMsXG4gICAgICAxMTUsXG4gICAgICAxNjksXG4gICAgICAyMjcsXG4gICAgICA1OSxcbiAgICAgIDE3MixcbiAgICAgIDE1NCxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc0WE1MRlo0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwNDg2NTkyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBaXNoYXQgTXVoYW1tYWQga2F5YSgg2KfZhSDZiNin2YTZitiv2KcpXCIsXG4gICAgXCJsaWRcIjogXCI5NjI2NzQ5NzY2ODc4ODo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6SW1kNEdFS2E4NzdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1BUeEJ2Zmd5STNDa0llUGJVdXg5K3UreVZ6WHhLVzFMUCtDRkVXY3hnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaSnNTakozQ093MnlQNVBEdklIQUlmNlNhQytaUEVkb3NUT0JNQ1lmUlBIdXlkU2lIaTBQbEtvT0NzN3drOEI0K1F2eHlEcUxjazBpSEs3MjRRTzhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2M1FmOUVadS94WkszNWdIaXgxM2d3UkpPem8rTjR4NlFnc21hU0tIdThyNTVXbG1CK21FUVprNEZ0bEthdGh2azVmQkk2eGVVTkY4bnhpb2xuYTZBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAwNDg2NTkyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NzgyNDQyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
