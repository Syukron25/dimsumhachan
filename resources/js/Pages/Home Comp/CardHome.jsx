export default function CardHome(props) {
    return (
      <div className="flex flex-col w-5/6 md:w-96 h-fit bg-base-100 hover:bg-gray-100 hover:scale-105 rounded-xl shadow-lg">
        <div className="flex h-44 justify-center ">
          <img className="object-cover rounded-t-xl" src={`/img/${props.gambar}`} ></img>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <p className="text-xl font-black">{props.nama}</p>
          <p>{props.deskripsi} iujhkjhkj jhkhkj jhkhkj ugjgkj uikhgkjg iutgiugk ugjugkj</p>
          <div className="flex w-full  justify-end">
          <div className="flex w-1/2 justify-center bg-teal-500 rounded-full">
            <p className="p-2 font-extrabold text-white"> 
              {props.harga} 
            </p>
          </div></div>
        </div>
      </div>
    )}