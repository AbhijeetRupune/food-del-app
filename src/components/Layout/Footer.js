import { Fragment } from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className={classes.copyright}>
            <strong> &copy; {new Date().getFullYear()}  Testy Meals. All rights reserved. By Abhi Rupune </strong> 
        </div>
        <div className={classes.terms}>
          <a href="/terms-and-conditions"><strong>Terms and Conditions</strong></a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;