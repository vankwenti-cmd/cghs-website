# Columbia Gorge Humane Society Website

A modern, responsive website for Columbia Gorge Humane Society built with Next.js 14, TypeScript, Tailwind CSS, and a Sanity.io headless CMS for content management.

## Features

✨ **Multi-page website** covering all key sections:
- Home page with hero, featured pets, and call-to-action
- Adoptable pets directory with filtering
- Individual pet profiles
- Volunteer opportunities and application form
- Foster program information
- Donation interface
- Leadership team directory
- Event calendar
- Success stories
- Pet care resources
- Organization information

🎨 **Design-consistent implementation** based on the provided design system
- Custom color palette (ink, cyan, slate colors)
- Responsive grid layouts
- Accessible components
- Smooth transitions and interactions

🛠️ **Headless CMS** (Sanity.io) for managing:
- Adoptable pets and their details
- Team leadership information
- Events and announcements
- Success stories
- Pet care resources
- Global site settings

📱 **Responsive design** that works on all device sizes

⚡ **Performance optimized** with Next.js 14 and image optimization

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io (headless CMS)
- **Deployment**: Vercel
- **Database**: Sanity.io's cloud database

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Sanity account (free tier available at sanity.io)
- Vercel account (free tier available at vercel.com)

### Step 1: Set up Sanity.io

1. Create a free Sanity.io account at [sanity.io](https://sanity.io)
2. Create a new project (name it "Columbia Gorge Humane Society")
3. Choose "Production" dataset
4. Copy your **Project ID** from your project settings

### Step 2: Local Development

1. Clone this repository:
```bash
git clone <repo-url>
cd cghs-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your Sanity Project ID to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Step 3: Access the CMS

The Sanity Studio (CMS interface) is available at [http://localhost:3000/studio](http://localhost:3000/studio)

Use it to:
- Add/edit adoptable pets
- Manage team members
- Create events
- Add success stories
- Update site settings

## Deploying to Vercel

### Option A: Manual Deployment

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: CGHS website"
git remote add origin <your-github-repo>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET`: `production`
6. Click "Deploy"

### Option B: One-Click Deploy

(Coming soon - deploy button configuration)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity.io project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name (default: `production`) | No |

## Project Structure

```
cghs-website/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── adopt/            # Adoption pages
│   │   ├── volunteer/        # Volunteer pages
│   │   ├── donate/           # Donation pages
│   │   ├── contact/          # Contact pages
│   │   └── globals.css       # Global styles
│   └── components/           # Reusable React components
│       ├── header.tsx
│       ├── footer.tsx
│       ├── button.tsx
│       └── pet-card.tsx
├── sanity/
│   ├── schemas/              # Sanity content schemas
│   │   ├── pet.ts
│   │   ├── leader.ts
│   │   ├── event.ts
│   │   ├── story.ts
│   │   ├── resource.ts
│   │   ├── page.ts
│   │   └── settings.ts
│   └── lib/
│       └── client.ts         # Sanity client & queries
├── package.json              # Dependencies
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json              # Vercel deployment config
```

## Content Management

### Adding Pets

1. Go to Studio at `/studio`
2. Click "Pet" in the left sidebar
3. Click "Create"
4. Fill in:
   - Name
   - Reference ID (e.g., CG-2024-001)
   - Species, age, size, location
   - Description and photos
   - Facts table
   - Toggle "Featured on Homepage" to show on home page

### Managing Global Settings

1. Go to Studio
2. Click "Settings" 
3. Update:
   - Site title and description
   - Contact information
   - Operating hours
   - Urgent banner text

### Adding Events

1. Go to Studio
2. Click "Event"
3. Create event with date, location, and description

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette. The current colors match the design system:
- `ink-*` colors for dark backgrounds
- `cyan-*` colors for accents
- `slate-*` colors for borders and secondary text

### Fonts

The design uses system fonts by default. To add custom fonts:

1. Add to `tailwind.config.ts`
2. Import in `src/app/layout.tsx`

### Pages

Add new pages by creating folders in `src/app/`:
```bash
mkdir -p src/app/about
echo "export default function About() { return <div>About</div> }" > src/app/about/page.tsx
```

## Troubleshooting

### "NEXT_PUBLIC_SANITY_PROJECT_ID is not defined"

Make sure you have `.env.local` set up with your Sanity project ID.

### CMS not loading at `/studio`

Run `npm install` to ensure all packages are installed, then restart the dev server.

### Images not loading from Sanity

Images are automatically configured in `next.config.js`. If they still don't load:
1. Check your Sanity project has the images plugin enabled
2. Ensure the image URLs are public

## Performance Optimization

- Images are optimized with Next.js `<Image>` component
- Fonts use system stack for zero web font requests
- Code is split per page with dynamic imports
- CMS queries are cached when possible

## SEO

Each page includes:
- Semantic HTML structure
- Meta titles and descriptions
- Open Graph tags (can be enhanced)
- Structured data support (can be added)

## Accessibility

- WCAG 2.1 AA compliant colors
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images (managed in Sanity)

## Support & Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs

## License

This project is licensed for use by Columbia Gorge Humane Society.

## Credits

Built with Next.js, Sanity.io, and Tailwind CSS.

---

**Ready to deploy?** Follow the Vercel deployment steps above and your website will be live in minutes!
