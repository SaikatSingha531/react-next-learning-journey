
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Top */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-lg font-semibold text-white">
            Foodify
          </h2>
          <p className="text-gray-400 text-sm">
            Fresh food, simple delivery.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-500">
          © 2026 Foodify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
