import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Cari apa?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.title,
		description: '\nā Duration: ' + v.durationH + '\nā²ļø Uploaded: ' + v.publishedTime + '\nšļø Views: ' + v.view + '\nš Url: ' + v.url,
		rowId: usedPrefix + 'ytd ' + v.url
	}))
	let button = {
		buttonText: `āļø YouTube Search Disini āļø`,
		description: `ā” Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^y(outubesearch|ts(earch)?)$/i

export default handler