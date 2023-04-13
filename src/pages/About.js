import React from 'react'

export default function About() {
  return (
    <>
        <section className="main-page-header speaker-banner bg_img" data-background="assets/images/banner/banner07.jpg">
            <div className="container">
            <div className="speaker-banner-content">
                <h2 className="title">about us</h2>
                <ul className="breadcrumb">
                <li>
                    <a href="index.html">
                    Home
                    </a>
                </li>
                <li>
                    about us
                </li>
                </ul>
            </div>
            </div>
        </section>
        
        <section className="about-section padding-top padding-bottom">
            <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                <div className="event-about-content">
                    <div className="section-header-3 left-style m-0">
                    <span className="cate">we are Boleto </span>
                    <h2 className="title">Get to know us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <a href="#0" className="custom-button">book tickets</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                <div className="about-thumb">
                    <img src="assets/images/about/about01.png" alt="about" />
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <div className="philosophy-section padding-top padding-bottom bg-one bg_img bg_quater_img" data-background="assets/images/about/about-bg.jpg">
            <div className="container">
            <div className="row">
                <div className="col-lg-9 offset-lg-3 bg-two">
                <div className="philosophy-content">
                    <div className="section-header-3 left-style">
                    <span className="cate">Take look at</span>
                    <h2 className="title">Our philosophy</h2>
                    <p className="ml-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt labore et dolore magna aliqu enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                    </div>
                    <ul className="phisophy-list">
                    <li>
                        <div className="thumb">
                        <img src="assets/images/philosophy/icon1.png" alt="philosophy" />
                        </div>
                        <h5 className="title">Honesty &amp; Fairness </h5>
                    </li>
                    <li>
                        <div className="thumb">
                        <img src="assets/images/philosophy/icon2.png" alt="philosophy" />
                        </div>
                        <h5 className="title">Clarity &amp; Transparency</h5>
                    </li>
                    <li>
                        <div className="thumb">
                        <img src="assets/images/philosophy/icon3.png" alt="philosophy" />
                        </div>
                        <h5 className="title">Focus on Customers</h5>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        <section className="about-counter-section padding-bottom padding-top">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <div className="section-header-3 left-style mb-lg-0">
                    <span className="cate">quick facts</span>
                    <h2 className="title">fun facts</h2>
                    <p>Objectively seize scalable metrics whereas proactive services seamlessly empower fully researched growth strategies</p>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="about-counter">
                    <div className="counter-item">
                    <div className="counter-thumb">
                        <img src="assets/images/about/about-counter01.png" alt="about" />
                    </div>
                    <div className="counter-content">
                        <h3 className="title odometer" data-odometer-final={30} />
                        <h3 className="title">M+</h3>
                    </div>
                    <span className="d-block info">Customers</span>
                    </div>
                    <div className="counter-item">
                    <div className="counter-thumb">
                        <img src="assets/images/about/about-counter02.png" alt="about" />
                    </div>
                    <div className="counter-content">
                        <h3 className="title odometer" data-odometer-final={11} />
                    </div>
                    <span className="d-block info">Contries</span>
                    </div>
                    <div className="counter-item">
                    <div className="counter-thumb">
                        <img src="assets/images/about/about-counter03.png" alt="about" />
                    </div>
                    <div className="counter-content">
                        <h3 className="title odometer" data-odometer-final={650} />
                        <h3 className="title">+</h3>
                    </div>
                    <span className="d-block info">Towns &amp; Cities</span>
                    </div>
                    <div className="counter-item">
                    <div className="counter-thumb">
                        <img src="assets/images/about/about-counter04.png" alt="about" />
                    </div>
                    <div className="counter-content">
                        <h3 className="title odometer" data-odometer-final={5000} />
                        <h3 className="title">+</h3>
                    </div>
                    <span className="d-block info">Screens</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="client-section padding-bottom padding-top bg_img" data-background="assets/images/client/client-bg.jpg">
            <div className="container">
            <div className="section-header-3">
                <span className="cate">testimonials</span>
                <h2 className="title">the fans have spoken</h2>
            </div>
            <div className="client-slider owl-carousel owl-theme">
                <div className="client-item">
                <div className="client-thumb">
                    <img src="assets/images/client/client01.jpg" alt="client" />
                </div>
                <div className="client-content">
                    <h5 className="title">
                    <a href="#0">Rafuz</a>
                    </h5>
                    <span className="info"><i className="fas fa-check" /> Verified</span>
                    <blockquote className="client-quote">
                    "Great prices and Cheaper than other sites! Easy to use."
                    </blockquote>
                </div>
                </div>
                <div className="client-item">
                <div className="client-thumb">
                    <img src="assets/images/client/client03.jpg" alt="client" />
                </div>
                <div className="client-content">
                    <h5 className="title">
                    <a href="#0">Rudra</a>
                    </h5>
                    <span className="info"><i className="fas fa-check" /> Verified</span>
                    <blockquote className="client-quote">
                    "Id iure est sint at illum ipsum non beatae cumque"
                    </blockquote>
                </div>
                </div>
                <div className="client-item">
                <div className="client-thumb">
                    <img src="assets/images/client/client02.jpg" alt="client" />
                </div>
                <div className="client-content">
                    <h5 className="title">
                    <a href="#0">Raihan</a>
                    </h5>
                    <span className="info"><i className="fas fa-check" /> Verified</span>
                    <blockquote className="client-quote">
                    "amet consectetur adipisicing elit. Animi, ut consequuntur"
                    </blockquote>
                </div>
                </div>
                <div className="client-item">
                <div className="client-thumb">
                    <img src="assets/images/client/client04.jpg" alt="client" />
                </div>
                <div className="client-content">
                    <h5 className="title">
                    <a href="#0">Shahidul</a>
                    </h5>
                    <span className="info"><i className="fas fa-check" /> Verified</span>
                    <blockquote className="client-quote">
                    "Quia voluptatum animi libero recusandae error."
                    </blockquote>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="speaker-section padding-bottom padding-top">
            <div className="container">
            <div className="section-header-3">
                <span className="cate">meet our most valued</span>
                <h2 className="title">expert team members</h2>
                <p>World is committed to making participation in the event a harassment free experience for 
                everyone, regardless of level of experience, gender, gender identity and expression</p>
            </div>
            <div className="speaker--slider">
                <div className="speaker-slider owl-carousel owl-theme">
                <div className="speaker-item">
                    <div className="speaker-thumb">
                    <a href="event-speaker.html">
                        <img src="assets/images/speaker/speaker01.jpg" alt="speaker" />
                    </a>
                    </div>
                    <div className="speaker-content">
                    <h5 className="title">
                        <a href="event-speaker.html">
                        Gerard Bryan 
                        </a>
                    </h5>
                    <span>CO-FOUNDER, CEO</span>
                    </div>
                </div>
                <div className="speaker-item">
                    <div className="speaker-thumb">
                    <a href="event-speaker.html">
                        <img src="assets/images/speaker/speaker02.jpg" alt="speaker" />
                    </a>
                    </div>
                    <div className="speaker-content">
                    <h5 className="title">
                        <a href="event-speaker.html">
                        Raihan Rafuj
                        </a>
                    </h5>
                    <span>CO-FOUNDER, CEO</span>
                    </div>
                </div>
                <div className="speaker-item">
                    <div className="speaker-thumb">
                    <a href="event-speaker.html">
                        <img src="assets/images/speaker/speaker03.jpg" alt="speaker" />
                    </a>
                    </div>
                    <div className="speaker-content">
                    <h5 className="title">
                        <a href="event-speaker.html">
                        Bela Bose
                        </a>
                    </h5>
                    <span>CO-FOUNDER, CEO</span>
                    </div>
                </div>
                <div className="speaker-item">
                    <div className="speaker-thumb">
                    <a href="event-speaker.html">
                        <img src="assets/images/speaker/speaker04.jpg" alt="speaker" />
                    </a>
                    </div>
                    <div className="speaker-content">
                    <h5 className="title">
                        <a href="event-speaker.html">
                        Grass Hopper
                        </a>
                    </h5>
                    <span>CO-FOUNDER, CEO</span>
                    </div>
                </div>
                </div>
                <div className="speaker-prev">
                <i className="flaticon-double-right-arrows-angles" />
                </div>
                <div className="speaker-next">
                <i className="flaticon-double-right-arrows-angles" />
                </div>
            </div>
            </div>
        </section>
        
        <section className="gallery-section padding-top padding-bottom bg-one">
            <div className="container">
            <div className="section-header-3">
                <span className="cate">Take a look at our</span>
                <h2 className="title">A ticket for every fan.</h2>
                <p>World is committed to making participation in the event a harassment free experience for 
                everyone, regardless of level of experience, gender, gender identity and expression</p>
            </div>
            <div className="row justify-content-center gallery-wrapper mb-30-none">
                <div className="col-lg-3 col-sm-6">
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery05.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery05.jpg" alt="gallery" />
                    </div>
                </div>
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery06.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery06.jpg" alt="gallery" />
                    </div>
                </div>
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery07.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery07.jpg" alt="gallery" />
                    </div>
                </div>
                </div>
                <div className="col-sm-6 col-lg-3 order-lg-1">
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery11.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery11.jpg" alt="gallery" />
                    </div>
                </div>
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery12.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery12.jpg" alt="gallery" />
                    </div>
                </div>
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery13.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery13.jpg" alt="gallery" />
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="gallery-item two">
                    <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery08.jpg" className="img-pop">
                        <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery08.jpg" alt="gallery" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                    <div className="gallery-item two">
                        <div className="gallery-thumb">
                        <a href="assets/images/gallery/gallery09.jpg" className="img-pop">
                            <i className="flaticon-loupe" />
                        </a>
                        <img src="assets/images/gallery/gallery09.jpg" alt="gallery" />
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="gallery-item two">
                        <div className="gallery-thumb">
                        <a href="assets/images/gallery/gallery10.jpg" className="img-pop">
                            <i className="flaticon-loupe" />
                        </a>
                        <img src="assets/images/gallery/gallery10.jpg" alt="gallery" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="tour-section padding-top padding-bottom">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="tour-content">
                    <div className="section-header-3 left-style">
                    <span className="cate">take a look at our tour</span>
                    <h2 className="title">Guarantees you can trust.</h2>
                    <p className="ml-0">
                        Because more peace of mind means more love for the event.
                    </p>
                    </div>
                    <ul className="list-tour">
                    <li>
                        <div className="thumb">
                        <img src="assets/images/tour/icon01.png" alt="tour" />
                        </div>
                        <div className="content">
                        <h5 className="title">Get In Guarantee</h5>
                        <p>Authentic tickets, on-time delivery, and access to 
                            your event. Or your money back. Period.</p>
                        </div>
                    </li>
                    <li>
                        <div className="thumb">
                        <img src="assets/images/tour/icon02.png" alt="tour" />
                        </div>
                        <div className="content">
                        <h5 className="title">price match guarantee</h5>
                        <p>The best prices are here. If you spot a better deal 
                            elsewhere, we’ll cover the difference.</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                <div className="tour-thumb">
                    <img src="assets/images/tour/tour.png" alt="tour" />
                </div>
                </div>
            </div>
            </div>
        </section>

    </>
  )
}
