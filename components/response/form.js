import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import TextInputField from "./textInputField";
import RadioButtonField from "./radioButtonField";

function Form() {
  const router = useRouter();
  const [response, setResponse] = useState({
    name: '',
    attend: true,
    phone: '',
    number: 1
  });

  const handleChange = (value, fieldName) => {
    response[fieldName] = value;
    setResponse({...response});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://bglmautam.com:3030/responses",
        response
      );
      router.push("/thanks");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <TextInputField label='Quý danh' fieldName='name' object={response} handleChange={handleChange}/>

      <RadioButtonField label='Tham dự' value={true} fieldName='attend' handleChange={handleChange}/>
      <RadioButtonField label='Không tham dự' value={false} fieldName='attend' handleChange={handleChange}/>

      <TextInputField label='Số lượng khách' fieldName='number' object={response} handleChange={handleChange}/>
      <TextInputField label='Điện thoại liên lạc' fieldName='phone' object={response} handleChange={handleChange}/>

      <button type="submit" className="text-white font-bold xl:text-[#544c48] w-full bg-amber-200 rounded h-10">
        GỬI
      </button>
    </form>
  );
}

export default Form;
