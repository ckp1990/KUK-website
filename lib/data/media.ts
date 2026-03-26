export interface MediaTab {
  id: string;
  label: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export interface AudioItem {
  title: string;
  duration: string;
  image: string;
  url: string;
}

export interface VideoItem {
  title: string;
  duration: string;
  image: string;
  url: string;
}

export const tabs: MediaTab[] = [
  { id: "photos", label: "Photos" },
  { id: "audio", label: "Audio and Podcasts" },
  { id: "video", label: "Video" },
];

export const photos: Photo[] = [
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

export const audioItems: AudioItem[] = [
  { title: "The Roar of the Tiger", duration: "12:45", image: "https://placehold.co/800x600/2f855a/white?text=Podcast+Ep+1", url: "https://spotify.com" },
  { title: "Conversation with Dr. Karanth", duration: "45:20", image: "https://placehold.co/800x600/d69e2e/white?text=Podcast+Ep+2", url: "https://spotify.com" },
  { title: "Sounds of the Western Ghats", duration: "08:15", image: "https://placehold.co/800x600/4a5568/white?text=Nature+Sounds", url: "https://spotify.com" },
];

export const videoItems: VideoItem[] = [
  { title: "Tracking Tigers", duration: "10:30", image: "https://placehold.co/800x600/c53030/white?text=Video+Tracking", url: "https://youtube.com" },
  { title: "Keynote at Conservation Summit", duration: "35:00", image: "https://placehold.co/800x600/718096/white?text=Keynote+Speech", url: "https://youtube.com" },
  { title: "Field Days: A Documentary", duration: "25:15", image: "https://placehold.co/800x600/ed8936/white?text=Documentary", url: "https://youtube.com" },
];
