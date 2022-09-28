export default function BackgroundWrapper({ children }) {
  return (
    <div className="md:bg-wedding_bg bg-wedding_bg_phone bg-cover bg-center bg-no-repeat h-screen">
      <div className="h-screen bg-black/40">
        {children}
      </div>
    </div>
  );
}