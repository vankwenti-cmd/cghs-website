# Quick Start: Deploy in 15 Minutes

**TL;DR** - Get your website live to Vercel in 15 minutes.

---

## 🚀 The Process

### 5 min: Set Up Sanity.io
```
1. Go to sanity.io → Sign up
2. Create project "Columbia Gorge Humane Society"
3. Settings → API → Copy Project ID
4. API → Add CORS origin:
   - http://localhost:3000
   - https://cghs-website.vercel.app
```

**Save your Project ID!**

### 5 min: Push to GitHub
```bash
cd /Users/user/Documents/Claude_Projects_Mac/cghs-website

git init
git config user.name "Your Name"
git config user.email "your-email@example.com"
git add .
git commit -m "Initial commit: CGHS website"

# Go to github.com, create repo "cghs-website", then run:
git remote add origin https://github.com/YOUR-USERNAME/cghs-website.git
git branch -M main
git push -u origin main
```

### 5 min: Deploy on Vercel
```
1. Go to vercel.com → Sign up with GitHub
2. Click "Add New" → "Project"
3. Select "cghs-website"
4. Add Environment Variables:
   - NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
   - NEXT_PUBLIC_SANITY_DATASET = production
5. Click "Deploy"
6. Wait 2-5 minutes ✅
```

**Your site is LIVE!** 🎉

---

## ✅ What You Get

| What | URL |
|------|-----|
| Website | `https://cghs-website-xxx.vercel.app` |
| CMS | `https://cghs-website-xxx.vercel.app/studio` |
| Dashboard | vercel.com (your project) |

---

## 📝 After Deployment

Visit `/studio` to add:
- Adoptable pets
- Team members  
- Events
- Site settings (phone, email, etc.)

Changes appear instantly on your website.

---

## 🔧 Update Website

```bash
# Edit files locally
# Then push to GitHub:
git add .
git commit -m "Update message"
git push

# Vercel auto-deploys in 1-2 minutes ✅
```

---

## 📚 Full Guides

- **DEPLOY-TO-VERCEL.md** - Detailed step-by-step guide
- **DEPLOYMENT-CHECKLIST.md** - Printable checklist to follow
- **README.md** - Setup and customization guide
- **DEPLOYMENT.md** - Maintenance and troubleshooting

---

## ⚠️ Common Issues

| Issue | Fix |
|-------|-----|
| "Project ID not found" | Check env variable, no spaces |
| CMS doesn't load | Add Vercel domain to Sanity CORS |
| Site shows 404 | Wait 5 minutes, hard refresh |
| Content doesn't update | Redeploy from Vercel dashboard |

---

**That's it! You're deployed! 🚀**

See **DEPLOY-TO-VERCEL.md** for detailed walkthrough with screenshots.
