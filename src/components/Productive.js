import productive from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";
import { Link } from "react-router-dom";
import "./Futshars.css";
import { motion } from "framer-motion";
function Productive() {
  return (
    <div className="productive text-white py-4">
      <div className="container d-flex flex-wrap  gap-10 align-items-center justify-around">
        <motion.div
          className=" image-top-galre myImage col-xs-12 col-lg-5 "
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: -200, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ damping: 100, duration: 0.7, delay: 0.3 }}
        >
          <img src={productive} alt="..." />
        </motion.div>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: -200, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ damping: 100, duration: 0.7, delay: 0.5 }}
          className="col-xs-12 col-lg-6 px-1 "
        >
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an file issue when accessing your files. Fylo
            has you covered for all of you file storage needs.
          </p>
          <p>
            Securely share file and folders with friends, family and colleagues
            for live collaboration. No email attachmens required.
          </p>
          <Link
            className="hover:border-gray-200 text-white securely-link"
            to="/"
          >
            <span className="me-3">See how Fylo works</span>
            <img src={arrow} alt="arrow" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
export default Productive;
