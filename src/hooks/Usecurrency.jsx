import { useEffect,useState } from "react"

export default function useCurrency(fromCurrency){
    const [data, setData] = useState({})
    useEffect(()=>{
       
    fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${fromCurrency}`).then(res=>res.json()).then(res=>{
            console.log(res.conversion_rates)
            setData(res.conversion_rates)
        }).catch(err=>console.log(err))
        
     
      
    },[fromCurrency])
    return data

}
