import React from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Hablu Programmer",
    role: "Founder of Hablu Programmer",
    review:
      "Working with Jihad was an amazing experience! The project was completed before the deadline and exceeded all my expectations.",
    rating: 5,
    image: "https://i.ibb.co.com/j9BH3LG7/channels4-profile.jpg",
  },
  {
    id: 2,
    name: "jonkar mahmud ",
    role: "Founder Programming Hero",
    review:
      "Very professional and communicates clearly. My web app looks fantastic — clean, fast, and user-friendly!",
    rating: 4,
    image: "https://i.ibb.co.com/Fkpd56K2/1677507599579.jpg",
  },
  {
    id: 3,
    name: "Rashel Hasan",
    role: "Full Stack developer",
    review:
      "Jihad is super talented! He quickly understood what I needed and turned my ideas into reality. Highly recommended.",
    rating: 5,
    image: "https://i.ibb.co.com/21GdTXF7/rashle.jpg",
  },
  {
    id: 4,
    name: "John Parker",
    role: "Software Engineer",
    review:
      "Code quality and communication were top-notch. Would love to work again on future projects.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=18",
  },
  {
    id: 5,
    name: "Emily Watson",
    role: "Brand Manager",
    review:
      "A very creative and professional developer. My brand website looks amazing now!",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=33",
  },
];

export default function ClientReviews() {
  return (
    <section className="py-16 bg-base-200" id="reviews">
      <div className=" container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">
          What My Clients Say
        </h2>

        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="card bg-base-100 shadow-xl mx-4 p-6 w-80 hover:shadow-2xl transition rounded-2xl bg-[#0D0518]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-primary object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-400">{review.name}</h3>
              <p className="text-sm text-emerald-600 mb-2">{review.role}</p>
              <div className="flex justify-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400 w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic">"{review.review}"</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
