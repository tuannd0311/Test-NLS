import React from 'react';

import './footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>Demo<span>NLS</span></h3>
          <p class="footer-company-name">Demo &copy; 2019</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>09 Pham Van Dong Street</span> Buon Ma Thuot, Daklak</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+84 349 735 767</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">nguyendoantuan311@gmail.com</a></p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Hello! Wellcome to Demo.
          </p>
          <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    );
  }
}
