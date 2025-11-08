# Portfolio Customization Checklist

Use this checklist to ensure you've personalized all aspects of your portfolio.

## ✅ Essential Customizations (Must Do)

### 1. Personal Information

- [ ] **Name**: Replace "Mohak" with your name in:
  - `src/app/page.tsx` (line 23)
  - `src/components/Header.tsx` (line 33)
  - `src/app/layout.tsx` (line 13, metadata)

- [ ] **Title/Role**: Update "AI Engineer & Machine Learning Enthusiast" in:
  - `src/app/page.tsx` (line 27)

- [ ] **Bio/Description**: Update the about section in:
  - `src/app/page.tsx` (lines 30, 63-80)

### 2. Contact Information

- [ ] **Email**: Replace "your.email@example.com" in:
  - `src/components/Footer.tsx` (line 23)
  - `src/app/page.tsx` (line 147)

- [ ] **GitHub**: Replace "https://github.com/yourusername" in:
  - `src/components/Footer.tsx` (line 9)
  - `src/app/page.tsx` (line 173)

- [ ] **LinkedIn**: Replace "https://linkedin.com/in/yourusername" in:
  - `src/components/Footer.tsx` (line 14)
  - `src/app/page.tsx` (line 157)

- [ ] **Twitter**: Replace "https://twitter.com/yourusername" in:
  - `src/components/Footer.tsx` (line 19)
  - `src/app/page.tsx` (line 189)

### 3. Projects Data

- [ ] **Add Your Projects**: Edit `src/data/projects.ts`
  - Replace all 6 placeholder projects with your actual projects
  - Update: title, description, liveUrl, technologies
  - Add more projects (you mentioned 12-15 projects)

### 4. Project Images

- [ ] **Add Screenshots**: 
  - Take screenshots of your deployed Streamlit apps
  - Save them in `public/images/` folder
  - Update image paths in `src/data/projects.ts`
  - Recommended format: JPG or PNG, 800x600px or larger

## 🎨 Optional Customizations

### 5. Metadata & SEO

- [ ] **Site Title**: Update in `src/app/layout.tsx` (line 10)
- [ ] **Description**: Update in `src/app/layout.tsx` (line 11)
- [ ] **Keywords**: Update in `src/app/layout.tsx` (line 12)

### 6. Design Tweaks

- [ ] **Color Theme**: Change accent colors in `tailwind.config.ts` (lines 14-18)
- [ ] **Fonts**: Change fonts in `src/app/layout.tsx` (line 4)
- [ ] **Animations**: Adjust animation timing in `tailwind.config.ts` (lines 20-37)

### 7. Additional Sections (Optional)

- [ ] Add Skills section
- [ ] Add Experience/Education timeline
- [ ] Add Certifications
- [ ] Add Blog/Articles section
- [ ] Add Resume download (place `resume.pdf` in `public/`)

### 8. Statistics

- [ ] **Project Count**: Update "12+" in `src/app/page.tsx` (line 82)
- [ ] **Other Stats**: Update statistics in lines 82-96

## 📋 Pre-Deployment Checklist

Before deploying to Vercel:

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and test locally
- [ ] All images load correctly
- [ ] All links work and open in new tabs
- [ ] Test on mobile device or browser dev tools
- [ ] Run `npm run build` to check for errors
- [ ] Update README.md if needed

## 🚀 Deployment Checklist

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Deploy to Vercel
- [ ] Test the live site
- [ ] Check all links work on production
- [ ] Share your portfolio URL!

## 📝 Quick Reference: File Locations

| What to Update | File Path |
|----------------|-----------|
| Your name & bio | `src/app/page.tsx` |
| Projects data | `src/data/projects.ts` |
| Social links | `src/components/Footer.tsx` |
| Contact info | `src/app/page.tsx` (Contact section) |
| Site metadata | `src/app/layout.tsx` |
| Color theme | `tailwind.config.ts` |
| Project images | `public/images/` |

## 💡 Tips

1. **Start with essentials**: Complete sections 1-4 first
2. **Test frequently**: Run `npm run dev` after each change
3. **One section at a time**: Don't try to customize everything at once
4. **Keep it simple**: Don't over-complicate on first version
5. **Iterate**: Deploy first, then improve gradually

---

**Time Estimate**: 1-2 hours to complete all essential customizations

Good luck with your portfolio! 🚀

