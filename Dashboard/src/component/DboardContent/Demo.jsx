import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { SearchQuote, fetchQuote } from "../../features/quoteslice";

export default function Enquiry() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quote.infos);

  const searchHandle = async (event) => {
    let key = event.target.value;
    dispatch(SearchQuote(key));
  };

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const DeleteQuote = async (id) => {
    try {
      const del = await fetch(`http://localhost:7001/api/admin/remove/${id}`, {
        method: "Delete",
      });
      if (del.ok) {
        const response = await del.json();
        if (response) {
          alert("User deleted successfully");
          window.location.reload();
        }
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1
        style={{
          position: "relative",
          left: "23%",
          top: "20px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Demo
      </h1>
      <span style={{ position: "relative", left: "700px" }}>
        <form>
          <input
            type="search"
            placeholder="Search"
            style={{ padding: "10px", width: "450px", textAlign: "right",position: "relative",bottom:"20px" }}
            onChange={searchHandle}
          />
        </form>
      </span>
      <div>
        <div
          className="rounded-lg border"
          style={{ width: "880px", left: "23%", position: "relative" }}
        >
          <div style={{ overflow: "auto", maxHeight: "500px" }}>
            <table className="responsive-table">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">S.No.</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3" style={{ maxWidth: "300px" }}>
                    Email
                  </th>
                  <th className="px-4 py-3">Mobile</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Requirement</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {data?.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <td className="px-4 py-3 ">{index + 1}</td>
                    <td className="px-4 py-3 ">{item.date?.split("T")[0]}</td>
                    <td className="px-4 py-3 ">{item.name}</td>
                    <td className="py-3 ">{item.email}</td>
                    <td className="px-4 py-3">{item.phone}</td>
                    <td className="px-4 py-3 ">{item.city}</td>
                    <td className="px-4 py-3 ">{item.requirement}</td>
                    <td
                      className="px-4 py-3"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <Link to={`/updatequote/${item._id}`}>
                        <FaEye size={20} style={{ color: "blue" }} />
                      </Link>
                      <AiFillDelete
                        size={20}
                        className="icon"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => DeleteQuote(item._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
