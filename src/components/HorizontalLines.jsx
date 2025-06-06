export default function HorizontalLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden hidden xl:block">
      {/* After Hero Section */}
      <div className="absolute left-0 right-0 top-[95vh] h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

      {/* After About Section */}
      <div className="absolute left-0 right-0 top-[170vh] h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

      {/* After Tech Stack Section */}
      <div className="absolute left-0 right-0 top-[315vh] h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

      {/* After Projects Section */}
      <div className="absolute left-0 right-0 top-[476vh] h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </div>
  );
}
