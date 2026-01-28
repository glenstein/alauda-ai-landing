# Alauda AI Landing Page

A replica of the [Alauda Labs](https://www.alauda.ai) landing page - The Capability Layer for AI Agents.

## Overview

This is a dark-themed, space-inspired landing page showcasing Alauda Network's permissionless capability infrastructure for autonomous agents.

## Features

- **Animated starfield background** - Canvas-based particle system
- **Responsive design** - Works on desktop and mobile
- **Modern gradient hero section** - With floating network visualization
- **Skills discovery showcase** - Real community-built agent capabilities
- **Blog/announcements section** - Latest updates and articles
- **Smooth scrolling navigation** - Polished user experience
- **Cyan accent theme** - Matching the original Alauda.ai branding

## Structure

```
alauda-ai-landing/
├── index.html       # Main HTML structure
├── styles.css       # Complete styling with animations
├── script.js        # Starfield animation & interactions
└── README.md        # This file
```

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/glenstein/alauda-ai-landing.git
   cd alauda-ai-landing
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   # or on Linux:
   xdg-open index.html
   # or on Windows:
   start index.html
   ```

### Verification Steps

To verify the landing page works correctly:

1. **Visual Check**:
   - Open `index.html` in a modern browser
   - Verify the dark background with animated stars
   - Check the hero section displays "The Capability Layer for AI Agents"
   - Ensure the network graph shows floating colored nodes

2. **Interaction Check**:
   - Hover over navigation links - should change color
   - Hover over blog cards - should lift up and change border color
   - Click "Join Waitlist" or "Read the Docs" buttons
   - Verify smooth scrolling for anchor links

3. **Responsive Check**:
   - Resize browser window to mobile size (< 968px)
   - Verify layout stacks vertically
   - Check hero content becomes centered

4. **Content Check**:
   - Verify 6 skills are listed (knowledge-base, api-integration-templates, etc.)
   - Check "586 skills indexed" count is displayed
   - Verify 3 blog posts with correct dates (Dec 24, 20, 18, 2024)

### Live Server (Optional)

For a better development experience, use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx http-server

# Then visit: http://localhost:8000
```

## Content

### Hero Section
- **Title**: "The Capability Layer for AI Agents"
- **Subtitle**: Four core concepts - Discover, Invoke, Pay, Trust
- **Visual**: Network graph with 8 floating nodes in various colors

### Skills Section
Features 6 real community skills:
- knowledge-base (Data & AI - 7.3k stars)
- api-integration-templates (Integration - 20.6k stars)
- data-pipeline-tools (Data & AI - 15.2k stars)
- content-generator (Content & Media - 12.8k stars)
- code-security-auditor (Security - 9.4k stars)
- scheduler-agent (Automation - 8.1k stars)

### Announcements
Three featured blog posts:
1. "The Capability Layer for AI Agents" (Dec 24, 2024)
2. "Skills, Not Just Tools: Rethinking Agent Capabilities" (Dec 20, 2024)
3. "Portable and Reliable: The Future of Agent Skills" (Dec 18, 2024)

## Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** - Canvas animation, smooth scrolling
- **No frameworks** - Pure vanilla code for performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

### GitHub Pages

1. Go to repository Settings > Pages
2. Select source: Deploy from `main` branch
3. Site will be live at: `https://glenstein.github.io/alauda-ai-landing/`

### Other Platforms

- **Netlify**: Drop the folder or connect GitHub repo
- **Vercel**: Import GitHub repo
- **Cloudflare Pages**: Connect GitHub and deploy

## Customization

To customize the content:

1. **Text Content**: Edit `index.html`
2. **Colors**: Modify CSS variables in `styles.css` `:root`
3. **Skills**: Update the `.skills-left` section in `index.html`
4. **Blog Posts**: Update the `.blog-posts` section

## License

This is a replica/study project. Original design © Alauda Labs.

## Links

- **Original Site**: https://www.alauda.ai
- **GitHub Repo**: https://github.com/glenstein/alauda-ai-landing
- **Live Demo**: (Deploy to see it live)

---

**Note**: This is a static replica for educational/portfolio purposes. For the actual Alauda Network, visit [www.alauda.ai](https://www.alauda.ai).
