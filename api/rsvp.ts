import type { VercelRequest, VercelResponse } from '@vercel/node'

const ANSWER_LABELS: Record<string, string> = {
  yes: "Albatta, kelaman!",
  maybe: 'Harakat qilaman',
  no: "Uzr, kelolmayman",
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, guests, answer, message } = req.body ?? {}

  if (typeof name !== 'string' || !name.trim() || typeof answer !== 'string') {
    res.status(400).json({ error: 'Invalid payload' })
    return
  }

  const botToken = process.env.BOT_TOKEN
  const chatId = process.env.CHAT_ID

  if (!botToken || !chatId) {
    res.status(500).json({ error: 'Server not configured' })
    return
  }

  const answerLabel = ANSWER_LABELS[answer] ?? answer
  const lines = [
    "Yangi RSVP javobi",
    `Ism: ${name}`,
    `Mehmonlar soni: ${guests ?? 1}`,
    `Javob: ${answerLabel}`,
  ]
  if (typeof message === 'string' && message.trim()) {
    lines.push(`Xabar: ${message.trim()}`)
  }

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
      }),
    })

    if (!telegramRes.ok) {
      res.status(502).json({ error: 'Telegram request failed' })
      return
    }

    res.status(200).json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Internal error' })
  }
}
