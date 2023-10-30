import React,{useState} from 'react';
import styled from 'styled-components';
import Destination1 from '../assets/Destination1.png';
import Destination2 from '../assets/Destination2.png';
import Destination3 from '../assets/Destination3.png';
import Destination4 from '../assets/Destination4.png';
import Destination5 from '../assets/Destination5.png';
import Destination6 from '../assets/Destination6.png';
import info1 from '../assets/info1.png';
import info2 from '../assets/info2.png';
import info3 from '../assets/info3.png';


 

export default function Recommended() {

  const data =[
    {
      image:Destination1,
      title:'Singapure',
      subtitle:'Singapure es la capital de la republica de Singapure',
      cost:'38,000',
      duration: 'Dos noches y dos Dias',
    },
    {
      image:Destination2,
      title:'Thailand',
      subtitle:'Thailand es un Lugar del Sureste Asiatico, Este lugar es para ti lo sabes',
      cost:'54,200',
      duration:'Dos, noches y dos Dias',
    },
    {
      image:Destination3,
      title:'Paris',
      subtitle:'Paris, es la capital de francia y la mayor de Europa',
      cost:'45,000',
      duration:'Dos noches',
    },
    {
      image:Destination4,
      title:'New Zealand',
      subtitle:'Nueva zelanda es una instala dentro de un Pais',
      cost:'45,000',
      duration:'Un dia y una Noche',
    },
    {
      image:Destination5,
      title:'Bora Bora',
      subtitle:'Bora Bora es una pequeña isla en el sureste del pacifico de Northwest',
      cost:'95,000',
      duration:'Dos dias y Dos noches',
    },
    {
      image:Destination6,
      title:'London',
      subtitle:'London es la capital de Inglaterra',
      cost:'38,000',
      duration:'Tres dias y Dos noches',
    }
  ]

  const packages =[
    'El escape de Fin de Semana',
    'El paquete Navideño',
    'El tour grupal',
    'Viaje para que te reecuentres Contigo mismo',
  ]

  return (
    <div></div>
  )
}
