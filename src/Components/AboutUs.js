import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const AboutUs = (props) => {
    return (<div className="container"style={{backgroundColor : props.mode ==='dark'?'rgb(1 36 72)':'white', 
    color :props.mode==='dark'?'white':'black'}}>
      <h1 className='my-5'>About Us</h1>
<div className="accordion" id="accordionExample" style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}} >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}}>
      <strong>
       About Us
      </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}}>
        This is my first project . My namne is Rohit Bhatta. I'm by profession a computer engineer.This is something I developed while doing my intrenship at Sysqube <strong><code>Sysqube.com</code></strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}}>
       <strong>
        My information
       </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}}>
        

        <strong >
         Name : Rohit Bhatta,
         
             Email : bhattarohit7@gmail.com,
            
            Phone number : 9865376752

            
          </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor : props.mode ==='dark'?'#0d3672':'white', 
    color :props.mode==='dark'?'white':'black'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </div>);
}

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;
// #endregion

export default AboutUs;