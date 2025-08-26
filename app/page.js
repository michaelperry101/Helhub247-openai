import ReviewCard from '../../components/ReviewCard'
import data from '../../data/reviews.json'
export default function Reviews({ searchParams }){
  const page = parseInt(searchParams?.page || '1',10)
  const per = 18
  const start = (page-1)*per
  const items = data.slice(start, start+per)
  return (<div className='card'><h2>Customer reviews</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:12,marginTop:12}}>{items.map((r,i)=>(<ReviewCard key={i} review={r}/>))}</div></div>)
}
