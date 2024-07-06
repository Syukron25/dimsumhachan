import { useForm } from "@inertiajs/react"
import ListFrame from "./ListFrame"

export default function tambahproduk( props ){

    const { data, setData, post, reset } = useForm({
        nama: "",
        deskripsi: "",
        gambar: "",
        harga : ""
    })

    function submit(e) {
        e.preventDefault()
        post('/tambahproduk', {
            onSuccess: () => {
                reset('nama', 'deskripsi', 'gambar'),
                    e.target.reset()
            }
        })
    }

    return(
        <ListFrame title="Tambah produk" togle={props.togle}>
            <form onSubmit={submit} className="flex flex-col p-2 m-2 gap-1 items-center justify-center">
                <label htmlFor="nama"> Nama </label>
                <input id="nama" type="text" className="w-full rounded-md" placeholder="isi nama produk" onChange={(e) => setData('nama', e.target.value)}>
                </input>
                <p className="text-red-700">{props.errornama}</p>
                <label htmlFor="deskripsi" > Deskripsi </label>
                <input id="deskripsi" type="text" className="w-full rounded-md" placeholder="isi deskripsi produk" onChange={(e) => setData('deskripsi', e.target.value)}>
                </input>
                <p className="text-red-700">{props.errordeskripsi}</p>
                <label htmlFor="deskripsi" > Harga </label>
                <input id="deskripsi" type="text" className="w-full rounded-md" placeholder="isi harga produk" onChange={(e) => setData('harga', e.target.value)}>
                </input>
                <p className="text-red-700">{props.errorharga}</p>
                <div className="flex w-full px-2 py-1 gap-2 justify-center items-center">
                    <label htmlFor="gambar" > Gambar : </label>
                    <input id="gambar" type="file" className="file-input file-input-bordered file-input-info file-input-sm w-3/4" onChange={(e) => setData('gambar', e.target.files[0])}>
                    </input></div>
                <p className="text-red-700">{props.errorgambar}</p>
                <button type="submit" className="btn bg-teal-600 text-white hover:bg-teal-900 mb-3">Tambah Produk</button>
            </form>
        </ListFrame>     
    )
}