// // src/components/ScrollToTopButton.jsx
// import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button after scrolling 200px
//   useEffect(() => {
//     const toggleVisibility = () => {
//       setIsVisible(window.scrollY > 200);
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className="
//             fixed bottom-4 right-4 sm:bottom-6 sm:right-6
//             bg-rose-700 text-white 
//             p-3 sm:p-4 
//             rounded-full shadow-lg
//             hover:bg-rose-800 
//             transition transform hover:scale-110
//             focus:outline-none focus:ring-2 focus:ring-rose-400
//           "
//         >
//           <FaArrowUp size={18} className="sm:size-20" />
//         </button>
//       )}
//     </>
//   );
// }
