import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


// create a Notification props
const Notification=(message,type)=>{
    if(type==='warn'){
      toast.warn(message,{position: "top-center",
      autoClose: 1000,
      theme: "light",})
    }

   else if(type==='success'){
      toast.success(message,{position: "top-center",
      autoClose: 1000,
      theme: "light",})
    }
    else{
      toast.error(message,{position: "top-center",
      autoClose: 1000,
      theme: "light",})
    }
  }


  export default Notification