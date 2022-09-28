export default function RadioButtonField({ label, value, fieldName, handleChange }) {
  return (
    <div className="flex mb-4 items-center">
      <label className="font-semibold mb-1 mr-4" htmlFor={`${fieldName}-${value}`}>{label}</label>
      <input
        required
        type='radio'
        id={`${fieldName}-${value}`}
        name={fieldName}
        value={value}
        onChange={(e) => handleChange(e.target.value, fieldName)}
        className="xl:border-[#f0e0d8] xl:border xl:border-solid rounded py-1 px-2 text-black"
      />
    </div>
  );
}