'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Restaurants',
    [{
        name: "Le depaneur",
        
      },
      {
        name: "Ceviche",
      },
      {
        name: "Opi",
      },
      {
        name: "Coordenadas",
      },
      {
        name: "Vintage",
      },
      {
        name: "Hortifruti",
      },
      {
        name: "Lupolino",
      },
      {
        name: "Murmurinho",
      },
      {
        name: "Marin",
      },
      {
        name: "Tia",
      },
      {
        name: "Prefacio",
      },
      {
        name: "Marchezinho",
      },
      {
        name: "Buteco21",
      },
      {
        name: "Hells",
      },
      {
        name: "TTBurguer",
      },
      {
        name: "Oaks Burrito",
      },
      {
        name: "Vezpa",
      },
      {
        name: "Formatto",
      },
      {
        name: "Tah pah",
      },
      {
        name: "Colarinho",
      },
      {
        name: "The Boua",
      },
      {
        name: "Anexo",
      },
      {
        name: "Cafofo",
      },
      {
        name: "Vizinhando",
      },
      {
        name: "Birreria",
      },
      {
        name: "Hocus Pocus",
      },
      {
        name: "Balada Mix",
      },
      {
        name: "Elias",
      },
      {
        name: "Liceu",
      },
      {
        name: "Novotel",
      },
      {
        name: "Delírio Tropical",
      },
      {
        name: "Tutto Nhoque",
      },
      {
        name: "Liga dos Botecos",
      },
      {
        name: "Porco Amigo",
      },
      {
        name: "Frances",
      },
      {
        name: "Mizu",
      },
      {
        name: "Matsuda",
      },
      {
        name: "Outback",
      },
      {
        name: "Mamma Jamma",
      },
      {
        name: "Bullguer",
      },
      {
        name: "Gula Gula",
      },
      {
        name: "Artagão",
      },
      {
        name: "Dow Jones",
      },
      {
        name: "Mercure",
      },
      {
        name: "Ibis",
      },
      {
        name: "Cabidinho",
      },
      {
        name: "Comuna",
      },
      {
        name: "Columbia",
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Restaurants', null, {}),
};