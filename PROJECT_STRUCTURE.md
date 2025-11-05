# Portfolio Project Structure

```
portfolio-react/
│
├── public/                    # Static assets (served at root)
│   ├── images/               # Images directory
│   │   └── portfolio/        # Project images (if using local images)
│   ├── resume.pdf           # Resume file
│   ├── logo*.png            # Logo files
│   ├── logo.ico             # Favicon
│   └── site.webmanifest     # Web manifest
│
├── src/                      # Source code
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
│
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

## Image Usage

Currently, the portfolio uses:
- **Unsplash placeholder images** for project cards (high-quality, relevant stock photos)
- **Gradient placeholder** for the about section (professional SVG icon)

If you want to use your own images:
1. Place them in `public/images/portfolio/`
2. Update the image paths in `src/components/Projects.jsx`

## Notes

- All images are currently using Unsplash URLs (no local files needed)
- The about section uses a gradient placeholder with an icon
- Resume file should be placed in `public/resume.pdf` if you have one
- Logo files are in the `public/` directory

