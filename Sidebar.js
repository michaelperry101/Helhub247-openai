'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Sidebar(){
  const [chats, setChats] = useState([])
  useEffect(()=>{
    setChats(JSON.parse(localStorage.getItem('hh_chats')||'[]'))
  },[])
  const newChat = ()=>{
    const id = String(Date.now())
    const list = [{id,title:'New chat',createdAt:new Date().toISOString()},...(JSON.parse(localStorage.getItem('hh_chats')||'[]'))]
    localStorage.setItem('hh_chats', JSON.stringify(list))
    localStorage.setItem('hh_activeChat', id)
    window.location.href='/chat'
  }
  return (
    <aside className="sidebar">
      <div style={{marginBottom:12}}><button onClick={newChat} style={{width:'100%',padding:10,borderRadius:8,background:'#0ea5a4',color:'white',border:'none'}}>+ New chat</button></div>
      <nav style={{display:'flex',flexDirection:'column',gap:6}}>
        <Link href="/chat">All chats</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/about">About</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </aside>
  )
}
