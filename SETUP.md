# Quick Setup Guide

Follow these steps to get your portfolio running:

## 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## 2. Add Your Project Images

1. Create images for your projects (screenshots, mockups, etc.)
2. Place them in the `public/images/` folder
3. Name them descriptively (e.g., `chatbot-ai.jpg`, `image-classifier.png`)

**Image Requirements:**
- Format: JPG, PNG, or WebP
- Recommended size: 800x600px or 1200x800px
- Keep file sizes under 500KB for performance

## 3. Update Your Project Data

Edit `src/data/projects.ts` and replace the placeholder projects with your actual projects:

```typescript
{
  id: "1",
  title: "Your Actual Project Name",
  description: "A detailed description of what your project does...",
  image: "/images/your-project-screenshot.jpg",
  liveUrl: "https://your-project.streamlit.app",
  technologies: ["Python", "Streamlit", "OpenAI", "etc"],
}
```

## 4. Update Personal Information

### In `src/app/page.tsx`:
- Line 23: Change "Mohak" to your name
- Line 27: Update your title/role
- Line 30: Update your description
- Lines 63-80: Update your about section

### In `src/components/Header.tsx`:
- Line 33: Change "Mohak" to your name/logo

### In `src/components/Footer.tsx`:
- Lines 9-28: Update all social media URLs and email

### In `src/app/layout.tsx`:
- Line 10: Update the site title
- Line 11: Update the description
- Line 13: Update the author name

## 5. Test Locally

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## 6. Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com and sign in
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel will auto-detect Next.js settings)
6. Your site will be live in ~2 minutes!

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## 7. Optional Customizations

### Change Color Theme

Edit `tailwind.config.ts` to change the accent colors:

```typescript
accent: {
  cyan: '#06b6d4',    // Change these colors
  blue: '#3b82f6',
  purple: '#a855f7',
}
```

### Add More Sections

You can add more sections by editing `src/app/page.tsx`:
- Skills section
- Experience timeline
- Blog posts
- Testimonials

### Add Google Analytics

1. Get your GA4 measurement ID
2. Add it to your environment variables in Vercel
3. Install and configure next-google-analytics

## Common Issues

### Images not showing?
- Make sure images are in `public/images/`
- Use correct paths: `/images/filename.jpg` (starts with `/`)

### Build failing?
- Run `npm run build` locally to test
- Check for TypeScript errors: `npm run lint`

### Styling looks wrong?
- Clear `.next` folder: `rm -rf .next`
- Reinstall: `npm install`
- Rebuild: `npm run build`

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs

---

**Ready to go!** Once you complete steps 1-3, your portfolio will be ready to deploy. 🚀

