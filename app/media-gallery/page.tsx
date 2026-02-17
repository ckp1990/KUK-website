"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Mic } from "lucide-react";

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState("photos");

  const tabs = [
    { id: "photos", label: "Photos" },
    { id: "audio", label: "Audio and Podcasts" },
    { id: "video", label: "Video" },
  ];

  const photos = [
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

  const audioItems = [
    { title: "The Roar of the Tiger", duration: "12:45", image: "https://placehold.co/800x600/2f855a/white?text=Podcast+Ep+1", url: "https://spotify.com" },
    { title: "Conversation with Dr. Karanth", duration: "45:20", image: "https://placehold.co/800x600/d69e2e/white?text=Podcast+Ep+2", url: "https://spotify.com" },
    { title: "Sounds of the Western Ghats", duration: "08:15", image: "https://placehold.co/800x600/4a5568/white?text=Nature+Sounds", url: "https://spotify.com" },
  ];

  const videoItems = [
    { title: "Tracking Tigers", duration: "10:30", image: "https://placehold.co/800x600/c53030/white?text=Video+Tracking", url: "https://youtube.com" },
    { title: "Keynote at Conservation Summit", duration: "35:00", image: "https://placehold.co/800x600/718096/white?text=Keynote+Speech", url: "https://youtube.com" },
    { title: "Field Days: A Documentary", duration: "25:15", image: "https://placehold.co/800x600/ed8936/white?text=Documentary", url: "https://youtube.com" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-4">Media Gallery</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-6 font-medium text-lg transition-colors border-b-2 whitespace-nowrap ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((img, index) => (
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
        )}

        {activeTab === "audio" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {audioItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                    <div className="bg-white rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform">
                        <Mic className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">Duration: {item.duration}</p>
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === "video" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                    <div className="bg-white rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">Duration: {item.duration}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
