export default function TextInputField({ label, fieldName, object, handleChange }) {
  return (
    <div className="flex flex-col mb-4 items-start">
      <label className="font-semibold mb-1">{label}</label>
      <input
        required
        name={fieldName}
        value={object[fieldName]}
        onChange={(e) => handleChange(e.target.value, fieldName)}
        className="xl:border-[#f0e0d8] xl:border xl:border-solid rounded w-full py-1 px-2 text-black"
      />
    </div>
  );
}