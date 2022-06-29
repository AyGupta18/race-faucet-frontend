import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import logo from "./assets/logo.png";
import { useState } from "react";
import { Rings } from "react-loader-spinner";
import Footer from "./components/Footer";

const firebaseConfig = {
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

function App() {
  const [address, setAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  // const [isRequestProcessed, setisRequestProcessed] = useState();

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  async function sendRequest(beneficiary, type, mobileOS) {
    const newRequest = {
      beneficiary,
      status: "Pending",
      type,
    };

    if (mobileOS) {
      newRequest.mobileOS = mobileOS;
    }

    setIsProcessing(true);
    const ref = await db.ref(`testnet/requests`).push(newRequest);
    setIsProcessing(false);
    setAddress("");

    return ref.key;
  }

  return (
    <div className="bg-[#112A40] h-full text-white min-h-screen flex flex-col justify-between">
      <div className="my-4 mx-8">
        <div>
          <img src={logo} alt="Race logo" />
        </div>
      </div>

      <div className="w-1/2 py-16 m-auto bg-gradient-to-r  from-[#063762] to-[#368BCA] rounded-xl flex items-center justify-between shadow-lg">
        <div className="w-full flex justify-center items-center">
          <input
            className="w-8/12 p-2 mx-2 border-2 border-black rounded-md"
            type="text"
            name="address"
            value={address}
            placeholder="Address"
            onChange={handleAddress}
          />
          <button
            className="bg-yellow-600"
            onClick={() => sendRequest(address, "Faucet", null)}
            disabled={isProcessing}
          >
            Get tokens
          </button>
          {isProcessing ? (
            <Rings color="#00BFFF" height={80} width={80} />
          ) : null}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
