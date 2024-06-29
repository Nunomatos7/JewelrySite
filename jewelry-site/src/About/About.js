import './About.css';
import React from 'react';
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';

function About() {
  return (
    <section className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-col">
          <img src={about1} alt="About 1" className="about-image" />
        </div>
        <div className="about-col">
          <img src={about2} alt="About 1" className="about-image" />
          <h2>Hello! I'm Joana</h2>
          <h4>Jewelry Designer</h4>
          <p>Etiam quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id felis pellentesque congue et vitae tellus. Donec ullamcorper libero nisl, nec blandit dolor tempus feugiat. Aenean neque felis, fringilla nec placerat eget, sollicitudin a sapien. Cras ut auctor elit.</p>
          <p>Suspendisse sagittis lorem accumsan convallis pharetra. Praesent ex ante, placerat quis purus a, tempor consectetur lorem. Integer accumsan pharetra orci nec tempor. Quisque mollis vel enim a facilisis. Aliquam ornare nunc nibh, sit amet porta diam pretium in. Cras et velit faucibus, dignissim tellus at.</p>
          <p>Aliquet nisl. Nulla tempor mauris sed pretium egestas. Ut mi lacus, tincidunt ac quam quis, ultricies laoreet purus. Donec tincidunt scelerisque lacus, vel convallis augue interdum ac. Etiam eget tortor ac odio aliquam lobortis quis at augue. Duis ut hendrerit tellus, elementum lacinia elit. Maecenas at consectetur ex, vitae consequat augue. Vivamus eget dolor vel quam condimentum sodales.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
