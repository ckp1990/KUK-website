
export interface Species {
  name: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const species: Species[] = [
  { name: "Tiger", image: "https://placehold.co/300x260/2f855a/white?text=Tiger" },
  { name: "Leopard", image: "https://placehold.co/300x260/d69e2e/white?text=Leopard" },
  { name: "Elephant", image: "https://placehold.co/300x260/4a5568/white?text=Elephant" },
  { name: "Dhole", image: "https://placehold.co/300x260/c53030/white?text=Dhole" },
  { name: "Gaur", image: "https://placehold.co/300x260/718096/white?text=Gaur" },
  { name: "Sambar", image: "https://placehold.co/300x260/ed8936/white?text=Sambar" },
];

export const testimonials: Testimonial[] = [
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

export const institutions: string[] = [
  "Centre for Wildlife Studies",
  "Wildlife Conservation Society",
  "University of Florida",
  "Manipal Academy",
  "Tata Institute",
  "US Geological Survey",
];
