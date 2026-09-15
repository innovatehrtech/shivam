import React, { useState, useEffect, useRef } from 'react';
import {
  Gift,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Home as HomeIcon,
  Info as InfoIcon,
  Briefcase,
  Calendar as CalendarIcon,
  Image as GalleryIcon,
  Users as ClientsIcon,
  PhoneCall,
  Menu,
  X
} from 'lucide-react';
import '../css/Navbar.css';

// Mega Dropdown Categories & Items from User Screenshot
export const servicesCategories = [
  {
    category: "PAYROLL & STATUTORY COMPLIANCE",
    items: [
      "Payroll Outsourcing Services",
      "ESIC Consulting & Registration",
      "PF Consultant & Registration",
      "PT Consulting & Registration",
      "MLWF Registration & Filing",
      "Payment of Bonus Act, 1965",
    ],
  },
  {
    category: "LABOR ACTS & EMPLOYEE BENEFITS",
    items: [
      "Payment of Gratuity Act, 1972",
      "POSH Policy Implementation",
      "Payment of Wages Act, 1936",
      "Maternity Benefit Act, 1961",
      "Factories Act, 1948",
      "HR Policies & Handbook Drafting",
    ],
  },
  {
    category: "ESTABLISHMENT & AUDIT SERVICES",
    items: [
      "Shop & Establishment Registration",
      "Contract Labour Act, 1970",
      "Minimum Wages Act, 1948",
      "Legal Compliance & Monthly Audit",
      "Legal Notices & Statutory Representation",
    ],
  },
];

