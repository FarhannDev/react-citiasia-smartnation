import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import DropdownButtonSelectLanguange from '../button/DropdownButtonSelectLanguange';
import '@/assets/styles/top-navigation.css';

export default function TopNavigation() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-app-top-navigation">
      <Container>
        <Navbar.Brand className="custom-app-top-navigation__brand ">
          <img
            src="/images/smartnation/logo/sn_logo.png"
            className="d-inline-block align-top custom-app-top-navigation__brand-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-button" />

        <Navbar.Collapse
          className="  justify-content-arround g-2"
          id="navbarScroll"
        >
          {/* Show navigation link on screen large or high */}
          <Nav className=" d-flex justify-content-arround g-2 d-none d-lg-flex d-xl-flex">
            <Link
              className="nav-link custom-app-top-navigation__link custom-app-top-navigation__link-active  mx-xl-3 mx-md-2 "
              to="/"
            >
              Beranda
            </Link>
            <NavDropdown
              className="custom-app-top-navigation__link-dropdown   mx-xl-3 mx-md-2"
              title="Berita"
              id="basic-nav-dropdown"
            >
              <div className="d-flex flex-column justify-content-start g-3 pt-3">
                <Link
                  className="dropdown-item mb-2"
                  to="/posts/headline"
                  aria-label="Berita kategori"
                >
                  Berita Utama
                </Link>
                <Link
                  className="dropdown-item mb-2"
                  to="/posts/headline/nasional"
                  aria-label="Berita kategori"
                >
                  Berita Nasional
                </Link>
                <Link
                  className="dropdown-item mb-2"
                  to="/posts/headline/internasional"
                  aria-label="Berita kategori"
                >
                  Berita Internasional
                </Link>
              </div>
            </NavDropdown>
            <Link
              className="nav-link custom-app-top-navigation__link mx-xl-3 mx-md-2"
              to="/"
            >
              Program
            </Link>
            <Link
              className="nav-link custom-app-top-navigation__link mx-xl-3 mx-md-2"
              to="/podcasts"
            >
              Podcast
            </Link>
            <NavDropdown
              className="custom-app-top-navigation__link-dropdown  mx-xl-3 mx-md-2"
              title="Lainnya"
              id="basic-nav-dropdown"
              autoClose="outside"
              renderMenuOnMount={true}
            >
              <div className="d-flex flex-column justify-content-start g-3 pt-3">
                <Link
                  className="dropdown-item mb-2"
                  to="/about"
                  aria-label="Berita kategori"
                >
                  Tentang Kami
                </Link>
                <Link
                  className="dropdown-item mb-2"
                  to="/contact"
                  aria-label="Berita kategori"
                >
                  Hubungi Kami
                </Link>
                <Link
                  className="dropdown-item mb-2"
                  to="/contact"
                  aria-label="Berita kategori"
                >
                  Daftar Pertanyaan (FAQ)
                </Link>
              </div>
            </NavDropdown>
          </Nav>

          {/* Show navigation link on screen small  */}
          <Nav className="d-flex flex-column justify-content-center d-lg-none d-xl-none py-3">
            <Link
              className="nav-link  custom-app-top-navigation__link   mx-md-3 "
              to="/"
            >
              Beranda
            </Link>
            <Link
              className="nav-link  custom-app-top-navigation__link   mx-md-3 "
              to="/"
            >
              Beranda
            </Link>
            <Link
              className="nav-link  custom-app-top-navigation__link   mx-md-3 "
              to="/"
            >
              Beranda
            </Link>
            <Link
              className="nav-link  custom-app-top-navigation__link   mx-md-3 "
              to="/"
            >
              Beranda
            </Link>
            <Link
              className="nav-link  custom-app-top-navigation__link   mx-md-3 "
              to="/"
            >
              Beranda
            </Link>
          </Nav>

          <Nav className=" d-flex justify-content-arround align-items-center g-2 d-none d-lg-flex d-xl-flex ">
            <SearchBar placeholderText="Mau cari berita apa?" />
            <DropdownButtonSelectLanguange />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
