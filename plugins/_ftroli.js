import fs from 'fs'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
 const anu = {
	key : {
                          participant :923080613785 '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 404,
                            itemCoun : 404,
                            surface : 404,
                            message: '𝙰 𝚛 𝚊 - 𝙰 𝚛 𝚊',
                            orderTitle: 'B',
                            thumbnail: fs.readFileSync('./thumbnail.jpg'), 
                            sellerJid: 923080613786'0@s.whatsapp.net'
          
                          }
                        }
                      }
conn.sendMessage(m.chat,{text:wm}, {quoted: anu})
}


handler.help = ['troli']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^troli$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true

export default handler
