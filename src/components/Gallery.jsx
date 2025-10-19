import {ambiente, chilaquiles, delicioso, desayuno, latte, rol_nutella} from '../components/importsImages'
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: rol_nutella,
      title: 'Delicioso Rol de Nutella'
    },
    {
      url: ambiente,
      title: 'Nuestra hermosa vista al Malecon'
    },
    {
      url: chilaquiles,
      title: 'Deliciosos chilaquiles con chicharron'
    },
    {
      url: delicioso,
      title: 'Cremoso chocolate caliente'
    },
    {
      url: desayuno,
      title: 'Desayuna con nosotros'
    },
    {
      url: latte,
      title: 'Latte Art'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-950 mb-4">
            Galería
          </h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Echa un vistazo nuestras deliciosas creaciones y cálidad atmósfera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-2xl font-display">{selectedImage.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl hover:text-primary-500 transition duration-300"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;