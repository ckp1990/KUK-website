import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { getSpecies } from "@/lib/data/species";
import { testimonials, institutions } from "@/lib/data/home";
import bannerImage from "../public/KUK_Banner.jpg";
import aboutImage from "../public/ullas-karanth-sandesh-kadur.jpg";

export default async function Home() {
  const speciesList = await getSpecies();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full">
        <Image
          src={bannerImage}
          alt="Dr. K. Ullas Karanth Banner"
          className="w-full h-auto object-cover"
          priority
          placeholder="blur"
        />
      </section>

      {/* About Snippet */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">About Dr. K. Ullas Karanth</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I originally trained as a mechanical engineer at the National Institute of Technology, Surathkal (1971), but changed careers to pursue my deep passion for wildlife biology, obtaining an MS degree from the University of Florida, USA (1988) and a PhD from Mangalore University, India (1993).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I am now Emeritus Director of the Centre for Wildlife Studies (CWS) that I founded in 1984. During 1988-2017, I also headed the Wildlife Conservation Society (WCS) India Program. I have held the positions of an Adjunct Professor at the universities of Florida and Minnesota in the USA and the Tata Institute of Fundamental Research-NCBS, India.
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
                src={aboutImage}
                alt="Dr. K. Ullas Karanth"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
             />
        </div>
      </section>

      {/* Species of Interest */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Species of Interest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {speciesList?.map((s) => (
              <div key={s.name} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <div className="relative h-[300px] w-full">
                    <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
            {institutions?.map((inst) => (
              <div key={inst} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 text-center">
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
            aria-label="Email address"
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
