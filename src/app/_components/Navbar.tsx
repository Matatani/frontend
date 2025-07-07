import React from "react";

const NavBar: React.FC = () => {
    return(
        <nav className={"w-full bg-[#F7F6F1] shadow-sm sticky top-0 z-100 font-nunito"}>
            <div className={"mx-auto flex items-center justify-between py-6 px-6"}>
                <div className={"flex items-center gap-6"}>
                    <a className={"text-[1.65rem] font-bold "}>Matatani</a>
                    <ul className={"flex gap-6 font-inter"}>
                        <li><a>Upload</a></li>
                        <li><a>Disease Library</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className={"flex items-center px-3"}>
                    <button>Account</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;