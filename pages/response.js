import Form from "../components/response/form";


export default function Response() {
  
  return (
    <div className='h-screen'>
      <div className="flex flex-col px-4 h-full justify-evenly text-amber-200 m-auto">
        <div className="flex flex-col items-start w-full font-bold text-2xl">
          <h1 className="date mt-2">Thứ Hai, Ngày 1 Tháng 12</h1>
          <h1 className="date mt-2">Vào Lúc 19:00 PM</h1>
          <h1 className="date mt-2">Nhà Hàng Crystal Palace</h1>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}
