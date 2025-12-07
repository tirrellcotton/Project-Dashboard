# Project Dashboard

A modern, fully responsive project management dashboard built from scratch using vanilla HTML, CSS, and JavaScript. This comprehensive web application demonstrates professional UI/UX design patterns, responsive web development techniques, and BEM CSS methodology.

## 📺 Tutorial Reference

This project was built following the comprehensive tutorial:
**[Build a Complete Project Management Dashboard](https://youtu.be/gT6rHhOZEO0?si=hhAwhNct65Vnp2FN)** (2+ hours)

The tutorial covers building a complete, production-ready dashboard from the ground up, teaching modern web development practices and responsive design principles.

## 🎯 About This Project

This project management dashboard provides a clean, intuiti ve interface for tracking projects, team members, and tasks. It features a professional design with modern web technologies and best practices.

### Key Highlights

- **Modern Grid-Based Layout**: Utilizing CSS Grid for a flexible, maintainable structure
- **Dark/Light Theme Toggle**: Seamless theme switching with smooth transitions and localStorage persistence
- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices with custom breakpoints
- **Professional UI Components**: Including headers, sidebars, cards, navigation elements, and interactive timeline
- **BEM Methodology**: Clean, maintainable CSS using Block Element Modifier naming convention
- **JavaScript Interactivity**: Dynamic theme switching, mobile menu, and animated progress indicators

## ✨ Key Features

### 🎨 Theme System
- **Dual Theme Support**: Toggle between elegant dark and light modes
- **Persistent Preferences**: Theme choice saved to localStorage
- **Smooth Transitions**: CSS transitions for seamless theme switching
- **CSS Custom Properties**: All colors managed through CSS variables

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoints**:
  - Mobile: < 768px (collapsible sidebar with overlay)
  - Tablet: 768px - 1200px (icon-only sidebar)
  - Desktop: > 1200px (full sidebar)
- **Touch-Friendly**: Mobile overlay with touch interactions
- **Adaptive Layouts**: Grid layouts adjust based on viewport

### 🎯 Dashboard Components

#### Header
- Search bar with icon
- Theme toggle button (moon/sun icons)
- Notification bell with badge counter
- User profile avatar

#### Sidebar Navigation
- Company logo/branding
- Main menu with 6 navigation items
- Team members section with avatars
- Collapsible on mobile with hamburger menu
- Icon-only mode on tablets

#### Main Content Sections
1. **Welcome Banner**: Personalized greeting with call-to-action button
2. **Profile Card**: User info with circular progress ring showing completion percentage
3. **Projects Grid**: 
   - Three project cards with priority indicators
   - Progress bars with percentage
   - Team member avatars
   - Time tracking and deadlines
   - Category badges (Design, Development, Marketing)
4. **Statistics Cards**: Overview of total, in-progress, and completed projects
5. **Task Timeline**: 
   - Weekly view (Mon-Fri)
   - Visual task bars with gradients
   - User-assigned tasks
   - BEM-structured styling
6. **Team Members Section**: Grid display of team members

#### Footer
- Responsive footer section
- Theme-aware styling

### 💻 Technical Features

- **No Dependencies**: Pure vanilla JavaScript (no frameworks)
- **Font Awesome 6.4.0**: Professional icon library
- **CSS Grid & Flexbox**: Modern layout techniques
- **BEM Naming Convention**: Maintainable CSS architecture
- **LocalStorage API**: Theme persistence across sessions
- **Event Delegation**: Efficient JavaScript event handling
- **Semantic HTML5**: Accessible markup structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - CSS Grid & Flexbox for layouts
  - CSS Custom Properties (Variables) for theming
  - Media queries for responsive design (4 breakpoints)
  - BEM methodology for class naming
  - Smooth transitions and hover effects
  - Gradient backgrounds and shadows
- **JavaScript (ES6+)**: 
  - DOM manipulation
  - Event listeners (click, mouseenter, mouseleave)
  - LocalStorage for theme persistence
  - Dynamic icon switching
  - Progress ring animations
- **Font Awesome 6.4.0**: Professional icon library

## 📁 Project Structure

```
ProjectDashboard/
├── index.html                      # Main HTML structure
├── README.md                       # Project documentation
└── assets/
    ├── css/
    │   └── style.css              # Complete styling with BEM, themes, and media queries
    ├── images/
    │   └── project-mngt/          # Dashboard images and user avatars
    │       ├── 1.jpg - 5.jpg     # Team member photos
    │       └── 2.jpg             # Current user profile
    └── js/
        └── script.js              # Interactive functionality and event handlers
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build process or dependencies required!
- Optional: VS Code with Live Server extension for development

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/tirrellcotton/Project-Dashboard.git
```

2. **Navigate to the project folder**:
```bash
cd Project-Dashboard
```

3. **Open in browser**:
   - Simply open `index.html` in your preferred browser
   - Or use a local development server like Live Server (VS Code extension)
   - Or use Python: `python -m http.server 8000`

### Quick Start

No installation needed! Just download and open `index.html` in any modern browser.

## 🎨 Customization

### Modifying the Color Scheme

The dashboard uses CSS custom properties for easy theme customization. Edit the `:root` variables in `style.css`:

```css
:root {
    --primary: #4361ee;      /* Primary brand color */
    --secondary: #3f37c9;    /* Secondary accents */
    --accent: #4895ef;       /* Accent highlights */
    --success: #4cc9f0;      /* Success indicators */
    --warning: #f72585;      /* Warning/alerts */
    --dark: #2b2d42;         /* Dark elements */
    --light: #f8f9fa;        /* Light backgrounds */
    --gray: #8d99ae;         /* Text gray */
    --sidebar: #1e1f3a;      /* Sidebar background */
    /* ... and more */
}
```

For dark mode, customize the `.dark-mode` class variables.

### Layout Customization

The dashboard uses CSS Grid with defined template areas:

```css
grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
```

Content area sub-grid:
```css
grid-template-areas:
    "welcome profile"
    "projects stats"
    "timeline timeline"
    "users users";
```

### Adding New Projects

Edit `index.html` to add new project cards following the BEM structure. Update CSS for custom progress percentages.

### Customizing the Timeline

Timeline tasks use BEM naming. Add new tasks in `index.html` and create corresponding modifier classes in `style.css`:

```css
.task-bar--your-task {
    top: [position]px;
    left: [position]px;
    width: [width]px;
    background: linear-gradient(135deg, [color1], [color2]);
}
```

## 📱 Responsive Breakpoints

The dashboard adapts to different screen sizes:

| Breakpoint | Range | Behavior |
|------------|-------|----------|
| **Mobile Small** | < 576px | Single column, compact spacing |
| **Mobile** | < 768px | Collapsible sidebar with overlay, stacked layout |
| **Tablet** | 769px - 1200px | Icon-only sidebar, 2-column grid |
| **Desktop** | > 1200px | Full sidebar, multi-column grid layout |

## 🎓 Learning Outcomes

By studying this project, you'll learn:

- **CSS Grid Mastery**: Complex layouts with template areas and nested grids
- **Responsive Design**: Mobile-first approach with multiple breakpoints
- **Theme Implementation**: Dark/light mode with CSS variables
- **BEM Methodology**: Scalable CSS architecture
- **JavaScript Fundamentals**: DOM manipulation, event handling, localStorage
- **Modern CSS**: Custom properties, gradients, transitions, shadows
- **UI/UX Patterns**: Cards, navigation, timelines, progress indicators
- **Clean Code**: Semantic HTML, organized CSS, maintainable JavaScript

## 🔧 JavaScript Features

The `script.js` file implements:

1. **Mobile Sidebar Toggle**: Hamburger menu with icon switching (bars ↔ times)
2. **Theme Switcher**: Dark/light mode with icon switching (moon ↔ sun)
3. **LocalStorage Persistence**: Saves theme preference across sessions
4. **Overlay Handling**: Click-outside-to-close functionality
5. **Task Bar Interactions**: Hover effects with z-index management
6. **Progress Ring Animation**: Dynamic SVG circle animation based on percentage
7. **Event Delegation**: Efficient event handling for multiple elements

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🤝 Contributing

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tirrell Cotton**
- GitHub: [@tirrellcotton](https://github.com/tirrellcotton)
- Repository: [Project-Dashboard](https://github.com/tirrellcotton/Project-Dashboard)

## 🙏 Acknowledgments

- [YouTube Tutorial](https://youtu.be/gT6rHhOZEO0?si=hhAwhNct65Vnp2FN) for comprehensive guidance
- [Font Awesome](https://fontawesome.com/) for the icon library
- The web development community for inspiration and best practices

## 📝 Development Notes

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**