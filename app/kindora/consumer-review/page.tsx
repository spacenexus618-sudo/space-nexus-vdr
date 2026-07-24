import Link from "next/link";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Executive Director",
    org: "Community First Alliance",
    rating: 5,
    text: "Kindora transformed how we manage our donors and grants. What used to take us hours in spreadsheets now takes minutes. The dashboard gives me real-time visibility into every aspect of our operations.",
  },
  {
    name: "James Rodriguez",
    role: "Program Manager",
    org: "Youth Empowerment Network",
    rating: 5,
    text: "The client case management module is exactly what we needed. Tracking program enrollment, services delivered, and outcomes is now seamless. Our reporting to funders has improved dramatically.",
  },
  {
    name: "Priya Sharma",
    role: "Finance Officer",
    org: "Helping Hands Foundation",
    rating: 5,
    text: "Cost allocation across multiple grants used to be a nightmare. Kindora's financial management tools make it straightforward. The chart of accounts and budget tracking are excellent.",
  },
  {
    name: "Michael Chen",
    role: "Development Director",
    org: "Bright Future Education",
    rating: 4,
    text: "Donor management is smooth and intuitive. The communication history feature ensures we never miss a follow-up. Campaign tracking helps us see which appeals are working.",
  },
  {
    name: "Amanda Foster",
    role: "Operations Director",
    org: "Care Connect Services",
    rating: 5,
    text: "We evaluated several platforms before choosing Kindora. The all-in-one approach means our team doesn't need to switch between different tools. Setup was quick and the support team was helpful.",
  },
  {
    name: "David Osei",
    role: "CEO",
    org: "AfriCare Initiative",
    rating: 5,
    text: "As a growing NGO, we needed a platform that could scale with us. Kindora has been that platform. From donor tracking to volunteer management, everything works together seamlessly.",
  },
];

export default function ConsumerReviewPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kindora Consumer Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what nonprofits and NGOs are saying about Kindora. Real reviews from real organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-500">{review.role}, {review.org}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/kindora" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Try Kindora Free
          </Link>
        </div>
      </div>
    </main>
  );
}
