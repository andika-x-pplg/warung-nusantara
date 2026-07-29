# 🍜 Warung Nusantara - Modern React Restaurant App

A beautiful, responsive, and beginner-friendly restaurant/food stall website built with React and Vite. No backend required! All data is stored locally in JavaScript arrays.

## ✨ Features

### Core Features
- ✅ Sticky navigation bar with logo and menu
- ✅ Hero section with call-to-action button
- ✅ Search functionality to find food by name
- ✅ Filter by category (All, Food, Drinks, Popular)
- ✅ Beautiful food card grid with images, prices, and ratings
- ✅ Shopping cart with add/remove/quantity controls
- ✅ About section with restaurant information
- ✅ Contact section with location and contact details
- ✅ Footer with quick links and social media
- ✅ Fully responsive for mobile, tablet, and desktop

### Bonus Features
- 🌙 Dark mode toggle (light/dark theme)
- ⏳ Loading animation on first visit
- 📊 Animated counters showing statistics
- ⬆️ Back-to-top button
- 🎨 Smooth animations and transitions
- 🔍 Real-time search and filtering
- 📱 Mobile-friendly with hamburger menu

## 🎨 Design Highlights

- **Modern UI** with rounded corners and shadows
- **Orange Color Scheme** (#ff9500) as primary color
- **Clean Typography** with system fonts
- **Smooth Animations** on scroll and hover
- **Responsive Layout** adapts to all screen sizes
- **Dark Mode Support** for comfortable viewing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running

```bash
# 1. Navigate to project directory
cd belajar-react

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# The app will open at http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Sticky navigation
│   ├── Hero.jsx        # Hero banner
│   ├── SearchBar.jsx   # Search functionality
│   ├── Filter.jsx      # Category filters
│   ├── FoodCard.jsx    # Individual food item card
│   ├── MenuSection.jsx # Food grid display
│   ├── Cart.jsx        # Shopping cart sidebar
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact information
│   └── Footer.jsx      # Footer with links
├── data/
│   └── foods.js        # Menu data (10 sample items)
├── styles/
│   ├── index.css       # Global styles
│   ├── Navbar.module.css
│   ├── Hero.module.css
│   ├── SearchBar.module.css
│   ├── Filter.module.css
│   ├── FoodCard.module.css
│   ├── MenuSection.module.css
│   ├── Cart.module.css
│   ├── About.module.css
│   ├── Contact.module.css
│   └── Footer.module.css
├── App.jsx             # Main application component
└── main.jsx            # React entry point
```

## 📊 Sample Menu Data

The app comes with 10 sample food items:

| Item | Price | Category | Rating |
|------|-------|----------|--------|
| Nasi Goreng | Rp25,000 | Makanan | ⭐ 4.8 |
| Mie Ayam | Rp18,000 | Makanan | ⭐ 4.7 |
| Bakso | Rp20,000 | Makanan | ⭐ 4.6 |
| Ayam Geprek | Rp23,000 | Makanan | ⭐ 4.9 |
| Sate Ayam | Rp30,000 | Makanan | ⭐ 4.8 |
| Es Teh | Rp8,000 | Minuman | ⭐ 4.5 |
| Jus Alpukat | Rp15,000 | Minuman | ⭐ 4.7 |
| Gado-Gado | Rp22,000 | Makanan | ⭐ 4.6 |
| Lumpia | Rp12,000 | Makanan | ⭐ 4.5 |
| Jus Jeruk | Rp12,000 | Minuman | ⭐ 4.6 |

**To add more items:** Edit `src/data/foods.js` and follow the existing format.

## 🎮 How to Use

### Navigation
- Click on menu items in the navbar to jump to sections
- Use the smooth scroll for better UX
- Mobile users: tap the ☰ button for the menu

### Shopping
1. **Browse**: Scroll through the menu items
2. **Search**: Use the search bar to find items by name
3. **Filter**: Click category buttons (All, Makanan, Minuman, Popular)
4. **Add to Cart**: Click "+ Keranjang" button on any item
5. **View Cart**: Click the 🛒 icon in the navbar
6. **Manage**: Adjust quantities or remove items in the cart

### Additional Features
- **Dark Mode**: Click 🌙 in navbar to toggle theme
- **Back to Top**: Scroll down and click the "⬆️ Top" button
- **Statistics**: View animated counters in About section

## 💻 React Concepts Used

### Hooks
- `useState` - Manage cart, search, filters, dark mode, loading state
- `useEffect` - Handle scroll events, animations, dark mode class

### Component Patterns
- **Functional Components** - All components are functional
- **Props** - Pass data between components
- **Controlled Components** - Search input with state
- **Conditional Rendering** - Empty cart, loading states
- **List Rendering** - Using map() with keys

### Styling
- **CSS Modules** - Scoped component styling
- **Global Styles** - CSS variables for theme consistency
- **Responsive Design** - Media queries for all breakpoints
- **Dark Mode** - Body class for theme switching

## 📱 Responsive Design

The app is fully responsive on all devices:

| Device | Width | Status |
|--------|-------|--------|
| Large Desktop | 1200px+ | ✅ Optimized |
| Tablet | 768-1199px | ✅ Optimized |
| Mobile | 480-767px | ✅ Optimized |
| Small Mobile | <480px | ✅ Optimized |

All components scale appropriately for smaller screens with:
- Adjusted font sizes
- Reduced padding/margins
- Flexible grid layouts
- Touch-friendly buttons

## 🎨 Customization Guide

### Change Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #ff9500;      /* Main orange */
  --primary-dark: #e68a00;       /* Darker orange */
  --text-dark: #2c3e50;          /* Dark text */
  --bg-light: #f8f9fa;           /* Light background */
}
```

### Add Menu Items
Edit `src/data/foods.js`:
```javascript
{
  id: 11,
  name: "Tahu Goreng",
  description: "Tahu goreng tepung dengan sambel pedas",
  price: 15000,
  rating: 4.6,
  category: "makanan",
  isPopular: false,
  image: "image-url"
}
```

### Modify Restaurant Info
- **Hero Title**: Edit `src/components/Hero.jsx`
- **About Text**: Edit `src/components/About.jsx`
- **Contact Info**: Edit `src/components/Contact.jsx`
- **Business Hours**: Edit `src/components/Footer.jsx`

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint (if configured)
```

