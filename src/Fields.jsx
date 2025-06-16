import {useId} from "react"
function Fields({fromAmount,setFromAmount,toAmount,setToAmount,fromCurrency,setFromCurrency,toCurrency,setToCurrency,currencies}) {
    let z
    if(fromAmount){
        z= 'from'

    }else{
        z= 'to'
    }
   
    const inputid = useId()
    const selectid = useId()
    return (
        <div className="flex items-center justify-center bg-[#e7dada98] rounded w-[100%] ">
            <label htmlFor={selectid} className="m-4"> {z}</label>
            <select name="" id={selectid} value={fromCurrency || toCurrency} onChange={(e)=>{fromCurrency ? setFromCurrency(e.target.value) : setToCurrency(e.target.value)}}>
                {currencies.map((currency)=>{
                    return <option key={currency} value={currency}>{currency}</option>
                })}
            </select>   
            <input type="number" value={fromAmount || toAmount} className="m-4 border bg-[#ffffffdc] rounded"  onChange={(e)=>{if(setFromAmount){setFromAmount(e.target.value)}}} placeholder="Enter amount" id={inputid}/>
        </div>
    )
}
export default Fields
