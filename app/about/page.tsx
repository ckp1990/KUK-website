import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Main Content */}
        <div className="md:w-2/3 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I originally trained as a mechanical engineer at the National Institute of Technology, Surathkal (1971), but changed careers to pursue my deep passion for wildlife biology, obtaining an MS degree from the University of Florida, USA (1988) and a PhD from Mangalore University, India (1993).
          </p>
          <p>
            I am now Emeritus Director of the Centre for Wildlife Studies (CWS) that I founded in 1984. During 1988-2017, I also headed the Wildlife Conservation Society (WCS) India Program. I have held the positions of an Adjunct Professor at the universities of Florida and Minnesota in the USA and the Tata Institute of Fundamental Research-NCBS, India.
          </p>
          <p>
            I have conducted long-term research on the ecology of large carnivores, including tigers in India, while also providing my special expertise in animal ecology, population modeling, conservation biology and policy to tiger research programs in Asia. I have published over 150 scientific papers in prestigious journals as well as numerous popular articles. I have authored/edited/co-edited several books in English: <em>The Way of the Tiger</em> (2001), <em>Monitoring Tigers and their Prey</em> (2002), <em>A view from the Machan</em> (2006), <em>Tiger Tales</em> (2007), <em>Camera traps in Animal Ecology</em> (2009), <em>Science of Saving Tigers</em> (2011), <em>Science and Conservation of Animal Populations</em> (2017), <em>Methods for Monitoring Tiger and Prey Populations</em> (2017), <em>Among Tigers</em> (2023) as well as a memoir about my father, the polymath Kota Shivarama Karanth, titled <em>Growing up Karanth</em>. I have also authored/coauthored articles and books on wildlife in Kannada, including <em>Aranya Mattu Samaja</em> (1982), <em>Kaadupranigala Jadinalli</em> (2001), <em>Huliya Baduku</em> and <em>Hulirayana Akashavaani</em> (2007).
          </p>
          <p>
            In recognition of my contributions to wildlife conservation, I won the Sierra Club’s EarthCare award (2006), World Wildlife Funds’s J. Paul Getty award (2007) and the Wildlife Conservation Society’s George Schaller Award (2018). I am a Fellow of the Indian Academy of Sciences (2008), and have been conferred the Karnataka Rajya Prashashti (2011), the Presidential award Padma Shri (2012). I have been recognized as a Distinguished Alumnus by the St. Aloysius College, Mangalore, the National Institute of Technology, Surathkal and the University of Florida, Gainesville, USA (2022).
          </p>
          <p>
            I serve on the World Conservation Union&apos;s specialist groups on Cats, Bears, Elephants, Wild Cattle and Small Carnivores, and have in the past served on Indian Government’s Forest Advisory Committee, National Tiger Conservation Authority and Governing Council of the Wildlife Institute of India. I have been active in conservation serving on the boards of WWF-India and the Liz Claiborne Foundation, New York.
          </p>
          <p>
            My work has been featured in world’s media including Nature, Science, New Scientist, Scientific American, New York Times, Time Magazine, National Geographic, BBC, CNN, PBS, CBC, Discovery and Animal Planet.
          </p>
          <p>
            I live in Bengaluru, India and am married to Prof. Prathibha Karanth, speech and language pathologist. My daughter, Dr. Krithi Karanth, an Alumna of the Universities of Florida, Yale and Duke, is now the Chief Conservation Scientist at the Centre for Wildlife Studies (CWS), Bengaluru.
          </p>
        </div>

        {/* Sidebar Image */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="relative h-[500px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/ullas-karanth-sandesh-kadur.jpg"
                alt="Dr. K. Ullas Karanth"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
                <a href="mailto:info@ullaskaranth.com" className="text-primary hover:underline font-medium block mt-2">
                    info@ullaskaranth.com
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
