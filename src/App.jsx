import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <>
      <Header />
      <UserInputs setInvestment={setInvestment} investment={investment} />
      {investment.duration > 1 ? <Results investment={investment} /> : <p className="center"> The duration needs to be Greated than 1 year.</p>}
    </>
  );
}

export default App;
