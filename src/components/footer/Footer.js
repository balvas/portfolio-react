import gitHub from "../../img/icons/gitHub.svg";
import linledIn from "../../img/icons/linkedIn.svg";

import "./style.css";

function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__wrapper">
               <ul className="social">
                  <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                  <li className="social__item"><a href="#!"><img src={linledIn} alt="Link" /></a></li>
               </ul>
               <div className="copyright">
                  <p>© 2022 frontend-dev.com</p>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;