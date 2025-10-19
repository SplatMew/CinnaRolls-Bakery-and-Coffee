import {chila_arrachera, chila_huevo, chila_pollo, chila_chicharron, chila_mini, cuernito, popeye, quesadillas,
        placeholder, rol_canela, rol_manzana, rol_nuez, rol_platano} from './importsImages';

const Menu = () => {
  const menuItems = {
    'Roles de Canela': [
      {
        name: 'Rol de Canela',
        description: 'Nuestro suave y esponjoso roll con un remolino perfecto de canela y delicioso glaseado.',
        price: '$76',
        image: rol_canela
      },
      {
        name: 'Rol de Manzana',
        description: 'Rol de canela con delicioso puré de Manzana',
        price: '$85',
        image: rol_manzana
      },
      {
        name: 'Rol de Nuez',
        description: 'Delicioso Rol de canela con Nueces para ese "crunch" extra',
        price: '$85',
        image: rol_nuez
      },
      {
        name: 'Rol de Plátano',
        description: 'Rol de canela con glaseado y delicioso plátano fresco encima',
        price: '$85',
        image: rol_platano
      }
    ],
    'Café y Bebidas': [
      {
        name: 'Chocolate caliente',
        description: 'Chocolate caliente rico y cremoso ',
        price: '$95',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Café Latte',
        description: 'Café a base de espresso en base de leche.',
        price: '$95',
        image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Café Americano',
        description: 'Café tipo americano de 16 onzas',
        price: '$58',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Chai Latte',
        description: 'Bebida sabor a diferente mezcla de especias a base de leche.',
        price: '$111',
        image: 'https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    'Desayunos': [
      {
        name: 'Chilaquiles con Arrachera',
        description:'Chilaquiles bañados en salsa roja o verde, crema, queso, cebolla y cilantro con arrachera acompañados de frijoles refritos.',
        price:'$100',
        image: chila_arrachera
      },
      {
        name: 'Chilaquiles con Huevo',
        description:'Chilaquiles bañados en salsa roja o verde, crema, queso, cebolla y cilantro con 2 huevos acompañados de frijoles refritos.',
        price:'$100',
        image: chila_huevo
      },
      {
        name: 'Chilaquiles con Chicharron',
        description:'Chilaquiles bañados en salsa roja o verde, crema, queso, cebolla y cilantro con chicharrón acompañados de frijoles refritos.',
        price:'$100',
        image: chila_chicharron
      },
      {
        name: 'Chilaquiles con Pollo',
        description:'Chilaquiles bañados en salsa roja o verde, crema, queso, cebolla y cilantro con pollo acompañados de frijoles refritos.',
        price:'$100',
        image: chila_pollo
      },
      {
        name: 'Mini Chilaquiles',
        description:'Some description',
        price:'$100',
        image: chila_mini
      },
      {
        name: 'Sandwich Popeye',
        description:'Sandwich con pan integral de la casa, un huevo, jamón, espinaca, queso fresco y aguacate',
        price:'$139',
        image: popeye
      },
      {
        name: 'Cuernito',
        description:'Cuernito tostado con 1 huevo, queso fresco, lechuga, espinaca, germinado, tomate y aguacate.',
        price:'$100',
        image: cuernito
      },
      {
        name: 'Quesadillas',
        description:'Some description',
        price:'$100',
        image: quesadillas
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-950 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-2xl max-w-2xl mx-auto">
            Descubre nuestra deliciosa selección de roles de canela recién horneados, deliciosos desayunos y bebidas cuidadosamente hechas.
          </p>
        </div>

        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h3 className="text-3xl font-display font-semibold text-amber-950 mb-8 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {items.map((item, index) => (
                <div key={index} className="bg-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-amber-950">{item.name}</h4>
                      <span className="text-primary-600 font-bold text-lg">{item.price}</span>
                    </div>
                    <p className=" text-sm leading-relaxed">{item.description}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;