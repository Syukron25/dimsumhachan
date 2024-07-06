import { useState } from "react"

export default function Navbar(){

    const [navshow, setNavshow] = useState(false)
    function navbarklik() { navshow ? setNavshow(false) : setNavshow(true) }
    
    return (
        <>
            <section id="navbar" className={`flex fixed top-0 bg-white w-full h-16 px-8 z-10  ${navshow ? '' : 'shadow-md'} `}>
                <button onClick={navbarklik} className="btn btn-ghost my-2 pr-4 md:hidden" ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button>
                <button>Dimsum Hachan</button>
                <ul className="hidden md:flex right-0 h-16 pr-14 justify-end absolute">
                    <li className="px-2 h-16 content-center  hover:bg-gray-100"><a href="#menu">Menu</a></li>
                    <li className="px-2 h-16 content-center  hover:bg-gray-100"><a href="#kontak">Kontak</a></li>
                    <li className="px-2 h-16 content-center  hover:bg-gray-100"><a href="#alamat">Alamat</a></li>
                    <li className="px-2 h-16 content-center  hover:bg-gray-100"><a href="#galery">Galery</a></li>
                </ul>
            </section>

            {navshow && (
                <section id="navbarconten" className="flex fixed w-full p-4 bg-white text-black shadow-md">
                    <ul className="flex flex-col gap-4" >
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#menu" >Menu</a></li>
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#kontak">Kontak</a></li>
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#alamat">Alamat</a></li>
                        <li onClick={()=>setNavshow(false)} className="mx-2"><a href="#galery">Galery</a></li>
                    </ul>
                </section>
            )}
        </>
    )
}