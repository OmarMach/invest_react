import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });
  return (
    <>
      <Header />
      <UserInputs setInvestment={setInvestment} investment={investment} />
      <p>{investment.initialInvestment}</p>
      <p>{investment.annualInvestment}</p>
      <p>{investment.expectedReturn}</p>
      <p>{investment.duration}</p>
      <Results investment={investment} />
    </>
  );
}

export default App;
