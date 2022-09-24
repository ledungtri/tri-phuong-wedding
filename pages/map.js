export default function Map() {
  return (
    <div className="px-4 flex h-screen">
      <div className='m-auto'>
        <div className="mb-6">
          <h1 className="text-2xl uppercase font-bold">Map</h1>
        </div>

        <div className="h-[90%]">
          <div className="h-[50%]">
            <h2 className="mb-2 font-semibold capitalize text-xl">Mẫu Tâm Church</h2>
            <iframe
              className="w-full h-[80%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8278147019746!2d106.70464261538773!3d10.747750192340941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7666e90cd9%3A0x7c0d5a124f8008b3!2sMau%20Tam%20Church!5e0!3m2!1sen!2s!4v1663954587899!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="h-[50%]">
            <h2 className="mb-2 font-semibold capitalize text-xl">Crystal Palace Restaurant</h2>
            <iframe
              className="w-full h-[80%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1009417821238!2d106.72143341538758!3d10.726697392355277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8a74cf73c9%3A0xaa3133b00d64f650!2sMerPerle%20Crystal%20Palace%20Hotel!5e0!3m2!1sen!2s!4v1663954665207!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
