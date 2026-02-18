import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  const species = [
    { name: "Tiger", image: "https://placehold.co/300x260/2f855a/white?text=Tiger" },
    { name: "Leopard", image: "https://placehold.co/300x260/d69e2e/white?text=Leopard" },
    { name: "Elephant", image: "https://placehold.co/300x260/4a5568/white?text=Elephant" },
    { name: "Dhole", image: "https://placehold.co/300x260/c53030/white?text=Dhole" },
    { name: "Gaur", image: "https://placehold.co/300x260/718096/white?text=Gaur" },
    { name: "Sambar", image: "https://placehold.co/300x260/ed8936/white?text=Sambar" },
  ];

  const testimonials = [
    {
      name: "Dr. George B. Schaller",
      role: "Emeritus Scientist, Wildlife Conservation Society",
      quote: "Ullas Karanth is a superb field biologist focused on the tiger and its prey and the preservation of tiger habitats. He is generally considered the best tiger biologist in the world.",
      image: "https://placehold.co/86x86/2f855a/white?text=GS",
    },
    {
      name: "Dr. Alison F. Richard",
      role: "Vice-Chancellor Emerita, Cambridge University",
      quote: "Ullas Karanth’s commitment to continued survival of wild tiger populations is deep and long-standing. The scientific innovations he brought to bear have transformed our knowledge.",
      image: "https://placehold.co/86x86/d69e2e/white?text=AR",
    },
    {
      name: "Dr. Jeffrey D. Sachs",
      role: "Professor, Columbia University",
      quote: "Among Tigers is a unique book by a unique author. Ullas Karanth has devoted his life to the understanding and protection of the endangered tigers of Asia.",
      image: "https://placehold.co/86x86/4a5568/white?text=JS",
    },
    {
      name: "Dr. Jane Goodall",
      role: "Founder, Jane Goodall Institute",
      quote: "An inspiring figure in conservation. Dr. Karanth's dedication to the tiger is a beacon of hope for wildlife preservation globally.",
      image: "https://placehold.co/86x86/2b6cb0/white?text=JG",
    },
    {
      name: "Sir David Attenborough",
      role: "Broadcaster and Naturalist",
      quote: "The meticulous work of Ullas Karanth has shed new light on the hidden lives of tigers, crucial for their survival in the modern world.",
      image: "https://placehold.co/86x86/2c5282/white?text=DA",
    },
    {
      name: "Dr. Raghu Chundawat",
      role: "Conservation Biologist",
      quote: "A pioneer in rigorous scientific methodology for tiger census, his contributions have set the standard for wildlife research in India.",
      image: "https://placehold.co/86x86/2d3748/white?text=RC",
    },
  ];

  const institutions = [
    "Centre for Wildlife Studies",
    "Wildlife Conservation Society",
    "University of Florida",
    "Manipal Academy",
    "Tata Institute",
    "US Geological Survey",
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://placehold.co/1920x1080/2f855a/white?text=WildLife+Science+Hero')" }}
        ></div>
        <div className="relative z-20 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">WildLife Science</h1>
          <p className="text-xl md:text-2xl mb-8">
            Exploring the ecology of tigers, predators, and prey in India and Thailand.
          </p>
          <Link
            href="/about"
            className="bg-secondary text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* About Snippet */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">About Dr. K. Ullas Karanth</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Born in 1948, I am the son of noted writer Kota Shivarama Karanth. Trained first as a mechanical engineer, I shifted to wildlife biology, earning an M.S. from the University of Florida and a Ph.D. from Mangalore University. I founded the Centre for Wildlife Studies and directed the Wildlife Conservation Society–India Program for decades.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For over five decades, I have studied the ecology of tigers, predators, and prey in India and Thailand, specializing in large carnivore ecology, animal population analysis, conservation biology, and policy.
          </p>
          <Link
            href="/about"
            className="text-primary font-semibold hover:underline"
          >
            Read Full Biography &rarr;
          </Link>
        </div>
        <div className="relative h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden">
             <Image
                src="https://placehold.co/600x800/2f855a/white?text=Dr.+Karanth"
                alt="Dr. K. Ullas Karanth"
                fill
                className="object-cover"
             />
        </div>
      </section>

      {/* Species of Interest */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Species of Interest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {species.map((s) => (
              <div key={s.name} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <div className="relative h-64 w-full">
                    <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    {s.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary">Testimonials</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Associated Institutions */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Associated Institutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {institutions.map((inst, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 text-center">
                <span className="text-sm font-medium text-gray-600">{inst}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">Keep In Touch</h2>
        <p className="text-gray-600 mb-8">Stay updated with our news and activities.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}
