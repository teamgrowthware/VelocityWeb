import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const InstituteGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Main Campus Building',
      category: 'campus',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      description: 'Our state-of-the-art main campus building'
    },
    {
      id: 2,
      title: 'Computer Laboratory',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
      description: 'Modern computer lab with latest technology'
    },
    {
      id: 3,
      title: 'Library & Study Area',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      description: 'Extensive library with thousands of books'
    },
    {
      id: 4,
      title: 'Sports Complex',
      category: 'sports',
      imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop',
      description: 'Multi-purpose sports facility'
    },
    {
      id: 5,
      title: 'Annual Day Celebration',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      description: 'Students performing at annual day'
    },
    {
      id: 6,
      title: 'Science Laboratory',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
      description: 'Well-equipped science lab for experiments'
    },
    {
      id: 7,
      title: 'Graduation Ceremony',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      description: 'Annual graduation ceremony'
    },
    {
      id: 8,
      title: 'Auditorium',
      category: 'campus',
      imageUrl: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=600&h=400&fit=crop',
      description: 'Spacious auditorium for events'
    },
    {
      id: 9,
      title: 'Basketball Court',
      category: 'sports',
      imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
      description: 'Outdoor basketball court'
    }
  ];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'campus', label: 'Campus' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'sports', label: 'Sports' },
    { value: 'events', label: 'Events' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-3">Institute Gallery</h1>
          <p className="text-xl text-center text-blue-100">Explore our campus, facilities, and memorable moments</p>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category.value}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedCategory === category.value 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold uppercase px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h4 className="text-2xl text-gray-500">No images found in this category</h4>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="text-center">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto mx-auto rounded-lg mb-4"
              />
              <h3 className="text-white text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">&copy; 2024 Institute Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default InstituteGallery;