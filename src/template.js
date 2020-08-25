const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className = "nav-item ml-3 mr-3"> <a href="index.html" >Home</a></div>
        <div className = "nav-item"> <a href = "press.html">Press</a></div>
      </nav>
    );
  }
    

  const Sidebar = () => {
    return (
      <div className="d-none d-md-block col-md-3">
        <div className="border border-danger py-5 text-center">
          Sidebar
        </div>
      </div>
    )
  }

  const Footer = () => {
    return (
      <div className="border-top bg-light text-center pt-4 pb-4">
        Template Demo © 2019
      </div>
    )
  }

const Template = (props) => {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-9">
              {props.children}
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
    </React.Fragment>
      
    )
  }
