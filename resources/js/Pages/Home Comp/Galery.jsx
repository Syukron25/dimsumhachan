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
            <div id="galery" className="flex flex-col w-full items-center justify-center pt-16 pb-4">
                <p className="p-4 font-black text-teal-600" >Galery</p>
                <div className="flex flex-col md:flex-row w-3/4 p-1 m-1 gap-5 ">  

                    <div className="flex w-full flex-col gap-3 ">
                        {galery2.map((item, i) => <div key={i} className="p-2 bg-white text-center rounded-tl-3xl rounded-br-3xl border-4 border-gray-100  shadow-md hover:bg-gray-100 ">
                            <img className="rounded-tl-3xl rounded-br-3xl border-4 border-gray-100" src={`/img/${item.namafile}`}></img>
                            <p>{item.caption}</p></div>
                        )}
                    </div>
                    <div className="flex w-full flex-col gap-3 ">
                        {galery1.map((item, i) => <div key={i} className="p-2 bg-white text-center rounded-tl-3xl rounded-br-3xl border-4 border-gray-100  shadow-md hover:bg-gray-100 ">
                            <img className="rounded-tl-3xl rounded-br-3xl border-4 border-gray-100" key={i} src={`/img/${item.namafile}`}></img>
                            <p>{item.caption}</p></div>
                        )}
                    </div>
                    <div className="flex w-full flex-col gap-3">
                        {galery3.map((item, i) => <div key={i} className="p-2 bg-white text-center rounded-tl-3xl rounded-br-3xl border-4 border-gray-100  shadow-md hover:bg-gray-100 ">
                            <img className="rounded-tl-3xl rounded-br-3xl border-4 border-gray-100" key={i} src={`/img/${item.namafile}`}></img>
                            <p>{item.caption}</p></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}