===============================================================================
           FINANCIAL SERVICES TEMPLATE - SETUP INSTRUCTIONS
===============================================================================

This template provides a complete financial services website with:
- Lead capture business card landing page
- Financial Needs Analysis calculator tool  
- Email automation and CRM integration
- Free hosting on GitHub Pages

Follow these detailed steps to set up your own version.

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
     
     Template 1 - "template_check" (sends brochure to visitors):
     Subject: Thank you for your interest - Here's your requested information
     Body: Include your brochure link and professional message
     
     Template 2 - "template_lead" (sends lead info to you):
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
STEP 3: CONFIGURATION - UPDATE YOUR INFORMATION
===============================================================================

You need to update configuration in TWO files:

FILE 1: /Card/index.html
FILE 2: /FNA/card.html

3.1 FIND THE CONFIGURATION SECTION
   Look for this section near the top of each file:
   
   // === CONFIGURATION - UPDATE THESE VALUES ===

3.2 UPDATE THESE VARIABLES:

   PERSONAL INFORMATION:
   - Update your name, title, company, phone, email
   - Add your LinkedIn, website URLs
   - Update your address and service areas

   EMAIL CONFIGURATION:
   - EMAILJS_PUBLIC_KEY: Your EmailJS public key from Step 2.1
   - EMAILJS_SERVICE_ID: Your EmailJS service ID from Step 2.1
   - admin_email: Your email address (Base64 encoded for security)
   
   To Base64 encode your email:
   - Go to: https://www.base64encode.org/
   - Enter your email address
   - Copy the encoded result

   EXTERNAL SERVICES:
   - BROCHURE_URL: Your Google Drive brochure link from Step 2.3
   - RECAPTCHA_SITE_KEY: Your reCAPTCHA site key from Step 2.2
   - MAILCHIMP_ACTION_URL: Your Mailchimp form URL from Step 2.4
   - HEADSHOT_URL: URL to your professional photo

   BRANDING:
   - Update company name, colors, logos as needed
   - Customize the "About" section content

3.3 UPDATE EMAILJS TEMPLATE IDS
   Make sure these match your EmailJS template names:
   - EMAILJS_TEMPLATE_CHECK: 'template_check'
   - EMAILJS_TEMPLATE_LEAD: 'template_lead'

===============================================================================
STEP 4: TESTING YOUR SETUP
===============================================================================

4.1 TEST EMAIL FUNCTIONALITY
   - Open: https://[yourusername].github.io/FNA/test-emailjs.html
   - Fill out the test form
   - Check if emails are sent/received properly
   - Fix any configuration issues

4.2 TEST LEAD CAPTURE PAGE
   - Visit: https://[yourusername].github.io/Card/
   - Fill out the contact form
   - Verify reCAPTCHA works
   - Check that you receive the lead email
   - Verify visitor receives brochure email

4.3 TEST FINANCIAL CALCULATOR
   - Visit: https://[yourusername].github.io/FNA/
   - Test the financial analysis tools
   - Verify charts display correctly

===============================================================================
STEP 5: CUSTOMIZATION (OPTIONAL)
===============================================================================

5.1 BRANDING CUSTOMIZATION
   - Update colors in CSS sections
   - Replace logo images
   - Modify company messaging

5.2 FINANCIAL CALCULATOR CUSTOMIZATION
   - Adjust calculation formulas in /FNA/index.html
   - Modify chart styling and colors
   - Add/remove analysis sections

5.3 QR CODE GENERATION
   - Create QR codes pointing to: https://[yourusername].github.io/Card/
   - Use QR code generators like qr-code-generator.com
   - Print QR codes on business cards, marketing materials

===============================================================================
STEP 6: GOING LIVE
===============================================================================

6.1 FINAL CHECKLIST
   □ All email addresses updated and Base64 encoded
   □ EmailJS templates created and tested
   □ reCAPTCHA keys configured for your domain
   □ Brochure uploaded to Google Drive and linked
   □ Personal information updated in both card files
   □ Test form submissions working
   □ Site accessible at https://[yourusername].github.io

6.2 MARKETING SETUP
   □ Generate QR codes for your business cards
   □ Test QR codes with mobile devices
   □ Set up Mailchimp email sequences (if using)
   □ Create follow-up email templates in EmailJS

===============================================================================
SECURITY NOTES
===============================================================================

- Email addresses are Base64 encoded to prevent harvesting by bots
- reCAPTCHA v3 protects against spam form submissions
- Never commit plain text personal information to your repository
- Use different reCAPTCHA keys for localhost vs production

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

EMAILS NOT SENDING:
- Verify EmailJS service is connected and active
- Check template IDs match exactly
- Ensure email service (Gmail/Outlook) allows EmailJS access
- Test with /FNA/test-emailjs.html

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
- Verify all configuration variables are set
- Test each service independently

===============================================================================
SUPPORT
===============================================================================

This template uses standard web technologies and popular services. For help:

- EmailJS: https://www.emailjs.com/docs/
- GitHub Pages: https://docs.github.com/en/pages
- reCAPTCHA: https://developers.google.com/recaptcha/docs/v3
- Mailchimp: https://mailchimp.com/help/

Common issues and solutions can be found by searching for the specific error 
messages in browser developer console.

===============================================================================

Once you complete these steps, you'll have a professional financial services 
website with automated lead capture and follow-up, hosted completely free on 
GitHub Pages!