'use client'
import { useEffect, useRef, useState } from 'react'

export default function Chat(){
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const boxRef = useRef(null)
  const [chatId, setChatId] = useState(null)
  useEffect(()=>{
    let id = localStorage.getItem('hh_activeChat')
    if(!id){ id = String(Date.now()); localStorage.setItem('hh_activeChat', id); const list = JSON.parse(localStorage.getItem('hh_chats')||'[]'); list.unshift({id,title:'New chat',createdAt:new Date().toISOString()}); localStorage.setItem('hh_chats', JSON.stringify(list)) }
    setChatId(id)
    setMessages(JSON.parse(localStorage.getItem('chat:'+id)||'[]'))
  },[])
  useEffect(()=>{ boxRef.current?.scrollTo({top:1e9,behavior:'smooth'}) },[messages])
  const send = async ()=>{
    if(!text.trim()) return
    const user = { role:'user', content:text }
    const next = [...messages, user]; setMessages(next); setText(''); localStorage.setItem('chat:'+chatId, JSON.stringify(next))
    try{
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ messages: next }) })
      const js = await res.json()
      const reply = { role:'assistant', content: js.reply || ('Carys (demo) echo: '+text) }
      const next2 = [...next, reply]; setMessages(next2); localStorage.setItem('chat:'+chatId, JSON.stringify(next2))
      try{ const u = new SpeechSynthesisUtterance(reply.content); u.lang='en-GB'; window.speechSynthesis.speak(u) }catch(e){}
    }catch(e){
      const reply = { role:'assistant', content:'Carys could not reach the server.' }
      const next2 = [...next, reply]; setMessages(next2); localStorage.setItem('chat:'+chatId, JSON.stringify(next2))
    }
  }
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div ref={boxRef} style={{overflowY:'auto',flex:1,marginBottom:12,paddingRight:8}}>
        {messages.length===0 && <div style={{textAlign:'center',color:'#6b7280'}}>Say hello to Carys — your AI helpline.</div>}
        <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:8}}>
          {messages.map((m,i)=>(<div key={i} style={{alignSelf: m.role==='user'?'flex-end':'flex-start',maxWidth:'80%'}}><div style={{padding:10,borderRadius:12,background: m.role==='user'?'#0ea5a4':'#f3f4f6',color: m.role==='user'?'#fff':'#111'}}>{m.content}</div></div>))}
        </div>
      </div>
      <div style={{display:'flex',gap:8}}>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Message Carys..." style={{flex:1,padding:10,borderRadius:8}}></textarea>
        <button onClick={send} style={{padding:'10px 16px',borderRadius:8,background:'#0ea5a4',color:'#fff',border:'none'}}>Send</button>
      </div>
    </div>
  )
}
