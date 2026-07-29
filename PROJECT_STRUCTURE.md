# Warung Nusantara - Project Structure & Documentation

## 📁 Project Organization

```
belajar-react/
├── public/                    # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/               # Images and static files
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/           # React components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Filter.jsx
│   │   ├── FoodCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MenuSection.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── foods.js          # Menu data (no backend required)
│   ├── styles/               # CSS Modules
│   │   ├── About.module.css
│   │   ├── Cart.module.css
│   │   ├── Contact.module.css
│   │   ├── Filter.module.css
│   │   ├── FoodCard.module.css
│   │   ├── Footer.module.css
│   │   ├── Hero.module.css
│   │   ├── MenuSection.module.css
│   │   ├── Navbar.module.css
│   │   ├── SearchBar.module.css
│   │   └── index.css         # Global styles
│   ├── App.jsx               # Main App component
│   ├── App.css               # Legacy (compatibility)
│   ├── index.css             # Legacy (compatibility)
│   └── main.jsx              # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🎯 Key Features Implemented

### ✅ Completed Features

1. **Responsive Navbar**
   - Sticky navigation with logo and menu links
   - Shopping cart icon with item counter
   - Dark mode toggle
   - Mobile-friendly hamburger menu
   - Smooth navigation with anchor links

2. **Hero Section**
   - Large banner with title and subtitle
   - Call-to-action button
   - Gradient background
   - Decorative floating elements
   - Smooth scrolling navigation

3. **Search Functionality**
   - Real-time search by food name
   - Clear button for quick reset
   - Case-insensitive search
   - Instant filtering

4. **Filter System**
   - Filter by category: All, Makanan, Minuman
   - Popular items filter
   - Active filter highlight
   - Instant filter application

5. **Menu Display**
   - Responsive grid layout
   - Food cards with images
   - Food name, description, price, rating
   - Category badges with color coding
   - Popular item badges with pulse animation
   - "Add to Cart" buttons

6. **Shopping Cart**
   - Slide-out cart sidebar
   - Add/remove items
   - Adjust quantities
   - Calculate totals automatically
   - Empty cart message

7. **About Section**
   - Restaurant information
   - Animated counter statistics
   - Customer count, menu items, years of experience
   - Responsive grid

8. **Contact Section**
   - Address, phone, and email display
   - Google Maps placeholder
   - Styled info cards

9. **Footer**
   - Company information
   - Quick links
   - Business hours
   - Social media links
   - Copyright information
   - Back to top button

10. **Bonus Features**
    - Dark mode toggle (🌙/☀️)
    - Loading animation (1.5s)
    - Smooth scrolling
    - Animated counters
    - Back to top button
    - Responsive design (desktop, tablet, mobile)
    - Modern UI with shadows and animations
    - Smooth transitions and hover effects

## 🎨 Design System

### Color Palette
- **Primary Color**: #ff9500 (Orange)
- **Primary Dark**: #e68a00
- **Primary Light**: #ffb84d
- **Text Dark**: #2c3e50
- **Text Light**: #7f8c8d
- **Background Light**: #f8f9fa
- **Background White**: #ffffff
- **Border Color**: #e0e0e0

### Typography
- **Font Family**: System UI, Segoe UI, Roboto, sans-serif
- **Line Height**: 1.6
- **Border Radius**: 12px
- **Shadow**: 0 2px 8px rgba(0, 0, 0, 0.1)

## 🔧 React Concepts Used

- **useState**: Managing cart items, filters, search query, dark mode, loading state
- **useEffect**: Loading animation, dark mode class, scroll listeners
- **Props**: Passing data between components
- **Component Composition**: Reusable components
- **Conditional Rendering**: Empty states, loading states
- **Array Methods**: map(), filter() for rendering and filtering
- **Event Handling**: Click, change, scroll events
- **CSS Modules**: Component-scoped styling

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd belajar-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Data Structure

All menu items are stored in `src/data/foods.js` as a JavaScript array:

```javascript
{
  id: 1,
  name: "Nasi Goreng",
  description: "...",
  price: 25000,
  rating: 4.8,
  category: "makanan",
  isPopular: true,
  image: "url"
}
```

## 🎬 Component Breakdown

### Navbar
- Sticky positioning
- Mobile hamburger menu
- Cart counter badge
- Dark mode toggle

### Hero
- Responsive grid layout
- Call-to-action button
- Decorative elements
- Gradient background

### SearchBar
- Real-time input filtering
- Clear button
- Placeholder text

### Filter
- Category buttons
- Active state styling
- Callback handler

### FoodCard
- Image with hover zoom
- Price formatting (IDR)
- Star rating display
- Category badge
- Popular badge with animation

### MenuSection
- Grid layout with auto-fill
- Empty state message
- Loading spinner
- Combined filtering

### Cart
- Slide-out panel with overlay
- Item quantity controls
- Remove buttons
- Total calculation
- Empty state

### About
- Two-column layout
- Animated counters
- Stats grid

### Contact
- Info cards
- Map placeholder
- Icon display

### Footer
- Multi-column layout
- Social media links
- Business hours
- Back to top button
- Smooth scroll listener

## 💡 Code Quality Features

- Clear component structure
- JSDoc comments for major components
- Meaningful variable names
- DRY principles applied
- Reusable utility functions
- Modular CSS with CSS Modules
- Responsive design patterns
- Accessibility considerations
- Error-safe event handling

## 🔒 No Backend Required

- All data stored in JavaScript arrays
- Local state management with React hooks
- No API calls needed
- Perfect for beginners to understand React concepts
- Easy to extend with a backend later

## 📝 Future Enhancements

- Connect to a backend API
- User authentication
- Order history
- Payment integration
- Admin panel for menu management
- Restaurant ratings and reviews
- Delivery tracking
- SMS/Email notifications

## 🎓 Learning Outcomes

This project demonstrates:
- Component-based architecture
- State management with hooks
- Props drilling and composition
- Event handling in React
- Conditional rendering
- List rendering with keys
- CSS Modules for scoped styling
- Responsive design
- Dark mode implementation
- Real-time filtering and search

---

**Happy Coding! 🚀**

For any questions or improvements, feel free to customize the code based on your needs!
