export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { prompt } = req.body || {}
  const key = process.env.OPENAI_API_KEY
  if(!key){
    // 1x1 transparent PNG base64
    const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='
    return res.status(200).json({ imageBase64: png })
  }
  try{
    const resp = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 'Authorization': `Bearer ${key}` },
      body: JSON.stringify({ prompt, size: '1024x1024' })
    })
    const j = await resp.json()
    const b64 = j?.data?.[0]?.b64_json
    return res.status(200).json({ imageBase64: b64 })
  }catch(e){
    return res.status(500).json({ error: 'Image generation failed' })
  }
}
