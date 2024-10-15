import { useState } from "react";
import logo from "./assets/react.svg"; // Use './' to denote the current directory
import "./App.css";

function App() {
  const [isMenuOpen, setIsManuOpen] = useState(false);  

  return (
    <div
      className="w-full min-h-svh max-h-auto absolute 
    bg-gradient-to-r from-blue-400 to-emerald-500"
    >
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md ">
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-8
          hover:scale-110 transition-all"
          />
        </a>
        <ul
          className="hidden xl:flex items-center gap-12
        font-semibold text-base"
        >
          <li
            className="p-3 hover:bg-sky-400
          hover:text-white rounded-md transition-all"
          >
            home
          </li>
          <li
            className="p-3 hover:bg-sky-400
          hover:text-white rounded-md transition-all"
          >
            products
          </li>
          <li
            className="p-3 hover:bg-sky-400
          hover:text-white rounded-md transition-all"
          >
            explore
          </li>
          <li
            className="p-3 hover:bg-sky-400
          hover:text-white rounded-md transition-all"
          >
            contact
          </li>
        </ul>

        <div
          className="relative hidden md:flex itmes-center 
        justify-center gap-3"
        >
          <i
            className="bx bx-search absolute left-3 text-2xl
          text-gray-500 my-1"
          ></i>
          <input
            type="text"
            placeholder="search"
            className="py-2 pl-10 rounded-xl 
          border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>
        <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
        onClick={()=>{
          console.log(isMenuOpen);
          setIsManuOpen(!isMenuOpen);
        }}
        ></i>
        <div className={`absolute xl:hidden top-24 right-0 w-72 bg-white flex flex-col
          items-center font-semibold text-lg transition-all border-4 border-blue-300 rounded-xl
          ${isMenuOpen?"opacity-100" : "opacity-0"}`}
          >
            <li className="list-none w-full text-center p-4
            hover:bg-sky-400 bg-gray-100 hover:text-white rounded-t-xl border-2">home</li>
            <li className="list-none w-full text-center p-4 
            hover:bg-sky-400  hover:text-white border-2">product</li>
            <li className="list-none w-full text-center p-4
            hover:bg-sky-400 bg-gray-100 hover:text-white border-2">explore</li>
            <li className="list-none w-full text-center p-4
            hover:bg-sky-400 hover:text-white border-2">contact</li>
            <li className="list-none w-full text-center p-4
            hover:bg-sky-400 bg-gray-100 hover:text-white rounded-b-xl border-2">system</li>
          </div>
      </header>

    </div>

  );
}

export default App;
