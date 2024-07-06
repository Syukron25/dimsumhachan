
export default function ListFrame(props) {

    return (
        <div className={`${props.togle ? "flex" : "hidden"} w-11/12 items-center justify-center`}>
            <div className="overflow-x-auto w-full md:w-5/6 p-2 m-2 border-teal-100 border-4 rounded-xl shadow-md">
                <p className="flex w-full font-bold p-2 bg-teal-100 text-l text-teal-800 items-center justify-center rounded-t-xl">{props.title}                
                </p>
                {props.children}
            </div>
        </div>
    )
}