export interface Book {
  title: string;
  year: string;
  image: string;
  category: "popular" | "scientific";
  language: string;
}

export interface ScientificArticle {
  title: string;
  journal: string;
  year: string;
}

export interface PopularArticle {
  title: string;
  publication: string;
  year: string;
}

export interface Tab {
  id: string;
  label: string;
}

export const tabs: Tab[] = [
  { id: "books", label: "Books" },
  { id: "popular", label: "Popular Articles" },
  { id: "scientific", label: "Scientific Articles" },
];

export const books: Book[] = [
  {
    title: "Among Tigers",
    year: "2023",
    image: "https://placehold.co/200x300/2f855a/white?text=Among+Tigers",
    category: "popular",
    language: "English"
  },
  {
    title: "Growing up Karanth",
    year: "2021",
    image: "https://placehold.co/200x300/d69e2e/white?text=Growing+Up",
    category: "popular",
    language: "Kannada"
  },
  {
    title: "Science of Saving Tigers",
    year: "2011",
    image: "https://placehold.co/200x300/4a5568/white?text=Science+Saving",
    category: "scientific",
    language: "English"
  },
  {
    title: "The Way of the Tiger",
    year: "2001",
    image: "https://placehold.co/200x300/c53030/white?text=Way+of+Tiger",
    category: "scientific",
    language: "Kannada"
  },
];

export const scientificArticles: ScientificArticle[] = [
  { title: "Tiger population dynamics in India: A long-term study", journal: "Journal of Applied Ecology", year: "2020" },
  { title: "Prey selection by tigers and leopards in tropical forests", journal: "Biological Conservation", year: "2018" },
  { title: "Monitoring tiger populations using camera traps", journal: "Animal Conservation", year: "2015" },
  { title: "Conservation strategies for large carnivores in human-dominated landscapes", journal: "Science", year: "2012" },
  { title: "Estimating tiger densities from camera trap data", journal: "Ecology", year: "2008" },
];

export const popularArticles: PopularArticle[] = [
  { title: "Why Tigers Need Large Spaces", publication: "National Geographic", year: "2022" },
  { title: "My Life with Tigers", publication: "BBC Wildlife", year: "2019" },
  { title: "The Future of Indian Wildlife", publication: "The Hindu", year: "2017" },
  { title: "Conservation in the 21st Century", publication: "Sanctuary Asia", year: "2015" },
];
