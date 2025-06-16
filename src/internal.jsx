import Fields from "./Fields.jsx"
function Internal({fromAmount,setFromAmount,toAmount,setToAmount,fromCurrency,setFromCurrency,toCurrency,setToCurrency,currencies,convert}) {
    const swap = () => {
        let x =fromCurrency
        fromCurrency =toCurrency
        toCurrency =x
        setFromCurrency(fromCurrency)
        setToCurrency(toCurrency)
        let y =fromAmount
        fromAmount =toAmount
        toAmount =y
        setFromAmount(fromAmount)
        setToAmount(toAmount)
    }
    return (
        <div className="flex flex-col items-center justify-center w-[80%] space-y-6 relative">
           <Fields fromAmount={fromAmount} setFromAmount={setFromAmount} fromCurrency={fromCurrency} setFromCurrency={setFromCurrency} currencies={currencies}/>
           <button className="m-4 border bg-[#ee7321f3]  text-white rounded absolute h-[40px] w-[50px] transform -translate-y-[40px]" onClick={swap}> ⇅</button>
           <Fields  toAmount={toAmount} setToAmount={setToAmount} toCurrency={toCurrency} setToCurrency={setToCurrency} currencies={currencies}/>
           <button className="m-4 border bg-[#ab23e0e3] text-white rounded w-[50%]" onClick={convert}>Convert {fromCurrency} to {toCurrency}</button>

           
           
 
        </div>
    )
}
export default Internal
