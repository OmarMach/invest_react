export default function UserInput({ label, onChange, value }) {
  return (
    <div>
      <label>{label}</label>
      <input onChange={onChange} type="number" defaultValue={value} />
    </div>
  );
}
