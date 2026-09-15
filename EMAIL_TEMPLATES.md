# 📧 EmailJS Templates (Exact INNOVATEHR Tech Brand & Logo Design)

These HTML email templates are designed with the **exact brand colors** of your website (**Navy `#0f172a`**, **Rose Pink `#e11d48`**, **Emerald Green `#059669`**, and **Sky Blue `#2563eb`**) and include the **official INNOVATEHR Tech circular logo emblem**.

Copy and paste these templates into your **[EmailJS Template Dashboard](https://dashboard.emailjs.com/admin/templates)** under **Settings -> Content (HTML Editor)**.

---

## 1. 📩 Contact Us Form Submission Template

* **Template Name in EmailJS:** `Contact Us Form Submission`  
* **Subject Line:** `New Inquiry from {{from_name}} - INNOVATEHR Tech`

```html
<div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; color: #0f172a;">
  
  <!-- Header Banner with INNOVATEHR Tech Logo & Colors -->
  <div style="background: #0f172a; padding: 24px 30px; text-align: left; border-bottom: 4px solid #e11d48;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="width: 48px; vertical-align: middle;">
          <!-- INNOVATEHR Tech Logo SVG Emblem (Blue + Green Person Emblem) -->
          <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="22" r="16" fill="#3b82f6"/>
            <path d="M 18 58 C 18 38 42 34 68 44 C 84 50 82 72 64 78 C 42 85 18 76 18 58 Z" fill="#3b82f6"/>
            <path d="M 22 80 C 44 60 78 54 82 72 C 86 90 48 98 22 80 Z" fill="#10b981"/>
          </svg>
        </td>
        <td style="padding-left: 12px; vertical-align: middle;">
          <div style="color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.2;">
            INNOVATEHR <span style="color: #e11d48;">Tech</span>
          </div>
          <div style="color: #e11d48; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 2px;">
            Statutory Compliance & Legal Advisory
          </div>
        </td>
      </tr>
    </table>
  </div>

  <!-- Main Body Content -->
  <div style="padding: 28px 30px; background-color: #ffffff;">
    <div style="margin-bottom: 20px; text-align: right;">
      <span style="display: inline-block; background-color: #fdf2f8; color: #e11d48; border: 1px solid #fbcfe8; padding: 4px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; text-transform: uppercase;">
        Website Contact Inquiry
      </span>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.5; margin-bottom: 22px;">
      You have received a new compliance & legal advisory message from <strong>{{from_name}}</strong>:
    </p>

    <!-- Details Table -->
    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569; width: 35%;">Full Name</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 800; color: #0f172a;">{{from_name}}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569;">Email Address</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #2563eb; font-weight: 600;">
          <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none;">{{from_email}}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569;">Phone Number</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #0f172a;">{{phone_number}}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; font-size: 13px; font-weight: 700; color: #475569;">Required Service</td>
        <td style="padding: 14px 18px; font-size: 14px; font-weight: 800; color: #e11d48;">{{service_requested}}</td>
      </tr>
    </table>

    <!-- Message Box -->
    <div style="background-color: #fdf2f8; padding: 18px 22px; border-radius: 12px; border-left: 4px solid #e11d48; margin-bottom: 26px;">
      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #be185d; letter-spacing: 0.05em; margin-bottom: 6px;">Client Query Details</div>
      <div style="font-size: 14px; color: #0f172a; line-height: 1.65; white-space: pre-line;">{{message}}</div>
    </div>

    <!-- Reply Button -->
    <div style="text-align: center; margin-top: 24px;">
      <a href="mailto:{{from_email}}" style="display: inline-block; background: linear-gradient(135deg, #e11d48 0%, #db2777 100%); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 32px; border-radius: 99px; box-shadow: 0 4px 14px rgba(225, 29, 72, 0.35);">
        Reply to {{from_name}}
      </a>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6;">
    <strong>INNOVATEHR Tech</strong> — 100% Legal & Statutory Labor Compliance<br>
    Shop no. 77, Sector B, Varsha Nagar, Park Site, Vikhroli (W), Mumbai - 400079<br>
    📞 +91 8879280798 | ✉️ innovatehrtech@gmail.com
  </div>
</div>
```

---

## 2. 📊 Get a Quote Audit Request Template

* **Template Name in EmailJS:** `Get a Quote Audit Request`  
* **Subject Line:** `Audit Quote Request: {{company_name}} ({{headcount}} Staff) - INNOVATEHR Tech`

```html
<div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; color: #0f172a;">
  
  <!-- Header Banner with INNOVATEHR Tech Logo & Emerald Green Accent -->
  <div style="background: #0f172a; padding: 26px 32px; text-align: left; border-bottom: 4px solid #059669;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="width: 48px; vertical-align: middle;">
          <!-- INNOVATEHR Tech Logo SVG Emblem (Blue + Green Person Emblem) -->
          <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="22" r="16" fill="#3b82f6"/>
            <path d="M 18 58 C 18 38 42 34 68 44 C 84 50 82 72 64 78 C 42 85 18 76 18 58 Z" fill="#3b82f6"/>
            <path d="M 22 80 C 44 60 78 54 82 72 C 86 90 48 98 22 80 Z" fill="#10b981"/>
          </svg>
        </td>
        <td style="padding-left: 14px; vertical-align: middle;">
          <div style="color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.2;">
            INNOVATEHR <span style="color: #10b981;">Tech</span>
          </div>
          <div style="color: #10b981; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 2px;">
            Interactive Proposal Estimator & Audit Request
          </div>
        </td>
      </tr>
    </table>
  </div>

  <!-- Main Body Content -->
  <div style="padding: 28px 32px; background-color: #ffffff;">
    <div style="margin-bottom: 22px; text-align: right;">
      <span style="display: inline-block; background-color: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; padding: 5px 16px; border-radius: 99px; font-size: 12px; font-weight: 800; text-transform: uppercase;">
        ⚡ New Statutory Audit Request
      </span>
    </div>

    <!-- Calculated Monthly Retainer Box (Website Theme Emerald Green) -->
    <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 1.5px solid #6ee7b7; border-radius: 14px; padding: 20px 24px; margin-bottom: 26px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);">
      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #047857; letter-spacing: 0.05em;">Estimated Monthly Retainer</div>
      <div style="font-size: 32px; font-weight: 800; color: #065f46; margin-top: 4px;">
        {{monthly_estimate}} <span style="font-size: 13px; color: #047857; font-weight: 600;">/ month</span>
      </div>
      <div style="font-size: 13px; color: #065f46; font-weight: 700; margin-top: 6px;">
        Service: <span style="color: #e11d48;">{{service_name}}</span> | <span style="color: #2563eb;">{{headcount}} Employees</span>
      </div>
    </div>

    <h4 style="font-size: 15px; color: #0f172a; margin-bottom: 14px; font-weight: 800;">Organization & Contact Details</h4>

    <!-- Details Table -->
    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 26px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569; width: 38%;">Company Name</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 800; color: #0f172a;">{{company_name}}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569;">Contact Person</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 800; color: #0f172a;">{{contact_person}}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569;">Official Email</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #2563eb; font-weight: 700;">
          <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none;">{{from_email}}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569;">Mobile Phone</td>
        <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 800; color: #0f172a;">{{phone_number}}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; font-size: 13px; font-weight: 700; color: #475569;">Active Staff Count</td>
        <td style="padding: 14px 18px; font-size: 14px; font-weight: 800; color: #2563eb;">{{headcount}} Employees</td>
      </tr>
    </table>

    <!-- Requirements Box -->
    <div style="background-color: #f1f5f9; padding: 18px 22px; border-radius: 12px; border-left: 4px solid #059669; margin-bottom: 28px;">
      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #334155; letter-spacing: 0.05em; margin-bottom: 6px;">Specific Statutory Requirements</div>
      <div style="font-size: 14px; color: #0f172a; line-height: 1.65; white-space: pre-line;">{{requirements}}</div>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; margin-top: 24px;">
      <a href="mailto:{{from_email}}?subject=Re:%20Statutory%20Audit%20Proposal%20for%20{{company_name}}" style="display: inline-block; background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; padding: 14px 34px; border-radius: 99px; box-shadow: 0 4px 16px rgba(5, 150, 105, 0.35);">
        Send Proposal to {{contact_person}}
      </a>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6;">
    <strong>INNOVATEHR Tech</strong> — Statutory Compliance, Payroll Outsourcing & HR Advisory<br>
    Shop no. 77, Sector B, Varsha Nagar, Park Site, Vikhroli (W), Mumbai - 400079<br>
    📞 +91 8879280798 | ✉️ innovatehrtech@gmail.com
  </div>
</div>
```