export default function Navbar({ onActionClick, onOfferClick, onServiceSelect }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  // Services Mega Dropdown State
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState("ESIC Consulting & Registration");

  const dropdownTimeoutRef = useRef(null);

  // Navigation Links
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home', hasDropdown: false },
    { id: 'about', label: 'About Us', href: '#about', hasDropdown: false },
    { id: 'services', label: 'Our Services', href: '#services', hasDropdown: true },
    { id: 'calendar', label: 'Calendar', href: '#calendar', hasDropdown: false },
    { id: 'gallery', label: 'Gallery', href: '#gallery', hasDropdown: false },
    { id: 'clients', label: 'Clients', href: '#clients', hasDropdown: false },
    { id: 'contact', label: 'Contact Us', href: '#contact', hasDropdown: false },
  ];

  // Handle scroll detection for sticky navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Hover handlers with slight delay for smooth UX
  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
    }, 200);
  };

  // Handle nav link clicks
  const handleNavClick = (id, label, e) => {
    if (id === 'services') {
      // Toggle for click as well
      setDesktopServicesOpen(!desktopServicesOpen);
    } else {
      setDesktopServicesOpen(false);
    }
    setActiveNav(id);
    setMobileMenuOpen(false);
    if (onActionClick) {
      onActionClick(`Navigated to: ${label}`);
    }
  };

  // Handle sub-item selection
  const handleServiceSelect = (itemName, categoryName) => {
    setActiveSubItem(itemName);
    setDesktopServicesOpen(false);
    setMobileMenuOpen(false);
    setActiveNav('services');
    if (onServiceSelect) {
      onServiceSelect(itemName);
    }
    if (onActionClick) {
      onActionClick(`Selected Service: ${itemName}`);
    }
  };

  // Handle button clicks
  const handleButtonClick = (actionName) => {
    setDesktopServicesOpen(false);
    setMobileMenuOpen(false);
    if (onActionClick) {
      onActionClick(`Clicked button: ${actionName}`);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick('home', 'Home', e)}>
          <img src="/innovate/logo.png" alt="INNOVATEHR Tech Logo" className="nav-logo-img" />
          <div className="logo-text-wrapper">
            <span className="logo-brand-name">INNOVATEHR Tech</span>
            <span className="logo-subtext">Comprehensive HR Solutions</span>
          </div>
        </a>

        <nav className="nav-center" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={link.hasDropdown ? handleMouseEnterServices : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeaveServices : undefined}
              >
                <a
                  href={link.href}
                  className={`nav-link ${activeNav === link.id ? 'active' : ''} ${link.hasDropdown && desktopServicesOpen ? 'dropdown-active' : ''}`}
                  onClick={(e) => handleNavClick(link.id, link.label, e)}
                >
                  {activeNav === link.id && <span className="nav-link-dot" />}
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`dropdown-arrow ${desktopServicesOpen ? 'open' : ''}`}
                    />
                  )}
                </a>

                {/* DESKTOP MEGA DROPDOWN POPUP */}
                {link.hasDropdown && (
                  <div
                    className={`mega-dropdown-wrapper ${desktopServicesOpen ? 'show' : ''}`}
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <div className="mega-dropdown-card">
                      {servicesCategories.map((col, colIdx) => (
                        <div key={colIdx} className="mega-dropdown-col">
                          <h4 className="mega-col-title">{col.category}</h4>
                          <ul className="mega-col-list">
                            {col.items.map((item, itemIdx) => {
                              const isSelected = activeSubItem === item;
                              return (
                                <li key={itemIdx}>
                                  <button
                                    className={`mega-item-btn ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handleServiceSelect(item, col.category)}
                                  >
                                    <ChevronRight size={14} className="arrow-icon" />
                                    <span className="item-label">{item}</span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            className="btn-offer-nav"
            onClick={onOfferClick}
            title="View Special Complimentary Offer"
          >
            <Gift size={15} />
            <span>View Offer</span>
          </button>

          <button
            className="btn-hey"
            onClick={() => handleButtonClick('Hey')}
            title="Get a Quote"
          >
            <span>Get a Quote</span>
            <ArrowRight size={15} className="btn-icon" />
          </button>
        </div>
        <button
          className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="hamburger-box">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* ================= MOBILE DROPDOWN DRAWER ================= */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.hasDropdown ? (
                  <div className="mobile-dropdown-group">
                    <button
                      className={`mobile-nav-link ${activeNav === link.id ? 'active' : ''}`}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <div className="mobile-nav-item-icon">
                        <Briefcase size={18} />
                        <span>{link.label}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`dropdown-arrow ${mobileServicesOpen ? 'open' : ''}`}
                      />
                    </button>

                    {/* Mobile Accordion Dropdown Submenu */}
                    {mobileServicesOpen && (
                      <div className="mobile-mega-accordion">
                        {servicesCategories.map((col, cIdx) => (
                          <div key={cIdx} className="mobile-accordion-col">
                            <span className="mobile-accordion-title">{col.category}</span>
                            <ul className="mobile-accordion-list">
                              {col.items.map((item, iIdx) => (
                                <li key={iIdx}>
                                  <button
                                    className={`mobile-subitem-btn ${activeSubItem === item ? 'selected' : ''}`}
                                    onClick={() => handleServiceSelect(item, col.category)}
                                  >
                                    <ChevronRight size={14} className="arrow-icon" />
                                    <span>{item}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeNav === link.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(link.id, link.label, e)}
                  >
                    <div className="mobile-nav-item-icon">
                      {link.id === 'home' && <HomeIcon size={18} />}
                      {link.id === 'about' && <InfoIcon size={18} />}
                      {link.id === 'calendar' && <CalendarIcon size={18} />}
                      {link.id === 'gallery' && <GalleryIcon size={18} />}
                      {link.id === 'clients' && <ClientsIcon size={18} />}
                      {link.id === 'contact' && <PhoneCall size={18} />}
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight size={16} />
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <button className="btn-offer-nav" onClick={onOfferClick}>
              <Gift size={15} />
              <span>View Offer</span>
            </button>
            <button className="btn-hey" onClick={() => handleButtonClick('Hey')}>
              <span>Get Quote</span>
            </button>
          </div>
        </div>

      </div>
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
