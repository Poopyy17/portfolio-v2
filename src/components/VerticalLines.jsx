export default function VerticalLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden xl:block">
      {/* Portfolio brand alignment lines - aligned with "portfolio." text edges */}
      {/* Left edge of "portfolio." text - accounting for container padding (24px) */}
      <div className="absolute left-[calc(1.5rem+150px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-gray-800/50 to-transparent"></div>{' '}
      {/* Right edge of "portfolio." text - approximately 90px from left edge for text-xl "portfolio." */}
      <div className="absolute left-[calc(1.5rem+260px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-gray-800/50 to-transparent"></div>
      {/* Hamburger menu alignment lines - aligned with menu icon edges */}
      {/* Left edge of hamburger icon - accounting for container padding and button positioning */}
      <div className="absolute right-[calc(1.5rem+218px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-gray-800/50 to-transparent"></div>
      {/* Right edge of hamburger icon - accounting for container padding */}
      <div className="absolute right-[calc(1.5rem+145px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-gray-800/50 to-transparent"></div>
    </div>
  );
}
