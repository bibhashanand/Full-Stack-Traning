function navBar()
{
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Search</button>
         </form>
        </div>
        </nav>

    );
}

export default navBar;