
import './footer.css'
import React from 'react'

function Footer() {
  return (
    // <footer className="footer" style={{display:"flex"}}>
    //     <p>© 2024 MyWebsite. All rights reserved.</p>
    // </footer>
      <footer className="site-footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3> Contact Me</h3>
                <ul className="contact-list">
                    <li><i className="fas fa-phone"></i> 01061137402</li>
                    <li><i className="fas fa-envelope"></i> ahmedeltahaan03@gmail.com</li>
                    <li><i className="fas fa-map-marker-alt"></i> الإسكندرية، مصر</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3> Quick Links</h3>
                <ul className="quick-links">
                    <li><a href="#about"><i className="fas fa-chevron-left"></i> الملف الشخصي</a></li>
                    <li><a href="#skills"><i className="fas fa-chevron-left"></i> المهارات</a></li>
                    <li><a href="#projects"><i className="fas fa-chevron-left"></i> المشاريع</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>social media</h3>
                <div className="social-icons">
                    <a href="#" className="social-icon"><i className="icons icon-linkedin"></i></a>
                    <a href="#" className="social-icon"><i className="icons icon-github"></i></a>
                    <a href="#" className="social-icon"><i className="icons icon-twitter"></i></a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2023 جميع الحقوق محفوظة | أحمد محمد مصطفى</p>
        </div>
    </footer>
  )
}

export default Footer