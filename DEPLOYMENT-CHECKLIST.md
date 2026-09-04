# Vercel Deployment Checklist

Print this out and check off as you go! ✅

---

## PART 1: SANITY.IO SETUP (5 min)

### Create Account & Project
- [ ] Go to sanity.io
- [ ] Sign up (email or GitHub)
- [ ] Create new project named "Columbia Gorge Humane Society"
- [ ] Choose dataset: "Production"

### Get Credentials
- [ ] Settings → API
- [ ] Copy Project ID: `_____________________`
- [ ] Note Dataset: `_____________________`

### Add CORS Origins
- [ ] Settings → API → CORS origins
- [ ] Add: `http://localhost:3000` (allow credentials: ON)
- [ ] Add: `https://cghs-website.vercel.app` (allow credentials: ON)
- [ ] Note: Update second domain after Vercel creates it

---

## PART 2: GITHUB SETUP (5 min)

### Create GitHub Account
- [ ] Go to github.com
- [ ] Sign up (if you don't have account)
- [ ] Verify email

### Create Repository
- [ ] Click + (top right) → "New repository"
- [ ] Name: `cghs-website`
- [ ] Visibility: Public
- [ ] Do NOT check "Add README"
- [ ] Click "Create repository"
- [ ] Copy the URL shown (you'll need it)

### Push Code to GitHub
Open Terminal and run these commands:

```bash
cd /Users/user/Documents/Claude_Projects_Mac/cghs-website
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"
git add .
git commit -m "Initial commit: Columbia Gorge Humane Society website"
git remote add origin https://github.com/YOUR-USERNAME/cghs-website.git
git branch -M main
git push -u origin main
```

- [ ] All commands completed without errors
- [ ] No error messages in terminal

---

## PART 3: VERCEL DEPLOYMENT (5 min)

### Create Vercel Account
- [ ] Go to vercel.com
- [ ] Sign up with GitHub
- [ ] Authorize Vercel

### Import Project
- [ ] Click "Add New" → "Project"
- [ ] Click "Continue with GitHub"
- [ ] Find and select "cghs-website"
- [ ] Click "Select"

### Add Environment Variables
Under "Configure Project":

- [ ] Click "Add Environment Variable"
  - [ ] Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - [ ] Value: *Your Sanity Project ID*
  - [ ] Click "Add"

- [ ] Click "Add Environment Variable" again
  - [ ] Name: `NEXT_PUBLIC_SANITY_DATASET`
  - [ ] Value: `production`
  - [ ] Click "Add"

### Deploy
- [ ] Click blue "Deploy" button
- [ ] Wait 2-5 minutes for deployment
- [ ] See "Congratulations! Your site is now live"
- [ ] **Copy your Vercel URL:** `_____________________`

---

## PART 4: VERIFY IT WORKS (2 min)

### Test Website
- [ ] Visit your Vercel URL
- [ ] Page loads (no errors)
- [ ] Navigation works
- [ ] Header/footer display correctly

### Test CMS
- [ ] Visit: `your-vercel-url/studio`
- [ ] Sanity Studio loads
- [ ] Click "Pet" → "Create"
- [ ] Add a test pet
- [ ] Publish the pet
- [ ] Go back to home page
- [ ] Refresh page
- [ ] Test pet appears on site

---

## PART 5: CUSTOM DOMAIN (Optional - 10 min)

### In Vercel
- [ ] Go to your Vercel project
- [ ] Settings → Domains
- [ ] Click "Add"
- [ ] Enter your domain: `cghumane.org`
- [ ] Click "Add Domain"

### In Your Domain Registrar
- [ ] Log into your registrar (GoDaddy, Namecheap, etc.)
- [ ] Find DNS Settings
- [ ] Add DNS records from Vercel
- [ ] Save changes
- [ ] **Note:** Can take 5-48 hours to activate

### Update Sanity CORS
- [ ] Go to sanity.io → Your project → Settings → API
- [ ] Click "Add CORS origin"
- [ ] Add your domain: `https://cghumane.org`
- [ ] Toggle "Allow credentials" ON
- [ ] Click "Add"

---

## AFTER DEPLOYMENT

### Add Content
- [ ] Visit `/studio` (your CMS)
- [ ] Add adoptable pets
- [ ] Add team members
- [ ] Update site settings (phone, email, etc.)
- [ ] Add events

### Monitoring
- [ ] Bookmark your Vercel dashboard
- [ ] Sign up for Vercel email notifications
- [ ] Monitor site performance

### Next Steps (Optional)
- [ ] Set up email contact form (Formspree)
- [ ] Set up donations (Stripe)
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics

---

## 🎉 DEPLOYMENT COMPLETE!

**Your website is now live!**

- **Website:** `your-vercel-url`
- **CMS:** `your-vercel-url/studio`
- **GitHub:** `github.com/your-username/cghs-website`
- **Sanity Dashboard:** `sanity.io/manage` (your project)
- **Vercel Dashboard:** `vercel.com` (your project)

---

## 💡 QUICK REFERENCE

| What | Where | How Often |
|-----|-------|-----------|
| Update content | `/studio` (CMS) | Anytime |
| Update code | GitHub + push | When needed |
| Check deployment | Vercel dashboard | Daily |
| Add new pages | Edit code, push | As needed |
| Monitor errors | Vercel analytics | Weekly |

---

## 🆘 STUCK?

Check these first:
- [ ] Environment variables set correctly in Vercel?
- [ ] CORS origins added in Sanity?
- [ ] GitHub account connected to Vercel?
- [ ] Code pushed to GitHub?
- [ ] Deployment shows green checkmark in Vercel?

**See DEPLOY-TO-VERCEL.md for detailed troubleshooting!**

---

**Date Deployed:** _______________

**Live URL:** _______________

**Notes:** _________________________________________________________________

---

**Congrats! 🚀 You did it!**
