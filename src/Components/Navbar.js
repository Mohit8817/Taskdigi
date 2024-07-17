import React from 'react'

const Navbar = () => {
    return (
        <div>

        <div className="container-fluid mt-0 pt-0">
            <div className="row bg-danger">
                <div className="col-lg-10">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-light" href="/">logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5 px-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">About us</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Contact us</a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="/">Services</a>
                        </li> 
                         <li className="nav-item active">
                            <a className="nav-link" href="/">Blog</a>
                        </li> 
                         <li className="nav-item active" >
                            <a className="nav-link" href="/">Login</a>
                        </li>

                    </ul>
                </div>
            </nav>
                </div>
                <div className="col-lg-2">
                 <a href="/"><i class="fa fa-user-circle text-light m-3 fw-bold"></i></a>
                </div>
            </div>
        </div>
          

        </div>
    )
}

export default Navbar
