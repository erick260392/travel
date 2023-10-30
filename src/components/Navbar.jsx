import React from 'react'
import styled from "styled-components";
import logo from '../assets/logo.png';

export default function Navbar() {
  return (

    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            AlexisTravel
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#recommendes">Lugares</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
        </ul>
        <button>Conectar</button>
      </Nav>

    </>
  );

}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;  
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;  
      text-transform: uppercase;

      img{
      
          border-radius:10rem;
          max-width: 70px;
          max-heigth:70px;
      }

    }

    .toggle {  
      display: none;
    }
  }

    ul {
      
   
      display: flex;
      list-style-type: none;
      gap: 1rem;
    }

    li {
    
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover{
          color:#023e8a;
        }
      }
      &:first-of-type{
     a{
      color:#023e8a;
      font-weight:900;
       }
      }
    }
  button{
    padding:0.5rem 1rem;
    cursor:pointer;
    border-radius:1rem;
    border:none;
    color:white;
    background-color:#48cae4;
    text-transform:uppercase;
    font-size:1.1rem;
    letter-spacing:0.1rem;
    transition:0.3s ease-in-out;
    &:hover{
      background-color:#023e8a;
    }


  }
`;
