===============================================================================
           FINANCIAL SERVICES TEMPLATE - SECURE SETUP GUIDE
===============================================================================

🔒 SECURITY UPDATE: This template now uses a centralized, secure configuration 
system that makes setup easier and more secure!

This template provides a complete financial services website with:
- Lead capture business card landing page
- Financial Needs Analysis calculator tool  
- Email automation and CRM integration
- Free hosting on GitHub Pages
- 🆕 SECURE centralized configuration system

===============================================================================
QUICK START CHECKLIST
===============================================================================

□ 1. Set up GitHub repository and enable Pages
□ 2. Create required service accounts (EmailJS, reCAPTCHA, etc.)
□ 3. Edit ONE configuration file: /Card/config.js
□ 4. Test configuration with /Card/test-config.html
□ 5. Go live!

===============================================================================
STEP 1: REPOSITORY SETUP
===============================================================================

1.1 CREATE YOUR REPOSITORY
   - Go to GitHub.com and sign in to your account
   - Fork this repository OR create a new repository
   - Name it: [yourusername].github.io (this enables free GitHub Pages hosting)
   - Make sure it's set to PUBLIC (required for free GitHub Pages)

1.2 ENABLE GITHUB PAGES
   - Go to your repository Settings tab
   - Scroll down to "Pages" section
   - Source: Select "Deploy from a branch" 
   - Branch: Select "main" and "/ (root)"
   - Click "Save"
   - Your site will be available at: https://[yourusername].github.io

===============================================================================
STEP 2: REQUIRED THIRD-PARTY ACCOUNTS
===============================================================================

You need to set up these accounts before the template will work:

