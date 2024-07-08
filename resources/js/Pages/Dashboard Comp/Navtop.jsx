import { Link } from "@inertiajs/react"

export default function Navtop(props){
    
    return(
        <>
            <section id="navtopline" className="flex flex-row fixed top-0 w-full p-2 h-4 z-10 bg-teal-100  ">
            </section>
            <section id="navtop" className="flex flex-row fixed top-4 w-screen bg-white shadow z-10 ">
                <p className="px-6 py-2 items-center text-xl uppercase"> dashboard</p>
                <div className="flex w-full px-6 justify-end items-center">
                    {props.username}
                    <Link href={route('profile.edit')} as="button"  >
                        <p className="m-1 p-2 text-sm hover:bg-teal-700 hover:text-white bg-teal-300 rounded-md ">Profile</p>
                    </Link>
                    <Link href={route('logout')} method="post" as="button"  >
                        <p className="p-2  text-sm hover:bg-red-700 hover:text-white bg-red-300 rounded-md ">Logout</p>
                    </Link>
                </div>
            </section>
        </>
    )
}