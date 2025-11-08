# Mohak's AI Portfolio

A modern, responsive portfolio website showcasing AI and Machine Learning projects built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with cyan/blue accents and smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Project Showcase**: Display up to 12+ AI/ML projects with images and descriptions
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Easy Customization**: Simple data structure for adding/updating projects
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Mohak-AI-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

1. **Edit `src/app/page.tsx`**: Update your name, bio, and tagline
2. **Edit `src/components/Header.tsx`**: Change the logo/name
3. **Edit `src/components/Footer.tsx`**: Update social media links and email

### Add Your Projects

Edit `src/data/projects.ts` to add your actual projects:

```typescript
{
  id: "1",
  title: "Your Project Title",
  description: "A brief description of your project",
  image: "/images/your-project-image.jpg",
  liveUrl: "https://your-project.streamlit.app",
  technologies: ["Python", "Streamlit", "TensorFlow"],
}
```

### Add Project Images

1. Place your project images in the `public/images/` folder
2. Reference them in `projects.ts` as `/images/your-image.jpg`
3. Recommended image size: 800x600px or similar aspect ratio

### Update Contact Information

In `src/app/page.tsx` and `src/components/Footer.tsx`, replace placeholder URLs and email:

- `your.email@example.com` → Your actual email
- `https://github.com/yourusername` → Your GitHub URL
- `https://linkedin.com/in/yourusername` → Your LinkedIn URL
- `https://twitter.com/yourusername` → Your Twitter URL

### Color Theme (Optional)

To change the color scheme, edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    cyan: '#06b6d4',  // Change these hex values
    blue: '#3b82f6',
    purple: '#a855f7',
  },
}
```

## 🚀 Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Environment Variables (if needed)

If you have any API keys or secrets, add them in Vercel:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## 📁 Project Structure

```
Mohak-AI-Portfolio/
├── public/
│   └── images/              # Project images
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer with social links
│   │   └── ProjectCard.tsx  # Project card component
│   └── data/
│       └── projects.ts      # Project data
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎯 Key Sections

1. **Hero Section**: Introduction with name and tagline
2. **About Section**: Brief bio and statistics
3. **Projects Section**: Grid of project cards
4. **Contact Section**: Ways to reach out

## 📝 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🐛 Troubleshooting

### Images not loading?
- Ensure images are in `public/images/`
- Use correct paths: `/images/filename.jpg`
- Check image file extensions match

### Styling issues?
- Run `npm run dev` to rebuild Tailwind classes
- Check console for errors
- Verify Tailwind directives in `globals.css`

### Build errors?
- Delete `.next` folder and rebuild
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by Mohak**

