import {BiLogOut} from "react-icons/bi"
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
      <div className="flex items-center  pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
        <img
          className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          alt="Avatar"
        />
        <span className="hidden md:block">ADMIN</span>
      </div>
      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
        
<Link to="https://www.deepnapsoftech.com/"><span style={{marginInlineStart:"900px",fontSize:"18px",display:"flex", gap:"5px"}}>Logout<BiLogOut size={25}/></span></Link>
      </div>
    </div>
  );
};

export default Header;
