import React from "react";
import { Container, Footer } from "mdbreact"; //imported icons


function FooterComponent() {
  return (
    <Footer
      color="stylish-color-dark"
      className="page-footer font-small pt-4 mt-4"
      id="footerStyle"
    >
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-sm btn-fb mx-1"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook" > </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-sm btn-tw mx-1"
              href="https://github.com/serkansonmez06"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1" href="noreferrer">
              <i
                className="fa fa-google"
                href="https://www.google.com "
                target="_blank"
                rel="noreferrer"
              ></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-sm btn-li mx-1"
              href="https://www.linkedin.com/in/serkan-sonmez-mba/"
              target="_blank" // open browers in new tab
              rel="noreferrer" //improve performance and prevent security vulnerabilities
            >
              <i className="fa fa-linkedin"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center">
        <Container fluid>
          <span>
            &copy; {new Date().getFullYear()} Copyright: Book Club.
          </span>
        </Container>
      </div>
    </Footer>
  );
}

export default FooterComponent;