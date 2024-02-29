import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Keyboard, EffectCreative, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/styles/custom-swiper-pagination.css';
// import '@/assets/styles/herobg-swiper.css';
import styles from '@/assets/styles/modules/BackgroundHero.module.css';
import { useState } from 'react';

// type HeroBackgroundSwiperProps = {};

interface SocialMedia {
  name: string;
  icon: string;
  alternative: string;
  link: string;
}

const socialMediaLists: SocialMedia[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/smartnation.id/',
    icon: '/icons/sosmed_instagram_icons.svg',
    alternative: 'Social Media Instagram Smart Nation',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/smartnation.id',
    icon: '/icons/sosmed_facebook_icons.svg',
    alternative: 'Social Media Facebook Smart Nation',
  },
  {
    name: 'Whats App',
    link: 'https://api.whatsapp.com/send/?phone=6285882002191&text&type=phone_number&app_absent=0',
    icon: '/icons/sosmed_whatsapp_icons.svg',
    alternative: 'Social Media Whats App Smart Nation',
  },
  {
    name: 'Tiktok',
    link: 'https://www.tiktok.com/@smartnation.id/',
    icon: '/icons/sosmed_tiktok_icons.svg',
    alternative: 'Social Media Tiktok Smart Nation',
  },
];

export default function HeroBackgroundSwiper() {
  const [backgroundIndex] = useState<number>(0);
  const images = [
    'https://s3-alpha-sig.figma.com/img/5420/e908/252e4dbda36eec0ac50881684f5ba2f4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfHhClsLdRN4TZ1uJb4S~sxGYsrIeY~EWYKNPtkAQ~N8HcGYxMllP34PqbhyP6B~8oLtGbzyvP3X~SBffdqwrUvR~Y1FZ67wHyeXMgCP7ikQg4~axblRYonS5ME0Z8DA1QxPOVmShX~lDD6SLFzN~uQ8HMHjRImQ29tCzUPkvG~3dNushHclbZbd~ygW~3myONAu4LpcbDO4J8H3~-9uqUt4Xe-pbfTIRkGWqLBAWlqR~lzi8SvBo4hEeTGyAP4S40-SYzB1TVso0ak5Q3pCESfceprwPQ5sapouorsNi8aa5Y21QIiBVuXJwfFn-L~Yl~-IcxKPNwwQQM8NPV~bMg__',
  ]; // Ganti dengan nama gambar yang Anda miliki

  return (
    <section
      className={styles.backgroundHeroSection}
      id={styles.backgroundHeroSection}
    >
      <Swiper
        slidesPerView={1}
        centeredSlides
        grabCursor
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Keyboard, EffectCreative, Autoplay]}
        className="mySwiper position-relative"
      >
        <SwiperSlide>
          <div
            className={styles.backgroundHero}
            style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
          >
            <div className={styles.backgroundHerogradient} />
            <div className={styles.backgroundHeroContent}>
              <Container className={styles.backgroundHeroContentcontainer}>
                <div className="d-flex justify-content-between g-3">
                  <Link
                    to="/"
                    aria-label="Baca selengkapnya"
                    className={styles.backgroundHeroContentHeading}
                  >
                    Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?
                  </Link>

                  <div className="app-bghero-content__sosmed d-none d-xl-block">
                    <Stack gap={4}>
                      {socialMediaLists.map((social, idx) => (
                        <Link
                          key={idx++}
                          to={social.link}
                          target="_blank"
                          aria-label={social.alternative}
                          title={social.alternative}
                          className="btn"
                        >
                          <img
                            src={social.icon}
                            alt={social.alternative}
                            loading="lazy"
                          />
                        </Link>
                      ))}
                    </Stack>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.backgroundHero}
            style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
          >
            <div className={styles.backgroundHerogradient} />
            <div className={styles.backgroundHeroContent}>
              <Container className={styles.backgroundHeroContentcontainer}>
                <div className="d-flex justify-content-between g-3">
                  <Link
                    to="/"
                    aria-label="Baca selengkapnya"
                    className={styles.backgroundHeroContentHeading}
                  >
                    Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?
                  </Link>

                  <div className="app-bghero-content__sosmed d-none d-xl-block">
                    <Stack gap={4}>
                      {socialMediaLists.map((social, idx) => (
                        <Link
                          key={idx++}
                          to={social.link}
                          target="_blank"
                          aria-label={social.alternative}
                          title={social.alternative}
                          className="btn"
                        >
                          <img
                            src={social.icon}
                            alt={social.alternative}
                            loading="lazy"
                          />
                        </Link>
                      ))}
                    </Stack>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.backgroundHero}
            style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
          >
            <div className={styles.backgroundHerogradient} />
            <div className={styles.backgroundHeroContent}>
              <Container className={styles.backgroundHeroContentcontainer}>
                <div className="d-flex justify-content-between g-3">
                  <Link
                    to="/"
                    aria-label="Baca selengkapnya"
                    className={styles.backgroundHeroContentHeading}
                  >
                    Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?
                  </Link>

                  <div className="app-bghero-content__sosmed d-none d-xl-block">
                    <Stack gap={4}>
                      {socialMediaLists.map((social, idx) => (
                        <Link
                          key={idx++}
                          to={social.link}
                          target="_blank"
                          aria-label={social.alternative}
                          title={social.alternative}
                          className="btn"
                        >
                          <img
                            src={social.icon}
                            alt={social.alternative}
                            loading="lazy"
                          />
                        </Link>
                      ))}
                    </Stack>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
