import { useRouter } from "next/router";

export default function Response() {
  const router = useRouter()

  const handleGoToMap = (e) => {
    e.preventDefault()
    router.push('/map')
  }
  return (
    <div className="flex flex-col items-start px-4 h-full justify-evenly text-amber-200">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-3xl font-bold">Mon, Dec 1st</h1>
        <h1 className="text-3xl font-bold">19:00 pm</h1>
        <h1 className="text-3xl font-bold">Restaurant&#x27;s name</h1>
      </div>
      <div className="w-full">
        <form className="flex flex-col" onSubmit={handleGoToMap}>
          <div className="flex flex-col mb-4 items-start overflow-hidden">
            <div className="mb-1">
              <label className="font-semibold">Name *</label>
            </div>
            <div className="flex">
              <input className="rounded w-[50%] p-1" placeholder="First name..." />
              <input className="rounded w-[50%] p-1 ml-2" placeholder="Last name..." />
            </div>
          </div>
          <div className="flex flex-col mb-4 items-start">
            <label className="font-semibold mb-1">Email *</label>
            <input className="rounded w-full p-1" placeholder="Email..." />
          </div>
          <div className="flex flex-col mb-4 items-start">
            <label className="font-semibold mb-1">Phone *</label>
            <input className="rounded w-full p-1" placeholder="Phone number..." />
          </div>
          <div className="flex flex-col mb-4 items-start">
            <label className="font-semibold mb-1">Will you be attending? *</label>
            <select className="w-[50%] text-black" id="attending" name="attending">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col mb-8 items-start">
            <label className="font-semibold mb-1">Bringing a +1 ? *</label>
            <input className="rounded w-full p-1" placeholder="Name of Guest" />
          </div>
          <div className="w-full bg-amber-200 rounded h-10 flex items-center justify-center">
            <button type="submit" className="uppercase text-white font-bold">Send your answer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
