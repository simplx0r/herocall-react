import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




import './Styles/cash.scss';
import './Styles/challenge.scss';
import './Styles/fonts.scss';
import './Styles/footer.scss';
import './Styles/header.scss';
import './Styles/main.scss';
import './Styles/news.scss';
import './Styles/partners.scss';
import './Styles/privacy.scss';
import './Styles/product.scss';
import './Styles/stats.scss';
import './Styles/store.scss';
import './Styles/terms.scss';




import lesson from './Assets/img/lesson.svg'; 
import chart from './Assets/img/chart.svg'; 
import cracker from './Assets/img/cracker.svg';
import discord from './Assets/img/discord.svg';
import favicon from './Assets/img/favicon.ico';
import gipsy from './Assets/img/gipsy.svg';
import hyperschool from './Assets/img/hyperschool.svg';
import pokerOff from './Assets/img/pokerOff.svg';
import screens from './Assets/img/screens.svg';
import simplePoker from './Assets/img/simplePoker.svg';
import sp from './Assets/img/sp.svg';
import stats from './Assets/img/stats.svg';
import table from './Assets/img/table.svg';

 


const Alert = () => {
    console.log ('You Clicked BRO!')
}



function Main() {
    return (
        <>
        <div>
        <header>
        <div className="header">
          <div className="header-navbar">
          <Link to="/" className="main--links">
            <a className="header-logo" href="" onClick={Alert}>HeroCall</a>
            </Link>
            <Link to="/login" className="main--links">
            <button className="header-logIn-btn glow-on-hover" onСlick={Alert} href='/about'>
              
              Log In
            </button>
            </Link>
          </div>
  
          <div className="header-content">
            <div className="header-content__title">
              Play Spin&Go with a<br/>
              perfect preflop strategy
            </div>
            <div className="header-content__description">
              Preflop Trainer for amateurs and professionals.<br />
              Stop losing money by applying new strategy in the real game.
            </div>
            <div className="header-content-try-btn">
              <button
                className="header-content-try-btn__style glow-on-hover"
                onСlick="location.href=logIn;return false;"
              >
                Try it free
              </button>
            </div>
          </div>
        </div>
      </header>
  
      <main>
        <div className="main">
          <div className="main-row">
            <div className="main-row-content">
              <div className="main-row-content__title">Train</div>
              <div className="main-row-content__description">
                Train your preflop in the real conditions. It will bring right automatism to your
                game.
              </div>
            </div>
            <div className="main-row-content__exp">
              <img className="main-row-content__exp-img" src={table} />
            </div>
          </div>
  
          <div className="main-row reverse">
            <div className="main-row-content__exp">
              <img className="main-row-content__exp-img" src={chart} />
            </div>
            <div className="main-row-content p-left">
              <div className="main-row-content__title">Use coaches' charts</div>
              <div className="main-row-content__description">
                They have achieved serious success in poker and they are ready to share their
                strategies
              </div>
            </div>
          </div>
  
          <div className="main-row">
            <div className="main-row-content p-right">
              <div className="main-row-content__title">Create your own strategy</div>
              <div className="main-row-content__description">
                Using the convenient chart editor. Flexible sizing values and the frequency of
                starting hands allow you to set any subtleties of the strategy
              </div>
            </div>
            <div className="main-row-content__exp">
              <img
                className="main-row-content__exp-img lesson-image__one"
                src={lesson}
              />
            </div>
          </div>
  
          <div className="main-row reverse">
            <div className="main-row-content__exp">
              <img className="main-row-content__exp-img" src={stats} />
            </div>
            <div className="main-row-content p-left">
              <div className="main-row-content__title">Analyze mistakes</div>
              <div className="main-row-content__description">
                Identify situations which are the most mistaken for you
              </div>
            </div>
          </div>
  
          <div className="main-row">
            <div className="main-row-content p-right">
              <div className="main-row-content__title">Learn poker anywhere</div>
              <div className="main-row-content__description">
                Training is available on mobile devices too. Exercise anytime, anywhere
              </div>
            </div>
            <div className="main-row-content__exp">
              <img
                className="main-row-content__exp-img screen-image__one"
                src={screens}
              />
            </div>
          </div>
        </div>
      </main>
  
      <div className="stats">
        <div className="stats-container">
          <div className="stats-container__start">Get started with PreflopHero today</div>
          <div className="stats-container__start-container">
            <button className="stats-container__start-btn" onСlick="location.href=logIn;return false;">
              Play now
            </button>
          </div>
  
          
  
            <div className="stats-container-info__reviews">
              
            </div>
          </div>
        
      </div>
      <div className="news">
      <div className="news-container">
        <div className="news-container-left">
         
        </div>

        <div className="news-container-right">
         

         
          </div>
        </div>
      </div>
   

    <div className="partners">
      <div className="partners-container">
        <div className="partners-container__title">Our partners</div>
        <div className="partners-container__pairs">
          <a
            className="partners-container-pair partners-container-pair__hyperschool"
            href="http://hyperschool.ru/"
            target="_blank"
          >
            <img className="partners-container__pairs-image" src={hyperschool} />
          </a>
          <a
            className="partners-container-pair partners-container-pair__simplePoker"
            href="https://simplepoker.com/"
            target="_blank"
          >
            <img className="partners-container__pairs-image" src={simplePoker} />
          </a>
          <a
            className="partners-container-pair partners-container-pair__gipsy"
            href="https://www.gipsyteam.ru/"
            target="_blank"
          >
            <img className="partners-container__pairs-image" src={gipsy} />
          </a>
          <a
            className="partners-container-pair partners-container-pair__pokerOff"
            href="https://www.pokeroff.ru/"
            target="_blank"
          >
            <img className="partners-container__pairs-image" src={pokerOff} />
          </a>
          <a
            className="partners-container-pair partners-container-pair__sp"
            href="https://www.steel-phoenix.ru/"
            target="_blank"
          >
            <img className="partners-container__pairs-image" src={sp} />
          </a>
          <a
            className="partners-container-pair partners-container-pair__sp"
            href="https://www.vpluseteam.com/"
            target="_blank"
          > -->
            <img className="partners-container__pairs-image" src="" />
          </a>
        </div>
      </div>
    </div>

    <footer>
      <div className="footer">
        <div className="footer-navbar">
          <a className="footer-logo" href="index.html#">HeroCall</a>
          <div className="footer-nav">
            <a
              className="footer__link"
              href=""
              target="_blank"
              >Blog</a
            >
            <a className="footer__link" href="" target="_blank">Discord</a>
            <a className="footer__link">redviagressif@gmail.com</a>
          </div>
          <div className="footer-info">
            <a className="footer__link" href="privacy.html">Privacy Policy</a>
            <a className="footer__link" href="terms.html">Terms of Service</a>
            <a className="footer__link" href="store.html">Store</a>-->
          </div>
          <div>
            <button className="footer-logIn-btn" onСlick="location.href=logIn;return false;">
              Log in
            </button>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
    )
}

export default Main
