import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateQuote() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setMobile] = useState("");
    const [city, setCity] = useState("");
  const [requirement, setRequire] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getQuoteDetails = async () => {
    let quotedetail = await fetch(
      `http://localhost:7001/api/admin/getupdatequotes/${params.id}`
    );
    quotedetail = await quotedetail.json();
    console.log(quotedetail)
    setName(quotedetail.name);
    setEmail(quotedetail.email);
    setMobile(quotedetail.phone);
    setCity(quotedetail.city);
    setRequire(quotedetail.requirement);
  };

  const updateitem = async () => {
    const datainfo = {
        name,
        email,
        phone,
        city,
      requirement
    };
    console.log(datainfo);
    let updatinfo = await fetch(
      `http://localhost:7001/api/admin/updatequotes/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify(datainfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    updatinfo = await updatinfo.json();
    console.log(updatinfo);
    navigate("/enquire");
  };

  useEffect(() => {
    getQuoteDetails();
  }, []);

  return (
    <div className="flex items-center justify-center border ">
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
        <div>
          <div className="ml-10 ">
            <label>Name:</label>
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
            <label>Email:</label>
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
            <label>Mobile:</label>
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="xxx-xxx-xxxx"
              value={phone}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              className="updtbtn"
              style={{ marginLeft: "65px" }}
            />

            <br />
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="updtbtn"
              style={{ marginLeft: "85px" }}
            />
            <br />
            <label style={{ display: "flex", alignItems: "center" }}>
              <span> Requirement</span>

              <input
                type="text"
                value={requirement}
                onChange={(e) => {
                  setRequire(e.target.value);
                }}
                className="updtbtn"
                style={{ marginLeft: "25px" }}
              />
            </label>
            <br />
            <button
              onClick={updateitem}
              className=" w-full max-w-xs  bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-4 py-3 font-semibold "
              style={{ position: "absolute", bottom: "10%", right: "60px" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
