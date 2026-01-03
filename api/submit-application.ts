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
      throw new Error('DISCORD_WEBHOOK_URL not set');
    }

    const payload = {
      embeds: [
        {
          title: '📝 New Whitelist Application',
          color: 15158332,
          fields: [
            { name: '🎮 Gamertag', value: gamertag || 'N/A', inline: true },
            { name: '💬 Discord', value: discordId || 'N/A', inline: true },
            { name: '🎂 Age', value: age || 'N/A', inline: true },
            { name: '📚 RP Experience', value: experience || 'N/A', inline: true },
            { name: '🧠 Quiz Score', value: `${score}/10`, inline: true },
            { name: '🌍 Language', value: language?.toUpperCase() || 'N/A', inline: true },
            { name: '📖 Backstory', value: backstory || 'N/A' }
          ],
          footer: { text: 'Dust Peek Whitelist System' },
          timestamp: new Date().toISOString()
        }
      ]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API ERROR:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
