const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0 .t1wsjlv.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923066671786'
global.devs = '923066671786';
global.website = 'https://king-session.vercel.app' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpUWWp6NktUeG9CSWVMUGNpQXFSRy9KSmZMNzZoTXpxUEN5UVFMY0YzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlkyU09IK2xpaEpDYlFmVjg5WVE3WUFUUmtBcjdGR05UZ2RYeUljWlp3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSWFqZXBWU3RFc1hNb0RHejl1MlBRT1NBVWJyQ0p3NFVEencycFBIcVVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbFdSUGw0NkcyMEg0SytlYko5Q2VXUk1kSm82ZjR0YmR0UzNZWTFVZFQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPa3pnb05UOTB5UmlvNzlmZjVoQWdCblhvNU1oMUhGYnpZajZxUjNFRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks4WDRHci9pWE9mcmkrVi8rNXNKK1pYamQxK014anZOdEwrbkgrTlczbHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pMcnRPblA5bVRySU9RdXJGODc2eGRBR3prNXV4RGVNL3lYQnkza09Wbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lBMkVkWTRFNGNhdFFORW1GSWpDQnpNSU5nYjNDYVZaUFpPVW9MWUlFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlydDg4bWtZcVlCTi9uNEt3UVhEYmo4QThlRHVoREtWMlpMR0lnMEVyeUwwMFYwUzFDMmVqcTNpM3BnMGdhbWcxdmNGdkMxcXRma2UvRmx2NXFHbERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJ5dXZyZE0wR0h6RW9JVTVHZ2hYcHF3NVNHNERVNlh3b3pXRUxkYTRpVjI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKUnYtcXFwNFFDLUx1NEVsSFhHS0JnIiwicGhvbmVJZCI6IjAxMDRkOWZlLWYyZmEtNDUyMy04ZDU0LTQ2NTk0ZDlkYjI4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcGx0dmpoem5wclhpbDhPQ2h5NHVSQ0pwSnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQy96NVQyQU5heXJqVFMzWlBOV0NnMlhEcDlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNCUUFTU0cyIiwibWUiOnsiaWQiOiI5MjMwNjY2NzE3ODY6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QmfCdkIjwnZCD8J2Qg/CdkIgg8J2QivCdkIjwnZCN8J2QhiDwnZCB8J2QgPCdkIvwnZCO8J2QgvCdkIdcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAg8JOGqeKBt+KBuOKBtvCThqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpRHBkTUNFTnJqNzdJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldZRmVsdm5mUGg1VzRDbXhQM1VCT1MyWGRxd2NCU0NoalM2T0hqTlZGMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijh1KzRGWlA2cmtXS3IySC9JTkFrUEpFZTA2MDNGRnYxbDJhenpQc3Vpam9abnNGb2ozQUF4WUNZY0Q5MnBKYXVtcVhTWmR1V2JLQk9UYTB5Z2lsVkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBZnMrZWpOQmE4L2ZJU0dpU3lrQk96UmhCN2lwTll3NURsSTVmYUN5bUR4a3NpL3Z5dkZ5M1pjVmJCMkl5L2ZtQXN3MGFQMW84anloNEQ5UTkySnZBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA2NjY3MTc4NjozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWbUJYcGI1M3o0ZVZ1QXBzVDkxQVRrdGwzYXNIQVVnb1kwdWpoNHpWUmRYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3MzAxNzM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVtNSJ9: process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? '𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? '𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.2.9' : process.env.VERSION,
  LANG: process.env.THEME|| '𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
