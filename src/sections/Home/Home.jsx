import dp from "../../assets/images/Arjun C Vinod-dp.jpg"
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaSnapchat, FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';
import{ useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css'; 

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".multiText", {
      strings: ["Web Developer", "UI/UX Designer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

    return (
        <section id="home">
            <div className="head-container">
                <div className="heading">
                    <h1>Hi,</h1>
                    <h1><span className="hide">Hi,</span> I am <span className="name">Arjun</span></h1>
                    <h1><span className="multiText"> </span></h1>
                    <a href="assets/RESUME.pdf" download>
                        <button className="button">Download CV</button>
                    </a>
                </div>
                <div className="socials">
                    <a href="http://facbook.com/arjuncvinod.3"><FaFacebook /></a>
                    <a href="http://wa.me/+918304069399?text=Hi"><FaWhatsapp /></a>
                    <a href="http://instagram.com/arjun.c.vinod"><FaInstagram /></a>
                    <a href="http://twitter.com/arjuncvinod7"><FaTwitter /></a>
                    <a href="https://www.snapchat.com/add/arjun.cvinod?share_id=0wwf67ih2lA&locale=en-IN"><FaSnapchat /></a>
                    <a href="https://www.linkedin.com/in/arjun-c-vinod-951b5a161/"><FaLinkedin /></a>
                    <a href="https://github.com/arjuncvinod/"><FaGithub /></a>
                </div>
                <div className="explore">
                    <a href="#about"><FaArrowDown /></a>
                </div>
            </div>
            <div className="picture">
                <div className="dp">
                    <img src={dp} alt="Arjun C Vinod" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Home;
