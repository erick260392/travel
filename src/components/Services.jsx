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
      title: 'obten los mejores Precios',
      subtitle: 'paga con nuestra la aplicacion y obten grandes recompenzas'
    },
    {
      icon: service2,
      title: "libre de Covid",
      subtitle: 'todos los hoteles son sanitizados libres de covid'
    },
    {
      icon: service3,
      title: 'flexibilidad de Pago',
      subtitle: 'Divirtete y obten flexibilidad en tus pagos aparta tu viaje',
    },
    {
      icon: service4,
      title: 'Encuentra el mejor Lugar para Viajar Cerca de ti',
      subtitle: 'encuentra los mejores Lugares para viajar y Hoteles para Viajar cerca de ti en un solo click',

    }
  ]




  return (
    <Section id='services'>
      {data.map((service, index) => {
        return(
          <div className="service">
            <div className="icon">
              
            </div>
          </div>
        );


      })}
    </Section>
  )
}


const Section = styled.section`


`;