import herologo from "./dimsum.png"

export default function Hero (props){

    return(
      <section id="hero" className="flex flex-col md:flex-row w-full p-2 items-center justify-center bg-teal-100">
        <img className="h-48 md:h-64 p-2" src={herologo} ></img>
        <div className="flex flex-col my-4 items-center justify-center">
          <p className="text-6xl text-blue-900 uppercase font-black text-center ">{props.title}</p>
          <p className="text-2xl ">{props.line1}</p>
          <p className="text-2xl ">{props.line2}</p>
          <a href={`https://wa.me/6283806651825?text=${"Mau Promo Web "+ props.line1 + " " + props.line2 }`} target="_blank"  rel="noopener noreferrer" className="btn btn-primary m-2"> Dapatkan Promo </a>
        </div>
      </section>
    )
}