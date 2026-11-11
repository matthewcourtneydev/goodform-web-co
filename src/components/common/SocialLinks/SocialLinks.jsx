
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
  } from "react-icons/fa";
  
  import styles from "./SocialLinks.module.scss";
  
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/goodform-web-co/home/",
      Icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/goodformwebco/",
      Icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/goodformwebco/",
      Icon: FaFacebookF,
    },
  ];
  
  export default function SocialLinks({
    variant = "light",
    className = "",
  }) {
    const themeClass =
      variant === "dark" ? styles.dark : styles.light;
  
    return (
      <nav
        className={`${styles.socialLinks} ${themeClass} ${className}`}
        aria-label="Goodform Web Co. social media"
      >
        {socialLinks
          .filter(({ href }) => Boolean(href))
          .map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Goodform Web Co. on ${name} (opens in a new tab)`}
              title={name}
              className={styles.socialLink}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
      </nav>
    );
  }
  