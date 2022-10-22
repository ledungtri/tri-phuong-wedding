import Button from "../Button";

export default function Greeting() {
  return (
    <div className="px-4 h-screen grid gap-4 text-white">
      <div className="flex flex-col items-center">
        <div className="m-auto">
          <h1 className="font-bold italic text-3xl md:text-6xl">
            &ldquo;HÃY ĐẾN MÀ XEM&rdquo;
          </h1>
          <p className="text-sm font-thin">
            (Ga 1, 39)
          </p>
          <Button href='/response' label='PHÚC ĐÁP'/>
          <Button href='/map' label='BẢN ĐỒ ĐƯỜNG ĐI'/>
        </div>
      </div>
    </div>
  );
}