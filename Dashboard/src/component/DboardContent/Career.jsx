import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { SearchCareer, fetchCareer } from "../../features/careerSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function Career() {
  const dispatch = useDispatch();
  const metas = useSelector((state) => state.career.meta);
  console.log(metas);
  const HandleSearch = async (event) => {
    let key = event.target.value;
    dispatch(SearchCareer(key));
  };

  useEffect(() => {
    dispatch(fetchCareer());
  }, [dispatch]);

  const delCareer = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:7001/api/career/destroycareer/${id}`,
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
          top: "20px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Careers
      </h1>
      <span style={{ position: "relative", left: "700px" }}>
        <form>
          <input
            type="search"
            placeholder="Search"
            style={{
              padding: "10px",
              width: "450px",
              textAlign: "right",
              position: "relative",
              bottom: "20px",
            }}
            onChange={HandleSearch}
          />
        </form>
      </span>
      <div >
        <div
          className="col-12  rounded-lg border "
          style={{ width: "1000px", left: "23%", position: "relative" }}
        >
          <div  style={{ overflow: "auto", maxHeight: "500px" }}>
            <table
              className="responsive-table w-full"
            >
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3" style={{ width: "5%" }}>
                    S.No.
                  </th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Designation</th>
                  <th className="px-4 py-3">
                    Resume
                  </th>
                  <th className="px-4 py-3 float-right">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {metas?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    >
                      <td
                        className="px-4 py-3"
                        style={{ width: "5%", whiteSpace: "nowrap" }}
                      >
                        {index + 1}
                      </td>
                      <td
                        className="px-4 py-3  "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.date?.split("T")[0]}
                      </td>
                      <td
                        className="px-4 py-3 "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.name}
                      </td>
                      <td
                        className="px-4 py-3"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.email}
                      </td>
                      <td
                        className="px-4 py-3  "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.phone}
                      </td>
                      <td
                        className="px-4 py-3  "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.designation}
                      </td>
                      <td
                        className=" py-3  "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.resume}
                      </td>
                      <td
                        className="px-4 py-3 "
                        style={{
                          whiteSpace: "nowrap",
                          display: "flex",
                          gap: "10px",
                          float: "right",
                        }}
                      >
                        <Link to={`/updatecareer/${item._id}`}>
                          <FaEye size={20} style={{ color: "blue" }} />
                        </Link>
                        <AiFillDelete
                          size={20}
                          className="icon"
                          style={{ color: "red" }}
                          onClick={() => delCareer(item._id)}
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
