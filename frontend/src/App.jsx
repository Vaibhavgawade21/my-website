import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


function App() {

  const [message,setMessage] = useState("");

  useEffect(()=>{

    axios.get("https://my-website-6l0u.onrender.com/")
    .then(res=>{
      setMessage(res.data.message);
    })
    .catch(err=>{
      console.log(err);
    })

  },[])


  return (
    <div className="container">

      <h1>
        Your Consultancy For Service
      </h1>

      <p>
        We provide professional consultancy services.
      </p>


      <h3>
        Backend Status:
      </h3>

      <p>
        {message}
      </p>


      <button>
        Contact Us
      </button>

    </div>
  )
}


export default App