
import { useState } from "react"
import Internal from "./internal.jsx"
import useCurrency from "./hooks/Usecurrency.jsx"
function App() {
    const [fromAmount, setFromAmount] = useState(0)
    const [toAmount, setToAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("EUR")
    const rates = useCurrency(fromCurrency)
    const currencies = Object.keys(rates)
    const convert=()=>{
       
        setToAmount( Number(fromAmount) * Number(rates[toCurrency]).toFixed(2))
        console.log(toAmount)
    }
   
 

    
   
 
  
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('https://media.istockphoto.com/id/1429063396/photo/abstract-background-consisting-of-packs-of-paper-dollars-3d-render.jpg?s=612x612&w=0&k=20&c=TVw51-l0oMKyEZ5R5s8T8lLX-DM8--nKm-FL_s7Ob00=')]">
      <div className=" bg-[#afb2cc8f] p-8 rounded-lg shadow-lg w-216 h-80 flex items-center justify-center ">
        <Internal fromAmount={fromAmount} setFromAmount={setFromAmount} toAmount={toAmount} setToAmount={setToAmount} fromCurrency={fromCurrency} setFromCurrency={setFromCurrency} toCurrency={toCurrency} setToCurrency={setToCurrency} currencies={currencies} convert={convert}/>
      </div>
    </div>
  )
}

export default App
