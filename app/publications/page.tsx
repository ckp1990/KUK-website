"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const tabs = [
  { id: "books", label: "Books" },
  { id: "popular", label: "Popular Articles" },
  { id: "scientific", label: "Scientific Articles" },
];

const books = [
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

const scientificArticles = [
  { title: "Tiger population dynamics in India: A long-term study", journal: "Journal of Applied Ecology", year: "2020" },
  { title: "Prey selection by tigers and leopards in tropical forests", journal: "Biological Conservation", year: "2018" },
  { title: "Monitoring tiger populations using camera traps", journal: "Animal Conservation", year: "2015" },
  { title: "Conservation strategies for large carnivores in human-dominated landscapes", journal: "Science", year: "2012" },
  { title: "Estimating tiger densities from camera trap data", journal: "Ecology", year: "2008" },
];

const popularArticles = [
  { title: "Why Tigers Need Large Spaces", publication: "National Geographic", year: "2022" },
  { title: "My Life with Tigers", publication: "BBC Wildlife", year: "2019" },
  { title: "The Future of Indian Wildlife", publication: "The Hindu", year: "2017" },
  { title: "Conservation in the 21st Century", publication: "Sanctuary Asia", year: "2015" },
];

const Publications = () => {
  const [activeTab, setActiveTab] = useState("books");
  const [bookCategory, setBookCategory] = useState("popular");

  const filteredBooks = useMemo(() => books.filter(book => book.category === bookCategory), [bookCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-4">Publications</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-6 font-medium text-lg transition-colors border-b-2 ${
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
        {activeTab === "books" && (
          <div>
            <div className="mb-6 flex justify-end">
              <select
                value={bookCategory}
                onChange={(e) => setBookCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-700"
              >
                <option value="popular">Popular Books</option>
                <option value="scientific">Scientific Books</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {filteredBooks.map((book, index) => (
                <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="relative h-64 w-44 mb-4 shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover rounded-md"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {book.language}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">{book.title}</h3>
                  <span className="text-gray-500 text-sm">({book.year})</span>
                </div>
              ))}
            </div>
             {filteredBooks.length === 0 && (
                 <p className="text-center text-gray-500 py-10">No books found in this category.</p>
            )}
          </div>
        )}

        {activeTab === "scientific" && (
          <div className="space-y-4">
            {scientificArticles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl text-primary mb-2">{article.title}</h3>
                <p className="text-gray-600">
                  <span className="font-medium italic">{article.journal}</span>, {article.year}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "popular" && (
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl text-secondary mb-2">{article.title}</h3>
                <p className="text-gray-600">
                  Published in <span className="font-medium">{article.publication}</span>, {article.year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
