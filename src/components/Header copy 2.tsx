import { useState, useEffect } from 'react';
import Logo from "../images/logo.png"
import CourseMenu from './CourseMenu';

const Header = ({
  isLoading
}: { isLoading?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  // Sample courses data
  const courses = [
    { name: 'Web Development', slug: 'web-development' },
    { name: 'Data Science', slug: 'data-science' },
    { name: 'UI/UX Design', slug: 'ui-ux-design' },
    { name: 'Digital Marketing', slug: 'digital-marketing' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '70px' : '80px',
            transition: 'height 0.3s ease'
          }}>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              zIndex: 1001
            }}>

              <img src={Logo} alt="" title="" style={{ width: "30%" }} />

            </div>

            {/* Desktop Navigation */}
            <nav style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px'
            }}
              className="desktop-nav"
            >
              <NavItem href="/" label="Home" />
              <NavItem href="/about-us" label="About Us" />
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <NavItem href="/courses" label="Courses" hasDropdown />
                {isCoursesOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '8px',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
                    padding: '12px',
                    minWidth: '220px',
                    animation: 'slideDown 0.3s ease',
                    border: '1px solid #e2e8f0'
                  }}>
                    <CourseMenu></CourseMenu>

                  </div>
                )}
              </div>
              <NavItem href="/upcoming-batches" label="Upcoming Batches" />
              <NavItem href="/testimonials" label="Testimonials" />
              <NavItem href="/cms/refer-and-earn" label="Refer & Earn" />
              <NavItem href="/contact-us" label="Contact Us" />
            </nav>

            {/* Call Button & Hamburger */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <a
                href="tel:+919422761663"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                }}
              >
                <span className="call-text">Call Us</span>
              </a>

              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                className="hamburger-btn"
                style={{
                  display: 'none',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '44px',
                  height: '44px',
                  background: isMenuOpen ? '#2563eb' : '#f1f5f9',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: '10px'
                }}
              >
                <span style={{
                  width: '24px',
                  height: '2px',
                  background: isMenuOpen ? 'white' : '#1e293b',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                }} />
                <span style={{
                  width: '24px',
                  height: '2px',
                  background: isMenuOpen ? 'white' : '#1e293b',
                  borderRadius: '2px',
                  margin: '6px 0',
                  transition: 'all 0.3s ease',
                  opacity: isMenuOpen ? 0 : 1
                }} />
                <span style={{
                  width: '24px',
                  height: '2px',
                  background: isMenuOpen ? 'white' : '#1e293b',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                }} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 999
        }}
          onClick={toggleMenu}
        />

        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '85%',
          maxWidth: '400px',
          height: '100vh',
          background: 'white',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          zIndex: 1000,
          paddingTop: '100px',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
        }}>
          <nav style={{ padding: '20px' }}>
            <MobileNavItem href="/" label="Home" />
            <MobileNavItem href="/about-us" label="About Us" />
            <MobileNavItem href="/courses" label="Courses" />
            <div style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '12px' }}>
              {courses.map((course, index) => (
                <a
                  key={index}
                  href={`/courses/${course.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 16px',
                    color: '#64748b',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#eff6ff';
                    e.currentTarget.style.color = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#64748b';
                  }}
                >
                  {course.name}
                </a>
              ))}
            </div>
            <MobileNavItem href="/upcoming-batches" label="Upcoming Batches" />
            <MobileNavItem href="/testimonials" label="Testimonials" />
            <MobileNavItem href="/cms/refer-and-earn" label="Refer & Earn" />
            <MobileNavItem href="/contact-us" label="Contact Us" />

            <div style={{
              borderTop: '1px solid #e2e8f0',
              marginTop: '20px',
              paddingTop: '20px'
            }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px', paddingLeft: '16px', fontWeight: '600' }}>LEGAL</div>
              <MobileNavItem href="/cms/privacy-policy" label="Privacy Policy" small />
              <MobileNavItem href="/cms/return-and-refund-policy" label="Return & Refund Policy" small />
              <MobileNavItem href="/cms/terms-and-conditions" label="Terms and Conditions" small />
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: '80px' }} />

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
        }

        @media (max-width: 991px) {
          .hamburger-btn {
            display: flex !important;
          }
        }

        @media (max-width: 576px) {
          .call-text {
            display: none;
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
    </>
  );
};

const NavItem = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '10px 16px',
        color: isHovered ? '#2563eb' : '#475569',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        borderRadius: '8px',
        background: isHovered ? '#eff6ff' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      {label}
      {hasDropdown && (
        <span style={{
          fontSize: '12px',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'rotate(180deg)' : 'rotate(0)'
        }}>▼</span>
      )}
    </a>
  );
};

const MobileNavItem = ({ href, label, small = false }: { href: string; label: string; small?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'block',
        padding: small ? '10px 16px' : '14px 16px',
        color: isHovered ? '#2563eb' : '#1e293b',
        textDecoration: 'none',
        fontSize: small ? '14px' : '16px',
        fontWeight: small ? '500' : '600',
        borderRadius: '10px',
        marginBottom: '4px',
        transition: 'all 0.2s ease',
        background: isHovered ? '#eff6ff' : 'transparent',
        transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
      }}
    >
      {label}
    </a>
  );
};

export default Header;