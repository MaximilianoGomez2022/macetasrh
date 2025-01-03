function Header() {
  return (
    <header>
      <div className="Header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div id="logo">
            <a href="#"><img src="/logo.svg" alt="" srcset="" /></a>
          </div>
            
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  MACETAS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SERVICIOS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  NOSOTROS
                </a>
              </li>
              <li class="nav-item dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
