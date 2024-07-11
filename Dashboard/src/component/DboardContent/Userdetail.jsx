import { useEffect } from "react";
import { fetchUser, searchUser } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Userdetail() {
  const dispatch = useDispatch();
  const dataa=useSelector((state)=>state.user.datas)



  const handleSearch = async (event) => {
    let key = event.target.value;
dispatch(searchUser(key))
  };

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  const delUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:7001/api/auth/cutinfo/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const result = await response.json();
        if (result) {
          alert("User deleted successfully");
          window.location.reload();
        }
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <h1
        style={{
          position: "relative",
          left: "22%",
          top:"20px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        List of Registered Users
        
      </h1>
      <span style={{position:"relative",left:"700px"}}><form><input type="search"  placeholder="Search" style={{padding:"10px",width:"450px",textAlign:"right" ,position: "relative",bottom:"20px"}} 
      onChange={handleSearch}/></form></span>
      <div >
        <div className="rounded-lg border"
                  style={{ width: "1000px", left: "23%", position: "relative" }}
                  >
          <div  style={{ overflow: "auto", maxHeight: "500px" }}>
            <table  className="responsive-table w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">S.No.</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3" style={{ maxWidth: "300px" }}>Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {dataa?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3  ">{item.date?.split("T")[0]}</td>
                      <td className="px-4 py-3  ">{item.name}</td>
                      <td className=" py-3  ">{item.email}</td>
                      <td className="px-4 py-3  ">{item.phone}</td>

                      <td
                        className="px-4 py-3 "
                        style={{ display: "flex", gap: "10px" }}
                      >
                        <Link to={`/updateuser/${item._id}`}>
                          <FaEye size={20} style={{color:"blue"}}/>
                        </Link>
                        <AiFillDelete
                          size={20}
                          className="icon"
                          style={{color:"red"}}
                          onClick={() => delUser(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
                {/* Repeat similar structure for other table rows */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
