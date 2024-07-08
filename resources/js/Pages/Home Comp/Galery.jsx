export default function Galery(props) {

    const galerylist = props.galerylist
    const galery1 = []
    const galery2 = []
    const galery3 = []

    galerylist.map((item) => {
        if (galery2.length > galery3.length) { galery3.push(item) } else if (galery1.length > galery2.length) { galery2.push(item) } else { galery1.push(item) }
    })

    return (
        <>
            <div id="galery" className="flex flex-col w-full items-center justify-center pt-16">
                <p className="p-4 font-black" >Galery</p>
                <div className="flex flex-row w-11/12 gap-3 ">  

                    <div className="flex w-full flex-col gap-3 ">
                        {galery2.map((item, i) => <div key={i} className="p-2 bg-white text-center rounded-xl hover:scale-125 hover:shadow-md hover:bg-gray-100">
                            <img src={`/img/${item.namafile}`}></img>
                            <p>{item.caption}</p></div>
                        )}
                    </div>
                    <div className="flex w-full flex-col gap-3 ">
                        {galery1.map((item, i) => <div key={i} className="p-2 bg-white text-center rounded-xl hover:scale-125 hover:shadow-md hover:bg-gray-100">
                            <img key={i} src={`/static/${item.namafile}`}></img>
                            <p>{item.caption}</p></div>
                        )}
                    </div>
                    <div className="flex w-full flex-col gap-3">
                        {galery3.map((item, i) => <div key={i} className="p-2 bg-white text-center rounded-xl hover:scale-125 hover:shadow-md hover:bg-gray-100">
                            <img key={i} src={`/static/${item.namafile}`}></img>
                            <p>{item.caption}</p></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}