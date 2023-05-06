import { Link } from "react-router-dom";

function Home() {
    
    return (
        <div>

            <section id = "collection" className = "py-5">
                <div className = "container">
                    <div className = "title text-center">
                        <h2 className = "position-relative d-inline-block">New Collection</h2>
                    </div>

                    <div className = "row g-0">
                        <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                            <button>
                                <Link to='./' className="btn m-2 text-dark active-filter-btn" role="button">
                                    All
                                </Link>
                            </button>
                            <a href="new_arrival.html" className="btn m-2 text-dark " role="button">Best Sellers</a>
                            <a href="new_arrival.html" className="btn m-2 text-dark " role="button">New Arrival</a>
                        </div>

                        <div className = "collection-list mt-4 row gx-0 gy-3">
                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                <div className = "collection-img position-relative">
                                    <img src = "images/Grey_Canadian.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images/Onepiece1.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images/naruto.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images//solo-leveling.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images/samurai1.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images/evelyn.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images/demonslayer.jpg" className = "w-100" alt=""/>
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
                                    <img src = "images/buko1.jpeg" className = "w-100" alt=""/>
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
            </section>

            <section id = "special" className = "py-5">
                <div className = "container">
                    <div className = "title text-center py-5">
                        <h2 className = "position-relative d-inline-block">Special section</h2>
                    </div>

                    <div className = "special-list row g-0">
                        <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                            <div className = "special-img position-relative overflow-hidden">
                                <img src = "images/zoro1.jpeg" className = "w-100" alt=""/>
                                <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                    <i className = "fas fa-heart"></i>
                                </span>
                            </div>
                            <div className = "text-center">
                                <p className = "text-capitalize mt-3 mb-1">Zoro Onepiece Limited Edition</p>
                                <span className = "fw-bold d-block">$ 30.50</span>
                                    <Link to='./Pages/AddToCart' className = "btn btn-primary mt-3">
                                        Add to Cart
                                    </Link>
                            </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                            <div className = "special-img position-relative overflow-hidden">
                                <img src = "images/demon1.jpg" className = "w-100" alt=""/>
                                <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                    <i className = "fas fa-heart"></i>
                                </span>
                            </div>
                            <div className = "text-center">
                                <p className = "text-capitalize mt-3 mb-1">Nezuko Demon Slayer Full Set</p>
                                <span className = "fw-bold d-block">$ 20.50</span>
                                <Link to='./Pages/AddToCart' className = "btn btn-primary mt-3">
                                    Add to Cart
                                </Link>
                            </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                            <div className = "special-img position-relative overflow-hidden">
                                <img src = "images/akatsuki.jpg" className = "w-100" alt=""/>
                                <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                    <i className = "fas fa-heart"></i>
                                </span>
                            </div>
                            <div className = "text-center">
                                <p className = "text-capitalize mt-3 mb-1">Naruto Akatsuki Edition</p>
                                <span className = "fw-bold d-block">$ 15.50</span>
                                <Link to='./Pages/AddToCart' className = "btn btn-primary mt-3">
                                    Add to Cart
                                </Link>
                            </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                            <div className = "special-img position-relative overflow-hidden">
                                <img src = "images/madara.jpg" className = "w-100" alt=""/>
                                <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                    <i className = "fas fa-heart"></i>
                                </span>
                            </div>
                            <div className = "text-center">
                                <p className = "text-capitalize mt-3 mb-1">Madara Uchiha Set</p>
                                <span className = "fw-bold d-block">$ 12.50</span>
                                <Link to='./Pages/AddToCart' className = "btn btn-primary mt-3">
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "about" className = "py-5">
                <div className = "container">
                    <div className = "row gy-lg-5 align-items-center">
                        <div className = "col-lg-6 order-lg-1 text-center text-lg-start">
                            <div className = "title pt-3 pb-5">
                                <h2 className = "position-relative d-inline-block ms-4">About Us</h2>
                            </div>
                            <p className = "lead text-muted">We are a new sewing shop.</p>
                            <p>This shop runs by Fajardo Family that started during pandemic while our Sari Sari store addedd some sewing machine and we decide to become sari sari store and sewing shop that always available.</p>
                        </div>
                        <div className = "col-lg-6 order-lg-0">
                            <img src = "images/sew2.jpeg" alt = "" className = "img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "popular" className = "py-5">
                <div className = "container">
                    <div className = "title text-center pt-3 pb-5">
                        <h2 className = "position-relative d-inline-block ms-4">Popular For This Year</h2>
                    </div>

                    <div className = "row">
                        <div className = "col-md-6 col-lg-4 row g-3">
                            <h3 className = "fs-5">Top Rated</h3>
                                <div className = "d-flex align-items-start justify-content-start"/>
                                        <img src = "images/zoro1.jpeg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Zoro Limited Edition</p>
                                            <span>$ 15.00</span>
                                    </div>
                                </div>

                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/akatsuki.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Naruto Akatsuki Edition</p>
                                            <span>$ 15.50</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/zenitzu.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Zenitsu</p>
                                            <span>$ 10.00</span>
                                    </div>
                                </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 row g-3">
                            <h3 className = "fs-5">Best Selling</h3>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/solo-leveling.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Solo Leveling Full Set</p>
                                            <span>$ 15.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/Onepiece1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">One Piece Full Set</p>
                                            <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/demon1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Nezuko Demon Slayer</p>
                                            <span>$ 20.50</span>
                                    </div>
                                </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 row g-3">
                            <h3 className = "fs-5">On Sale</h3>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/madara.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Madara</p>
                                            <span>$ 10.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/bluegirl1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Blue Anime Girl</p>
                                            <span>$ 5.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/space.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Space</p>
                                            <span>$ 8.00</span>
                                    </div>
                                </div>
                        </div>
                </div>
            </section>

        </div>
            
    );
}

/*
    <button className="open-button" onclick="openForm()">Chat</button>

                        <div className="chat-popup" id="myForm">
                            <form action="" className="form-container">
                                <h1>Chat</h1>

                                <label for="msg"><b>Message</b></label>
                                <textarea placeholder="Type message.." name="msg" required></textarea>

                                <button type="submit" className="btn">Send</button>
                                <button type="button" className="btn cancel" onclick="closeForm()">Close</button>
                            </form>
                        </div>

                    <script>
                        function openForm() {
                        document.getElementById("myForm").style.display = "block";
                        }

                        function closeForm() {
                        document.getElementById("myForm").style.display = "none";
                        }
}
                    </script>
*/

export default Home;