export default function WhatsappWidget () {
const iconWhatsapp =<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#25D366"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-7.86 4.5a7.34 7.34 0 0 0-6.46 10.82l.15.26L4.5 19.5l4.08-1.3a7.38 7.38 0 0 0 10.92-6.4c0-4.03-3.3-7.3-7.36-7.3zm0 1.16c3.41 0 6.19 2.76 6.19 6.15a6.17 6.17 0 0 1-9.37 5.27l-.23-.15-2.38.76.77-2.28a6.08 6.08 0 0 1-1.17-3.6 6.17 6.17 0 0 1 6.19-6.15zM9.66 8.47a.67.67 0 0 0-.48.23l-.14.15c-.2.23-.5.65-.5 1.34 0 .72.43 1.41.64 1.71l.14.2a7.26 7.26 0 0 0 3.04 2.65l.4.14c1.44.54 1.47.33 1.77.3.33-.03 1.07-.43 1.22-.85.15-.42.15-.78.1-.85-.02-.05-.08-.08-.15-.12l-1.12-.54a5.15 5.15 0 0 0-.3-.13c-.17-.06-.3-.1-.41.09-.12.18-.47.58-.57.7-.1.1-.18.13-.32.08l-.4-.18a4.64 4.64 0 0 1-2.13-1.98c-.1-.18-.01-.28.08-.37l.27-.31c.1-.1.12-.18.18-.3a.3.3 0 0 0 .01-.26l-.1-.23-.48-1.15c-.15-.36-.3-.3-.4-.3l-.35-.02z"/></svg>
    return(
    <a href="https://wa.me/6283806651825"  target="_blank"  rel="noopener noreferrer">
        <div className="flex flex-col fixed bottom-0 right-0 my-4 mx-1 p-2 scale-90 hover:scale-100 hover:font-bold justify-center items-center gap-1 bg-teal-100 rounded-2xl shadow-md">        
            <div>{iconWhatsapp}</div>
            <div>Chat kami</div>
        </div>
    </a>
    )
}