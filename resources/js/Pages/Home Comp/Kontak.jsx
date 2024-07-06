export default function Kontak(){
    return(
        <>           
            <div id="kontak" className="flex flex-col p-1 pt-16 items-center justify-center">
                <p className=" font-black"> Kontak kami </p>
                <ul className="flex gap-8">
                    <li>
                        <a className="flex flex-col w-full justify-center items-center" href="https://www.facebook.com/profile.php?id=100020204730010" target="_blank">
                            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
                            Hachan Abqari
                        </a>
                    </li>
                    <li>
                        <a className="flex flex-col w-full justify-center items-center" href="https://www.instagram.com/dimsum_hachan/" target="_blank">
                            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" />
                            @dimsum_hachan</a></li>
                    <li>
                        <a className="flex flex-col w-full justify-center items-center" href="https://wa.me/6283806651825">
                            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" />
                            083806651825 </a>  </li>
                </ul>
            </div>
            <hr className="mx-auto mt-8 w-1/2 bg-black"></hr>
            <div className="flex flex-col p-4 justify-center items-center">
                <p className="pt-4 font-black"> Temukan pula kami di </p>
                <ul className="flex flex-col md:flex-row items-center gap-12">
                    <li className=" flex flex-col items-center">
                        <img className="h-32" src="https://seeklogo.com/images/S/shopee-logo-065D1ADCB9-seeklogo.com.png" alt="" />
                        Dimsum Hachan </li>
                    <li className="flex flex-col items-center">
                        <img className="h-32" src="https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png" alt="" />
                        Dimsum Hachan</li>
                    <li className="flex flex-col items-center">
                        <img className="w-48" src="https://seeklogo.com/images/G/gofood-logo-E1800FAB7C-seeklogo.com.png" alt="" />
                        Katering Hachan</li>
                    <li className="flex flex-col items-center">
                        <img className="w-48" src="https://seeklogo.com/images/S/shopee-food-indonesia-logo-F49E5D08CA-seeklogo.com.png" alt="" />
                        Katering Hachan</li>
                </ul>
            </div>
        </>
    )
}