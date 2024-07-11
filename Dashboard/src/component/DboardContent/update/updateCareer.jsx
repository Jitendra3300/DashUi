import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCareer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesign] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getCareerDetails = async () => {
    let detail = await fetch(
      `http://localhost:7001/api/career/getupdatecareer/${params.id}`
    );
    detail = await detail.json();
    setName(detail.name);
    setEmail(detail.email);
    setMobile(detail.phone);
    setDesign(detail.designation);
  };
  const updatelist = async () => {
    const data = {
      name,
      email,
      phone,
    designation
    };
    console.log(data);
    let updat = await fetch(
      `http://localhost:7001/api/career/updatecareer/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    updat = await updat.json();
    console.log(updat);
    navigate("/career");
  };
  useEffect(() => {
    getCareerDetails();
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl z-[99999] overflow-hidden"
        style={{
          position: "relative",
          left: "130px",
          bottom: "20px",
          width: "78%",
          height: "700px",
        }}
      >
        <div >
          <div className="ml-10 ">
            <label>
              Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="updtbtn "
                style={{ marginLeft: "70px" }}
              />
            
            <br />
            <label>
              Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="updtbtn "
                style={{ marginLeft: "75px" }}
              />
           
            <br />
            <label>
              Mobile:
              </label>
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="xxx-xxx-xxxx"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                className="updtbtn"
                style={{ marginLeft: "65px" }}
              />
            
            <br />

            <label style={{ display: "flex", alignItems: "center"}}>
             <span > Designation</span>
            
            <input
              type="text"
              value={designation}
              onChange={(e) => {
                setDesign(e.target.value);
              }}
              className="updtbtn"
              style={{marginLeft:"30px"}}
            />
            </label>
            <br />
            <button
              onClick={updatelist}
              className=" w-full max-w-xs  bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-4 py-3 font-semibold "
              style={{position:"absolute",bottom:"10%",right:"60px"}}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}