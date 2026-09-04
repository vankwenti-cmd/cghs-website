# Step-by-Step: Deploy to Vercel

A complete walkthrough to get your website live on Vercel in 15 minutes.

---

## 🎯 Quick Overview

**What you'll do:**
1. Create a Sanity.io project (5 min)
2. Set up GitHub repository (5 min)
3. Connect to Vercel and deploy (5 min)

**Cost:** $0 (all free tiers)

---

## ✅ Part 1: Set Up Sanity.io (5 minutes)

### Step 1.1: Create Sanity Account

1. Go to **[sanity.io](https://sanity.io)**
2. Click **"Get started"** (top right)
3. Click **"Sign up"**
4. Choose: **"Sign up with Email"** or **"Sign up with GitHub"**
   - If email: Enter email, create password, verify email
   - If GitHub: Click "Sign up with GitHub" and authorize
5. Click **"Continue"**

**You're now logged into Sanity! ✅**

### Step 1.2: Create a Project

1. Click **"Create project"** (or the plus icon)
2. Fill in:
   - **Project name:** `Columbia Gorge Humane Society`
   - **Project type:** `Start fresh`
   - **Dataset:** `Production`
3. Click **"Create project"**

**Wait 30 seconds for it to initialize...**

### Step 1.3: Get Your Project ID

Once the project loads:

1. In the **bottom left**, click the **gear icon** ⚙️ → **"Settings"**
2. On the left menu, click **"API"**
3. Under "Project API":
   - You'll see **Project ID** - **copy this entire value**
   - Example: `ab12cd34ef56gh78ij90kl12`
4. Also note the **Dataset name** (should be `production`)

**Save these values in a safe place!**

```
PROJECT_ID: ab12cd34ef56gh78ij90kl12
DATASET: production
```

### Step 1.4: Set Up CORS for Your Domains

Back in Settings → API:

1. Scroll down to **"CORS origins"**
2. Click **"Add CORS origin"**
3. Add this URL:
   ```
   http://localhost:3000
   ```
4. Toggle **"Allow credentials"** ON
5. Click **"Add"**
6. Repeat steps 2-5 and add:
   ```
   https://cghs-website.vercel.app
   ```
   (We'll update this later with your actual domain)

**You're done with Sanity! ✅**

---

## ✅ Part 2: Push Code to GitHub (5 minutes)

### Step 2.1: Create GitHub Account (if needed)

1. Go to **[github.com](https://github.com)**
2. Click **"Sign up"**
3. Enter email, create password, verify
4. Complete the setup

### Step 2.2: Create a New Repository

1. Click the **+** icon (top right) → **"New repository"**
2. Fill in:
   - **Repository name:** `cghs-website`
   - **Description:** `Columbia Gorge Humane Society website`
   - **Visibility:** `Public`
   - Do **NOT** check "Add a README"
3. Click **"Create repository"**

**Don't close this page yet!** Copy the URL it shows you.

### Step 2.3: Push Your Code to GitHub

Open your **Terminal/Command Prompt** and run these commands one by one:

```bash
# Navigate to your project folder
cd /Users/user/Documents/Claude_Projects_Mac/cghs-website
```

```bash
# Initialize git (if not already done)
git init
```

```bash
# Configure git with your GitHub info
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

```bash
# Stage all files
git add .
```

```bash
# Create initial commit
git commit -m "Initial commit: Columbia Gorge Humane Society website"
```

```bash
# Add your GitHub repository (paste your URL from step 2.2)
git remote add origin https://github.com/YOUR-USERNAME/cghs-website.git
```

```bash
# Rename branch to main
git branch -M main
```

```bash
# Push to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Use your GitHub username
- For password: Use a **Personal Access Token** (PAT):
  1. Go to GitHub → Settings → Developer settings → Personal access tokens
  2. Click "Generate new token (classic)"
  3. Check `repo` and `admin:repo_hook`
  4. Generate and copy the token
  5. Paste it as your password when prompted

**Your code is now on GitHub! ✅**

---

## ✅ Part 3: Deploy to Vercel (5 minutes)

### Step 3.1: Create Vercel Account

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"**
4. Click **"Authorize Vercel"**
5. Complete any additional setup prompts

### Step 3.2: Import Your GitHub Repository

1. Click **"Add New..."** (top left)
2. Click **"Project"**
3. Click **"Continue with GitHub"**
4. Look for **"cghs-website"** in the list
5. Click **"Select"**

### Step 3.3: Configure Environment Variables

You should see a page titled **"Configure Project"**

Under **"Environment Variables"**:

1. Click **"Add Environment Variable"** or the **"+"** button
2. **First variable:**
   - Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - Value: *Paste your Sanity Project ID here*
   - Click **"Add"**

3. Click **"Add Environment Variable"** again
4. **Second variable:**
   - Name: `NEXT_PUBLIC_SANITY_DATASET`
   - Value: `production`
   - Click **"Add"**

**Both variables should now be listed below.**

### Step 3.4: Deploy!

1. Scroll to the bottom
2. Click **"Deploy"** (blue button)

**Vercel is now building and deploying your site!**

Wait 2-5 minutes. You'll see:
- Building... (progress bar)
- Deployment successful ✅

Once complete, you'll see:
- **"Congratulations! Your site is now live"**
- A unique URL like: `https://cghs-website-abc123.vercel.app`

**Click the URL to visit your live website! 🎉**

---

## ✅ Part 4: Verify Everything Works (2 minutes)

### Step 4.1: Test the Website

1. Visit your Vercel URL from Step 3.4
2. Verify:
   - ✅ Home page loads
   - ✅ Header and footer display
   - ✅ Navigation links work
   - ✅ No error messages

### Step 4.2: Test the CMS

1. Visit: `your-vercel-url/studio`
   - Example: `https://cghs-website-abc123.vercel.app/studio`
2. You should see the **Sanity Studio** interface
3. Try:
   - Click **"Pet"** in the left menu
   - Click **"Create"**
   - Add a test pet with a name and species
   - Click **"Publish"**
4. Go back to home page and refresh
5. You should see your new pet on the site (if featured)

**Everything works! ✅**

---

## ✅ Part 5: Set Up Your Custom Domain (Optional, 10 minutes)

If you have your own domain (e.g., `cghumane.org`):

### Step 5.1: In Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** (top menu)
3. Click **"Domains"** (left menu)
4. Click **"Add"**
5. Enter your domain: `cghumane.org` (without www)
6. Click **"Add Domain"**

You'll see **"Conflicting DNS records"** - this is normal.

### Step 5.2: Update Your Domain's DNS

You need to update settings at your domain registrar (GoDaddy, Namecheap, etc.):

1. Log into your domain registrar
2. Find **DNS Settings** or **DNS Management**
3. Look for a section to edit DNS records
4. Following **Vercel's instructions**, add:
   - A record pointing to Vercel's IP
   - Or CNAME record pointing to Vercel
5. Save changes

**DNS can take 5-48 hours to update.** You'll get an email when it's working.

### Step 5.3: Update Sanity CORS Settings

1. Go to **[sanity.io](https://sanity.io)** → Your project → Settings → API
2. Under **"CORS origins"**, click **"Add CORS origin"**
3. Add your domain:
   ```
   https://cghumane.org
   ```
4. Toggle **"Allow credentials"** ON
5. Click **"Add"**

**Your custom domain is set up! ✅**

---

## 📱 After Deployment: Next Steps

### Add Content to Your Website

1. Visit `/studio` (your CMS)
2. Start adding:
   - **Pets:** Click "Pet" → "Create" → Fill in details
   - **Settings:** Click "Settings" → Update phone, email, address
   - **Events:** Click "Event" → Add upcoming events
   - **Team:** Click "Leader" → Add staff members

### Connect Email Form (Optional)

To make the contact form actually send emails:

1. Sign up for **[Formspree](https://formspree.io/)** (free)
2. Create a new form
3. Update the contact page to use your Formspree endpoint

### Enable Donations (Optional)

To process donations:

1. Sign up for **[Stripe](https://stripe.com/)** (free account)
2. Get your API keys
3. Install Stripe package: `npm install stripe`
4. Update the donate page with Stripe integration

### Monitor Your Site

- **Vercel Dashboard:** Check deployments, analytics, errors
- **Sanity Dashboard:** Monitor API usage, content changes
- **Google Search Console:** Submit your sitemap for indexing

---

## 🆘 Troubleshooting

### "Deploy failed" error

1. Check the error log in Vercel
2. Most common causes:
   - Missing environment variables
   - Typo in Project ID
   - Schema mismatch

**Fix:** Go back to Vercel → Settings → Environment Variables and verify both values are correct (no extra spaces).

### Site shows 404 error

- **Wait 5 minutes** - sometimes DNS is still propagating
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear browser cache

### CMS doesn't load at `/studio`

1. Make sure you're on the latest deployment (check Vercel dashboard)
2. Try incognito/private window
3. Verify CORS settings in Sanity include your Vercel domain

### Changed content in CMS but site doesn't update

1. Go to Vercel dashboard
2. Click **"Deployments"** (top menu)
3. Click the three dots on the latest deployment
4. Click **"Redeploy"**

---

## 📊 Your Vercel Dashboard

Once deployed, you have access to:

### Deployments
- See all previous versions
- Rollback to an earlier version if needed
- Check deployment logs

### Analytics
- Page views (Pro plan)
- Performance metrics (Pro plan)
- Error tracking

### Settings
- Environment variables
- Domains
- GitHub integration settings
- Build settings

---

## ✨ You're Done! 🎉

Your website is now:
- ✅ Live on Vercel
- ✅ Using Sanity.io CMS
- ✅ Ready to manage content
- ✅ Automatically deployed when you push to GitHub

**Next time you want to update:**
1. Edit files locally or on GitHub
2. Push to GitHub (`git push`)
3. Vercel automatically deploys (1-2 minutes)

**Or update content:**
1. Visit `/studio`
2. Make changes in Sanity
3. Changes appear instantly on your site

---

## 🆘 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs

**Enjoy your live website! 🚀**
