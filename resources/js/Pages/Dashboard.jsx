import { useState } from "react"
import { router } from "@inertiajs/react"
import Tambahproduk from "./Dashboard Comp/Tambahproduk.jsx"
import ListProduk from "./Dashboard Comp/ListProduk.jsx"
import TambahGalery from "./Dashboard Comp/TambahGalery.jsx"
import ListGalery from "./Dashboard Comp/ListGalery.jsx"
import Hero from "./Dashboard Comp/Hero.jsx"
import MenuSidebar from "./Dashboard Comp/MenuSidebar.jsx"
import Card from "./Dashboard Comp/Card.jsx"
import Modal from "./Dashboard Comp/Modal.jsx"
import Navtop from "./Dashboard Comp/Navtop.jsx"
import UpdatePromo from "./Dashboard Comp/UpdatePromo.jsx"

export default function dashboarhachanweb(props) {
    document.body.style.paddingTop = '65px'

    const [toggleListProduk,settoggleListProduk] = useState (true)
    const [toggleTambahProduk,settoggleTambahProduk] = useState (false)
    const [toggleListGalery, settoggleListGalery] = useState (false)
    const [toggleTambahGalery, settoggleTambahGalery] = useState (false)
    const [toggleModalProduk,settoggleModalProduk] = useState(false)
    const [toggleModalGalery,settoggleModalGalery] = useState(false)

    const [nama, setNama] = useState("")
    const [desk, setDesk] = useState("")
    const [harga, setHarga] = useState("")
    const [gambar, setGambar]= useState("fotodimsum.jpg")
    const [indexedit, setIndexedit] = useState()
    const [caption, setCaption]= useState()

    function editproduk (id,event) {
        event.preventDefault()
        router.post(`/updateProduk/${id}`,{
            nama:nama,
            desk:desk,
            gambar:gambar,
            harga:harga
        },{
            onBefore: () => confirm('apakah data sudah benar ?'), 
            onSuccess: ()=>tutupModal() })
    }

    function editGalery (id,event) {
        event.preventDefault()
        router.put(`/galery/${id}`,{caption:caption},{
        onSuccess: ()=>tutupModal() 
        })
    }

    function BukaModalProduk(i){
        settoggleModalProduk(true);
        setNama(props.produklist[i].nama.toString())
        setDesk(props.produklist[i].deskripsi.toString());
        setIndexedit(props.produklist[i].id.toString())
        setGambar(props.produklist[i].gambar.toString())
        setHarga(props.produklist[i].harga.toString())
    }

    function BukaModalGalery(i){
        settoggleModalGalery(true);
        setIndexedit(props.galerylist[i].id.toString())
        setCaption(props.galerylist[i].caption.toString())
    }

    function tutupModal(){
        settoggleModalProduk(false);
        settoggleModalGalery(false);
    }
    
    function tampilListProd() {
        settoggleListProduk(true)
        settoggleTambahProduk(false)
        settoggleTambahGalery(false)
        settoggleListGalery(false)
    }

    function tampilTambahProd() {
        settoggleTambahProduk(true)
        settoggleListProduk(false)
        settoggleTambahGalery(false)
        settoggleListGalery(false)
    }

    function tampilListGalery() {
        settoggleListGalery(true)
        settoggleListProduk(false)
        settoggleTambahGalery(false)
        settoggleTambahProduk(false)
    }

    function tampilTambahGalery() {
        settoggleTambahGalery(true)
        settoggleListProduk(false)
        settoggleListGalery(false)
        settoggleTambahProduk(false)
    }

    return (
        <>

            <Navtop username={props.auth.user.name} />

            <section id="main" className="flex flex-row w-full justify-end">

                <MenuSidebar listProduk={tampilListProd} tambahProduk={tampilTambahProd} listGalery={tampilListGalery} tambahGalery={tampilTambahGalery} />     
                
                <div id="content" className="flex flex-col w-full md:w-9/12 items-center justify-center">
                    <p className=" pb-2 font-black text-xl text-gray-800 uppercase"> Dimsum Hachan</p>
                    <ul id="tableProdukdanGalery" className="flex flex-wrap w-full gap-4 justify-center items-center">
                        <Card title={"Produk"} total={Object(props.produklist).length} tambah={tampilTambahProd} tombollist={tampilListProd} />
                        <Card title={"Galery"} total={Object(props.galerylist).length} tambah={tampilTambahGalery} tombollist={tampilListGalery} />
                        <Tambahproduk togle={toggleTambahProduk} errornama={props.errors.nama}  errordeskripsi={props.errors.deskripsi} errorgambar={props.errors.gambar} errorharga={props.errors.harga} />
                        <ListProduk togle={toggleListProduk} produklist={props.produklist} bukamodal={BukaModalProduk}/>
                        <TambahGalery togle={toggleTambahGalery} errorscaption={props.errors.caption} errorsgambar={props.errors.namafile} />
                        <ListGalery togle={toggleListGalery} galerylist={props.galerylist} bukamodal={BukaModalGalery}/>
                    </ul>
                    <p className="flex w-full pt-6 items-center justify-center font-semibold ">  Hero Header Promo Web </p>
                    <Hero title={props.promo.title} line1={props.promo.line1} line2={props.promo.line2} />
                    <UpdatePromo title={props.promo.title} line1={props.promo.line1} line2={props.promo.line2} />
                </div>
                
            </section>

            <Modal modalbuka={toggleModalProduk} judul="Edit Produk" update={(e) => editproduk(indexedit, e)} close={tutupModal}>
                <label htmlFor="namaproduk"> Nama </label>
                <input id="namaproduk" className="rounded-md w-full " type="text" defaultValue={nama} onChange={(e) => setNama(e.target.value)}></input>
                <label htmlFor="deskprod"> Deskripsi </label>
                <input id="deskprod" className="rounded-md  w-full " type="text" defaultValue={desk} onChange={(e) => setDesk(e.target.value)}></input>
                <label htmlFor="harga"> Harga </label>
                <input id="harga" className="rounded-md  w-full " type="text" defaultValue={harga} onChange={(e) => setHarga(e.target.value)}></input>
                <img className="w-2/3 rounded-lg shadow-md border-2" src={`img/${gambar}`}></img>
                <input id="gambarprod" className="file-input file-input-bordered file-input-info file-input-sm " type="file" onChange={(e) => setGambar(e.target.files[0])} ></input>
            </Modal>

            <Modal modalbuka={toggleModalGalery} judul="Edit Caption" update={(e) => editGalery(indexedit, e)} close={tutupModal}>
                <label htmlFor="captionbaru" className="mt-2"> Caption Baru </label>
                <input className="w-full rounded-md" id="captionbaru" type="text" defaultValue={caption} onChange={(e) => setCaption(e.target.value)}></input>
            </Modal>
        </>
    )
}