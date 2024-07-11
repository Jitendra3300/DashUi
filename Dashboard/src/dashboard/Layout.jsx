import React from "react";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";
import Card from "../component/layout/Card";
import { Route, Routes } from "react-router-dom";
import Userdetail from "../component/DboardContent/Userdetail";
import Career from "../component/DboardContent/Career";
import Demo from "../component/DboardContent/Demo";
import Contact from "../component/DboardContent/Contact";
import UpdateUser from "../component/DboardContent/update/updateUser";
import UpdateQuote from "../component/DboardContent/update/updateQuotes";
import UpdateCareer from "../component/DboardContent/update/updateCareer";
import UpdateContact from "../component/DboardContent/update/updateContact";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <Header />
      <div className="col-12">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="overflow-x-hidden">
          <Card />
          <div className="flex items-center">

          </div>
          <Routes>
            <Route exact path="/userdetail" element={<Userdetail />} />
            <Route exact path="/career" element={<Career />} />
            <Route exact path="/enquire" element={<Demo />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/updateuser/:id" element={<UpdateUser />} />
            <Route exact path="/updatequote/:id" element={<UpdateQuote />} />
            <Route exact path="/updatecareer/:id" element={<UpdateCareer />} />
            <Route exact path="/updatecontact/:id" element={<UpdateContact/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
