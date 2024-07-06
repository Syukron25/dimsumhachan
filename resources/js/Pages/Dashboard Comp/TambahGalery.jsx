import { useForm } from "@inertiajs/react"
import ListFrame from "./ListFrame"


export default function TambahGalery (props){

    const { data, setData, post, reset } = useForm(
        {
            namafile: "",
            caption: ""
        }
    )

    function submit(e) {
        e.preventDefault()
        post('/galery', {
            onSuccess: () => {
                reset('namafile', 'caption'),
                    e.target.reset()
            }
        })
    }

    return(
        <ListFrame title="Tambah Galery" togle={props.togle}>
            <form onSubmit={submit} className="flex flex-col gap-1 items-center justify-center ">
                <label htmlFor="pilihgambar" className="pt-2" >Pilih Gambar</label>
                <input id="pilihgambar" type="file" className="file-input file-input-bordered file-input-info w-11/12 " onChange={(e) => setData('namafile', e.target.files[0])}></input>
                <p className="text-red-700">{props.errorsgambar}</p>
                <label htmlFor="caption" className="pt-2">Caption</label>
                <input id="caption" type="text" className="w-11/12 rounded-md" placeholder="isi caption" onChange={(e) => setData('caption', e.target.value)}></input>
                <p className="text-red-700">{props.errorscaption}</p>
                <button className="btn btn-primary" type="submit">Tambah Produk</button>
            </form>
        </ListFrame>
    )
}