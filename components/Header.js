'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function Header(){
  return (
    <header className="header">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1100,margin:'0 auto',padding:'0 12px'}}>
        <div style={{width:120}}><Link href="/"><span style={{fontWeight:700}}>Helphub247</span></Link></div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Image src="/logo.svg" alt="Helphub247" width={140} height={32} priority />
        </div>
        <div style={{width:120,display:'flex',justifyContent:'flex-end',gap:8}}>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/settings">Settings</Link>
        </div>
      </div>
    </header>
  )
}
