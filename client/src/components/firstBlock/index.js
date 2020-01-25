import React from "react";

function FirstBlock() {
    return (
        <div>

            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="row ">

                            <div className="col-md-5 px-6">
                                <div className="card-block px-3">
                                    <h2 className="card-title"> H2 Intro Content</h2>
                                    <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <a href="#" className="btn btn-primary">Plan Your Trip</a>

                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <img src="./images/planyourtrip-thumbnail.png" class="content-image"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default FirstBlock;