2.1 EMAILJS ACCOUNT (Required for email functionality)
   - Go to: https://www.emailjs.com/
   - Create a free account
   - Add an email service (Gmail, Outlook, etc.)
   - Note your Service ID (you'll need this later)
   - Create two email templates:
     
     Template 1 - "template_visitor" (sends brochure to visitors):
     Subject: Thank you for your interest - Here's your requested information
     Body: Include your brochure link and professional message
     
     Template 2 - "template_admin" (sends lead info to you):
     Subject: New Lead from Business Card
     Body: Template to receive visitor contact information
   
   - Go to Account > API Keys and note your Public Key

2.2 GOOGLE RECAPTCHA (Required for spam protection)
   - Go to: https://www.google.com/recaptcha/admin/create
   - Choose reCAPTCHA v3
   - Add your domains:
     * localhost (for testing)
     * [yourusername].github.io (for production)
   - Note your Site Key and Secret Key

2.3 GOOGLE DRIVE (For hosting your brochure)
   - Upload your company brochure/PDF to Google Drive
   - Right-click the file > Share > Change to "Anyone with the link"
   - Copy the shareable link
   - Format it as: https://drive.google.com/open?id=FILE_ID&usp=drive_fs

2.4 MAILCHIMP ACCOUNT (Optional - for newsletter signup)
   - Go to: https://mailchimp.com/
   - Create free account
   - Create an audience/list
   - Go to Audience > Signup forms > Embedded forms
   - Copy the form action URL (looks like: https://xyz.us22.list-manage.com/...)

===============================================================================
STEP 3: SECURE CONFIGURATION - EDIT ONE FILE
===============================================================================

🎉 SIMPLIFIED! Everything is now in ONE easy-to-edit file: /Card/config.js

3.1 OPEN THE CONFIGURATION FILE
   Edit the file: /Card/config.js
   All settings are clearly organized with helpful comments.

3.2 UPDATE THESE SECTIONS:

   📝 PERSONAL INFORMATION (lines ~15-35):
   Replace the example data with your information:
   - firstName: "Your First Name"
   - lastName: "Your Last Name" 
   - title: "Your Professional Title"
   - company: "Your Company Name"
   - email: "your@email.com"
   - phone: "(555) 123-4567"
   - website: "https://your-website.com"

   📧 EMAIL SERVICES (lines ~52-75):
   - emailjs.serviceId: "your_service_id_from_step_2.1"
   - emailjs.publicKey: "your_public_key_from_step_2.1"
   - adminEmailEncoded: "base64_encoded_email"
   
   To Base64 encode your email:
   1. Go to: https://www.base64encode.org/
   2. Enter your email address
   3. Copy the result and replace the existing adminEmailEncoded value

   🔒 SECURITY SERVICES (lines ~78-92):
   - recaptcha.productionSiteKey: "your_site_key_from_step_2.2"

   📬 MARKETING SERVICES (lines ~95-115):
   - mailchimp.actionUrl: "your_mailchimp_url_from_step_2.4"
   - mailchimp.enabled: true (set to false if not using Mailchimp)

   📁 RESOURCES (lines ~118-128):
   - brochureUrl: "your_google_drive_link_from_step_2.3"
   - redirectUrl: "where_to_send_visitors_after_form_submission"
   - headshotUrl: "url_to_your_professional_photo"

3.3 CONFIGURATION TIPS FOR NON-CODERS
   - Keep the exact structure (commas, quotes, brackets)
   - Each line ending with a comma NEEDS that comma
   - Text values must be in quotes: "like this"
   - URLs must start with https://
   - Boolean values (true/false) have NO quotes
   - If unsure, only change the text between quotes

===============================================================================
STEP 4: TEST YOUR CONFIGURATION
===============================================================================

4.1 CONFIGURATION TEST PAGE
   - Open: https://[yourusername].github.io/Card/test-config.html
   - This shows exactly what's configured and what needs attention
   - Green = Working, Yellow = Needs attention, Red = Error

4.2 MANUAL TESTING
   - Visit: https://[yourusername].github.io/Card/
   - Fill out the contact form
   - Verify you receive the lead email
   - Check that visitor receives brochure email
   - Test newsletter signup (if enabled)

4.3 FINANCIAL CALCULATOR TEST
   - Visit: https://[yourusername].github.io/FNA/
   - Test the financial analysis tools
   - Verify charts display correctly

===============================================================================
SECURITY IMPROVEMENTS IN THIS VERSION
===============================================================================

✅ CENTRALIZED CONFIGURATION: One file to edit instead of multiple
✅ IMPROVED EMAIL OBFUSCATION: Better encoding of sensitive data
✅ ENVIRONMENT DETECTION: Automatic localhost vs production handling
✅ INPUT VALIDATION: Enhanced form validation and sanitization
✅ ERROR HANDLING: Better error messages and fallbacks
✅ CONFIGURATION VALIDATION: Automatic detection of setup issues
✅ DEBUG MODES: Configurable logging for troubleshooting

Old security issues RESOLVED:
- EmailJS keys are still client-side (unavoidable) but better managed
- Personal email is better obfuscated
- Configuration is validated on load
- Easier to update and maintain

===============================================================================
STEP 5: GOING LIVE
===============================================================================

5.1 FINAL CHECKLIST
   □ Configuration test page shows all green checkmarks
   □ EmailJS templates created and tested
   □ reCAPTCHA keys configured for your domain
   □ Brochure uploaded to Google Drive and accessible
   □ Test form submissions working end-to-end
   □ Site accessible at https://[yourusername].github.io

5.2 MARKETING SETUP
   □ Generate QR codes pointing to: https://[yourusername].github.io/Card/
   □ Test QR codes with mobile devices
   □ Set up Mailchimp email sequences (if using)
   □ Create follow-up email templates in EmailJS

===============================================================================
COST BREAKDOWN
===============================================================================

FREE SERVICES:
- GitHub Pages hosting: Free
- EmailJS: 200 emails/month free
- Google reCAPTCHA: Free
- Google Drive: 15GB free storage
- Mailchimp: 500 contacts free

PAID UPGRADES (if needed):
- EmailJS Pro: $15/month for unlimited emails
- Mailchimp Standard: $14.99/month for advanced features
- Custom domain: $12/year typical

===============================================================================
TROUBLESHOOTING
===============================================================================

CONFIGURATION ERRORS:
- Use /Card/test-config.html to diagnose issues
- Check browser console (F12) for error messages
- Ensure config.js syntax is correct (commas, quotes, brackets)

EMAILS NOT SENDING:
- Verify EmailJS service is connected and active
- Check template IDs match exactly in config.js
- Ensure email service (Gmail/Outlook) allows EmailJS access

RECAPTCHA ERRORS:
- Verify site key matches your domain
- Check that domain is registered in reCAPTCHA console
- Ensure you're using v3 keys, not v2

GITHUB PAGES NOT UPDATING:
- Check repository is public
- Verify Pages is enabled in settings
- Wait 5-10 minutes for changes to deploy
- Check Actions tab for build errors

FORMS NOT WORKING:
- Open browser developer console (F12) for error messages
- Verify all configuration variables are set in config.js
- Test each service independently using test page

===============================================================================
SUPPORT & RESOURCES
===============================================================================

This template uses standard web technologies and popular services. For help:

- Configuration Test: /Card/test-config.html
- EmailJS: https://www.emailjs.com/docs/
- GitHub Pages: https://docs.github.com/en/pages
- reCAPTCHA: https://developers.google.com/recaptcha/docs/v3
- Mailchimp: https://mailchimp.com/help/

Common issues and solutions can be found by searching for the specific error 
messages in browser developer console.

===============================================================================

🚀 Once you complete these steps, you'll have a professional, secure financial 
services website with automated lead capture and follow-up, hosted completely 
free on GitHub Pages!

The new configuration system makes it much easier to maintain and update your 
settings without touching the complex code.