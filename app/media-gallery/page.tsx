import Image from "next/image";

export default function MediaGallery() {
  const images = [
    { src: "https://placehold.co/800x600/2f855a/white?text=Tiger+in+Grass", alt: "Tiger in tall grass" },
    { src: "https://placehold.co/800x600/d69e2e/white?text=Leopard+Resting", alt: "Leopard resting on a tree" },
    { src: "https://placehold.co/800x600/4a5568/white?text=Elephant+Herd", alt: "Herd of elephants crossing a river" },
    { src: "https://placehold.co/800x600/c53030/white?text=Dhole+Pack", alt: "Pack of Dholes hunting" },
    { src: "https://placehold.co/800x600/718096/white?text=Gaur+Grazing", alt: "Gaur grazing in the forest" },
    { src: "https://placehold.co/800x600/ed8936/white?text=Sambar+Deer", alt: "Sambar deer alert" },
    { src: "https://placehold.co/800x600/2f855a/white?text=Field+Work", alt: "Dr. Karanth doing field work" },
    { src: "https://placehold.co/800x600/d69e2e/white?text=Camera+Trap", alt: "Setting up a camera trap" },
    { src: "https://placehold.co/800x600/4a5568/white?text=Landscape", alt: "Beautiful landscape of Western Ghats" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-4">Media Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <div className="relative h-64 w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-end justify-center pb-4">
              <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
