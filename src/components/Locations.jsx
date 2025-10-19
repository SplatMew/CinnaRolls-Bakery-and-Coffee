import {centro, malecon} from '../components/importsImages';

const Locations = () => {
  const locations = [
    {
      name: 'Malecón',
      address: 'Malecón Álvaro Obregón, Bravo у Ocampo',
      hours: '7:00 AM - 10:30 PM',
      phone: '612 291 4014',
      image: malecon,
      dir: 'https://maps.app.goo.gl/JDB7z8XLK91kkrzw5'
    },
    {
      name: 'Centro Cultural',
      address: 'Belisario Domínguez y 16 de Septiembre',
      hours: '7:00 AM - 10:30 PM',
      phone: '612 291 4014',
      image: centro,
      dir: 'https://maps.app.goo.gl/ZjtkMHTz2P8C2EZB7'
    },
    
  ];

  return (
    <section id="locations" className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-950 mb-4">
            Nuestras ubicaciones
          </h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Visítanos en una de nuestras cómodas ubicaciones y vive la calidez de los roles de canela recién horneados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-amber-950 mb-4">
                  {location.name}
                </h3>
                <div className="space-y-3 text-black">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location.address}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {location.hours}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {location.phone}
                  </div>
                </div>
                <button className="w-full mt-6 btn-primary hover:text-amber-900 transition duration-300">
                  <a href={location.dir}>Obtener direcciones</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;