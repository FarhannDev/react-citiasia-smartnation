import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import DropdownButtonSelectLanguange from '../button/DropdownButtonSelectLanguange';
import '@/assets/styles/top-navigation.css';

export default function TopNavigation() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-app-top-navigation ">
      <Container>
        <Navbar.Brand className="custom-app-top-navigation__brand ">
          <img
            src="/images/smartnation/logo/sn_logo.png"
            className="d-inline-block align-top custom-app-top-navigation__brand-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          className=" justify-content-arround g-2"
          id="navbarScroll"
        >
          <Nav className="d-flex justify-content-arround g-2 ">
            <Link
              className="nav-link custom-app-top-navigation__link custom-app-top-navigation__link-active  mx-lg-3"
              to="/"
            >
              Beranda
            </Link>
            <Link
              className="nav-link custom-app-top-navigation__link  mx-lg-3"
              to="/"
            >
              Berita
            </Link>
            <Link
              className="nav-link custom-app-top-navigation__link mx-lg-3"
              to="/"
            >
              Program
            </Link>
            <Link
              className="nav-link custom-app-top-navigation__link mx-lg-3"
              to="/podcasts"
            >
              Podcast
            </Link>
            <Link
              className="nav-link custom-app-top-navigation__link mx-lg-3"
              to="/"
            >
              Lainnya
            </Link>
          </Nav>

          <SearchBar placeholderText="Mau cari berita apa?" />
          <DropdownButtonSelectLanguange />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
