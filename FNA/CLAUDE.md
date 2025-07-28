# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based GitHub Pages website for "Financial Needs Analysis" - a financial planning tool. The site is hosted at `finnovatect.github.io` and focuses on financial planning resources and lead generation.

## Architecture

### Core Files
- `index.html` - Main financial needs analysis tool with interactive charts and calculations (large file ~36k+ tokens)
- `card.html` - Lead capture landing page with form submission, reCAPTCHA integration, and contact data export
- `_config.yml` - Jekyll configuration for GitHub Pages deployment
- `README.md` - Basic project description

### Technology Stack
- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks)
- **Charts**: Chart.js library for financial visualizations
- **Hosting**: GitHub Pages with Jekyll (minimal theme)
- **Forms**: reCAPTCHA integration for spam protection
- **Analytics**: Contact data export to vCard and JSON formats

## Development Workflow

### Local Development
- **Jekyll installed**: Version 4.4.1 with Ruby 3.4.5
- **Start development server**: `/opt/homebrew/lib/ruby/gems/3.4.0/bin/jekyll serve --host 127.0.0.1 --port 4000 --livereload`
- **Local URL**: http://127.0.0.1:4000
- **Live reload**: Automatically refreshes browser on file changes

### Deployment
- **Automatic**: Changes to `main` branch automatically deploy via GitHub Pages
- **No build process**: Static files served directly
- **Jekyll**: Minimal theme configured in `_config.yml`

### File Structure
```
├── index.html          # Main FNA tool (large interactive application)
├── card.html           # Lead generation landing page  
├── _config.yml         # Jekyll/GitHub Pages config
└── README.md           # Project documentation
```

## Key Features

### Financial Analysis Tool (index.html)
- Interactive financial needs analysis calculator
- Chart.js visualizations for financial data
- Multi-tab interface for different analysis sections
- Client-side calculations and data processing

### Lead Capture System (card.html)
- Contact form with validation
- Google reCAPTCHA integration
- Automated contact data export (vCard for iOS, JSON for Notion CRM)
- Google Drive integration for brochure downloads
- Responsive design with modern CSS

## Configuration Notes

### reCAPTCHA Setup
- Site key configured in `card.html` JavaScript section
- Replace `RECAPTCHA_SITE_KEY` constant with actual key

### Google Drive Integration
- Brochure downloads use Google Drive sharing URLs
- URLs converted to direct download format via JavaScript

### Customization Points
- Update `BROCHURE_URL`, `REDIRECT_URL`, `HEADSHOT_URL` in `card.html`
- Modify Jekyll theme settings in `_config.yml`
- Financial calculations and charts in `index.html`

## Security Requirements

### Email Obfuscation
- **CRITICAL**: Admin email must NEVER appear in plain text in any code files
- Always use Base64 obfuscation: `const ADMIN_EMAIL = atob('ZGFuYUBkamUuY2E=')`
- Check all files for plain text email exposure before commits
- Test files should also use obfuscated email, never plain text

### Personal Information Protection
- **CRITICAL**: Never show real phone number or email address in any code
- Always use placeholder or obfuscated contact information
- Protect personal identifiable information in all repository files

### EmailJS Configuration
- reCAPTCHA keys use environment detection (localhost vs production)
- EmailJS templates use multiple parameter name formats for compatibility
- Dual email system: visitor gets brochure, admin gets contact data

## Content Management
- Both HTML files contain embedded CSS and JavaScript
- No external asset dependencies except CDN libraries (Chart.js, reCAPTCHA, EmailJS)
- Self-contained pages for reliability and performance

## User Interface Requirements

### Currency Field Formatting
- **CRITICAL**: All money entry fields must show $ symbol and commas as numbers are entered
- Format: $1,000,000 (with proper thousands separators)
- Real-time formatting during typing and on blur
- Apply to all currency input fields throughout the application

### Percentage Field Formatting  
- **CRITICAL**: All percentage fields must show % symbol in the field
- Format: 25.00% (with percentage symbol visible)
- Apply to all rate and percentage input fields throughout the application