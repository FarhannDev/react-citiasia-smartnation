import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  parentCategories,
  categories,
} from '../../../utils/data/categoryPostsData';
import SearchBar from '../searchBar/SearchBar';
import DropdownButtonSelectLanguange from '../button/DropdownButtonSelectLanguange';
import '@/assets/styles/top-navigation.css';
import { programCategory } from '../../../utils/data/programsData';

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

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                className="custom-dropdown-toggle"
              >
                Berita
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-megamenu">
                <div className="row justify-content-start align-content-start g-3">
                  {parentCategories?.map((parent) => (
                    <div key={parent.id} className="col-xl-4 col-lg-4 col-md">
                      <div className="custom-dropdown-megamenu__heading">
                        {parent.name}
                      </div>
                      <div className="d-flex flex-column justify-content-start g-3 pt-3">
                        {categories
                          ?.sort((a, b) => a.name.localeCompare(b.name))
                          .filter((category) => category.parentId === parent.id)
                          .map((cat) => (
                            <Link
                              key={cat.id}
                              className="custom-dropdown-megamenu__item"
                              to={`/posts/${cat.slug}`}
                              aria-label="Berita kategori"
                            >
                              {cat.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <NavDropdown
              className="custom-app-top-navigation__link-dropdown  mx-xl-3 mx-md-2"
              title="Program"
              id="basic-nav-dropdown"
              autoClose="outside"
              renderMenuOnMount={true}
            >
              <div className="d-flex flex-column justify-content-start g-3 pt-3">
                {programCategory.map((program) => (
                  <Link
                    key={program.id}
                    className="dropdown-item mb-2"
                    to={`/program/${program.slug}`}
                    aria-label="Berita kategori"
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            </NavDropdown>
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
