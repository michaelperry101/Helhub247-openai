'use client'
import { useState } from 'react'
export default function Subscribe(){ const [ok,setOk]=useState(false); return (<div className='card'><h2>Subscribe — Demo</h2><p>£9.99/month</p>{!ok? <button onClick={()=>setOk(true)} style={{padding:10,background:'#0ea5a4',color:'#fff',border:'none',borderRadius:8}}>Subscribe (Demo)</button>:<div>Subscribed (demo)</div>}</div>) }
