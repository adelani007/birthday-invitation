import ShareInvite from "../components/ShareInvite";
export default function RSVP() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-100 to-pink-300 p-6">
      <div className="max-w-6xl mx-auto bg-white/90 rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-10">
        
        {/* RSVP Form */}
        <div>
          <h2 className="text-2xl font-bold text-rose-800 mb-6 text-center">
            Please RSVP
          </h2>

          <form
            action="https://formspree.io/f/mjkoqvkj"  // <-- Replace with your Formspree link
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            />
            <select
              name="guests"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            >
              <option value="">Number of Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4+">4 or more</option>
            </select>
            <textarea
              name="message"
              placeholder="Special Message (Optional)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
              rows="3"
            />
            <input
            type="hidden"
            name="_redirect"
            value="https://github.com/adelani007/birthday-invitation.git"
          />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-700 to-yellow-500 text-white font-semibold text-lg hover:scale-105 transition"
            >
              ✈️ Send RSVP
            </button>
          </form>
        </div>

        {/* Contact Info & Additional Info (same as before) */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-rose-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-rose-800 mb-4">
              Contact Information
            </h3>
            <p><strong>Event Organizer:</strong> THE AFOLABI'S</p>
            <p><strong>Phone:</strong> 07036535659</p>
            <p><strong>Email:</strong> hammedafolabi017@gmail.com</p>
          </div>

          {/* Additional Info */}
          <div className="bg-rose-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-rose-800 mb-4">
              Additional Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>👔 Dress Code:</strong> Semi-formal / Elegant Casual</li>
              <li><strong>🍽 Refreshments:</strong> Dinner and celebration cake will be served</li>
              <li><strong>🚗 Parking:</strong> Free parking available on-site</li>
              
            </ul>
          </div>
        </div>
      </div>
       <ShareInvite /> 
    </div>
  );
}
