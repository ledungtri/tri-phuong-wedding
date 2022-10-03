export default function Background({ children }) {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-wedding_bg_phone md:bg-wedding_bg">
      <div className="h-screen bg-black/60">
        {children}
      </div>
    </div>
  );
}