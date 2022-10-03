export default function MapFrame({ title, url, subtitles }) {
  return (
    <div className="h-full w-full">
      <h2 className="mb-2 font-semibold text-xl">{title}</h2>
      <iframe
        className="w-full h-[200px] md:h-[500px]"
        src={url}
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {subtitles.map((subtitle, key) => (
        <h3 className='italic' key={key}>
          {subtitle}
        </h3>
      ))}
    </div>
  );
}