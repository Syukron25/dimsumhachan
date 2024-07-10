import Hero from "./Dashboard Comp/Hero"
import Tentangkami from "./Home Comp/Tentangkami"
import Kontak from "./Home Comp/Kontak"
import Alamat from "./Home Comp/Alamat"
import Footer from "./Home Comp/Footer"
import Navbar from "./Home Comp/Navbar"
import Menu from "./Home Comp/Menu"
import Galery from "./Home Comp/Galery"
import WhatsappWidget from "./Home Comp/WhatsappWidget"
import { Head } from "@inertiajs/react"


export default function hachanweb(props) {

 //document.body.style.paddingTop = '65px'
 document.body.style.fontFamily = 'Merienda'

 
  const garis = <hr className="mx-auto w-1/2 bg-black"></hr>

  return (
    <>   
    <Head title="Dimsum Hachan" >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Indie+Flower&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
</Head>
    
      <Navbar />
      <Hero title={props.promo.title} line1={props.promo.line1} line2={props.promo.line2}  bg="bg-[url('img/hero.png')]"/>
      <Tentangkami />
      {garis}
      <Menu produk={props.produk} />
      {garis}
      <Galery galerylist={props.galerylist}/>
      {garis}
      <Kontak />
      {garis}
      <Alamat />
      {garis}
      <Footer />
      <WhatsappWidget />
    </>
  )
}