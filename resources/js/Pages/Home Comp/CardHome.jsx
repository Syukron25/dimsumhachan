export default function CardHome(props) {
    return (
      <div className="flex flex-col w-11/12 p-2 border-4 border-gray-200 md:w-96 bg-base-100 hover:bg-gray-100  rounded-3xl shadow-lg">
        <div className="flex h-80 justify-center ">
          <img className="object-cover rounded-t-3xl border-4 border-gray-200 " src={`/img/${props.gambar}`} ></img>
        </div>
        <div className="flex flex-col p-2 gap-1">
          <p className="text-l font-bold w-full underline">{props.nama}</p>
          <p className="h-12 text-sm">{props.deskripsi} </p>
          <div className="flex w-full  justify-end">
          <div className="flex px-2 justify-center bg-teal-600 rounded-full">
            <p className="p-2 font-extrabold text-white"> 
              {props.harga} 
            </p>
          </div></div>
        </div>
      </div>
    )}