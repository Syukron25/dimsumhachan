export default function Card(props) {
    
    const iconList =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    const iconPlus = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    
    return (
        < li className="flex flex-col w-5/12 md:w-1/3 bg-white border-4 border-teal-100 rounded-xl shadow-sm">
            <div className="h-8 w-11/12 pt-1 px-2 rounded-br-full bg-teal-100">
                <p className="font-extrabold text-l text-teal-500 z-20" > {props.title} </p>
            </div>
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-row" >
                    <p className="text-7xl">{props.total} </p>
                    <p className="font-extrabold text-lg pt-10" > terdaftar </p>
                </div>
                <div className="flex flex-wrap p-2 gap-2" >
                    <button className="btn btn-sm bg-blue-200   hover:bg-blue-300" onClick={props.tombollist} > {iconList}List </button>
                    <button className="btn btn-sm bg-green-200  hover:bg-green-300" onClick={props.tambah}> {iconPlus}Add</button>
                </div>
            </div>
        </li>
    )
}
