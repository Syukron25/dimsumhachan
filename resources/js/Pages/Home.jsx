import Hero from "./Dashboard Comp/Hero"
import Tentangkami from "./Home Comp/Tentangkami"
import Kontak from "./Home Comp/Kontak"
import Alamat from "./Home Comp/Alamat"
import Footer from "./Home Comp/Footer"
import Navbar from "./Home Comp/Navbar"
import Menu from "./Home Comp/Menu"
import Galery from "./Home Comp/Galery"
import WhatsappWidget from "./Home Comp/WhatsappWidget"

export default function hachanweb(props) {

 document.body.style.paddingTop = '65px'
 
  const garis = <hr className="mx-auto w-1/2 bg-black"></hr>

  return (
    <>   
      <Navbar />
      <Hero title={props.promo.title} line1={props.promo.line1} line2={props.promo.line2} />
      <Tentangkami />
        {garis}
      <Menu produk={props.produk} />
        {garis}
      <Kontak />
        {garis}
      <Alamat />
      {garis}
      <Galery galerylist={props.galerylist}/>
      {garis}
      <Footer />
      <WhatsappWidget />
    </>
  )
}