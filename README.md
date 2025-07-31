# Professional Portfolio - Robline Kipkoech Yegon

A modern, responsive portfolio website showcasing the work and expertise of Robline Kipkoech Yegon, Co-founder & Lead Developer at NoteBook+ and experienced Full Stack Developer.

## Features

- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Dark/Light Theme**: Automatic theme detection with manual toggle override
- **Email Integration**: Contact form powered by Resend API
- **Modern UI**: Built with Next.js, Tailwind CSS, and Framer Motion
- **Accessibility**: WCAG compliant with excellent contrast ratios
- **Performance**: Optimized for fast loading and smooth animations

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Email**: Resend API
- **Deployment**: Static export ready

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   TO_EMAIL=roblineyegon@gmail.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Email Setup

To enable the contact form:

1. Sign up for a [Resend](https://resend.com/) account
2. Get your API key from the Resend dashboard
3. Add your API key to the `.env.local` file
4. Configure your sender and recipient emails

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out` directory, ready for static hosting.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── experience.tsx    # Work experience
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation
│   ├── projects.tsx      # Featured projects
│   └── skills.tsx        # Technical skills
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Key Features

### Professional Introduction
- Polished, professional copy highlighting technical expertise
- Focus on leadership experience and entrepreneurial achievements
- Updated work experience with NoteBook+ co-founder role

### Responsive Design
- Mobile-first approach with breakpoints for all screen sizes
- Optimized typography and spacing for different devices
- Touch-friendly navigation and interactions

### Theme System
- Automatic dark/light mode detection based on system preferences
- Manual theme toggle with smooth transitions
- Accessible color schemes meeting WCAG standards

### Contact Integration
- Functional contact form using Resend API
- Proper error handling and user feedback
- Form validation and loading states

## Customization

### Colors
Modify the color scheme in `app/globals.css` by updating the CSS custom properties for both light and dark themes.

### Content
Update the content in the respective component files:
- `components/about.tsx` - About section
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - Featured projects
- `components/skills.tsx` - Technical skills

### Styling
The project uses Tailwind CSS for styling. Customize the design by modifying the Tailwind classes in the components.

## License

This project is private and proprietary. All rights reserved.

## Contact

For questions or inquiries, please contact:
- Email: roblineyegon@gmail.com
- LinkedIn: [Robline Yegon](https://www.linkedin.com/in/robline-yegon-142631339/)
- Website: [notebookplusai.com](https://notebookplusai.com)