import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

function Page1() {
    return (
            <div>
        <nav className = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
            <div className = "container">
                <a className = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "index.html">
                    <img src = "images/logo_icon.png" alt = "site icon"/>
                    <span className = "text-uppercase fw-lighter ms-2">Fajardo Tailor</span>
                </a>

                <div className = "order-lg-2 nav-btns">
                    <button type = "button" className = "btn position-relative">
                        <i className = "fa fa-shopping-cart"></i>
                        <span className = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                    </button>
                    <button type = "button" className = "btn position-relative">
                        <i className = "fa fa-heart"></i>
                        <span className = "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                    </button>
                    <button type = "button" className = "btn position-relative">
                        <i className = "fa fa-search"></i>
                    </button>
                    <button onclick="myFunction()">
                        <i className="fa-regular fa-moon"></i>
                    </button>
                </div>

                <button className = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                    <span className = "navbar-toggler-icon"></span>
                </button>

                <div className = "collapse navbar-collapse order-lg-1" id = "navMenu">
                    <ul className = "navbar-nav mx-auto text-center">
                        <li className = "nav-item px-2 py-2">
                            <a className = "nav-link text-uppercase text-dark" href = "index.html">home</a>
                        </li>
                        <li className = "nav-item px-2 py-2">
                            <a className = "nav-link text-uppercase text-dark" href = "index.html#collection">collection</a>
                        </li>
                        <li className = "nav-item px-2 py-2">
                            <a className = "nav-link text-uppercase text-dark" href = "index.html#special">specials</a>
                        </li>
                    <li className="nav-item px-2 py-2 dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PRODUCT</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="BedSheet.html">Bedsheet</a></li>
                    <li><a className="dropdown-item" href="curtains.html">Curtains</a></li>
                    </ul>
                </li>
                        <li className = "nav-item px-2 py-2">
                            <a className = "nav-link text-uppercase text-dark" href = "index.html#about">about us</a>
                        </li>
                        <li className = "nav-item px-2 py-2 border-0">
                            <a className = "nav-link text-uppercase text-dark" href = "index.hmlt#popular">popular</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Section id = "collection" className = "py-5">
            <div className = "row g-0">
                <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                    <a href="all_Products.html" className="btn m-2 text-dark active-filter-btn" role="button">All</a>
                    <a href="bestsellers.html" className="btn m-2 text-dark " role="button">Best Sellers</a>
                    <a href="new_arrival.html" className="btn m-2 text-dark " role="button">New Arrival</a>
                </div>

                <div className = "collection-list mt-4 row gx-0 gy-3">
                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                        <div className = "collection-img position-relative">
                            <img src = "images/bluegirl1.jpg" className = "w-100"/>
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
                            <p className = "text-capitalize my-1">Blue Girl Anime</p>
                                <span className = "fw-bold">$ 5.00</span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                        <div className = "collection-img position-relative">
                            <img src = "images/blueflower.jpg" className = "w-100"/>
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
                            <p className = "text-capitalize my-1">Blue Flower</p>
                                <span className = "fw-bold">$ 4.00</span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                        <div className = "collection-img position-relative">
                            <img src = "images/blue-white1.jpg" className = "w-100"/>
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
                                <p className = "text-capitalize my-1">Blue&white</p>
                                    <span className = "fw-bold">$ 4.50</span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                        <div className = "collection-img position-relative">
                            <img src = "images//ml1.jpg" className = "w-100"/>
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
                                < p className = "text-capitalize my-1">Shuriken</p>
                                    <span className = "fw-bold">$10.00 </span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                        <div className = "collection-img position-relative">
                            <img src = "images/mickyred1.jpg" className = "w-100"/>
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
                                <p className = "text-capitalize my-1">Micky Mouse Red Color</p>
                                    <span className = "fw-bold">$ 7.50</span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                        <div className = "collection-img position-relative">
                            <img src = "images/yinyang.jpg" className = "w-100"/>
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
                                < p className = "text-capitalize my-1">Yin & Yang</p>
                                    <span className = "fw-bold">$ 12.50</span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                        <div className = "collection-img position-relative">
                            <img src = "images/grey_canadian2.jpg" className = "w-100"/>
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
                            <p className = "text-capitalize my-1">Grey Color</p>
                                <span className = "fw-bold">$ 9.99</span>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                        <div className = "collection-img position-relative">
                            <img src = "images/spiderman.jpg" className = "w-100"/>
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
                                <p className = "text-capitalize my-1">$ 9.99</p>
                                    <span className = "fw-bold">$ 4.50</span>
                            </div>
                        </div>
                    </div>
            </div>
        </Section>

        <div className="pagination">
            <a href="page2.html">&laquo;</a>
            <a href="all_Products.html">1</a>
            <a href="page1.html" className="active">2</a>
            <a href="#">3</a>
            <a href="page3.html">&raquo;</a>
        </div>

             
        </div>
    );
}

/*
        <script>
            function myFunction() {
                var element = document.body;
                element.classList.toggle("dark-mode");
                };
        </script> 
*/

export default Page1;