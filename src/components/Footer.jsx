const Footer = () => {
    return (
<div>
    <h5 className="text-center text-4xl py-4">Gadget Heaven</h5>
    <p className="text-center">Leading the way in cutting-edge technology and innovation.</p>
    <div className="border-t my-5"></div>
<footer className="footer text-center flex justify-center md:gap-40 p-10">
  <nav>
    <h4 className="footer-title">Services</h4>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">eturns</a>
  </nav>
  <nav>
    <h4 className="footer-title">Company</h4>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
  </nav>
  <nav>
    <h4 className="footer-title">Legal</h4>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
</div>
    );
};

export default Footer;