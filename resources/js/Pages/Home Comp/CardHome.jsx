export default function CardHome(props) {
    return (
      <div className="flex flex-col w-5/6 md:w-96 scale-95 bg-base-100 hover:bg-gray-100 hover:scale-100 rounded-xl shadow-lg">
        <div className="flex h-80 justify-center ">
          <img className="object-cover rounded-t-xl" src={`/img/${props.gambar}`} ></img>
        </div>
        <div className="flex flex-col p-2 gap-1">
          <p className="text-l font-bold">{props.nama}</p>
          <p className="h-12 text-sm">{props.deskripsi} </p>
          <div className="flex w-full  justify-end">
          <div className="flex w-1/2 justify-center bg-teal-600 rounded-full">
            <p className="p-2 font-extrabold text-white"> 
              {props.harga} 
            </p>
          </div></div>
        </div>
      </div>
    )}