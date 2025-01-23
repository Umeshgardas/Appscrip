import Icons from "@/common/constants/Icons";
import "../assests/styles/components/footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top_section">
        <div className="footer-top">
          <div className="column">
            <h4 className="uppercase">Be the first to know</h4>
            <p className="gray_text small_text">
              Sign up for updates from mettā muse.
            </p>
            <form>
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="column">
            <h4 className="uppercase">Contact us</h4>
            <p className="gray_text small_text">+44 221 133 5360</p>
            <p className="gray_text small_text">customercare@mettamuse.com</p>
            <div>
              <p className="uppercase">Currency </p>
              <p className="currency_footer">
                <Image src={Icons.USA} alt="usa-icon"/> + USD
              </p>
              <p className="gray_text small_text ">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="column">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques </li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="column">
            <h4>Quick Links</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Stories</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="follow_us">
            <div className="column">
              <h4>Follow Us</h4>
              <Image src={Icons.Instagram} style={{ marginRight: "10px" }} alt="instagram" />
              <Image src={Icons.LinkedIn} alt="linkedin"/>
            </div>
            <div className="column">
              <h4>mettā muse Accepts</h4>
              <Image src={Icons.FooterPaymentPartner} alt="payment-partner"/>
            </div>
          </div>
        </div>
      </div>
      <div
      className="footer-bottom"
        style={{
          display: "flex",
          width: "100%",
          height: "20px",
          justifyContent: "center", 
          alignItems: "center", 
          textAlign: "center", 
        }}
      >
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
