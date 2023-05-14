import React from 'react'
import './Footer.scss'
import { GrFacebookOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { FaGooglePlusG , FaPinterestP , FaInstagram} from  'react-icons/fa';


function Footer() {
  return (
    <>
    <div className="middle_footer">
      <div className="middle_footer__1">
        <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/logo_supro_1.png" alt="logo" />
        <span>184 Main Rd E, St Albans <br />
        VIC 3021, Australia</span>
        <span>contact@company.com</span>
        <span>+001 2233 456</span>
      </div>
      <div className="middle_footer__2">
        <h5>HELP & INFORMATION</h5>
        <span>Track Order</span>
        <span>Premier Delivery</span>
        <span>Student Discount</span>
      </div>
      <div className="middle_footer__3">
        <h5>ABOUT SUPRO</h5>
        <span>About Us</span>
        <span>Careers</span>
        <span>Coporate</span>
        <span>Investors</span>
      </div>
      <div className="middle_footer__4">
        <h5>ONLINE SHOP</h5>
        <span>Shoes</span>
        <span>Bags</span>
        <span>Wallets</span>
        <span>Bells</span>
      </div>
    </div>
    <div className="bottom_footer">
       <p>Copyright © 2023 Magento, Inc. All rights reserved.</p>

       <div className="ficons">
        <GrFacebookOption />
        <BsTwitter />
        <FaGooglePlusG />
        <FaPinterestP />
        <FaInstagram />
       </div>

       <ul>
        <li>
        <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/payment1.png" alt="" />
        </li>
        <li>
          <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/payment2.png" alt="" />
        </li>
        <li>
          <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/payment3.png" alt="" />
        </li>
        <li>
          <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/payment4.png" alt="" />
        </li>
        <li>
         <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/payment5.png" alt="" />
        </li>
       </ul>
    </div>
    
    </>
  )
}

export default Footer