# Moulik's Portfolio - React Version

A modern, high-performance React portfolio built with Vite, Tailwind CSS, and advanced animations.

## Features

- ⚡ **Fast Loading**: Cool pre-loader animation with atom spinner
- 🎨 **3D Effects**: Interactive 3D hover effects on project cards using react-parallax-tilt
- 📜 **Scroll Animations**: Smooth scroll-triggered animations using Intersection Observer
- 🎯 **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🔄 **Smooth Scrolling**: Smooth navigation between sections

## Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **react-parallax-tilt** - 3D hover effects
- **react-intersection-observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory, ready to be deployed to platforms like Vercel or Netlify.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Important: Fix for Blank Page Issue

The project is configured with `base: '/'` in `vite.config.js` for root deployment. If you're deploying to a subdirectory (like GitHub Pages), you'll need to:

1. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```

2. Rebuild:
   ```bash
   npm run build
   ```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite using `vercel.json`
4. The configuration is already set up in `vercel.json`

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Netlify will use `netlify.toml` for configuration
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to the `gh-pages` branch

## Project Structure

```
portfolio-react/
├── public/                   # Static assets (served at root)
│   ├── images/               # Images directory (optional)
│   ├── resume.pdf           # Resume file
│   ├── logo*.png            # Logo files
│   └── site.webmanifest     # Web manifest
├── src/
│   ├── components/           # React components
│   │   ├── Loading.jsx      # Pre-loader component
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero/Intro section
│   │   ├── About.jsx        # About section
│   │   ├── Projects.jsx      # Projects/Works section
│   │   ├── Contact.jsx      # Contact section
│   │   └── Footer.jsx       # Footer component
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

### Image Usage

The portfolio currently uses:
- **Unsplash placeholder images** for project cards (relevant, high-quality stock photos)
- **Gradient placeholder with icon** for the about section

If you want to use your own images:
1. Place them in `public/images/portfolio/`
2. Update the image paths in `src/components/Projects.jsx` to use local paths like `/images/portfolio/your-image.jpg`

## Features Breakdown

### 1. Loading Animation
- Full-screen atom spinner animation
- Automatically hides when content is ready
- Smooth fade-out transition

### 2. 3D Hover Effects
- Project cards tilt in 3D space on hover
- Glare effect for enhanced visual appeal
- Smooth transitions and animations

### 3. Scroll Animations
- Elements fade in and slide up when entering viewport
- Triggered once per element
- Smooth, professional animations

### 4. Smooth Scrolling
- Navigation links smoothly scroll to sections
- Custom scroll offset for better UX
- Works on all browsers

## License

This project is open source and available under the MIT License.

