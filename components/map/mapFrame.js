export default function MapFrame({ title, url, subtitles }) {
  return (
    <div className="grow">
      <h2 className="font-bold text-xl bg-navy/60 rounded-t-full py-2">{title}</h2>
      <iframe
        className="w-full h-full"
        src={url}
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className='bg-navy/60 rounded-b-xl py-1 text-white text-xs'>
        {subtitles.map((subtitle, key) => (
          <h3 className='italic' key={key}>
            {subtitle}
          </h3>
        ))}
      </div>
    </div>
  );
}