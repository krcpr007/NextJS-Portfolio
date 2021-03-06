import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer>
        <div id="contact"
          data-aos-once="true"
          className="text-center bg-slate-700 p-5 text-gray-400"
        >
          <h1 className="footer-Heading text-center text-3xl md:text-5xl font-medium text-emerald-500 m-2">
            Get In Touch
          </h1>
          <p className="text-center font-medium m-2 p-1">
            Yes !! I am currently looking for any new opportunities for the SDE role, <br /> my inbox
            is always open. Whether you want to hire me and have a question or just want to <br />  say hello, I will try my own
            best to get back to you!
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
          <div className="flex flex-row justify-center items-center">
            <img className="" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Fkrcpr007.vercel.app&count_bg=%2310B981&title_bg=%23334155&icon=&icon_color=%23E7E7E7&title=website+views&edge_flat=false" />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
