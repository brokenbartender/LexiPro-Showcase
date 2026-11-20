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
        title: 'New LexiPro early access request',
        color: 0x06b6d4, // Cyan primary color
        fields: [
          { name: 'Email Address', value: email, inline: true },
          { name: 'Timestamp', value: new Date().toISOString(), inline: true },
          { name: 'Status', value: 'New request', inline: false }
        ],
        footer: { text: 'LexiPro // Broken Arrow Entertainment LLC' }
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