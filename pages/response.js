import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Response() {
  const router = useRouter()
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [attending, setAttending] = useState();
  const [guest, setGuest] = useState('');

  const handleAttending = (e) => {
      let valueAttend = e.target.value 
      if (valueAttend === "true") return setAttending(true);
      return setAttending(false)
  }

  const handleGoToMap = async (e) => {
    e.preventDefault()
    const newUser = {
      name,
      phone,
      attend: attending,  
      number: [guest].length,
    }
    try {
      const res = await axios.post("http://bglmautam.com:3030/responses", newUser)
      console.log(res)
      router.push('/thanks')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='h-screen'>
      <div className="flex flex-col items-start px-4 h-full justify-evenly text-amber-200 m-auto">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-2xl font-bold">Thứ Hai, Ngày 1 Tháng 12</h1>
          <h1 className="mt-2 text-2xl font-bold">Vào Lúc 19:00 PM</h1>
          <h1 className="mt-2 text-2xl font-bold">Nhà Hàng Crystal Palace</h1>
        </div>
        <div className="w-full">
          <form className="flex flex-col" onSubmit={handleGoToMap}>
            <div className="flex flex-col mb-4 items-start">
              <label className="font-semibold mb-1">Name *</label>
              <input required onChange={e => setName(e.target.value)} className="rounded w-full py-1 px-2 text-black" placeholder="Your name..." />
            </div>
            <div className="flex flex-col mb-4 items-start">
              <label className="font-semibold mb-1">Phone *</label>
              <input required onChange={e => setPhone(e.target.value)} className="rounded w-full py-1 px-2 text-black" placeholder="Phone number..." />
            </div>
            <div className="flex flex-col mb-4 items-start">
              <label className="font-semibold mb-1">Will you be attending? *</label>
              <select onChange={e => handleAttending(e)} className="w-[50%] text-black h-8 rounded px-1" id="attending" name="attending">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="flex flex-col mb-8 items-start">
              <label className="font-semibold mb-1">Bringing a +1 ? *</label>
              <input onChange={e => setGuest(e.target.value)} className="rounded w-full py-1 px-2 text-black" placeholder="Name of Guest" />
            </div>
            <div className="w-full bg-amber-200 rounded h-10 flex items-center justify-center">
              <button type="submit" className="uppercase text-white font-bold">Send your answer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
