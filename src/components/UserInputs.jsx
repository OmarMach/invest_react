import UserInput from "./UserInput";

export default function UserInputs() {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput label={"Initial investment"} onChange={(e) => {}} />
        <UserInput label={"Annual investment"} onChange={(e) => {}} />
      </div>
      <br />
      <div className="input-group">
        <UserInput label={"Expected return"} onChange={(e) => {}} />
        <UserInput label={"Duration"} onChange={(e) => {}} />
      </div>
    </div>
  );
}
