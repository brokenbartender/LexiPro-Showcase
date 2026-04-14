export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const discordPayload = {
      embeds: [{
        title: '?? NEW LEXIPRO EARLY ACCESS REQUEST',
        color: 0x06b6d4, // Cyan primary color
        fields: [
          { name: 'Email Address', value: email, inline: true },
          { name: 'Timestamp', value: new Date().toISOString(), inline: true },
          { name: 'Node Status', value: 'V27.0-ALPHA-10 (DNA-VERIFIED)', inline: false }
        ],
        footer: { text: 'LexiPro Sovereign OS // Early Access Pipeline' }
      }]
    };

    const response = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload)
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Discord notification failed');
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}