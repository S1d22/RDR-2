import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      gamertag,
      discordId,
      age,
      experience,
      backstory,
      score,
      language
    } = req.body;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error('Discord webhook URL not set');
    }

    const payload = {
      embeds: [
        {
          title: '📝 New Whitelist Application',
          color: 15158332,
          fields: [
            { name: '🎮 Gamertag', value: gamertag, inline: true },
            { name: '💬 Discord', value: discordId, inline: true },
            { name: '🎂 Age', value: age, inline: true },
            { name: '📚 RP Experience', value: experience, inline: true },
            { name: '🧠 Quiz Score', value: `${score}/10`, inline: true },
            { name: '🌍 Language', value: language.toUpperCase(), inline: true },
            { name: '📖 Backstory', value: backstory }
          ],
          footer: {
            text: 'Dust Pe
