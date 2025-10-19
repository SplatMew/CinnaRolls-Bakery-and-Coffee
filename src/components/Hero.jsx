import cover from '../img/img1.jpg';
const Hero = () => {
  return (
    <section id="home" className="bg-brown-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-amber-950 text-shadow-2xs leading-tight">
              Porque la vida es
              <span className="text-primary-500 block">mejor con café y roles 💛</span>
            </h1>
            <p className="text-xl text-brown-600 leading-relaxed">
              Comienza tu día con el aroma cálido y confortable de nuestros roles de canela recién horneados
              y nuestro café artesanal. Hecho con amor y los mejores ingredientes cada mañana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary text-lg px-8 py-3">
                Nuestro Menú
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Ubicación
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-primary-100 rounded-2xl p-8 transform rotate-3">
              <div className="bg-white rounded-xl shadow-2xl transform -rotate-3 p-4">
                <img 
                  src={cover}
                  alt="Fresh Cinnamon Rolls"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brown-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;