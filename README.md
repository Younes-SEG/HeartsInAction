# Hearts in Action - UOttawa

A modern website for the Hearts in Action club at the University of Ottawa, featuring event tracking, fundraising progress, member information, and more.

## Features

- 🏠 **Homepage** - Overview of the club with quick stats and call-to-action
- 📅 **Events** - Track past and upcoming fundraising events
- 💰 **Fundraising** - Monitor fundraising goals and progress
- 👥 **Members** - Meet the team and learn about joining
- 📖 **About** - Learn about the club's mission and values
- 📧 **Contact** - Get in touch and get involved

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern, responsive styling
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd HeartsInAction
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

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
HeartsInAction/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── fundraising/       # Fundraising tracker
│   ├── members/           # Members page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   └── Navigation.tsx     # Navigation bar
├── public/                # Static assets
└── package.json           # Dependencies

```

## Customization

### Updating Content

- **Events**: Edit `app/events/page.tsx` and update the `sampleEvents` array
- **Fundraising Goals**: Edit `app/fundraising/page.tsx` and update the `sampleGoals` array
- **Members**: Edit `app/members/page.tsx` and update the `sampleMembers` array
- **Contact Info**: Edit `app/contact/page.tsx` to update email and social media links

### Styling

The site uses Tailwind CSS. You can customize colors in `tailwind.config.ts` and update the red/pink theme throughout the components.

### Adding Features

- Consider adding a database (e.g., Supabase, Firebase) for dynamic content
- Add form handling for the contact form (e.g., Formspree, SendGrid)
- Integrate with social media APIs for live feeds
- Add authentication for member-only areas

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is for the Hearts in Action club at the University of Ottawa.

## Support

For questions or issues, please contact the development team or open an issue on GitHub.
