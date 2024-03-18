import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import {
  Link,
  NavigateFunction,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  parentCategories,
  categories,
} from '../../../utils/data/categoryPostsData';
import { programCategory } from '../../../utils/data/programsData';
import '@/assets/styles/top-navigation.css';
// import DropdownButtonSelectLanguange from '../button/DropdownButtonSelectLanguange';
import MyComponent from '../../MyComponent';
import ToggleColorMode from '../button/ToggleColorMode';
import { BiChevronDown } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useTheme } from '../../../hooks/useTheme';

export default function TopNavigation() {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const pathParts: string | string[] = location.pathname.split('/');
  const postName: string | string[] = pathParts[pathParts.length - 1];
  const navigate: NavigateFunction = useNavigate();

  const [keyword, setKeyword] = useState<string>('');
  const handleKeywordChange: (keyword: string) => void = (keyword: string) =>
    setKeyword(keyword);
  const onSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword.length) {
      setTimeout(() => {
        navigate(`/search?keyword=${keyword.trim()}`);
      }, 300);

      setKeyword('');
    }
  };

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className="custom-app-top-navigation"
    >
      <Container>
        <Navbar.Brand className="custom-app-top-navigation__brand ">
          <img
            src="/images/smartnation/logo/sn_logo.png"
            className="d-inline-block align-top custom-app-top-navigation__brand-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
          aria-controls="navbarScroll"
          className="custom-button"
        >
          <RxHamburgerMenu
            fontSize={26}
            color={`${theme === 'dark' ? 'fff' : '5d5d5d'} `}
          />
        </Navbar.Toggle>

        <Navbar.Collapse
          className="  justify-content-arround g-2"
          id="navbarScroll"
        >
          {/* Show navigation link on screen large or high */}
          <Nav className=" d-flex justify-content-arround align-items-center g-2 d-none d-lg-flex d-xl-flex">
            <Link
              className={`nav-link custom-app-top-navigation__link  mx-xl-3 mx-md-2 ${
                location.pathname === '/'
                  ? 'custom-app-top-navigation__link-active '
                  : ''
              }`}
              to="/"
            >
              Beranda
            </Link>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true-1"
                className={`custom-dropdown-toggle ${
                  location.pathname === '/posts' ||
                  location.pathname === `/posts/${postName}`
                    ? 'active'
                    : ''
                }`}
              >
                <div className="d-flex justify-content-start align-items-center g-3">
                  Berita <BiChevronDown fontSize={16} />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                renderOnMount
                show={false}
                className="custom-dropdown-megamenu mt-4"
              >
                <div className="row justify-content-start align-content-start g-3">
                  {parentCategories?.map((parent) => (
                    <div
                      key={parent.id}
                      className="col-xl-4 col-lg-4 col-md py-4"
                    >
                      <div className="custom-dropdown-megamenu__heading">
                        {parent.name}
                      </div>
                      <div className="d-flex flex-column justify-content-start g-3 pt-3">
                        {categories
                          ?.sort((a, b) => a.name.localeCompare(b.name))
                          .filter((category) => category.parentId === parent.id)
                          .map((cat) => (
                            <Link
                              onClick={closeNavbar}
                              key={cat.id}
                              className={`custom-dropdown-megamenu__item ${
                                location.pathname === `/posts/${cat.slug}`
                                  ? 'custom-dropdown-menu__active'
                                  : ''
                              }`}
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

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true-2"
                className={`custom-dropdown-toggle ${
                  location.pathname === '/program' ||
                  location.pathname === `/program/${postName}`
                    ? 'active'
                    : ''
                }`}
              >
                <div className="d-flex justify-content-start align-items-center g-3">
                  Program <BiChevronDown fontSize={16} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu
                renderOnMount
                className="custom-dropdown-menu mt-4"
              >
                <div className="d-flex flex-column justify-content-start g-3 pt-2">
                  {programCategory.map((program) => (
                    <Link
                      key={program.id}
                      className={`custom-dropdown-menu__item ${
                        location.pathname === `/program/${program.slug}`
                          ? 'custom-dropdown-menu__active'
                          : ''
                      } mb-2 `}
                      to={`/program/${program.slug}`}
                      aria-label="Berita kategori"
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Link
              className={`nav-link custom-app-top-navigation__link mx-xl-3 mx-md-2 ${
                location.pathname === '/podcast'
                  ? 'custom-app-top-navigation__link-active '
                  : ''
              }`}
              to="/podcast"
            >
              Podcast
            </Link>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true-3"
                className={`custom-dropdown-toggle ${
                  location.pathname === '/about'
                    ? 'active'
                    : '' || location.pathname === '/contact'
                    ? 'active'
                    : ''
                }`}
              >
                <div className="d-flex justify-content-start align-items-center g-3">
                  Lainnya <BiChevronDown fontSize={16} />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                renderOnMount
                className="custom-dropdown-menu mt-4"
              >
                <div className="d-flex flex-column justify-content-start g-3 pt-2">
                  <Link
                    className="custom-dropdown-menu__item mb-2"
                    to="/about"
                    aria-label="Berita kategori"
                  >
                    Tentang Kami
                  </Link>
                  <Link
                    className="custom-dropdown-menu__item mb-2"
                    to="/contact"
                    aria-label="Berita kategori"
                  >
                    Hubungi Kami
                  </Link>
                  <Link
                    className="custom-dropdown-menu__item mb-2"
                    to="/contact"
                    aria-label="Berita kategori"
                  >
                    FAQ
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          {/* Show navigation link on screen small  */}
          <Nav className="d-flex flex-column justify-content-center d-lg-none d-xl-none py-3">
            <Link
              onClick={closeNavbar}
              className="nav-link custom-app-top-navigation__link "
              to="/"
            >
              Beranda
            </Link>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                className={`custom-dropdown-toggle mx-0 px-0 ${
                  location.pathname === '/posts' ||
                  location.pathname === `/posts/${postName}`
                    ? 'active'
                    : ''
                }`}
              >
                Berita
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-megamenu ">
                <div className="row justify-content-start align-content-start g-3 pt-2">
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
                              onClick={closeNavbar}
                              key={cat.id}
                              className={`custom-dropdown-megamenu__item mb-2 ${
                                location.pathname === `/posts/${cat.slug}`
                                  ? 'custom-dropdown-menu__active'
                                  : ''
                              }`}
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

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                className={`custom-dropdown-toggle  px-0 mx-0 ${
                  location.pathname === '/program' ||
                  location.pathname === `/program/${postName}`
                    ? 'active'
                    : ''
                }`}
              >
                Program
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu ">
                <div className="d-flex flex-column justify-content-start g-3 pt-3">
                  {programCategory.map((program) => (
                    <Link
                      onClick={closeNavbar}
                      key={program.id}
                      className={`custom-dropdown-menu__item mb-2 ${
                        location.pathname === `/program/${program.slug}`
                          ? 'custom-dropdown-menu__active'
                          : ''
                      }`}
                      to={`/program/${program.slug}`}
                      aria-label="Berita kategori"
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Link
              onClick={closeNavbar}
              className="nav-link  custom-app-top-navigation__link "
              to="/podcast"
            >
              Podcast
            </Link>
            <Link
              onClick={closeNavbar}
              className="nav-link  custom-app-top-navigation__link "
              to="/about"
            >
              Tentang kami
            </Link>
            <Link
              onClick={closeNavbar}
              className="nav-link  custom-app-top-navigation__link "
              to="/contact"
            >
              Hubungi kami
            </Link>

            <div className="position-relative py-3">
              <MyComponent.SearchBar
                placeholderText="Mau cari berita apa?"
                keyword={keyword}
                keywordChange={handleKeywordChange}
                onSubmitKeyword={onSubmitKeyword}
              />
            </div>
          </Nav>

          <Nav className=" d-flex justify-content-arround align-items-center g-2 d-none d-lg-flex d-xl-flex ">
            <div className="position-relative">
              <MyComponent.SearchBar
                placeholderText="Mau cari berita apa?"
                keyword={keyword}
                keywordChange={handleKeywordChange}
                onSubmitKeyword={onSubmitKeyword}
              />

              {keyword.length ? (
                <MyComponent.SearchBarResult keyword={keyword} />
              ) : null}
            </div>

            <ToggleColorMode />
            {/* <DropdownButtonSelectLanguange /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
