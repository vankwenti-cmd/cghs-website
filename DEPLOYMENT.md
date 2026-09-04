# Deployment Guide: Columbia Gorge Humane Society Website

Complete step-by-step guide to deploy the website to Vercel with Sanity CMS backend.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Sanity.io Setup](#sanityio-setup)
3. [Local Development](#local-development)
4. [Vercel Deployment](#vercel-deployment)
5. [Post-Deployment Configuration](#post-deployment-configuration)
6. [Maintenance](#maintenance)

---

## Prerequisites

Before you start, you'll need:

- **Node.js 18+** — Download from [nodejs.org](https://nodejs.org)
- **npm** — Comes with Node.js
- **Git** — Download from [git-scm.com](https://git-scm.com)
- **GitHub Account** — Create at [github.com](https://github.com)
- **Sanity.io Account** — Create free at [sanity.io](https://sanity.io)
- **Vercel Account** — Create free at [vercel.com](https://vercel.com)

**Verification:**
```bash
node --version    # Should be v18+
npm --version     # Should be 8+
git --version     # Should be latest
```

---

## Sanity.io Setup

### Step 1: Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and click "Get started"
2. Sign up with email or GitHub
3. Click "Create project"
4. Fill in:
   - **Project name**: "Columbia Gorge Humane Society"
   - **Dataset**: Choose "Production"
   - **Project type**: Start fresh
5. Click "Create project"

### Step 2: Get Your Project Credentials

1. Once in your Sanity project dashboard:
2. Click "Settings" (gear icon, bottom left)
3. Go to "API"
4. Under "Project API", copy your **Project ID**
5. Note the default dataset name (usually "production")

**Save these values securely** — you'll need them for deployment.

### Step 3: Set up CORS for Your Domain

1. In Settings → API
2. Click "Add CORS origin"
3. Add these origins:
   - `http://localhost:3000` (for local development)
   - `https://your-domain.vercel.app` (replace with your actual Vercel domain)
4. Allow credentials: Toggle ON
5. Save

---

## Local Development

### Step 1: Clone and Install

```bash
# Clone the repository (or navigate to it)
cd cghs-website

# Install dependencies
npm install
```

### Step 2: Configure Environment

Create `.env.local` in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**Replace `your_actual_project_id_here`** with the Project ID from Sanity.

### Step 3: Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Test the CMS

1. Go to [http://localhost:3000/studio](http://localhost:3000/studio)
2. You should see the Sanity Studio interface
3. Click "Pet" and create a test pet to verify everything works

### Step 5: Add Sample Data

In Sanity Studio:

1. **Create a Pet**:
   - Name: "Buddy" 
   - Species: "Dog"
   - Age: "Adult"
   - Toggle "Featured on Homepage"

2. **Update Settings**:
   - Phone: "(541) 555-0100"
   - Email: "info@cghumane.org"
   - Address: "Hood River, OR"

3. Refresh home page to see the changes

---

## Vercel Deployment

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Columbia Gorge Humane Society website"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/cghs-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Click "Continue with GitHub" and authorize
4. Find and select your "cghs-website" repository
5. Click "Import"

### Step 3: Add Environment Variables

On the Vercel import page, you'll see an "Environment Variables" section:

1. Click "Environment Variables"
2. Add two variables:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |

3. Click "Deploy"

### Step 4: Wait for Deployment

Vercel will build and deploy your site. This takes 2-5 minutes.

Once complete, you'll see:
- ✅ "Deployment successful"
- A unique Vercel URL like `https://cghs-website-abc123.vercel.app`

### Step 5: Configure Custom Domain

In Vercel project settings:

1. Go to "Settings" → "Domains"
2. Click "Add"
3. Enter your domain (e.g., `cghumane.org`)
4. Follow DNS configuration instructions for your domain registrar

---

## Post-Deployment Configuration

### Step 1: Update Sanity CORS Settings

1. Go to your Sanity project → Settings → API
2. Click "Add CORS origin"
3. Add your Vercel domain:
   - `https://your-project.vercel.app`
   - `https://yourdomain.com` (if using custom domain)
4. Save

### Step 2: Deploy CMS Updates

When you update content in Sanity Studio:

1. Changes publish immediately
2. Your Vercel site will auto-refresh CMS queries
3. For cached content, you may need to trigger a re-deployment:
   - Go to Vercel dashboard
   - Click "Deployments"
   - Click the three dots on the latest deployment
   - Select "Redeploy"

### Step 3: Test Everything

Visit your live site and verify:
- ✅ Home page loads
- ✅ Navigation works
- ✅ CMS content displays correctly
- ✅ Images load properly
- ✅ Donate button links work
- ✅ Contact info is correct

---

## Maintenance

### Regular Updates

#### Content Management

**To update website content:**
1. Visit `your-domain.com/studio` (if using custom domain) or `your-project.vercel.app/studio`
2. Edit content in Sanity Studio
3. Changes publish automatically

**Things you can edit without deploying:**
- Pet information and images
- Leadership team
- Events
- Success stories
- Site settings (phone, email, hours)
- Resources

#### Code Changes

**To update the website code:**
1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub: `git add . && git commit -m "message" && git push`
4. Vercel auto-deploys within 1-2 minutes

### Monitoring

#### Check Deployment Status
- Visit [vercel.com](https://vercel.com) → Your project
- See all deployments and build logs
- Rollback to previous versions if needed

#### Monitor Performance
- Vercel provides analytics and error tracking
- Next.js has built-in Web Vitals monitoring
- Check Google Search Console for SEO

### Backup & Security

- **Sanity automatically backs up** all content changes
- **GitHub stores your code** — no local backup needed
- **Review Sanity API credentials** regularly
- **Rotate API tokens** annually

### Scaling

As your needs grow:

1. **Upgrade Sanity Plan** (to increase API rate limits)
2. **Upgrade Vercel Plan** (for more build minutes/month)
3. **Add CDN caching** (Vercel does this automatically)
4. **Enable Analytics** (Vercel Pro feature)

---

## Troubleshooting

### Site shows "Not Found"

- Check Vercel deployment completed successfully
- Verify environment variables are set correctly
- Wait 2-3 minutes for DNS to propagate (custom domain)

### CMS content not updating on site

1. Go to Vercel dashboard
2. Click "Redeploy" on the latest deployment
3. Or wait for Next.js ISR (up to 60 seconds)

### Images not loading

- Verify Sanity image URLs are accessible
- Check CORS settings in Sanity
- Ensure images are uploaded to Sanity (not external URLs)

### "Project ID not found" error

- Double-check the Project ID in `.env.local`
- Make sure it's copied exactly from Sanity settings
- Restart dev server after changing env variables

### Build fails on Vercel

- Check build logs in Vercel dashboard
- Common issues:
  - Missing environment variables
  - TypeScript errors
  - Sanity schema mismatch
- Fix locally and push to GitHub

---

## Quick Checklist

Before launching publicly:

- [ ] Set up Sanity project
- [ ] Local development working
- [ ] Add all required content in Sanity Studio
- [ ] Deploy to Vercel
- [ ] Configure custom domain (optional)
- [ ] Test all pages and links
- [ ] Set up email contact (integrate with service)
- [ ] Set up donation payment (integrate Stripe/PayPal)
- [ ] Add Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Set up SSL certificate (Vercel does this automatically)
- [ ] Enable email notifications for deployments

---

## Getting Help

- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Deployment Complete!** 🎉

Your website is now live and ready to manage with Sanity CMS. Visit `/studio` to start adding content.
