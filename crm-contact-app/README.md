# CRM Contact Application

A modern, responsive React application built with TypeScript and TailwindCSS, featuring a CRM-style contact management interface with conversation capabilities.

## Features

- 🌓 **Dark/Light Theme Support** - Automatic system preference detection with manual toggle
- 📱 **Fully Responsive** - Optimized for both desktop and mobile devices
- 🎨 **Modern UI Components** - Reusable, accessible components built with TailwindCSS
- 💬 **Real-time Conversations** - Interactive messaging interface with typing indicators
- 👤 **Contact Management** - Comprehensive contact details with editable fields
- 🏷️ **Tag System** - Visual tagging system for contact organization
- ⚡ **TypeScript** - Full type safety and enhanced developer experience

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Avatar.tsx
│   │   ├── Tag.tsx
│   │   └── index.ts
│   ├── contact/               # Contact-related components
│   │   └── ContactDetails.tsx
│   ├── conversations/         # Conversation components
│   │   └── ConversationPanel.tsx
│   └── Header.tsx
├── contexts/
│   └── ThemeContext.tsx       # Theme management
├── types/
│   └── index.ts              # TypeScript interfaces
├── utils/
│   ├── cn.ts                 # Class name utility
│   └── mockData.ts           # Sample data
└── App.tsx                   # Main application component
```

## Components

### UI Components

- **Button** - Versatile button component with multiple variants and sizes
- **Input** - Form input with validation states and icon support
- **Card** - Container component with customizable padding and shadows
- **Avatar** - User avatar with image fallback to initials
- **Tag** - Label component for categorization and status

### Feature Components

- **ContactDetails** - Left panel showing contact information and form fields
- **ConversationPanel** - Right panel with messaging interface
- **Header** - Navigation header with theme toggle

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crm-contact-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Theme System

The application includes a comprehensive theme system with:

- **Automatic Detection** - Respects system preferences on first load
- **Manual Toggle** - Users can override system preference
- **Persistence** - Theme choice is saved to localStorage
- **Smooth Transitions** - All theme changes are animated

## Responsive Design

The application is built mobile-first with:

- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

- **Mobile Navigation** - Floating action button to toggle between panels
- **Flexible Layouts** - Components adapt to screen size
- **Touch-Friendly** - Appropriately sized touch targets

## Customization

### Colors

The color palette can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
  },
  gray: {
    // Custom gray scale
  }
}
```

### Components

All components are designed to be easily customizable through props and CSS classes. Use the `cn` utility for conditional styling.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and enhanced development
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Create React App** - Zero-config build setup
