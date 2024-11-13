import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Link } from 'gatsby';
import demo from '../images/course.jpg';
import demo1 from '../images/image_fond_velo.jpg';
import logo from '../images/logo_datagda.png';
import featureIcon1 from '../images/image_club.png';
import featureIcon2 from '../images/image_activite.png';
import featureIcon3 from '../images/logo_course.png';
import github from '../images/github.png';
import {ResumeButton} from "../components/common";
import SEO from '../components/seo';
import stravaButton from '../images/stravabutton.png';
import stravaPower from '../images/stravapower.png';


const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal');
      const doc = document.documentElement;
      doc.classList.remove('no-js');
      doc.classList.add('js');

      const sr = (window.sr = ScrollReveal.default());

      sr.reveal('.feature', {
        duration: 600,
        distance: '20px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 100,
      });

      doc.classList.add('anime-ready');
      anime
        .timeline({
          targets: '.hero-figure-box-05',
        })
        .add({
          duration: 400,
          easing: 'easeInOutExpo',
          scaleX: [0.05, 0.05],
          scaleY: [0, 1],
          perspective: '500px',
          delay: anime.random(0, 400),
        })
        .add({
          duration: 400,
          easing: 'easeInOutExpo',
          scaleX: 1,
        })
        .add({
          duration: 800,
          rotateY: '-15deg',
          rotateX: '8deg',
          rotateZ: '-1deg',
        });

      anime
        .timeline({
          targets: '.hero-figure-box-06, .hero-figure-box-07',
        })
        .add({
          duration: 400,
          easing: 'easeInOutExpo',
          scaleX: [0.05, 0.05],
          scaleY: [0, 1],
          perspective: '500px',
          delay: anime.random(0, 400),
        })
        .add({
          duration: 400,
          easing: 'easeInOutExpo',
          scaleX: 1,
        })
        .add({
          duration: 800,
          rotateZ: '20deg',
        });

      anime({
        targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
        duration: anime.random(600, 800),
        delay: anime.random(600, 800),
        rotate: [anime.random(-360, 360), el => el.getAttribute('data-rotation')],
        scale: [0.7, 1],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
      });
    }
  }, []);

  return (
    <>
      <SEO title="Home" />
      <div className="is-boxed has-animations">
        <div className="body-wrap">
          <header className="site-header">
            <div className="container">
              <div className="site-header-inner">
                <div className="brand header-brand">
                  <h1 className="m-0">
                    <span className="landing__main-title">
                      <img alt="" className="landing__strava" src={logo} />
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main>
            <section className="hero">
              <div className="container">
                <div className="hero-inner">
                  <div className="hero-copy">
                    <h1 className="hero-title mt-0">Bienvenue !</h1>
                    <p className="hero-paragraph">
                      @Datagada, la data au services de la performance, pour vous, votre club ou votre course. Quelque soit votre besoin, on vous offre la possibilité d'analyser vos activités via strava.
                      Qui est le François d'Haene de votre club, analyser, comparer, et explorer les activités.
                      <br />
                      <br />
                      Login with the button right below to visualize where you tend to go and let it inspire you to go somewhere new!
                    </p>
<div className="hero-cta">
                      <Link to="/app/" className="landing__button">
                        <img alt="" className="landing__strava" src={stravaButton} />
                      </Link>
                    </div>
                    <ResumeButton href="/club/" target="_blank"> C'est parti </ResumeButton>
                  </div>
                  <div className="hero-figure anime-element">
                    <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                      <rect width="528" height="396" style={{ fill: 'transparent' }} />
                    </svg>
                    <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg" />
                    <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg" />
                    <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg" />
                    <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg" />
                    <div className="hero-figure-box hero-figure-box-05">
                      <img alt="" src={demo} className="landing__image" />
                    </div>
                    <div className="hero-figure-box hero-figure-box-06">
                      <img alt="" src={demo1} className="landing__image" />
                    </div>
                    <div className="hero-figure-box hero-figure-box-07" />
                    <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg" />
                    <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg" />
                    <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg" />
                  </div>
                </div>
              </div>
            </section>

            <section className="features section">
              <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                  <div className="features-wrap">
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <img src={featureIcon1} alt="Feature 01" />
                        </div>
                        <h4 className="feature-title mt-24">Votre club </h4>
                        <p className="text-sm mb-0">Consulter les membres de votre club, analyser et comparer les performances, les sorties, et élisez vos tops coureurs </p>
                      </div>
                    </div>
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <img src={featureIcon2} alt="Feature 02" />
                        </div>
                        <h4 className="feature-title mt-24">Visulaiser vos activités</h4>
                        <p className="text-sm mb-0">Explorez vos activités, découvrez votre maps, analyser vos performances, la data au service de la performance  </p>
                      </div>
                    </div>
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <img src={featureIcon3} alt="Feature 03" />
                        </div>
                        <h4 className="feature-title mt-24">Les courses</h4>
                        <p className="text-sm mb-0">Retrouver toutes les analyses des courses passées, estimer votre future performance, identiifer vos axes d'améliorations et encore plus !</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="site-footer">
            <div className="container">
              <div className="site-footer-inner">
                <div className="footer-social-links">
                  <a href="https://github.com/fredbegin11/bifurkate" target="_blank" rel="noopener noreferrer">
                    <span className="screen-reader-text">Github</span>
                    <img src={github} alt="" width={30} height={30} />
                  </a>
                </div>

                <div className="brand footer-brand">
                  <img alt="" className="landing__strava" src={stravaPower} />
                </div>
                <Link className="landing__policy" to="/privacy">
                Politique de confidentialité
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
