import { Link } from "@inertiajs/react"


export default function MenuSidebar (props) {

    const style = "p-2 m-1 w-11/12 hover:bg-teal-200 rounded-md flex flex-row gap-2 "
    const garis =  <li><hr className="w-11/12 border-1 my-4 border-gray-300"></hr></li>
    const iconList = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>
    const iconPegawai = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    const iconTambah = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    const iconLogout = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"/></svg>
    const iconPromo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>

    return(
        <>
            <div id="sidebar" className="hidden md:flex flex-col fixed left-0 top-5 h-screen w-3/12 py-8 px-3 bg-teal-100 shadow-md border-r-8 border-white" >
                <ul className="w-full p-2 m-2 text-left">
                    <li>Produk</li>
                    <a href="#tableProdukdanGalery" onClick={props.listProduk}><li className={style} > {iconList} List Daftar Produk </li></a>
                    <a href="#tableProdukdanGalery" onClick={props.tambahProduk}><li className={style} > {iconTambah} Tambah Produk Baru </li></a>
                    {garis}
                    <li>Galery</li>
                    <a href="#tableProdukdanGalery" onClick={props.listGalery}><li className={style} > {iconList} List Daftar Galery </li></a>
                    <a href="#tableProdukdanGalery" onClick={props.tambahGalery}><li className={style} > {iconTambah} Tambah Galery Baru </li></a>
                    {garis}
                    <a href="#promo"><li className={style} > {iconPromo} Update Promo </li></a>
                    {garis}
                </ul>
                <ul className="flex flex-col w-full text-left h-full justify-end">
                    <Link href={route('profile.edit')} as="button"> <li className={style} > {iconPegawai} Profile </li></Link>
                    <Link href={route('logout')} method="post" as="button"> <li className={style} > {iconLogout} Logout </li></Link>
                </ul>
            </div>
        </>
    )
}