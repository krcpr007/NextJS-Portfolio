import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = (props) => {
  return (
    <>
      <footer>
        <div
          data-aos={props.dataAos}
          data-aos-once="true"
          className="text-center bg-slate-900 p-5 text-gray-400"
        >
          <h1 className="footer-Heading text-center text-3xl md:text-5xl font-medium text-emerald-500 m-2">
            Get In Touch
          </h1>
          <p className="text-center font-medium m-2 p-1">
            Although I’m not currently looking for any new opportunities, my
            inbox is <br /> always open. Whether you have a question or just
            want to say hi, I’ll try my <br /> best to get back to you!
          </p>

          
          <div className="text-center p-3">
            <a href="mailto:rajankk.ug20.cse@nitp.ac.in">
              <button
                type="submit"
                className="border shadow-xl hover:shadow-emerald-500 border-emerald-500 px-3 py-1 m-2 font-medium rounded-lg  text-emerald-500 hover:bg-emerald-400 hover:text-slate-900  text-lg"
                >
                {" "}
                Say Hello!
              </button>
            </a>
          </div>
          <div className="flex text-emerald-500 justify-center">
            <a
              className="text-center text-2xl m-2"
              href="https://instagram.com/cr7.rajan"
              target="_blank"
              rel="noreferrer"
              >
              <FaInstagram />
            </a>
            <a
              className="text-2xl m-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/krcpr007"
              >
              <FaGithub className="" />
            </a>
            <a
              className="text-2xl m-2"
              href="https://www.facebook.com/profile.php?id=100003853378878"
              target="_blank"
              rel="noreferrer"
              >
              <FaFacebookSquare />
            </a>
            <a
              className="text-2xl m-2"
              href="https://www.linkedin.com/in/krcpr007/"
              target="_blank"
              rel="noreferrer"
              >
              <FaLinkedinIn />
            </a>
            <a
              className="text-center text-2xl m-2"
              href="https://twitter.com/Cr7_rajan"
              target="_blank"
              rel="noreferrer"
              >
              <FaTwitter className="text-center" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
