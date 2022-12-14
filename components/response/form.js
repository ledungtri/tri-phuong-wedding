import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "./inputField";
import RadioButtonField from "./radioButtonField";
import Airtable from "airtable";

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
    const base = new Airtable().base('appZHozY0BmskVnvS');

    response.attend = Boolean(response.attend);
    response.number = Number(response.number);

    await base('Responses').create([{ "fields": response }], (err) => {
      if (err) {
        console.error(err);
        return;
      }
      router.push("/thank_you");
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <InputField label='Quý danh' fieldName='name' object={response} handleChange={handleChange}/>

      <div className='flex justify-between'>
        <RadioButtonField label='Tham dự' value={true} fieldName='attend' handleChange={handleChange}/>
        <RadioButtonField label='Không tham dự' value={false} fieldName='attend' handleChange={handleChange}/>
      </div>

      <InputField label='Số lượng khách' fieldName='number' object={response} type='number' handleChange={handleChange}/>
      <InputField label='Điện thoại liên lạc' fieldName='phone' object={response} handleChange={handleChange}/>

      <button type="submit" className="font-bold text-white w-full bg-navy/80 rounded h-10 mt-2">
        GỬI
      </button>
    </form>
  );
}

export default Form;
