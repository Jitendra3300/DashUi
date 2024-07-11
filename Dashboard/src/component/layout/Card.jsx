import React from "react";
import { AiOutlineForm, AiOutlineUsergroupAdd } from "react-icons/ai";
import {  FaRunning } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Card = () => {
  const dataa=useSelector((state)=>state.user.datas);
  const metas=useSelector((state)=>state.career.meta)
  const data=useSelector((state)=>state.quote.infos);
  const services=useSelector((state)=>state.contact.service)


  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      {/* dashboards cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
       <Link to="/userdetail">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <AiOutlineUsergroupAdd size={30} />
          {dataa.length}
          <div className="text-right">
            <p>User</p>
          </div>
        </div>
        </Link>
        <Link to="/career">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <FaRunning size={30} />
        {metas.length}
          <div className="text-right">
            <p>Career</p>
          </div>
        </div>
        </Link>
        <Link to="/enquire">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <AiOutlineForm size={30} />
        {data.length}
          <div className="text-right">
            <p>Demo</p>
          </div>
        </div>
        </Link>
        <Link to="/contact">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <TbDeviceLandlinePhone size={30} />
        {services.length}
          <div className="text-right">
            <p>Contact Us</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
