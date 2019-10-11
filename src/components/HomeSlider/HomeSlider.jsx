import React, { Component } from 'react';
import pic1 from '../Images/slider1.jpg';
import pic2 from '../Images/slider2.jpg';
import pic3 from '../Images/slider3.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import '../HomeSlider/HomeSlider.css';


const HomeSlider = () => {
    return (
        <div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 slideSize" src={pic1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 slideSize" src={pic2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 slideSize" src={pic3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
        </div>
    );
}

export default HomeSlider;