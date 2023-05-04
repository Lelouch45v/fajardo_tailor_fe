function Footer() {
    return (
        <>
            <footer className = "bg-dark py-5">
                <div className = "container">
                    <div className = "row text-white g-4">
                        <div className = "col-md-6 col-lg-3">
                            <a className = "text-uppercase text-decoration-none brand text-white" href = "index.html">Fajardo Tailor</a>
                            <p className = "text-white text-muted mt-3">This shop runs by Fajardo Family that started during pandemic while our Convenience store addedd some sewing machine and we decide to become Convenience store and sewing shop that always available</p>
                        </div>

                        <div className = "col-md-6 col-lg-3">
                            <h5 className = "fw-light">Links</h5>
                            <ul className = "list-unstyled">
                                <li className = "my-3">
                                    <a href = "#" className = "text-white text-decoration-none text-muted">
                                        <i className = "fas fa-chevron-right me-1"></i> Home
                                    </a>
                                </li>
                                <li className = "my-3">
                                    <a href = "#" className = "text-white text-decoration-none text-muted">
                                        <i className = "fas fa-chevron-right me-1"></i> Collection
                                    </a>
                                </li>
                                
                                
                                <li className = "my-3">
                                    <a href = "#" className = "text-white text-decoration-none text-muted">
                                        <i className = "fas fa-chevron-right me-1"></i> About Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className = "col-md-6 col-lg-3">
                            <h5 className = "fw-light mb-3">Contact Us</h5>
                            <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                                <span className = "me-3">
                                    <i className = "fas fa-map-marked-alt"></i>
                                </span>
                                <span className = "fw-light">
                                    187 Don.t. herrera, Sta. Quiteria Caloocan City,Philippines
                                </span>
                            </div>
                            <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                                <span className = "me-3">
                                    <i className = "fas fa-envelope"></i>
                                </span>
                                <span className = "fw-light">
                                    Fajardo_SewingShop@gmail.com
                                </span>
                            </div>
                            <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                                <span className = "me-3">
                                    <i className = "fas fa-phone-alt"></i>
                                </span>
                                <span className = "fw-light">
                                    +639204340677
                                </span>
                            </div>
                        </div>

                        <div className = "col-md-6 col-lg-3">
                            <h5 className = "fw-light mb-3">Follow Us</h5>
                            <div>
                                <ul className = "list-unstyled d-flex">
                                    <li>
                                        <a href = "https://www.facebook.com/profile.php?id=100064281574087" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i className = "fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i className = "fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i className = "fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i className = "fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;