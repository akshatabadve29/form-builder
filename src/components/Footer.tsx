import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-2 border-top">
      <small className="text-muted">
        &copy; {new Date().getFullYear()} Form Builder Inc. | Built with 💙
        using React & Bootstrap
      </small>
    </footer>
  );
};

export default Footer;
