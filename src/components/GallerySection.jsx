import React, { useState } from 'react';
import { Image, X, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/platformData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filters = ["All", "Yoga", "Women", "Corporate", "Community", "Uttarakhand"];

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-brand-sand/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
            Moments of Discipline &amp; Grace
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark mt-2 tracking-tight">
            Visual Experience &amp; Gallery
          </h2>
          <div className="w-16 h-0.5 bg-brand-green/40 mx-auto mt-3 mb-4"></div>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            Real moments from Bengaluru doorstep private sessions, workplace wellness intensives, society cohorts, and our Himalayan roots.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-white text-brand-dark/80 hover:bg-brand-sand border border-brand-sand'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer bg-white border border-brand-sand transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden bg-brand-sand relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-brand-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald">
                  {item.category}
                </span>
                <h3 className="text-base font-serif font-bold text-brand-dark mt-0.5">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-brand-dark/60 mt-2 pt-2 border-t border-brand-sand/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-green" />
                    <span>{item.location}</span>
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-brand-green" />
                    <span>{item.year}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-brand-dark flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-dark">
                  {activeImage.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-brand-dark/70 mt-1">
                  <span>📍 {activeImage.location}</span>
                  <span>🗓️ {activeImage.year}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveImage(null)}
                className="px-5 py-2 rounded-full bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
