import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import DropdownButtonSelectLanguange from '../button/DropdownButtonSelectLanguange';
import '@/assets/styles/top-navigation.css';

export default function TopNavigation() {
  // const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  // const timeoutRef: React.MutableRefObject<number | null> = useRef<
  //   number | null
  // >(null);

  // const handleMouseEnter = () => {
  //   clearTimeout(timeoutRef.current as number);
  //   setDropdownOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   timeoutRef.current = window.setTimeout(() => {
  //     setDropdownOpen(false);
  //   }, 5000);
  // };

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
            <NavDropdown
              className="custom-app-top-navigation__link-dropdown  mx-lg-3"
              title="Berita"
              id="basic-nav-dropdown"
              // autoClose="inside"
              renderMenuOnMount={true}
              // show={dropdownOpen}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <div className="d-flex flex-column justify-content-start g-3 pt-3">
                <Link
                  className="dropdown-item mb-2"
                  to="/headline/berita-utama"
                  aria-label="Berita kategori"
                >
                  Berita Utama
                </Link>
                <Link
                  className="dropdown-item mb-2"
                  to="/headline/berita-nasional"
                  aria-label="Berita kategori"
                >
                  Berita Nasional
                </Link>
                <Link
                  className="dropdown-item mb-2"
                  to="/headline/berita-internasional"
                  aria-label="Berita kategori"
                >
                  Berita Internasional
                </Link>
              </div>
            </NavDropdown>

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
            <NavDropdown
              className="custom-app-top-navigation__link-dropdown  mx-lg-3"
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
              </div>
            </NavDropdown>
          </Nav>

          <SearchBar placeholderText="Mau cari berita apa?" />
          <DropdownButtonSelectLanguange />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
