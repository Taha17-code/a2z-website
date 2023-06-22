import React ,{useEffect, useState} from 'react'

import avatar from'../../assets/Images/AddImg.png'
import { useSelector,useDispatch } from 'react-redux'
import { createCategory } from '../../Redux/Actions/categoryAction'
import { Comet, Ellipsis, Ring, Ripple } from 'react-load-animations';


import Notification from '../../custom_hooks/useNotification'



const AdminAddCatgeHook = () => {

    const dispatch=useDispatch();
    const [imgs,setImage]=useState(avatar)
    const [catgName,setCatgName]=useState('')
    const [selectedFile,setselectedFile]=useState('')
    
    const [loadingS,setloading]=useState('')
    const [isPressed,setisPressed]=useState('')
    const selector=useSelector(state=>state.loading)
    
    
      //to get state from redux
      const res=useSelector(state=>state.allCategory.category); 
      
    
    
    // --------- Change Categ Name ----------------------

    const ChangeCatgName=(e)=>{
        setCatgName(e.target.value)
    }
    
    // when an image changes save it
      const onImageChange=(event)=>{
    
        if(event.target.files && event.target.files[0]){
           setImage(URL.createObjectURL(event.target.files[0]))
    
           setselectedFile(event.target.files[0])
        }
    
      }
    
    
    
      // save data to the Database
      const handleSubmit= async (event)=>{
        event.preventDefault();
        const formdata=new FormData();
        //append((based on back-end key name),value name)
        formdata.append('name',catgName)
        formdata.append('image',selectedFile)
    
        if(catgName==="" || selectedFile===null){
         return  Notification('أكمل البيانات','warn' )
    
        }
        setloading(true)
        setisPressed(true)
        console.log(loadingS)
        await dispatch(createCategory(formdata))
        setloading(false)
        console.log(loadingS)
    
       
       
      }
    
      // =======  on Effect loading ==================
    
      useEffect(()=>{
       if(loadingS===false){
        setCatgName('')
        setImage(avatar)
        setselectedFile(null)
        console.log('loading Successfully')
        setisPressed(false)
        setloading(true)
        
        
        // if(loadingS===true || isPressed===false){
        //   if(res.status===201){
        //     SuccessNotify('تمت الإضافة')
        //   }
        //   else{
        //     ErrorNotify(' فيه مشكلة حاول مرة ثانيه ')
        //   }
        // }
        
       
        // console.log(loadingS)
        // console.log(isPressed)
       }
    
       
      },[loadingS])
    
    
      useEffect(()=>{
      
         
         
         
         if(loadingS===true && isPressed===false){
         
           if(res.status===201){
             Notification('تمت الإضافة','success')
           }
           else{
             Notification(' فيه مشكلة حاول مرة ثانيه ','error')
           }
         }
         
        
         console.log(loadingS)
         console.log(isPressed)
        },[isPressed])
    
      
    
    return [imgs,catgName,ChangeCatgName,handleSubmit,onImageChange,selector,Ellipsis]

}

export default AdminAddCatgeHook
