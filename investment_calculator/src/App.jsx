import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment";
import Result from "./components/Result";

function App() {


  const [investment, setInvesment] = useState({
    initialInvestment: 12000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 2,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInvesment((prevInvestment) => {
      return {
        ...prevInvestment,
        [name]: Number(value),
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput onChange={handleChange} userInput= {investment} />
      <Result userInput={investment} />
    </main>
  )
}

export default App
