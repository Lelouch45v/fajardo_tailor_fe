import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

function Page2() {
    return (
        
        <div>
            
                <Section id = "collection" className = "py-5">
                    <div className = "container">
                        <div className = "title text-center">
                            <h2 className = "position-relative d-inline-block">New Collection</h2>
                        </div>

                        <div className = "row g-0">
                            <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                                <a href="all_Products.html" className="btn m-2 text-dark active-filter-btn" role="button">All</a>
                                <a href="bestsellers.html" className="btn m-2 text-dark " role="button">Best Sellers</a>
                                <a href="new_arrival.html" className="btn m-2 text-dark " role="button">New Arrival</a>


                            </div>

                            <div className = "collection-list mt-4 row gx-0 gy-3">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/Grey_Canadian.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">Grey Canadian</p>
                                        <span className = "fw-bold">$ 5.00</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/Onepiece1.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">One Piece Full Set</p>
                                        <span className = "fw-bold">$ 20.00</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/naruto.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">Naruto BedSheet Only</p>
                                        <span className = "fw-bold">$ 15.50</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images//solo-leveling.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">solo-leveling Full Set</p>
                                        <span className = "fw-bold">$15.00 </span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/samurai1.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">Samurai Bedsheet And Pillow Case</p>
                                        <span className = "fw-bold">$ 10.50</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/evelyn.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">Evelyn Bedsheet</p>
                                        <span className = "fw-bold">$ 12.50</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/demonslayer.jpg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">Demon Slayer Full Set</p>
                                        <span className = "fw-bold">$ 25.50</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/buko1.jpeg" className = "w-100"/>
                                        <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                    </div>
                                    <div className = "text-center">
                                        <div className = "rating mt-3">
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                            <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        </div>
                                        <p className = "text-capitalize my-1">Buko No Hero Academia Full Set</p>
                                        <span className = "fw-bold">$ 25.50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="all_Products.html">1</a>
                    <a href="page1.html" className="active">2</a>
                    <a href="page3.html">3</a>
                    <a href="page2.html">&raquo;</a>
                </div>


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

export default Page2;