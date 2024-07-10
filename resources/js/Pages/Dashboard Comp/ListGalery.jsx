import { router } from "@inertiajs/react"
import ListFrame from "./ListFrame"

export default function ListGalery(props) {
  const icontrash = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  const iconEdit =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
  const galery = props.galerylist

  function hapusGalery(id, event) {
    event.preventDefault()
    router.delete(`/galery/${id}`, {
      onBefore:() => confirm("yakin untuk di hapus ?"),
      preserveScroll: true
    }
    )
  }

  const Galerylist = galery.map((item, i) =>
    <tr className="hover" key={i}>
      <td> {i + 1} </td>
      <td><img className="h-16" src={`img/${item.namafile}`}></img></td>
      <td>{item.caption}</td>
      <td className="flex flex-col gap-1">
        <button className="btn btn-sm btn-error" onClick={(e) => hapusGalery(item.id, e)}>{icontrash}</button>
        <button className="btn btn-sm btn-warning" onClick={() => props.bukamodal(i)} >{iconEdit}</button></td>
    </tr>
  )

  return (

    <ListFrame title="List Galery" togle={props.togle}>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>Caption</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Galerylist}
        </tbody>
      </table>
    </ListFrame>
    
  )
}