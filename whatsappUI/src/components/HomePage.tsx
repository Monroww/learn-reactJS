import SideBar from './Sidebar.tsx'
import Contact from './Contact.tsx'

function HomePage() {
    return (
        <>
            <div className="flex flex-row h-screen">
                <div className="flex-none w-16  bg-green-600 ">
                    <SideBar/>
                </div>
                <div className="flex-none w-72 bg-slate-200">
                    <Contact/>
                </div>
                <div className="flex-1 w-auto "></div>
            </div>
        </>
    )
}

export default HomePage