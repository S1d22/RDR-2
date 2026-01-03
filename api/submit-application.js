import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { discordUsername, age, country, experience, motivation } = req.body;

    // Basic validation
    if (!discordUsername) {
      return res.status(400).json({ error: 'discordUsername is required' });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return res.status(500).json({ error: 'Webhook not configured' });
    }

    const payload = {
      username: 'Frontier Redemption',
      embeds: [
        {
          title: '📜 New Whitelist Application',
          color: 15158332,
          fields: [
            { name: 'Discord Username', value: String(discordUsername || 'N/A'), inline: true },
            { name: 'Age', value: String(age || 'N/A'), inline: true },
            { name: 'Country', value: String(country || 'N/A'), inline: true },
            { name: 'Experience', value: String(experience || 'N/A'), inline: false },
            { name: 'Motivation', value: String(motivation || 'N/A'), inline: false },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const r = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error('Discord webhook error', r.status, text);
      return res.status(502).json({ error: 'Failed to send to Discord' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
