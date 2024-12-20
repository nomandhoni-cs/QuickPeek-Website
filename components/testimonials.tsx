import Image from "next/image";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Digital Marketer",
    content:
      "QuickPeek has revolutionized the way I manage my browser tabs. It's a game-changer for productivity!",
    avatar:
      "https://utfs.io/f/93hqarYp4cDdl5t7fPTporY6G7BSfdzITLcbnsF9hxDktAMi",
  },
  {
    name: "John D.",
    role: "Software Developer",
    content:
      "As someone who constantly juggles multiple projects, QuickPeek has become an indispensable tool in my workflow.",
    avatar:
      "https://utfs.io/f/93hqarYp4cDdXVVKvxu0qrePa5DMfGYLJ8imsxU7z6XtIZHu",
  },
  {
    name: "Emily R.",
    role: "Researcher",
    content:
      "The ability to quickly search through my browsing history has saved me countless hours. Highly recommended!",
    avatar:
      "https://utfs.io/f/93hqarYp4cDdkvv04n49GBpxQcEPYqDRtmjn2aslduwNTgC8",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={testimonial.avatar}
                alt={`Avatar of ${testimonial.name}`}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full object-cover mb-4 border border-gray-200"
              />

              <p className="text-lg mb-2">{testimonial.content}</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
