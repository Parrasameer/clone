
import './Header2.css'
function Header2() {
    return (
        <div className='header2'>
            < div className="row" >

                <nav className="navbar navbar-expand-lg  col-6">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Movies</a>
                        <a className="nav-link " href="#">Stream</a>
                        <a className="nav-link" href="#">Events</a>
                        <a className="nav-link" href="#">Plays</a>
                        <a className="nav-link" href="#">Sports</a>
                        <a className="nav-link" href="#">Activites</a>
                        <a className="nav-link" href="#">Buzz</a>

                    </div>
                </nav>
                <div className='col-2'></div>
                <nav className="navbar navbar-expand-lg header2 col-4">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">ListYourShow <sup> New</sup></a>
                        <a className="nav-link active" aria-current="page" href="#">Coparates</a>
                        <a className="nav-link" href="#">Offers</a>
                        <a className="nav-link" href="#">Gift Card</a>


                    </div>
                </nav>
            </div>
        </div>

    )
}



export default Header2