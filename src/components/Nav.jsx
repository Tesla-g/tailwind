import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegMoon, FaSun } from "react-icons/fa";
const Nav = () => {
  const [toggle, settoggle] = useState(false);
  const togglechange = () => {
    settoggle(!toggle);
  };

  return (
    <div className="flex items-center gap-4 p-2 dark:bg-black">
      <img
        className="w-[60px] cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
        alt=""
      />
      <div className="flex items-center w-full p-2 rounded bg-slate-200 ">
        <AiOutlineSearch />

        <input
          type="text"
          className="w-full p-1 bg-transparent outline-none font-poppins "
        />
      </div>
      <div className="p-4 rounded-full bg-slate-200" onClick={togglechange}>
        {toggle ? (
          <FaRegMoon className="w-5 h-5" />
        ) : (
          <FaSun className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default Nav;
