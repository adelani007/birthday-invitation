// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-900 to-rose-700 text-white text-center py-6 mt-auto shadow-inner">
      <div className="container mx-auto px-4">
        <p className="text-xs sm:text-sm md:text-base">
          ALHAJA AFOLABI JUBILEE © {new Date().getFullYear()} | Designed with ❤️ by{" "}
          <span className="font-semibold text-yellow-300">ADUTECH EMPIRE (Alaafin)</span>
        </p>
      </div>
    </footer>
  );
}
