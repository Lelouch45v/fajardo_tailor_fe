import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

function NewArrival() {
    return (
            <div>
                
                    <section id = "special" className = "py-5">
                        <div className = "container">
                            <div className = "title text-center py-5">
                                <h1 className = "position-relative d-inline-block">New Arrival</h1>
                            </div>

                            <div className = "special-list row g-0">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/space.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Space theme Bedsheet</p>
                                        <span className = "fw-bold d-block">$ 12.50</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/demon1.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Nezuko Demon Slayer Full Set</p>
                                        <span className = "fw-bold d-block">$ 20.50</span>
                                        
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/akatsuki.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Naruto Akatsuki Edition</p>
                                        <span className = "fw-bold d-block">$ 15.50</span>
                                        
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/madara.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Madara Uchiha Set</p>
                                        <span className = "fw-bold d-block">$ 12.50</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

               

            </div>
    );
}

/*
                    <script>
                            function myFunction() {
                                var element = document.body;
                                element.classList.toggle("dark-mode");
                            }
                    </script>
*/

export default NewArrival;
