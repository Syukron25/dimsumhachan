import { useState, useEffect } from "react"

export default function Navbar(){

    const [navshow, setNavshow] = useState(false)
    function navbarklik() { navshow ? setNavshow(false) : setNavshow(true) }
    const li = <li  className="px-2 h-16 content-center">•</li>
    const logo = <img src="https://img.icons8.com/?size=100&id=x0UMOekNtUEy&format=png&color=000000" className="h-10"></img>
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.onscroll = () => {

          if(window.scrollY>=1) {
            setScroll(true)
          }

          if(window.scrollY==0) {
            setScroll(false)
          }

        }})


    return (
        <>
            <section id="navbar" className={`flex fixed top-0 bg-white ${scroll ? 'bg-opacity-95' : 'bg-opacity-30 shadow-none'} w-full h-16 px-1 md:px-8 z-10  ${navshow ? '' : 'shadow-md'} `}>
                <button onClick={navbarklik} className="btn btn-ghost my-2 pr-2 md:hidden" ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button>
                <a className="flex flex-row justify-center items-center" href="#">{logo} <h5 className=" font-bold text-xl px-2">Dimsum Hachan</h5></a>
                <ul className="hidden md:flex right-0 h-16 pr-14 justify-end absolute">
                    <li className="px-2 h-16 content-center  hover:bg-teal-600 hover:text-white"><a href="#menu">Menu</a></li>
                    {li}
                    <li className="px-2 h-16 content-center  hover:bg-teal-600 hover:text-white"><a href="#galery">Galery</a></li>
                    {li}
                    <li className="px-2 h-16 content-center  hover:bg-teal-600 hover:text-white"><a href="#kontak">Kontak</a></li>
                    {li}
                    <li className="px-2 h-16 content-center  hover:bg-teal-600 hover:text-white"><a href="#alamat">Alamat</a></li>
                    
                    
                </ul>
            </section>

            {navshow && (
                <section id="navbarconten" className="flex fixed w-full p-4 pt-16 bg-white bg-opacity-95 text-black shadow-md">
                    <ul className="flex flex-col gap-4" >
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#menu" >Menu</a></li>
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#galery">Galery</a></li>
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#kontak">Kontak</a></li>
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#alamat">Alamat</a></li>
                        
                    </ul>
                </section>
            )}
        </>
    )
}