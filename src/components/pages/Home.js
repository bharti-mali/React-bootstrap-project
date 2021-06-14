import React from 'react'
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import service1 from "../images/service1.jpg";

const Home = () => {
  return (
    <>
    <Slider />
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="main-heading">Our Company</h3>
                    <div className="underline mx-auto"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to="/About" className="btn btn-warning shadow">Read More!</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="section bg-c-light">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4 text-center">
                    <h3 className="main-heading">Vision, Mission and Value </h3>
                    <div className="underline mx-auto"></div>
                </div>

            <div className="col-md-4 text-center">
                <h6>Our Vision</h6>
                <p>but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="col-md-4 text-center">
                <h6>Our Mission</h6>
                <p>but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="col-md-4 text-center">
                <h6>Our Core Value</h6>
                <p>but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

            </div>
        </div>
    </div>

    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4 text-center">
                    <h3 className="main-heading">Our Services</h3>
                    <div className="underline mx-auto"></div>
                </div>

            <div className="col-md-4 text-center">
                <div className="card shadow">
                <img src={service1} className="w-100 border-bottom" alt="services" />
                    <div className="card-body">
                    <h6>Services1</h6>
                    <div className="underline mx-auto"></div>
                    <p>but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to="/services" className="btn btn-link">read more</Link>
                    </div>
                </div> 
            </div>
            <div className="col-md-4 text-center">
                <div className="card shadow">
                <img src={service1} className="w-100 border-bottom" alt="services" />
                    <div className="card-body">
                    <h6>Services1</h6>
                    <div className="underline mx-auto"></div>
                    <p>but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to="/services" className="btn btn-link">read more</Link>
                    </div>
                </div> 
            </div>
            <div className="col-md-4 text-center">
                <div className="card shadow">
                <img src={service1} className="w-100 border-bottom" alt="services" />
                    <div className="card-body">
                    <h6>Services1</h6>
                    <div className="underline mx-auto"></div>
                    <p>but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to="/services" className="btn btn-link">read more</Link>
                    </div>
                </div> 
            </div>
           

            </div>
        </div>
    </div>
    
    </>
  )
}

export default Home
