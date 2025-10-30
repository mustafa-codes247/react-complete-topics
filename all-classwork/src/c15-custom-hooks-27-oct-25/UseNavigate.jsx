import { useNavigate } from "react-router-dom";


const UseNavigate = () => {
    const navigate =useNavigate();

    const soap=()=>{
        navigate("/c13handmadesoap")
    }
  return (
    <div className="flex justify-center">
        <button  onClick={soap} className="text-2xl bg-red-400 ">
          navigate to handmade soap website</button>
    </div>
  )
}

export default UseNavigate
