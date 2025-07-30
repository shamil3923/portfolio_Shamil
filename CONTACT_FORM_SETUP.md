# EmailJS Contact Form Setup Guide

## 🚀 How to Make Your Contact Form Work

Your contact form is now configured to use EmailJS! Follow these steps to activate it:

## 📧 **EmailJS Setup Process**

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. The free plan includes 200 emails per month

### Step 2: Connect Your Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the connection steps for your email service
5. **Copy your Service ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}} - Portfolio Website

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. **Copy your Template ID** (you'll need this later)

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (starts with something like "user_...")
3. Copy this key (you'll need it next)

### Step 5: Update Your Website Code
1. Open `vcard-personal-portfolio/assets/js/script.js`
2. Find line 3 and replace `YOUR_PUBLIC_KEY` with your actual public key:
   ```javascript
   emailjs.init("your_actual_public_key_here");
   ```
3. Find line 44 and replace the placeholders:
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```
   Replace with your actual Service ID and Template ID

### Step 6: Test Your Form
1. Open your portfolio website
2. Navigate to the Contact section
3. Fill out the form with test information
4. Click "Send Message"
5. Check your email - you should receive the message!

## ✨ Features Implemented

### 🎯 **Form Functionality**
- **Real-time validation**: Button enables only when all fields are filled
- **Loading states**: Shows "Sending..." while submitting
- **Success feedback**: Green message when sent successfully
- **Error handling**: Red message if something goes wrong
- **Auto-reset**: Form clears after successful submission

### 📧 **Email Delivery**
- **Direct to your inbox**: Messages arrive instantly in your connected email
- **Professional format**: Clean, readable email template
- **Sender details**: Includes visitor's name and email for easy replies
- **Reply-to functionality**: You can reply directly to the sender

### 🎨 **Visual Design**
- **Consistent styling**: Matches your portfolio's dark theme
- **Smooth animations**: Professional loading and feedback states
- **Responsive design**: Works perfectly on all devices
- **Accessibility**: Proper form labels and keyboard navigation

## 🔧 Advanced Configuration (Optional)

### Custom Email Templates
You can customize your email template in EmailJS dashboard:
1. Go to "Email Templates"
2. Edit your template
3. Add custom styling or additional fields
4. Use variables like `{{from_name}}`, `{{message}}`, etc.

### Auto-Reply Setup
Set up automatic replies to visitors:
1. Create a second template for auto-replies
2. Add another `emailjs.send()` call in the success handler
3. Send a thank you message to the visitor

### Spam Protection
EmailJS includes built-in protection:
- Rate limiting per IP address
- Domain verification
- Optional reCAPTCHA integration

## 📊 Usage & Analytics

### Monitor Your Emails
- **Dashboard**: View sent emails and delivery status
- **Usage tracking**: Monitor your monthly email quota
- **Error logs**: Debug any delivery issues

### Upgrade Options
- **Free**: 200 emails/month
- **Personal**: 1,000 emails/month + priority support
- **Team**: 10,000 emails/month + advanced features

## 🛠️ Troubleshooting

### Form Not Working?
1. Check that you replaced all placeholder values (`YOUR_PUBLIC_KEY`, etc.)
2. Verify your email service is properly connected in EmailJS
3. Check browser console for JavaScript errors
4. Ensure your website domain is added to EmailJS allowed origins

### Not Receiving Emails?
1. Check your spam/junk folder
2. Verify your email service connection in EmailJS dashboard
3. Test the template directly in EmailJS dashboard
4. Check EmailJS logs for delivery status

### Common Issues:
- **"User ID is required"**: You forgot to replace `YOUR_PUBLIC_KEY`
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Verify your Template ID
- **CORS errors**: Add your domain to EmailJS settings

### Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through your dashboard

---

## 🎯 **Quick Reference**

### Files Modified:
- `index.html` - Updated form structure (removed Formspree references)
- `assets/js/script.js` - Added EmailJS integration
- `assets/css/style.css` - Added success/error message styling

### Values to Replace:
1. **Line 3 in script.js**: `YOUR_PUBLIC_KEY` → Your EmailJS public key
2. **Line 44 in script.js**: `YOUR_SERVICE_ID` → Your service ID
3. **Line 44 in script.js**: `YOUR_TEMPLATE_ID` → Your template ID

### Template Variables Available:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_name}}` - Your name (Mohamed Shamil)
- `{{reply_to}}` - Visitor's email for replies

---

**🎉 Congratulations!** Your portfolio now has a fully functional EmailJS-powered contact form that will help you connect with potential clients and employers!

---

**🎉 Congratulations!** Your portfolio now has a fully functional contact form that will help you connect with potential clients and employers!
