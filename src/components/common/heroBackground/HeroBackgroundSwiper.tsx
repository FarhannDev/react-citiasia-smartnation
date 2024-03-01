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
            style={{
              backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wrm7nmDP9AkrXqWZICYxgMbrAkWXyB5zjyCI3oU5XiIL9Ny80xVxeAyOXiDSCb6sm9n2xYnlIwLa8f5RntIAOxDNgSkojtxoS2KrnFtRK~lpm~ON~6gNrKcObUAfxW9oNw36CH-EYXwy3oP291uqlyRHLGWBP0B1EWjCPShda1F3lFy~59U79YzeYQ42jsRk6Cj53WuaHnH4KKEv2t0usG8j6mPidRGY8o5rRwP5QJ8VrbHmCh9qpFBMcIJLtDSQpR7iyKI4DQaYGGYIyMDGPsvkfCZMruqvwySPTgO0v2u8L-n1uwHlGAuroFnlokT4T7Nv27sYgB01dV5nyS2b~Q__')`,
            }}
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
                    Smart City: Standar Nasional Indonesia (SNI) untuk Kota
                    Cerdas
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
            style={{
              backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wrm7nmDP9AkrXqWZICYxgMbrAkWXyB5zjyCI3oU5XiIL9Ny80xVxeAyOXiDSCb6sm9n2xYnlIwLa8f5RntIAOxDNgSkojtxoS2KrnFtRK~lpm~ON~6gNrKcObUAfxW9oNw36CH-EYXwy3oP291uqlyRHLGWBP0B1EWjCPShda1F3lFy~59U79YzeYQ42jsRk6Cj53WuaHnH4KKEv2t0usG8j6mPidRGY8o5rRwP5QJ8VrbHmCh9qpFBMcIJLtDSQpR7iyKI4DQaYGGYIyMDGPsvkfCZMruqvwySPTgO0v2u8L-n1uwHlGAuroFnlokT4T7Nv27sYgB01dV5nyS2b~Q__')`,
            }}
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
                    Smart City: Standar Nasional Indonesia (SNI) untuk Kota
                    Cerdas
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
            style={{
              backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wrm7nmDP9AkrXqWZICYxgMbrAkWXyB5zjyCI3oU5XiIL9Ny80xVxeAyOXiDSCb6sm9n2xYnlIwLa8f5RntIAOxDNgSkojtxoS2KrnFtRK~lpm~ON~6gNrKcObUAfxW9oNw36CH-EYXwy3oP291uqlyRHLGWBP0B1EWjCPShda1F3lFy~59U79YzeYQ42jsRk6Cj53WuaHnH4KKEv2t0usG8j6mPidRGY8o5rRwP5QJ8VrbHmCh9qpFBMcIJLtDSQpR7iyKI4DQaYGGYIyMDGPsvkfCZMruqvwySPTgO0v2u8L-n1uwHlGAuroFnlokT4T7Nv27sYgB01dV5nyS2b~Q__')`,
            }}
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
                    Smart City: Standar Nasional Indonesia (SNI) untuk Kota
                    Cerdas
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
