# 🚀 Warung Nusantara - Quick Start Guide

## 📖 What You Just Got

You now have a **complete, production-ready React restaurant website** with:
- 10 sample menu items
- Shopping cart functionality
- Search and filtering
- Responsive design for all devices
- Dark mode toggle
- Smooth animations
- Professional UI design

## ⚡ Quick Commands

```bash
# Start development server (automatic refresh)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📍 Project Location

All files are in: `e:\laragon\www\belajar-react`

## 🎯 What's Inside

### Components (10 Files)
- **Navbar.jsx** - Sticky navigation with cart icon and dark mode
- **Hero.jsx** - Large banner with call-to-action
- **SearchBar.jsx** - Real-time search by food name
- **Filter.jsx** - Category filters
- **FoodCard.jsx** - Individual food item display
- **MenuSection.jsx** - Food grid with filtering
- **Cart.jsx** - Shopping cart sidebar
- **About.jsx** - Restaurant info with animated stats
- **Contact.jsx** - Contact details
- **Footer.jsx** - Footer with links and back-to-top

### Styles (11 CSS Files)
- Global styling with CSS variables
- CSS Modules for component scoping
- Fully responsive design
- Dark mode support

### Data
- **foods.js** - 10 sample menu items (easy to modify)

## 🎨 Key Features Checklist

### ✅ Navigation & Layout
- [x] Sticky navbar with logo and menu
- [x] Mobile hamburger menu
- [x] Smooth scrolling navigation
- [x] Footer with links

### ✅ Product Display
- [x] Menu grid with 10 items
- [x] Food cards with images, prices, ratings
- [x] Category badges
- [x] Popular item indicators

### ✅ Filtering & Search
- [x] Real-time search by name
- [x] Filter by category
- [x] Filter by popular items
- [x] Instant results

### ✅ Shopping
- [x] Add to cart functionality
- [x] Cart quantity controls
- [x] Remove from cart
- [x] Total calculation

### ✅ UI/UX
- [x] Dark mode toggle
- [x] Smooth animations
- [x] Loading spinner
- [x] Empty states
- [x] Back-to-top button

### ✅ Responsive
- [x] Desktop layout (1200px+)
- [x] Tablet layout (768-1199px)
- [x] Mobile layout (480-767px)
- [x] Small mobile (<480px)

## 🔧 File Structure

```
src/
├── components/         # 10 React components
├── data/
│   └── foods.js        # Menu data (edit this to add items)
├── styles/             # CSS Modules (one per component)
└── App.jsx             # Main component
```

## 💡 Quick Tips

### Add More Menu Items
1. Open `src/data/foods.js`
2. Add new item to the `foods` array
3. Follow the existing format

### Change Colors
1. Open `src/styles/index.css`
2. Update CSS variables in `:root`
3. Changes apply instantly

### Modify Content
- **Restaurant Name**: Search "Warung Nusantara" in components
- **About Text**: Edit `src/components/About.jsx`
- **Contact Info**: Edit `src/components/Contact.jsx`
- **Business Hours**: Edit `src/components/Footer.jsx`

### Dark Mode
- Implemented via body class
- Toggle button in navbar
- Separate styles for dark theme

## 🎓 React Learning Points

This project teaches you:

1. **Component Composition** - 10 reusable components
2. **State Management** - useState for cart, filters, search
3. **Effect Hooks** - useEffect for animations and events
4. **Props** - Data passing between components
5. **Conditional Rendering** - Empty states, loading
6. **List Rendering** - map() with keys
7. **Event Handling** - Click, change, scroll events
8. **Styling** - CSS Modules and responsive design

## 📊 Sample Data Structure

Each menu item has:
```javascript
{
  id: 1,
  name: "Nasi Goreng",
  description: "Nasi yang digoreng dengan telur...",
  price: 25000,
  rating: 4.8,
  category: "makanan",  // or "minuman"
  isPopular: true,      // Shows badge and filters
  image: "url"
}
```

## 🚀 Starting the Project

```bash
# 1. Open terminal in project folder
cd e:\laragon\www\belajar-react

# 2. If first time, install packages
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5175
# (or whatever port shows in terminal)

# 5. Start editing! Changes refresh automatically
```

## 📱 Test Responsiveness

1. Open DevTools (F12)
2. Click device toggle (mobile icon)
3. Try different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1200px+)

## 🎯 Next Steps

### For Learning
1. Read through each component file
2. Understand the prop flow
3. Try modifying some text
4. Add a new menu item
5. Change a color
6. Add your own feature

### For Extending
1. Add local storage for cart persistence
2. Create admin page to manage menu
3. Add user ratings/reviews
4. Implement wishlist feature
5. Connect to a backend API

### For Deploying
1. Run `npm run build` to create `dist/` folder
2. Deploy to Netlify, Vercel, or GitHub Pages
3. Share the live link

## ⚠️ Important Notes

- Cart data resets on page refresh (no persistence)
- Checkout button is disabled (placeholder)
- Images use placeholder URLs (replace with real images)
- All data is local (no backend API)
- No database required

## 🆘 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Node Modules Issues
```bash
rm -r node_modules
npm install
npm run dev
```

### Styles Not Showing
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then npm run dev)

## 📚 Additional Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vite.dev
- **CSS Modules**: https://github.com/css-modules/css-modules

## 🎉 You're All Set!

Everything is configured and ready to go. Just run:

```bash
npm run dev
```

Then open the browser and start exploring! 

The code is clean, well-commented, and easy to customize. Perfect for learning and building upon.

Happy coding! 🚀

---

**Questions?** Check the component files - they all have comments explaining what they do!
