// src/components/ShareInvite.jsx
import { FaWhatsapp, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";

export default function ShareInvite() {
  const inviteLink = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invitation link copied to clipboard!");
  };

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold text-rose-800 mb-4">📢 Share the Invite</h2>
      <p className="text-gray-600 mb-6">Spread the joy by sharing this invitation with family & friends!</p>
      
      <div className="flex justify-center gap-4">
        <a
          href={`https://wa.me/?text=You're%20invited!%20Join%20us%20at%20${inviteLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>
        
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${inviteLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          <FaFacebook size={22} />
        </a>
        
        <a
          href={`https://twitter.com/intent/tweet?url=${inviteLink}&text=You're%20invited!`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-400 text-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          <FaTwitter size={22} />
        </a>
        
        <button
          onClick={copyToClipboard}
          className="bg-gray-700 text-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          <FaLink size={22} />
        </button>
      </div>
    </div>
  );
}
