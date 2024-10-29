import React from 'react';
import { Form, BrowserRouter as Link } from 'react-router-dom';
import logo from '../image/logo.png';
import '../App.css';
export default function Header() {
  return (
    <div>
   
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand ms-2" href="#"><img className="img-logo" src={logo} width={100} alt=''/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-3 me-3 text-light fw-normal fs-4">
          <Link class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item ms-3 me-3 text-light fw-normal fs-4">
        <Link class="nav-link" aria-current="page" href="#">About</Link>
        </li>
        
        <li class="nav-item ms-3 me-3 text-light fw-normal fs-4">
          <Link class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>

  )
}
