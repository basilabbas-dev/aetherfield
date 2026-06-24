// components/Footer.jsx
import Image from "next/image";
import footerImage from "../assets/Images/Footer-image.png";
import footerLogo from "../assets/Images/footer-Logo.png";

function Footer({ image, year = 2025 }) {
  const links = ["Product", "Journal", "About", "Careers", "Get started"];

  return (
    <footer className="bg-[#FFF546] px-4 py-4">
      
      <div className="flex flex-col md:flex-row md:text-xl justify-between items-center text-lg mb-4">
        <div className="flex flex-wrap justify-center align-center gap-x-3 md:gap-6">
          {links.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>

        <p className="mt-10 md:mt-0">© {year} · All rights reserved</p>
      </div>

      <div className="mb-4">
        <Image
          src={footerImage}
          alt="Footer"
          className="w-full h-[220px] object-cover"
        />
      </div>

      <div className="mb-4">
        <Image
          src={footerLogo}
          alt="logo"
          className="w-full object-cover"
        />
      </div>

    </footer>
  );
}

export default Footer;