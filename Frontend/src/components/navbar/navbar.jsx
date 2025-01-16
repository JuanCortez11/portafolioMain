import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
      <div class = "navbar-mio">
        <nav class="navbar navbar-expand-lg navbar-light">
          
  
     
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <div>
      <Link to = {'/'}> 
        <a className="navbar-brand text-dark border rounded px-1 fondo-boton-rojo" >
         <i class="bi bi-suit-club"></i>INICIO
        </a>
        </Link>

      </div>

      <div>
      <Link to = {'/torneos'}> 
      <a className="navbar-brand text-white border rounded px-1 fondo-boton-negro" >
       <i class="bi bi-suit-diamond"></i>TORNEOS
        </a>
        </Link>

      </div>
      <div>
      <Link to = {'/crupiers'}> 
      <a className="navbar-brand text-dark border rounded px-1 fondo-boton-rojo" >
       <i class="bi bi-suit-heart"></i>CRUPIERS
        </a>
      </Link>
      </div>
      <div>
      <Link to = {'/mesas'}> 
      <a className="navbar-brand text-white border rounded px-1 fondo-boton-negro" >
      <i class="bi bi-suit-spade"></i>MESAS
        </a>
      </Link>
      </div>
      <div>
      <Link to = {'/jugadores'}> 
      <a className="navbar-brand text-dark border rounded px-1 fondo-boton-rojo"  >
       <i class="bi bi-suit-club"></i>JUGADORES
        </a>
      </Link>
      </div>
      <div>
      <Link to = {'/juegoarmado'}> 
      <a className="navbar-brand text-white border rounded px-1 fondo-boton-negro" >
      <i class="bi bi-suit-diamond"></i>JUEGOS POSIBLES
        </a>
      </Link>
      </div>
      <div>
      <Link to = {'/inscripcion'}> 
      <a className="navbar-brand text-dark border rounded px-1 fondo-boton-rojo" >
       <i class="bi bi-suit-heart"></i>INSCRIPCION
        </a>
      </Link>
      </div>
      <div>
      <Link to = {'/premios'}> 
      <a className="navbar-brand text-white border rounded px-1 fondo-boton-negro" >
       <i class="bi bi-suit-spade"></i>PREMIOS
        </a>
      </Link>
      </div>
      </ul>
      </div>
      </nav>
      </div>
    )}