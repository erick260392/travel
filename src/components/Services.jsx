import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';


export default function Services() {
  const data = [
    {
      icon: service1,
      title: 'Obten los mejores Precios',
      subtitle: 'Paga con nuestra la aplicacion y obten grandes recompenzas'
    },
    {
      icon: service2,
      title: "Libre de Covid",
      subtitle: 'Todos los hoteles son sanitizados libres de covid'
    },
    {
      icon: service3,
      title: 'Flexibilidad de Pago',
      subtitle: 'Divirtete y obten flexibilidad en tus pagos aparta tu viaje',
    },
    {
      icon: service4,
      title: 'Encuentra el mejor Lugar para Viajar cerca de ti',
      subtitle: 'Encuentra los mejores Lugares para viajar y Hoteles para Viajar cerca de ti en un solo click',

    }
  ]




  return (
    <Section id='services'>
      {data.map((service, index) => {
        return (
          <div key={index} className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </div>
        );


      })}
    </Section>
  )
}


const Section = styled.section`
padding:5rem 0;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:1rem;
.service{
  display:flex;
  flex-direction:column;
  gap:1rem;
  padding:2rem;
  background-color: aliceblue;
  box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;
  &:hover{
    transform:translateX(0.4rem)translateY(-1rem);
    box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
  }
  .icon{
    img{
      height:2.4rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 720px) {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
@media screen and (min-width: 720px) and (max-width: 1080px) {
  grid-template-columns: repeat(2, 1fr);
}

`;