export const onRequestPost = async (context) => {
  const { request, env } = context;
  
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1493464358746067115/Pd_iNzFF7DxtTtHItIMY11zisU9PcOff9_YHLJ5HYZ8Tbs-LgOwCXCLcsmQNkLJP2Byo';

    const discordPayload = {
      embeds: [{
        title: '?? NEW ELITE LEAD: EARLY ACCESS REQUEST',
        color: 0x06b6d4, // Primary Cyan
        fields: [
          { name: 'Email Address', value: email, inline: false },
          { name: 'Source', value: 'LexiPro.Online Portal', inline: true },
          { name: 'Timestamp', value: new Date().toISOString(), inline: true },
          { name: 'Status', value: 'DNA-VERIFIED LEAD', inline: false }
        ],
        footer: { text: 'LexiPro Sovereign OS // Node 0 Lead Capture' }
      }]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload)
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Discord delivery failed' }), { status: 500 });
    }

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};