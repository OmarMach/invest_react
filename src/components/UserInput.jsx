export default function UserInput({ label, onChange, value, min = 0 }) {
  return (
    <div>
      <label>{label}</label>
      <input onChange={onChange} type="number" defaultValue={value} min={min} />
    </div>
  );
}
