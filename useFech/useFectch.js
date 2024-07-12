import { useEffect, useState } from "react"

const localCache={


}

export const useFectch = (url) => {


  const [state, setstate] = useState({
    data:null,
    isloading:true,
    hasError:false,
    error:null
  })

  useEffect(() => {
    getFetch();
  }, [url])

  const setIsloading=()=>{

    setstate({
      data:null,
      isloading:true,
      hasError:false,
      error:null
    })
  }
  
 const getFetch = async()=>{

  if(localCache[url]){
    console.log('usando cache')
    setstate({
      data:localCache[url],
      isloading:false,
      hasError:false,
      error:null
    })
   return
}
  setIsloading()
   const resp = await fetch(url);
   await new Promise(resolve => setTimeout(resolve,1500));
   if(!resp.ok){
    setstate({
      data:null,
      isloading:false,
      error:{
        code:resp.status,
        message:resp.statusText
      }
    })
    return;
   }
   const data = await resp.json();
 setstate({
  data:data,
  isloading:false,
  haserror:false,
  error:null
 })
 localCache[url]=data;
 }
  

 return{

  data:state.data,
  isloading:state.isloading,
  haserror:state.hasError,
  error:state.error
 }


}
