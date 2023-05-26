import React from "react";
import Logo from "../assets/Logo.png";

function Opener() {
    return(
        <>
            <div className="h-screen w-full bg-yellow flex flex-col justify-center items-center">
                {/* main logo */}
               <div id="main__logo" className="basis-9/12 flex flex-col"> 
                <div className="flex justify-center items-center basis-1/3">
                    <img src={Logo} alt="Logo" className="h-[160px] w-[160px]"></img>
                </div>
                <div className="basis-2/3 flex">
                    <h1 className="font-poppins text-h-xl font-bold">Makan</h1>
                    <h1 className="font-poppins text-h-xl font-bold text-white">Yuk</h1>
                    <h1 className="font-poppins text-h-xl font-bold">.</h1>
                </div>
                </div>
                {/* est */}
                <div id="est" className="font-bold text-h-md">est.2023</div>
            </div>
        </>
    )
}

export default Opener;