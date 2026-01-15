# Rovitatech - Software Company Portfolio

A modern, professional portfolio website for Rovitatech built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, animated UI with Framer Motion
- 📱 Fully responsive design
- 🌙 Dark theme with gradient accents
- ⚡ Fast performance with Next.js 16
- 🔒 Supabase integration ready
- 🎯 SEO optimized
- 💅 Tailwind CSS 4 for styling

## Tech Stack

- **Framework:** Next.js 16.1.1
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Database:** Supabase
- **Deployment:** Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Portfolio.tsx    # Portfolio section
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── lib/
│   └── supabase.ts      # Supabase client
└── public/              # Static assets
```

## Customization

- Update company information in components
- Modify colors in `app/globals.css`
- Add your projects in `components/Portfolio.tsx`
- Update services in `components/Services.tsx`
- Configure contact details in `components/Contact.tsx`

## License

© 2026 Rovitatech. All rights reserved.
