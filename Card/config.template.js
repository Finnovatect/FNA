// ===============================================================================
//                           CARD CONFIGURATION FILE
// ===============================================================================
// 
// IMPORTANT: This file contains your personal and service configuration.
// Update the values below with your own information and service credentials.
// 
// SECURITY NOTE: Some sensitive values like EmailJS keys are still exposed 
// client-side (this is unavoidable for pure front-end solutions). For maximum 
// security, consider server-side email processing.
//
// ===============================================================================

const CARD_CONFIG = {
    // ===== PERSONAL INFORMATION =====
    personal: {
        firstName: "YOUR_FIRST_NAME",
        lastName: "YOUR_LAST_NAME", 
        title: "YOUR_PROFESSIONAL_TITLE",
        company: "YOUR_COMPANY_NAME",
        email: "YOUR_EMAIL_ADDRESS", // Used for display and contact info generation
        phone: "YOUR_PHONE_NUMBER",
        website: "YOUR_WEBSITE_URL",
        linkedin: "YOUR_LINKEDIN_URL",
        address: {
            street: "YOUR_STREET_ADDRESS",
            city: "YOUR_CITY", 
            province: "YOUR_PROVINCE",
            postalCode: "YOUR_POSTAL_CODE",
            country: "YOUR_COUNTRY"
        },
        serviceAreas: ["YOUR_SERVICE_AREAS"]
    },

    // ===== BRANDING & CONTENT =====
    branding: {
        pageTitle: "Financial Freedom Guide",
        headline: "Create Financial Freedom on Your Terms",
        subtitle: "Download core financial principles that build wealth AND learn about a professional opportunity that offers schedule flexibility, comprehensive training, and the potential for significant additional income.",
        brochureTitle: "Your Financial Freedom Guide",
        successMessage: "Your Financial Freedom Guide has been sent to your email address. Check your inbox (and spam folder) for the download link.",
        privacyText: "Your information is secure and will never be shared with third parties.",
        
        // Colors (CSS values)
        colors: {
            primary: "#c9a96e",
            primaryLight: "#d4b876", 
            primaryDark: "#b8965a",
            background: "#1a1a1a",
            backgroundLight: "#2c2c2c",
            text: "#ffffff",
            textMuted: "#cccccc",
            textLight: "#888888"
        },

        // Professional headshot URL - Use direct Google Drive CDN format
        headshotUrl: "https://lh3.googleusercontent.com/d/10RNlG16hhAme0C-JWTjJ6jH54i6Vgc4p=w200-h200"
    },

    // ===== EMAIL SERVICES =====
    email: {
        // EmailJS Configuration
        // Get these from https://dashboard.emailjs.com/
        emailjs: {
            serviceId: "YOUR_EMAILJS_SERVICE_ID",        // Replace with your service ID
            publicKey: "YOUR_EMAILJS_PUBLIC_KEY",        // Replace with your public key
            templates: {
                visitor: "template_visitor",              // Template ID for sending brochure to visitor
                admin: "template_admin"                   // Template ID for sending lead data to you
            }
        },

        // Admin email (Base64 encoded for basic obfuscation)
        // To encode your email: https://www.base64encode.org/
        adminEmailEncoded: "ZGFuYUBkamUuY2E=", // This decodes to: dana@dje.ca
        
        // Email automation settings
        automation: {
            sendBrochureToVisitor: true,
            sendLeadNotificationToAdmin: true,
            includeVCardData: true,
            includeNotionData: true
        }
    },

    // ===== SECURITY SERVICES =====
    security: {
        // Google reCAPTCHA v3 Configuration
        // Get keys from https://www.google.com/recaptcha/admin/create
        recaptcha: {
            // Test key for localhost development (Google's universal test key)
            testSiteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
            
            // Production key for your live domain
            productionSiteKey: "YOUR_RECAPTCHA_SITE_KEY",  // Replace with your actual site key

            // Minimum score threshold (0.0 to 1.0, higher is more restrictive) 
            minScore: 0.3
        }
    },

    // ===== MARKETING SERVICES =====
    marketing: {
        // Mailchimp Newsletter Integration
        // Get this from: Audience > Signup forms > Embedded forms
        mailchimp: {
            // Full action URL from embedded form HTML
            actionUrl: "YOUR_MAILCHIMP_ACTION_URL",  // Replace with your actual Mailchimp form action URL
            
            // Honeypot field name (find in embedded form HTML)
            honeypotField: "b_USERID_LISTID",        // Replace with your actual honeypot field name
            
            // Enable/disable newsletter signup
            enabled: true,
            defaultOptIn: true  // Whether newsletter checkbox is checked by default
        },

        // Lead tracking and analytics
        analytics: {
            trackingEnabled: true,
            source: "QR Code Landing Page",
            utmSource: "qr_code",
            utmMedium: "business_card",
            utmCampaign: "lead_generation"
        }
    },

    // ===== RESOURCES & FILES =====
    resources: {
        // Google Drive brochure/document link
        // Make sure file is set to "Anyone with the link can view"
        brochureUrl: "https://drive.google.com/open?id=1FR1VKooynjPPeKBoYO-hFbtZwECtyYUP&usp=drive_fs",
        
        // Calendly or booking link
        bookingUrl: "https://calendly.com/danaellison",
        
        // Redirect after form submission
        redirectUrl: "https://linktr.ee/danaellison",
        redirectDelay: 5 // seconds
    },

    // ===== FORM SETTINGS =====
    form: {
        // Required fields
        requiredFields: ["firstName", "lastName", "email"],
        
        // Optional fields to show/hide
        showPhoneField: true,
        showCompanyField: true,
        showNewsletterOption: true,
        
        // Form validation
        validation: {
            emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneFormat: "###-###-####",
            maxFieldLength: 100
        },

        // Form behavior
        autoFormat: {
            phone: true,          // Auto-format phone numbers
            capitalizeName: true  // Auto-capitalize first/last names
        }
    },

    // ===== ADVANCED SETTINGS =====
    advanced: {
        // Development vs Production detection
        detectEnvironment: true,
        
        // Debugging and logging
        debug: {
            enableConsoleLog: true,
            logEmailjsResponses: true,
            logMailchimpSubmissions: true,
            logFormValidation: false
        },

        // Performance settings
        performance: {
            lazyLoadImages: true,
            preloadCriticalResources: true
        },

        // Feature flags
        features: {
            enableDataExport: true,     // Show vCard/JSON data in success screen
            enableProgressiveEnhancement: true,
            enableOfflineSupport: false
        }
    }
};

