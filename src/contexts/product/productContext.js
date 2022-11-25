import React, { createContext } from 'react';

const produtsData = [
  {
    name: 'Alface',
    image: "/alface.png",
    contactPhone: '38922222222',
    contactEmail: 'teste@mail.com',
    description: 'Estou a procura de compradores para alfaces que não necessito mais. Oferto por R$2,50 o pé, mas posso negociar no chat de acordo com o que for proposto.',
    location: 'Rua Álvaro Antônio Zini, 1234',
  }
];

const Context = createContext(0);

export default Context;