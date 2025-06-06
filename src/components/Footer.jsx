export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © James Boac. All Rights Reserved {currentYear}.
        </p>
      </div>
    </footer>
  );
}
