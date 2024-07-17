import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* side nav col */}
                    <div className="col-lg-2 shadow mt-2">
                        <header>
                            <nav id="sidebarMenu" className="collapse d-lg-block sidebar  bg-white">
                                <div className="position-sticky">
                                    <div className="list-group list-group-flush mx-3 mt-4">
                                        <a href="/" className="list-group-item list-group-item-action py-2">
                                            <i className=" me-3"></i><span className='text-danger fw-bold'>ADMIN PANEL</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3 ">
                                            <i className="fa fa-home "></i><span className='mx-2'>Dashboard</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3 ">
                                            <i className=" fa fa-shield"></i><span className='mx-2'>Admin Details</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3 ">
                                            <i className="fa fa-futbol-o"></i><span className='mx-1'>Sports-Betting</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3  ">
                                            <i className="fa fa-outdent"></i><span className='mx-2'>Ledger</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3 ">
                                            <i className="fa fa-credit-card"></i><span className='mx-1'> Transancation</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3 ">
                                            <i className=" fa fa-exclamation-circle"></i><span className='mx-2'>Report</span>
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action py-2 mt-3 mb-3  ">
                                            <i className="fa fa-cog"></i><span className='mx-2'>WBT Settting</span>
                                        </a>
                                    </div>
                                </div>
                            </nav>


                        </header>

                    </div>

                    {/* table nav  */}
                    <div className="col-lg-10 ">

                        <div className="container mt-5 ">
                            <h3 className='fw-bold'>Master Admin</h3>
                            <div className="row">
                                <div className="col">
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn btn-danger'> + Create</button>
                                        <button className='btn btn-success'> UpDate Limit</button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">

                                    <table class="table table-striped table-bordered mt-4">
                                        <thead>
                                            <tr className='bg-danger'>
                                                <th scope="col">Id</th>
                                                <th scope="col">Secure code</th>
                                                <th scope="col">Code</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Admin`</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">D.O.J</th>
                                                <th scope="col">P.W.D</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-dark text-light'> 
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td>ADMRC9E</td>
                                                <td>testsuperAdmin</td>
                                                <td>testsuperAdmin</td>
                                                <td>9865656985</td>
                                                <td>sunday,july 13,2024</td>
                                                <td>ADMRC9E</td>
                                            </tr>
                                            <tr className='bg-dark text-light'> 
                                                <th scope="row" className=''>2</th>
                                                <td></td>
                                                <td>ADMRC9E</td>
                                                <td>testsuperAdmin</td>
                                                <td>testsuperAdmin</td>
                                                <td>9865656985</td>
                                                <td>sunday,july 13,2024</td>
                                                <td>ADMRC9E</td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <button className='btn btn-danger text-light w-100 fw-bold active' > Back to Main Menu</button>  
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