## 📦 Dependencies

- **React** - UI framework
- **Vite** - Build tool and dev server
- **CSS Modules** - Component-scoped styling

No external UI libraries are used, making this project perfect for learning!

## 🎓 Perfect For

✅ Learning React fundamentals
✅ Understanding component-based architecture
✅ Learning state management with hooks
✅ CSS Modules and responsive design
✅ Building real-world UI patterns
✅ Portfolio project for beginners
✅ Base for restaurant/food delivery app

## 📚 Learning Resources

This project demonstrates:
- Component composition and reusability
- State management best practices
- Props and data flow
- Conditional rendering
- List rendering with keys
- Event handling
- CSS Modules
- Responsive design patterns
- Dark mode implementation

## 🚀 Next Steps & Enhancements

### Easy Enhancements
- [ ] Add more menu items
- [ ] Change colors and branding
- [ ] Update restaurant information
- [ ] Add more categories
- [ ] Customize social media links

### Medium Complexity
- [ ] Add toast notifications for add-to-cart
- [ ] Implement local storage for cart persistence
- [ ] Add favorite/wishlist feature
- [ ] Create admin page to manage menu
- [ ] Add review/rating system

### Advanced Features
- [ ] Connect to backend API (Node.js/Express)
- [ ] User authentication (login/register)
- [ ] Payment integration (Stripe/PayPal)
- [ ] Order history and tracking
- [ ] Email/SMS notifications
- [ ] Delivery management
- [ ] Multi-language support

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Reinstall dependencies
rm -r node_modules
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
npm run build -- --force
```

## 📝 Notes

- This app uses placeholder images from Placeholder.com
- Replace with real images from your assets folder
- Cart data resets on page refresh (use localStorage to persist)
- Checkout functionality is disabled (ready for backend integration)

## 💡 Code Quality

The code follows best practices:
- Clear component separation
- Descriptive naming conventions
- Comments on complex logic
- Reusable utility functions
- CSS organization
- Accessibility considerations
- No inline styles (CSS Modules preferred)

## 📄 License

This project is open source and available for educational and commercial use.

## 👨‍💻 Author

Created as a comprehensive React learning project.

---

## 🎯 Project Goals Achieved

✅ Modern, responsive design
✅ Beginner-friendly code structure
✅ Reusable components
✅ No backend required
✅ Full React Hooks usage
✅ CSS Modules for styling
✅ Mobile-first responsive design
✅ Dark mode support
✅ Smooth animations
✅ Production-ready build

---

**Ready to learn React? Start customizing and enjoy! 🚀**

For questions or suggestions, feel free to explore the code and make it your own!

Happy Coding! 🎉
