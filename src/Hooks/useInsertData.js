
import baseUrl from '../API/baseURL'


// Post Data 
const usePostData = async (url,params) => {
  
    const res =await baseUrl.post(url,params)
  
  
    return res;
  
  
}

// Post Data with image

const usePostDataWithImage = async (url,params) => {
  
    const config={
        headers:{"Content-Type":"multipart/formdata"}
    }

    const res =await baseUrl.post(url,params,config)
    console.log(res, '  from user Insert Data')
  
  
    return res;
  
  
}

export  {usePostData,usePostDataWithImage}
