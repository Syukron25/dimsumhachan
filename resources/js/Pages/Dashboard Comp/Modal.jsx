export default function Modal(props){
    const iconUpdate =<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M2.5 2v6h6M21.5 22v-6h-6"/><path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2"/></svg>
    const iconClose =<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>

    return(
        <dialog className={`modal ${props.modalbuka ? "modal-open" : ""}`} 	>
                <div className="modal-box ">
                    <form className="flex flex-col w-full justify-center items-center gap-1">
                        <h3 className="w-full p-1 bg-teal-400 font-bold text-white text-lg text-center rounded-md">{props.judul}</h3>
                        {props.children}
                        <div className="flex mt-1 gap-2">
                            <button className="btn bg-teal-500 text-white hover:bg-teal-800 mb-3" onClick={props.update}> {iconUpdate} Update</button>
                            <button className="btn bg-gray-500 hover:bg-gray-700 text-white" type="reset" onClick={props.close}> {iconClose} Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
    )
}