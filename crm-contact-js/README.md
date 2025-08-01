# CRM Contact Application (JavaScript)

A modern, responsive React application built with JavaScript and TailwindCSS, featuring a CRM-style contact management interface with conversation capabilities.

## Features

- 🌓 **Dark/Light Theme Support** - Automatic system preference detection with manual toggle
- 📱 **Fully Responsive** - Optimized for both desktop and mobile devices
- 🎨 **Modern UI Components** - Reusable, accessible components built with TailwindCSS
- 💬 **Real-time Conversations** - Interactive messaging interface with typing indicators
- 👤 **Contact Management** - Comprehensive contact details with editable fields
- 🏷️ **Tag System** - Visual tagging system for contact organization
- ⚡ **JavaScript** - Clean, modern JavaScript with React hooks and functional components

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Card.js
│   │   ├── Avatar.js
│   │   ├── Tag.js
│   │   └── index.js
│   ├── contact/               # Contact-related components
│   │   └── ContactDetails.js
│   ├── conversations/         # Conversation components
│   │   └── ConversationPanel.js
│   └── Header.js
├── contexts/
│   └── ThemeContext.js        # Theme management
├── utils/
│   ├── cn.js                  # Class name utility
│   └── mockData.js            # Sample data and utility functions
└── App.js                     # Main application component
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
cd crm-contact-js
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

## Component Props Documentation

### ContactDetails

```javascript
<ContactDetails
  contact={object}           // Contact object with all details
  currentIndex={number}      // Current contact index (1-based)
  totalContacts={number}     // Total number of contacts
  onContactChange={function} // Callback for navigation (prev/next)
  onFieldChange={function}   // Callback for field updates
/>
```

### ConversationPanel

```javascript
<ConversationPanel
  conversation={object}    // Conversation object with messages
  contactName={string}     // Full name of the contact
  onSendMessage={function} // Callback for sending new messages
/>
```

### Button

```javascript
<Button
  variant="primary|secondary|outline|ghost|danger" // Button style
  size="sm|md|lg"                                  // Button size
  loading={boolean}                                // Show loading spinner
  disabled={boolean}                               // Disable button
  onClick={function}                               // Click handler
>
  Button Text
</Button>
```

### Input

```javascript
<Input
  label={string}        // Input label
  placeholder={string}  // Placeholder text
  value={string}        // Input value
  onChange={function}   // Change handler
  error={string}        // Error message
  leftIcon={element}    // Left icon component
  rightIcon={element}   // Right icon component
  type="text|email|tel" // Input type
/>
```

## Theme System

The application includes a comprehensive theme system with:

- **Automatic Detection** - Respects system preferences on first load
- **Manual Toggle** - Users can override system preference
- **Persistence** - Theme choice is saved to localStorage
- **Smooth Transitions** - All theme changes are animated

### Using the Theme Context

```javascript
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

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

## Data Structure

### Contact Object

```javascript
{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  address: {
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string
  },
  businessName: string,
  streetAddress: string,
  tags: string[],
  owner: string,
  followers: string[],
  avatar: string,
  isVip: boolean,
  isSharedContact: boolean
}
```

### Message Object

```javascript
{
  id: string,
  senderId: string,
  senderName: string,
  content: string,
  timestamp: Date,
  type: 'message' | 'order_update' | 'follow_up',
  isFromUser: boolean,
  hasTrackingLink: boolean,
  trackingUrl: string
}
```

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

All components accept standard HTML props plus custom styling through the `className` prop. Use the `cn` utility for conditional styling:

```javascript
import { cn } from '../utils/cn';

<div className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className
)}>
```

## Best Practices

### State Management

- Use React hooks for local state
- Lift state up when needed by multiple components
- Consider Context API for global state (theme, user data)

### Component Design

- Keep components small and focused
- Use prop destructuring for cleaner code
- Provide default props where appropriate
- Document component APIs with JSDoc

### Performance

- Use React.memo for expensive components
- Optimize re-renders with useCallback and useMemo
- Lazy load components when appropriate

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
- **JavaScript ES6+** - Modern JavaScript features
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Create React App** - Zero-config build setup
- **clsx** - Utility for constructing className strings
