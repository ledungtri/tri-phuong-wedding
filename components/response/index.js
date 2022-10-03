import Form from "./form";

export default function Response() {
  return (
    <div className=" flex flex-col px-4 h-full text-amber-200">
      <div className="flex flex-col justify-evenly m-auto">
        <h1 className="text-4xl italic font-bold mb-4">
          PHÚC ĐÁP
        </h1>
        <div className="flex flex-col items-start w-full font-bold text-2xl mb-10">
          <h2 className="date mt-2">Thứ Bảy, Ngày 17 Tháng 12</h2>
          <h2 className="date mt-2">Vào Lúc 18:00 PM</h2>
          <h2 className="date mt-2">Nhà Hàng Crystal Palace</h2>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}
