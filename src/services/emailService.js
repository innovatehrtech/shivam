import emailjs from '@emailjs/browser';

// Default / Environment Configuration for EmailJS
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_innovatehr';
const TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || 'template_contact';
const TEMPLATE_ID_QUOTE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE || 'template_quote';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_innovatehr_key';

/**
 * Check if EmailJS environment keys are configured
 */
export const isEmailJSConfigured = () => {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

/**
 * Send Contact Us Form submission via EmailJS
 * @param {Object} formData
 * @param {string} formData.name
 * @param {string} formData.email
 * @param {string} formData.phone
 * @param {string} formData.service
 * @param {string} formData.message
 */
export const sendContactForm = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone_number: formData.phone || 'N/A',
    service_requested: formData.service || 'General Query',
    message: formData.message,
    to_name: 'INNOVATEHR Tech Team',
    submitted_at: new Date().toLocaleString('en-IN')
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CONTACT,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Contact Form Submission Error:', error);
    return { success: false, error };
  }
};

/**
 * Send Get a Quote proposal audit request via EmailJS
 * @param {Object} quoteData
 * @param {string} quoteData.companyName
 * @param {string} quoteData.contactPerson
 * @param {string} quoteData.phone
 * @param {string} quoteData.email
 * @param {string} quoteData.service
 * @param {number} quoteData.headcount
 * @param {number} quoteData.monthlyEstimate
 * @param {string} quoteData.requirements
 */
export const sendQuoteRequest = async (quoteData) => {
  const templateParams = {
    company_name: quoteData.companyName,
    contact_person: quoteData.contactPerson,
    from_email: quoteData.email,
    phone_number: quoteData.phone,
    service_name: quoteData.service,
    headcount: quoteData.headcount,
    monthly_estimate: `₹${quoteData.monthlyEstimate?.toLocaleString('en-IN')}`,
    requirements: quoteData.requirements || 'No specific requirements mentioned.',
    to_name: 'INNOVATEHR Tech Team',
    submitted_at: new Date().toLocaleString('en-IN')
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_QUOTE,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Quote Request Submission Error:', error);
    return { success: false, error };
  }
};
