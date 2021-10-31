import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="">
                    <div className="text-white  py-5 d-flex">
                        <div className="col-lg-3 text-danger">
                            <h1>Turista</h1>
                            <small>Copyright &copy; 2021 | All Rights <br /> Reserve.</small>
                        </div>
                        <div className="col-lg-3 ">
                            <h3>Quick Links</h3>
                            <div className="text-danger">
                                <small>Home</small> <br />
                                <small>Term</small><br />
                                <small>Privecy & Policy</small> <br />
                                <small>Blog</small> <br />
                                <small>Contact Us</small> <br />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h3>Our Story</h3>
                            <div className="text-danger"> <br />
                                <small>Travel Blog & Tips</small><br />
                                <small>Working With Us</small><br />
                                <small>Tour Guid</small><br />
                                <small>Be Our Partner</small><br />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h3>Support</h3>
                            <div className="text-danger">
                                <small>Customer Support</small><br />
                                <small>Privecy & Policy</small><br />
                                <small>Terms & Condistion</small><br />
                                <small>Forum</small><br />
                                <small>Tour Guid</small><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;