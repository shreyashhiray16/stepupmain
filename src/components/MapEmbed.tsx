export default function MapEmbed() {
  return (
    <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden">
      <iframe
        title="Step-Up Energy Solutions Location - Vapi GIDC"
        src="https://www.google.com/maps?q=Step+Up+Energy+Solutions%2C+Vapi%2C+Gujarat&ll=20.3616937%2C72.9592891&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href="https://maps.app.goo.gl/ukB2cXVrduatCMAH6"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-6 right-6 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-dark shadow-xl transition-all hover:shadow-2xl hover:bg-gray-50"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
