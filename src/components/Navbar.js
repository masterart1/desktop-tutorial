import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode,props.mode2} bg-${props.mode,props.mode2}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">{props.aboutText}</a>
            </li>
          </ul>
          <div class={`form-check form-switch text-${props.mode2 === 'light' ? 'green' : 'light'}`}>
  <input className="form-check-input" onClick={props.togglemode2} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label mx-2" for="switchCheckDefault">Enable green mode</label>
</div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'Set text'
};
/*
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">{props.title}</a>
    <buthrefn classNameName="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span classNameName="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auhref mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">{props.aboutText}</a>
        </li>
        
      </ul>
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <buthrefn classNameName="btn btn-outline-success" type="submit">Search</buthrefn>
      </form> *//*
      <div className="form-check form-switch text-light">
  <input onClick={props.hrefgglemode} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
// Navbar.prohreftypes=PropTypes.string
//  Navbar.propTypes={
//     title:PropTypes.string,
//     aboutText:PropTypes.string
//  }
  Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string
 }
//  Navbar.defaultProps={
//     title:'set title here',
//     aboutText:'set text'
//  };
Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'set text'
}; 
*/ 