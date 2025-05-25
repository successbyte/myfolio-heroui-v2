# Modern Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful black and white theme with smooth animations and transitions.

## Features

- 🌙 Dark/Light theme support
- 🎨 Modern minimalist design
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive layout
- ⚡ Next.js 14 with App Router
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🖼️ Dynamic project showcase
- 📝 Blog section with MDX support
- 🛍️ Digital marketplace
- 📬 Contact form with validation
- 🖱️ Custom cursor effects
- 🌈 Gradient animations
- 🎨 HeroUI components

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
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

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── blog/            # Blog pages
│   ├── marketplace/     # Marketplace pages
│   ├── projects/        # Project pages
│   └── page.tsx         # Home page
├── components/          # React components
├── public/             # Static assets
│   ├── blog/           # Blog images
│   ├── marketplace/    # Product images
│   └── projects/       # Project images
└── styles/             # Global styles
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [HeroUI](https://heroui.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Customization

1. Update the content in the components:
   - `components/Hero.tsx`
   - `components/Projects.tsx`
   - `components/Blog.tsx`
   - `components/Marketplace.tsx`
   - `components/Contact.tsx`

2. Replace images in the `public` directory with your own.

3. Modify the theme colors in `tailwind.config.js`.

4. Update the fonts in `app/layout.tsx`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) font
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) font
- [Heroicons](https://heroicons.com/) for icons
