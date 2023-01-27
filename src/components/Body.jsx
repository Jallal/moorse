import React from 'react';
import body from './body.css'
import { TileLayout } from "@progress/kendo-react-layout";


class Body extends React.Component {

    handleClick = (e) => {
        const searchIcon = document.querySelector('#search-icon');
        const navElements = document.querySelectorAll('.nav');
        const searchInput = document.querySelector('.search-input');
        const menuToggle = document.querySelector('.menu-toggle');

searchIcon.addEventListener('click', () => {
  navElements.forEach((element) => {
    element.classList.toggle('search');
    element.classList.toggle('no-search');
  });
  searchInput.classList.toggle('search-active');
});

menuToggle.addEventListener('click', () => {
  navElements.forEach((element) => {
    element.classList.toggle('mobile-nav');
  });
  menuToggle.classList.toggle('is-active');
});

    }


      render() {
        return (
<>

<div className="page-wrapper">
 {/* <div className="nav-wrapper">
  <div className="grad-bar"></div>
  <nav className="navbar">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo"></img>
    <div className="menu-toggle" id="mobile-menu">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
    <ul className="nav no-search">
      <li className="nav-item"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#">About</a></li>
      <li className="nav-item"><a href="#">Work</a></li>
      <li className="nav-item"><a href="#">Careers</a></li>
      <li className="nav-item"><a href="#">Contact Us</a></li>
      <i className="fas fa-search" id="search-icon"></i>
      <input className="search-input" type="text" placeholder="Search.."></input>
    </ul>
  </nav> 
  </div>*/}
  <section className="headline">
    <h1>Tech Brain</h1>
    <p>Your clear path to becoming a successful developer!</p>
  </section>
  <section className="features">
    <div className="feature-container">
      <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature"></img>
      <h2>Flexbox Featured</h2>
      <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
    </div>
    <div className="feature-container">
      <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature"></img>
      <h2>CSS Grid Navigation</h2>
      <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
    </div>
    <div className="feature-container">
      <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature"></img>
      <h2>Basic HTML5</h2>
      <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
    </div>
  </section>
  <section className="features">
    <div className="feature-container">
      <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature"></img>
      <h2>Flexbox Featured</h2>
      <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
    </div>
    <div className="feature-container">
      <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature"></img>
      <h2>CSS Grid Navigation</h2>
      <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
    </div>
    <div className="feature-container">
      <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature"></img>
      <h2>Basic HTML5</h2>
      <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
    </div>
  </section>
</div>
</>
);
}
}
export default Body;
