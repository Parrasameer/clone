import "./Header1.css"
function Header1() {
    return (
        <div className="header1">
            <nav className="navbar navbar-dark   mainNavbar">
                <div className="container-fluid row ">

                    <nav className="navbar navbar-expand-lg firstNavbar col-11">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#" ><img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/21/w900X450/logo-on-gray.jpg?w=400&dpr=2.6"></img></a>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                            </form>
                            <div className='headerBtn'>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        srinagar
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="nav-item">
                                    <button className="btn btn-danger  ">signin</button>
                                </div>

                            </div>
                        </div>

                    </nav>

                    <div className='col-1'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Hey!</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Notification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Help & Support</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Rewards</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </div>

    )
}



export default Header1