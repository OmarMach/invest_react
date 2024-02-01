import UserInput from "./UserInput";

export default function UserInputs({ setInvestment, investment }) {
  function handleInitialInvestment(event) {
    setInvestment((prev) => ({
      ...prev,
      initialInvestment: event.target.value,
    }));
  }
  function handleAnnualInvestment(event) {
    setInvestment((prev) => ({
      ...prev,
      annualInvestment: event.target.value,
    }));
  }
  function handleExpectedReturn(event) {
    setInvestment((prev) => ({
      ...prev,
      expectedReturn: event.target.value,
    }));
  }
  function handleDuration(event) {
    setInvestment((prev) => ({
      ...prev,
      duration: event.target.value,
    }));
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          label={"Initial investment"}
          onChange={(event) => {
            handleInitialInvestment(event);
          }}
          value={investment.initialInvestment}
        />
        <UserInput
          label={"Annual investment"}
          onChange={(event) => {
            handleAnnualInvestment(event);
          }}
          value={investment.annualInvestment}
        />
      </div>
      <br />
      <div className="input-group">
        <UserInput
          label={"Expected return"}
          onChange={(event) => {
            handleExpectedReturn(event);
          }}
          value={investment.expectedReturn}
        />
        <UserInput
          label={"Duration"}
          onChange={(event) => {
            handleDuration(event);
          }}
          value={investment.duration}
        />
      </div>
    </div>
  );
}
