import { useForm } from "@inertiajs/react";

export default function UpdatePromo(props){
    const { data, setData, put } = useForm({
        title: props.title,
        line1: props.line1,
        line2: props.line2
    })

    function updatePromo(e) {
        e.preventDefault()
        put('/testUpdate', {
            preserveScroll: true
        });
    }

    return(
        <form id="promo" onSubmit={updatePromo} className="flex flex-col p-4 mx-4 mb-8 mt-4 gap-2 justify-center items-center w-10/12 overflow-x-auto border-4 border-teal-100  bg-teal-50 rounded-lg shadow-md">
            <p className="flex w-full p-3 font-bold text-xl bg-teal-100 text-teal-800 items-center justify-center rounded-t-xl">Update Promo Banner</p>
            <label htmlFor="judulpromo">Judul Promo</label>
            <input id="judulpromo" onChange={(e) => setData("title", e.target.value)} type="text" className="w-full rounded-md" defaultValue={props.title}></input>
            <label htmlFor="line1">Baris 1</label>
            <input id="line1" onChange={(e) => setData("line1", e.target.value)} type="text" className="w-full rounded-md" defaultValue={props.line1}></input>
            <label htmlFor="line2">Baris 2</label>
            <input id="line2" onChange={(e) => setData("line2", e.target.value)} type="text" className="w-full rounded-md" defaultValue={props.line2}></input>
            <button type="submit" className="btn btn-primary w-2/3 p-2">Update</button>
        </form>
    )
}