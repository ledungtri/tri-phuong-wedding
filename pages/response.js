import Form from "../components/form";


export default function Response() {
  
  return (
    <div className='h-screen'>
      <div className="flex flex-col items-start px-4 h-full justify-evenly text-amber-200 m-auto">
        <div className="flex flex-col items-start w-full">
          <h1 className="date text-2xl font-bold">Thứ Hai, Ngày 1 Tháng 12</h1>
          <h1 className="date mt-2 text-2xl font-bold">Vào Lúc 19:00 PM</h1>
          <h1 className="date mt-2 text-2xl font-bold">Nhà Hàng Crystal Palace</h1>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}
