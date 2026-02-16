import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-4">About Dr. K. Ullas Karanth</h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Main Content */}
        <div className="md:w-2/3 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Born in 1948, I am the son of noted writer Kota Shivarama Karanth. Trained first as a mechanical engineer (NIT Surathkal, 1971), I shifted to wildlife biology, earning an M.S. from the University of Florida (1988) and a Ph.D. from Mangalore University (1993).
          </p>
          <p>
            I founded the Centre for Wildlife Studies (1984), where I now serve as Emeritus Director, and directed the Wildlife Conservation Society–India Program (1988–2017). I also hold adjunct faculty positions at universities in the USA, Thailand, and India.
          </p>
          <p>
            For over five decades, I have studied the ecology of tigers, predators, and prey in India and Thailand, specializing in large carnivore ecology, animal population analysis, conservation biology, and policy. I have published 150+ scientific papers, numerous popular articles, and authored/edited several influential books including <em>The Way of the Tiger</em>, <em>Science of Saving Tigers</em>, <em>Among Tigers</em> (2023), and <em>Growing up Karanth</em> (2021). I have also written notable works in Kannada.
          </p>
          <p>
            I serve on several IUCN specialist groups and have advised India’s Forest Advisory Committee, National Tiger Conservation Authority, and global organizations like WWF. Recognitions include the Padma Shri (2012), Sierra Club EarthCare Award (2006), WWF-J. Paul Getty Award (2007), and Distinguished Alumnus honors from NIT Surathkal, University of Florida, and St. Aloysius College.
          </p>
          <p>
            I live in Bengaluru with my wife, Prof. Prathibha Karanth, a speech and language scientist. Our daughter, Dr. Krithi Karanth, is also a leading conservationist and the current Director of Centre for Wildlife Studies.
          </p>
        </div>

        {/* Sidebar Image */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="relative h-[500px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="https://placehold.co/600x800/2f855a/white?text=Dr.+Karanth+Profile"
                alt="Dr. K. Ullas Karanth"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-neutral p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-primary">Contact</h3>
                <p className="text-sm text-gray-600 mb-2">
                    Suite 224, Rajanigandha, Garden Apartments<br/>
                    21, Vittal Mallya Road<br/>
                    Bengaluru, Karnataka-560001, INDIA.
                </p>
                <a href="mailto:info@wildlifescience.com" className="text-primary hover:underline font-medium block mt-2">
                    info@wildlifescience.com
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
