import Form from "./form";

export default function Response() {
  return (
    <div className=" flex flex-col px-4 h-full text-beige">
      <div className="flex flex-col justify-evenly m-auto">
        <h1 className="text-4xl font-bold mb-4 text-orange-400/80">
          PHÚC ĐÁP
        </h1>
        <div className="flex flex-col items-start w-full font-bold text-xl mb-5 italic">
          <h2 className="mt-2">Thứ Bảy, Ngày 17 Tháng 12</h2>
          <h2 className="mt-2">Vào Lúc 18:00 PM</h2>
          <h2 className="mt-2">Nhà Hàng Crystal Palace</h2>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}
