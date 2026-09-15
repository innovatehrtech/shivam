import React, { useState } from 'react';
import {
  Filter,
  CheckCircle2,
  ShieldCheck,
  Award,
  Eye,
  X,
  Building2,
  Users,
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import '../css/Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Pan-India Statutory Audit & Labor Inspection Clearance',
      category: 'audit',
      categoryLabel: 'Legal Compliance',
      image: '/innovate/gallery_audit.jpg',
      stats: '100% Inspection Clearance',
      desc: 'Comprehensive on-site register verification and statutory labor law audit conducted for an enterprise workforce of 1,200+ employees.',
      highlight: 'Zero non-compliance notices across 14 state jurisdictions with full digital audit trail.',
      tags: ['Statutory Audit', 'Inspection', 'Labor Laws']
    },
    {
      id: 2,
      title: 'Multi-State Enterprise Statutory Payroll & Filing Portal',
      category: 'payroll',
      categoryLabel: 'Statutory Payroll',
      image: '/innovate/gallery_payroll.jpg',
      stats: '100% Monthly Payslips',
      desc: 'Enterprise rollout of automated monthly PF, ESIC, LWF & PT challan computation and seamless portal submission.',
      highlight: '99.99% calculation accuracy with automated monthly ECR filing and reconciliation.',
      tags: ['PF & ESIC', 'Challan Filing', 'Automation']
    },
    {
      id: 3,
      title: 'Commercial Establishment & Contract Labor Registration',
      category: 'licensing',
      categoryLabel: 'Licensing & Permits',
      image: '/innovate/gallery_licensing.jpg',
      stats: '35+ Branch Permits Secured',
      desc: 'End-to-end Shop & Establishment (Gumasta) licensing and Contract Labor (RC/ALC) registration for  office expansions.',
      highlight: 'Turnaround time reduced by 60% with complete local authority liaison.',
      tags: ['Gumasta', 'Contract Labor', 'Government Licensing']
    },
    {
      id: 4,
      title: 'POSH Compliance & Internal Committee IC Certification',
      category: 'posh',
      categoryLabel: 'POSH Workshops',
      image: '/innovate/gallery_posh.jpg',
      stats: '500+ Staff Certified',
      desc: 'Interactive workshop training sessions covering Prevention of Sexual Harassment (POSH) act, annual filing, and IC desk setup.',
      highlight: '100% workplace safety certification achieved across 5  regional hubs.',
      tags: ['POSH Act', 'IC Training', 'Employee Awareness']
    },
    {
      id: 5,
      title: 'Industrial Factory Health, Safety & Environmental Audit',
      category: 'audit',
      categoryLabel: 'Factory Compliance',
      image: '/innovate/gallery_factory.jpg',
      stats: 'Safety Audit Clearance',
      desc: 'On-site factory inspector audit, hazardous machinery assessment, safety registers, and environmental norm verification.',
      highlight: 'Cleared full government factory inspector audit with top compliance accolades.',
      tags: ['Factories Act', 'Workplace Safety', 'Environmental Audit']
    },
    {
      id: 6,
      title: 'Executive Statutory Risk Assessment & C-Suite Roadmap',
      category: 'strategy',
      categoryLabel: 'Executive Advisory',
      image: '/innovate/gallery_review.jpg',
      stats: 'Risk Mitigated',
      desc: 'Strategic labor law risk assessment,  compliance health check, and multi-year statutory governance roadmap.',
      highlight: 'Proactively eliminated regulatory penalties and streamlined audit readiness.',
      tags: ['Risk Audit', 'C-Suite Strategy', 'Governance']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Highlights' },
    { key: 'audit', label: 'Statutory Audits' },
    { key: 'payroll', label: 'Statutory Payroll' },
    { key: 'licensing', label: 'Licensing & Permits' },
    { key: 'posh', label: 'POSH Workshops' },
    { key: 'strategy', label: 'Executive Strategy' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="page-section bg-alt gallery-section">
      <div className="section-header">
        <span className="section-tag">PORTFOLIO & CASE HIGHLIGHTS</span>
        <h2>Our Compliance Gallery</h2>
        <p>Take a glance at our real-world compliance audits, statutory executions, POSH workshops, and licensing milestones.</p>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-filter-bar">
        <div className="filter-title">
          <Filter size={16} /> Filter Showcase:
        </div>
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-card" onClick={() => openLightbox(item)}>
            <div className="gallery-img-wrapper">
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-img-overlay">
                <span className="overlay-badge">
                  <Eye size={14} /> View Case Details
                </span>
              </div>
              <span className="gallery-category-chip">{item.categoryLabel}</span>
            </div>

            <div className="gallery-info">
              <div className="gallery-stat-pill">
                <ShieldCheck size={14} /> {item.stats}
              </div>
              <h4 className="gallery-card-title">{item.title}</h4>
              <p className="gallery-card-desc">{item.desc}</p>

              <div className="gallery-tags">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="tag-item">#{tag}</span>
                ))}
              </div>

              <div className="gallery-card-footer">
                <span className="view-link">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Case Study Modal */}
      {selectedItem && (
        <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="lightbox-content">
              <div className="lightbox-img-container">
                <img src={selectedItem.image} alt={selectedItem.title} />
                <span className="lightbox-category-chip">{selectedItem.categoryLabel}</span>
              </div>

              <div className="lightbox-details">
                <div className="lightbox-stat-badge">
                  <Award size={16} /> Key Result: {selectedItem.stats}
                </div>

                <h3>{selectedItem.title}</h3>
                <p className="lightbox-desc">{selectedItem.desc}</p>

                <div className="lightbox-highlight-box">
                  <Sparkles size={18} className="sparkle-icon" />
                  <div>
                    <strong>Impact & Outcome:</strong>
                    <p>{selectedItem.highlight}</p>
                  </div>
                </div>

                <div className="lightbox-tags-row">
                  {selectedItem.tags.map((tag, idx) => (
                    <span key={idx} className="lightbox-tag">#{tag}</span>
                  ))}
                </div>

                <div className="lightbox-action-row">
                  <a href="#contact" className="btn btn-primary shadow-btn" onClick={closeLightbox}>
                    Request Similar Audit <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

