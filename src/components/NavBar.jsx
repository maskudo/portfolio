function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Manuj Babu Karki
        </a>
        <div className='' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 container-fluid d-flex flex-row-reverse'>
            <li className='nav-item'>
              <a className='nav-link ' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
