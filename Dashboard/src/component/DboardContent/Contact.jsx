import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContact, fetchContact } from "../../features/contactSlice";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function Contact() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.contact.service);

  const searchandle = async (event) => {
    let key = event.target.value;
    dispatch(SearchContact(key));
  };

  const DeleteContact = async (id) => {
    try {
      const del = await fetch(
        `http://localhost:7001/api/contact/deletecontact/${id}`,
        {
          method: "Delete",
        }
      );
      if (del.ok) {
        const result = await del.json();
        if (result) {
          alert("Deleted Successfully");
          window.location.reload();
        }
      } else {
        alert("Failed to delete");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div>
      <h1
        style={{
          position: "relative",
          left: "22%",
          top: "20px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Contact Us
      </h1>
      <span style={{ position: "relative", left: "700px" }}>
        <form>
          <input
            type="search"
            placeholder="Search"
            style={{ padding: "10px", width: "450px", textAlign: "right" }}
            onChange={searchandle}
          />
        </form>
      </span>
      <div>
        <div
          className="  rounded-lg border"
          style={{ width: "1000px", left: "23%", position: "relative" }}
        >
          <div style={{ overflow: "auto", maxHeight: "500px" }}>
            <table className="responsive-table w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">S.No.</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3" style={{ maxWidth: "300px" }}>
                    Email
                  </th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3 ">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {services?.map((item, index) => {
                  console.log(item);
                  return (
                    <tr
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 ">{item.date?.split("T")[0]}</td>
                      <td className="px-4 py-3 ">{item.name}</td>
                      <td className=" py-3 ">{item.email}</td>
                      <td className="px-4 py-3 ">{item.phone}</td>
                      <td className="px-4 py-3 ">{item.city}</td>
                      <td
                        className="px-4 py-3 "
                        style={{ display: "flex", gap: "10px" }}
                      >
                        <Link to={`/updatecontact/${item._id}`}>
                          <FaEye size={20} style={{ color: "blue" }} />
                        </Link>
                        <AiFillDelete
                          size={20}
                          className="icon"
                          style={{ color: "red" }}
                          onClick={() => DeleteContact(item._id)}
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
