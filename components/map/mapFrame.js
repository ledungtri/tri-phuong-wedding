import {useState} from "react";

export default function MapFrame({ title, url, subtitles }) {
  const [loading, setLoading] = useState(true)

  return (
    <div className="h-full">
      <h2 className="mb-2 font-semibold text-xl">{title}</h2>
      <div className={`${loading ? '' : 'hidden'} w-full h-[80%] animate-pulse ease-linear bg-white`}></div>
      <iframe
        className="w-full"
        src={url}
        height='200'
        allowFullScreen=""
        loading="lazy"
        onLoad={() => setLoading(false)}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {subtitles.map(subtitle => (
        <h3 className='italic'>
          {subtitle}
        </h3>
      ))}
    </div>
  );
}