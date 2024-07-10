export default function Hero (props){

  

    return(
      <div id="hero" className={`flex flex-col md:flex-row w-full py-28 px-8 items-center justify-center ${props.bg}`}>
        <div className="flex flex-col w-full  justify-center items-center md:items-end md:justify-end md:mr-48 bg-opacity-70  bg-white md:bg-transparent rounded-full py-10 md:scale-125">
          <p className="text-7xl md:text-6xl text-teal-600 uppercase font-bold text-center pb-4 ">{props.title}</p>
          <p className="text-2xl ">{props.line1}</p>
          <p className="text-2xl  pb-4 ">{props.line2}</p>
          <a href={`https://wa.me/6283806651825?text=${"Mau Promo Web "+ props.line1 + " " + props.line2 }`} target="_blank"  rel="noopener noreferrer" className="btn bg-teal-600 text-white hover:bg-teal-500 rounded-2xl m-2"> Dapatkan Promo </a>
        </div>
      </div>
    )
}