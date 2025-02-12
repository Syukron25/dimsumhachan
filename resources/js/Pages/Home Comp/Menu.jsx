import CardHome from "./CardHome"
import { useState } from "react"

export default function Menu(props) {
    const produk = props.produk
    const dataProduk = [...produk.map((item) => item)]
    const [pageSaatini, setpageSaatini] = useState(1)
    const dataAkhir = pageSaatini * 3
    const dataAwal = dataAkhir - 3
    const dataTampil = dataProduk.slice(dataAwal, dataAkhir)
    const jumlahPage = Math.ceil(dataProduk.length / 3)
    const arryaPage = [...Array(jumlahPage + 1).keys()].slice(1)

    const Produkitem = dataTampil.map((item, i) =>
        <CardHome key={i} nama={item.nama} deskripsi={item.deskripsi} gambar={item.gambar} harga={item.harga}/>)

    const Tombol=    
            arryaPage.map((tombol, i) =>
                <button key={i} className={`btn join-item ${pageSaatini == tombol ? "btn-active" : ""}`} onClick={() => gantiHal(tombol)} >{tombol}</button>
            )
    
    function gantiHal(i) {
        setpageSaatini(i)
        document.getElementById("menu").scrollIntoView({behavior: "smooth"})   }

    return (
        <div id="menu" className="flex flex-col w-full justify-center items-center gap-2  pt-16">
            <p className="font-black  text-teal-600" > Menu </p>
            <div className="flex flex-row md:hidden">{Tombol}</div>
            <div className="flex flex-col w-full justify-center items-center  md:flex-row gap-4 ">
            {Produkitem}
            </div>
            <div className="flex flex-row">{Tombol}</div>
        </div>
    )
}