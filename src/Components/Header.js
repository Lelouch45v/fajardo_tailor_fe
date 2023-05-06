function Header() {
    return (
        <>
            <div id="header" className="vh-100 carousel slide" data-bs-ride="carousel">
                <div className="container h-100 d-flex align-items-center carousel-inner">
                    <div className="text-center carousel-item active">
                        <h2 className="text-capitalize text-white">best collection</h2>
                        <h1 className="text-uppercase py-2 fw-bold text-white">new arrivals</h1>
                        <a href="#" className="btn mt-3 text-uppercase">Shop now</a>
                    </div>
                    <div className="text-center carousel-item">
                        <h2 className="text-capitalize text-white">Best Price & Offer</h2>
                        <h1 className="text-uppercase py-2 fw-bold text-white">New season</h1>
                        <a href="#" className="btn mt-3 text-uppercase">Buy Now</a>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#header" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </>
    );
}

    export default Header;