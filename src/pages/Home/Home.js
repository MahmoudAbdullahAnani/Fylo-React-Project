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
import { motion } from "framer-motion";
function Home() {
  return (
    <div className={`mt-5`}>
      <div className="galre m-auto pb-16">
        <motion.div
          className="galre-image image-top-galre pt-10 pb-6 px-10 "
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: -100, opacity: 1 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.8,
            type: "tween",
          }}
        >
          <img src={illustrationIntro} alt="illustration-intro" />
        </motion.div>
        <motion.div
          className="text-white text-center px-10"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: -100, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
          }}
          whileInView={{ x: 0 }}
        >
          <h1 className="text-left text-md-center ">
            All your files in one secure location accessible anywhere.
          </h1>
          <p className="text-left text-md-center break-all py-2 ">
            Fylo stores all your most important files in one secure locaion.
            Access them wherever you need, share and collabrate with frinends
            family, and co-workers.
          </p>
          <motion.button
            className="btn btn-primary "
            whileHover={{
              scale: 1.3,
              rotate: [
                0, 10, 40, 60, 80, 100, 130, 150, 180, 200, 250, 300, 360,
              ],
            }}
            transition={{ duration: 0.3 }}
          >
            Get Started
          </motion.button>
        </motion.div>
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
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: -100, opacity: 1 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            delay: .3,
          }}
          className="box text-white rounded mt-10 py-10 px-10 bg-gray-800"
        >
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
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
