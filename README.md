# Modern Portfolio Template with Hero UI

A sleek and modern portfolio template built with Next.js 15, TypeScript, and Hero UI components. This template provides a beautiful, responsive, and customizable portfolio website perfect for developers, designers, and creative professionals.

## ✨ Features

- 🎨 Built with [Hero UI](https://heroui.net/) - A modern and beautiful component library
- ⚡ Powered by Next.js 15 with App Router
- 🎭 Dark/Light mode support
- 📱 Fully responsive design
- 🔧 TypeScript support
- 🎯 SEO optimized
- 📝 Blog section support
- 💼 Project showcase
- 📄 About page
- 📞 Contact form
- 🛍️ Marketplace integration
- 📚 Documentation section

## 🚀 Project Structure

```
folio2/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── contact/           # Contact page
│   ├── docs/              # Documentation pages
│   ├── marketplace/       # Marketplace section
│   └── projects/          # Projects showcase
├── components/            # Reusable components
├── contexts/              # React contexts
├── data/                  # Static data/content
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── config/               # Configuration files
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **UI Components:** Hero UI
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Code Highlighting:** React Syntax Highlighter
- **Theme:** Next Themes
- **Type Checking:** TypeScript

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd folio2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Theme Customization

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`:

- Colors
- Typography
- Spacing
- Breakpoints
- And more...

### Content Customization

1. **Personal Information:**
   - Update your personal information in the data files located in the `data/` directory

2. **Projects:**
   - Add your projects in `data/projects.ts`

3. **Blog Posts:**
   - Create or modify blog posts in the `data/blog/` directory

4. **Navigation:**
   - Modify the navigation structure in `components/Navbar.tsx`

### Component Customization

All components are built using Hero UI. You can customize them by:

1. Modifying the component props
2. Extending the base styles
3. Creating new variants using `tailwind-variants`
4. Using Hero UI's theming system

## 📄 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🙏 Acknowledgments

This project is built with [Hero UI](https://heroui.net/), a powerful and beautiful component library that makes creating modern user interfaces a breeze. Special thanks to the Hero UI team for providing such an amazing library.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
