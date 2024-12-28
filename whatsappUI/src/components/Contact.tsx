export default function Contact() {
    return (
        <div className="container">
            <div className="bg-slate-500 p-3">
                <h1 className="text-xl  mb-2">Chat</h1>
                <div className="flex flex-row bg-slate-600 px-2 py-1 rounded-md justify-center">
                    <a href="" className="block "><i className="fi fi-rr-search"></i></a> 
                    <input className="px-2 py-1 w-full bg-transparent" type="text" placeholder="cari kontak" />
                </div>
            </div>
        </div>
    )
}