import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/hero.png'


export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>VIAJA Y EXPLORA</h1>
          <h3>¡Bienvenido a AlexisTravel!</h3>
          <p>
          Descubre el mundo a través de experiencias inolvidables con nosotros. En Alexis Travel, no simplemente organizamos viajes, creamos momentos que perduran en el tiempo. Nos enorgullece ofrecer no solo destinos asombrosos, sino también la promesa de aventuras que trascienden las expectativas.
          </p>
          <p>
          Sumérgete en un universo de posibilidades donde cada viaje es una historia única por contar. Nuestro equipo apasionado está dedicado a diseñar itinerarios que no solo te llevan a destinos excepcionales, sino que también capturan la esencia y la autenticidad de cada lugar que exploramos.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">A Donde te Gustaria Viajar</label>
            <input type="text" placeholder='Busca tu lugar' />
          </div>
          <div className="container">
            <label htmlFor="">Salida</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Regreso</label>
            <input type="date" />
          </div>
          <button>Explora ahora</button>
        </div>

      </div>
    </Section>
  )
}

const Section = styled.section`
position:relative;
margin-top:2rem;
width:100%;
height:100%;
.background{
    height:100%;
  img{
    border-radius:1rem;
    width:100%;
    filter:brightness(80%);
  }
}

.content{
  height:100%;
  widht:100%;
  position:absolute;
  top:0;
  z-index:3;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:1rem;
  .title{
    color:white;
    h1{
      font-size:3rem;
      letter-spacing:0.2rem;
      margin-bottom:0.5rem;
    }
    p{
      text-align:center;
      padding:0 30vw;
      margin-top:0.5rem;
      font-size:1.2rem;

    }
  }
  .search{
   display:flex;
   background-color:#ffffffce;
   padding:0.5rem;
   border-radius:0.5rem;
   .container{
     display:flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     padding:0 1.5rem;
     label{
      font-size:1.1rem;
      color:#03045e;
     }
     input{
      background-color:transparent;
      border:none;
      text-align:center
      color:black;
      &[type="date"]{
        padding-left:3rem;
      }
      &::placeholder{
        color:black;
      }
      &:focus{
        outline:none;
      }
    }
   }
   button{
    padding:1rem;
    cursor:pointer;
    border-radius:0.3rem;
    border:none;
    color:white;
    background-color:#4361ee;
    font-size:1.1rem;
    text-transform:uppercase;
    transition:0.3s ease-in-out;
    &:hover{
      background-color:#023e8a;
    }
   }
  }
}
@media screen and (min-width: 280px) and (max-width: 980px) {
  height: 25rem;
  .background {
    background-color: palegreen;
    img {
      height: 100%;
    }
  }
  .content {
    .title {
      h1 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
        padding: 1vw;
      }
    }
    .search {
      flex-direction: column;
      padding: 0.8rem;
      gap: 0.8rem;
      /* padding: 0; */
      .container {
        padding: 0 0.8rem;
        input[type="date"] {
          padding-left: 1rem;
        }
      }
      button {
        padding: 1rem;
        font-size: 1rem;
      }
      /* display: none; */
    }
  }
}



`;