import Link from 'next/link'
export default function Home(){
  return (
    <div className="card" style={{maxWidth:900,margin:'24px auto'}}>
      <h1 style={{fontSize:28,fontWeight:800}}>Helphub247 — CARYS</h1>
      <p style={{color:'#475569',marginTop:8}}>24/7 AI helpline for UK customers. Chat, upload files and get answers fast. Demo-ready.</p>
      <div style={{marginTop:16,display:'flex',gap:8}}>
        <Link href="/chat"><button style={{padding:'10px 14px',borderRadius:8,background:'#0ea5a4',color:'#fff',border:'none'}}>Open Carys</button></Link>
        <Link href="/subscribe"><button style={{padding:'10px 14px',borderRadius:8,border:'1px solid #e6edf3'}}>Subscribe</button></Link>
      </div>
    </div>
  )
}
