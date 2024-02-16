function Card({color, click}){
  return (
    <div 
      onClick={click}
      className={`bg-slate-500 md:h-56 md:w-56 h-32 w-32 rounded-lg cursor-pointer hover:scale-105 
      transition-all flex justify-center items-center text-black font-bold text-3xl`}>
      {color}
    </div>
)
}

export default Card