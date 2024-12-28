function SideBar() {
    return (
        <div className="flex flex-col h-full justify-between px-2 pt-3  text-3xl  text-center">
            <div className="">
                <ul className="flex flex-col gap-3">
                    <li className="bg-green-300 p-1 rounded-full"><a href="#"><i className="fi fi-rr-comment-alt"></i></a></li>
                    <li><a href="#"><i className="fi fi-rr-add-image"></i></a></li>
                    <li><a href="#"><i className="fi fi-rr-users-medical"></i></a></li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-3">
                    <li><a href="#"><i className="fi fi-rr-settings"></i></a></li>
                    <li><a href="#"><i className="fi fi-rr-user"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar