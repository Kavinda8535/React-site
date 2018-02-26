import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer page-footer font-small blue pt-4 mt-4">

       
        <div className="footer-copyright py-3 text-center">

          <div className="socialLinkwarpper">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-google-plus"></i></a>
          <a href="#"><i className="fa fa-skype"></i></a>
          </div>

          <div className="">
            © 2018 Copyright: <a href="https://github.com/Kavinda8535/React-site"> Kavinda8535 </a>

          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
