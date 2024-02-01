import UserInput from "./UserInput";

export default function UserInputs({ onChange, investment }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput label={"Initial investment"} onChange={(event) => onChange(event.target.value, "initialInvestment")} value={investment.initialInvestment} />
        <UserInput label={"Annual investment"} onChange={(event) => onChange(event.target.value, "annualInvestment")} value={investment.annualInvestment} />
      </div>
      <br />
      <div className="input-group">
        <UserInput label={"Expected return"} onChange={(event) => onChange(event.target.value, "expectedReturn")} value={investment.expectedReturn} />
        <UserInput label={"Duration"} onChange={(event) => onChange(event.target.value, "duration")} value={investment.duration} min={2} />
      </div>
    </div>
  );
}
