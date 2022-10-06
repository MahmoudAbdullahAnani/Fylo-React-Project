import Navbar from "../../layout/Nav Bar/Navbar";
import "./Home.modules.css";
import illustrationIntro from "../../assets/images/illustration-intro.png";
import ALLFutshars from "../../components/AllFutshars";
import Productive from "../../components/Productive";
import FyloImproved from "../../components/FyloImporoved";
import quotes from "../../assets/images/bg-quotes.png";

import stish from "../../assets/images/profile-1.jpg";
import stish2 from "../../assets/images/profile-2.jpg";
import stish3 from "../../assets/images/profile-3.jpg";
import Footer from "../../layout/Footer/Footer";

function Home() {
    return (
        <>
            <Navbar
                home="nav-link active"
                features="nav-link ms-md-5 text-white-50"
                tems="nav-link mx-md-5 text-white-50"
                signIn="nav-link text-white-50"
            />
            <div className="galre m-auto pb-16">
                <div className="galre-image image-top-galre pt-10 pb-6 px-10 animate__animated animate__bounce animate__slideInDown">
                    <img src={illustrationIntro} alt="illustration-intro" />
                </div>
                <div className="text-white text-center px-10">
                    <h1 className="text-left text-md-center animate__animated animate__bounce animate__slideInLeft">
                        All your files in one secure location accessible anywhere.
                    </h1>
                    <p className="text-left text-md-center break-all py-2 animate__animated animate__bounce animate__slideInRight">
                        Fylo stores all your most important files in one secure locaion.
                        Access them wherever you need, share and collabrate with frinends
                        family, and co-workers.
                    </p>
                    <button className="btn btn-primary animate__animated animate__bounce animate__slideInUp">
                        Get Started
                    </button>
                </div>
            </div>
            <ALLFutshars />
            <Productive />
            <div className="d-flex pt-20 px-2 fyloImproved flex-wrap gap-3 justify-content-around align-items-center">
                <img src={quotes} alt="quotes" />
                <FyloImproved
                    alt={"profile-1"}
                    image={stish}
                    descrpshan="Founder & CEO, Huddle"
                    name="Stish Patel"
                    title="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                />
                <FyloImproved
                    alt={"profile-2"}
                    image={stish2}
                    descrpshan="Founder & CEO, Huddle"
                    name="Stish Patel"
                    title="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                />
                <FyloImproved
                    alt={"profile-3"}
                    image={stish3}
                    descrpshan="Founder & CEO, Huddle"
                    name="Stish Patel"
                    title="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                />
                <div className="box text-white rounded mt-10 py-10 px-10 bg-gray-800">
                    <h1>Get early access today</h1>
                    <p>
                        It only takes a minute to sign up and free starter tier is extremely
                        generous. if you have any <br /> questions, our support tem would be
                        happy to help you.
                    </p>

                    <form className="input-group d-flex  justify-content-around">
                        <input type="email" className="form-control rounded-pill me-2" />
                        <button type="submit" className="btn btn-primary rounded">
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;
