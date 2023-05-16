import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h5 className="footer__title">BrainStation Inc.</h5>
        <p className="footer__text">May 2023</p>
      </div>
      <div className="footer__middle">
        <h4 className="footer__title">Show Finds </h4>
        <p className="footer__text">by Chloe Tso</p>
      </div>
      <div className="footer__right">
        <h5 className="footer__title">Portfolio:</h5>
        <p className="footer__text">github.com/chloetso265</p>
      </div>
    </footer>
  );
}

export default Footer;