// ===============================================================================
//                              SECURITY HELPERS
// ===============================================================================

// Helper function to safely decode admin email
function getAdminEmail() {
    try {
        return atob(CARD_CONFIG.email.adminEmailEncoded);
    } catch (e) {
        console.error('Failed to decode admin email');
        return 'admin@example.com';
    }
}

// Helper function to get correct reCAPTCHA key based on environment
function getRecaptchaSiteKey() {
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' || 
                       window.location.hostname.includes('github.io') === false;
    
    return isLocalhost 
        ? CARD_CONFIG.security.recaptcha.testSiteKey
        : CARD_CONFIG.security.recaptcha.productionSiteKey;
}

// Helper function to validate configuration
function validateConfig() {
    const issues = [];
    
    // Check required EmailJS settings
    if (CARD_CONFIG.email.emailjs.serviceId === 'YOUR_EMAILJS_SERVICE_ID') {
        issues.push('EmailJS Service ID not configured');
    }
    if (CARD_CONFIG.email.emailjs.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        issues.push('EmailJS Public Key not configured');
    }
    
    // Check reCAPTCHA
    if (CARD_CONFIG.security.recaptcha.productionSiteKey === 'YOUR_RECAPTCHA_SITE_KEY') {
        issues.push('reCAPTCHA Site Key not configured for production');
    }
    
    // Check Mailchimp
    if (CARD_CONFIG.marketing.mailchimp.enabled && 
        CARD_CONFIG.marketing.mailchimp.actionUrl === 'YOUR_MAILCHIMP_ACTION_URL') {
        issues.push('Mailchimp Action URL not configured');
    }
    
    // Log issues
    if (issues.length > 0 && CARD_CONFIG.advanced.debug.enableConsoleLog) {
        console.warn('Configuration Issues Found:');
        issues.forEach(issue => console.warn('- ' + issue));
        console.warn('Please update config.js with your actual service credentials');
    }
    
    return issues;
}

// ===============================================================================
//                            EXPORT CONFIGURATION
// ===============================================================================

// Make config available globally
window.CARD_CONFIG = CARD_CONFIG;
window.getAdminEmail = getAdminEmail;
window.getRecaptchaSiteKey = getRecaptchaSiteKey;
window.validateConfig = validateConfig;

// Auto-validate on load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        validateConfig();
    });
}