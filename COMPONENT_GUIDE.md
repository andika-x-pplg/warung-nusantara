# 🎨 Warung Nusantara - Component Guide

Detailed breakdown of each component in the application.

## 📋 Component Overview

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| Navbar | Navigation | Sticky, dark mode, cart counter |
| Hero | Banner | CTA button, animations |
| SearchBar | Search | Real-time filtering |
| Filter | Categories | All, Makanan, Minuman, Popular |
| FoodCard | Item display | Image, price, rating, add to cart |
| MenuSection | Grid | Responsive layout, filter logic |
| Cart | Shopping | Add, remove, quantity control |
| About | Info | Animated counters, stats |
| Contact | Location | Address, phone, email, map |
| Footer | Bottom | Links, social, back to top |

---

## 🧩 Components in Detail

### 1. Navbar.jsx
**Location**: `src/components/Navbar.jsx`

**Props**:
- `cartCount` (number) - Total items in cart
- `onCartClick` (function) - Toggle cart sidebar
- `isDarkMode` (boolean) - Dark mode status
- `onDarkModeToggle` (function) - Toggle dark mode

**Features**:
- Sticky positioning
- Responsive hamburger menu for mobile
- Cart badge with item count
- Dark mode toggle button
- Smooth navigation links

**States Used**:
- `isMenuOpen` - Mobile menu visibility

**Key Functions**:
- `handleMenuToggle()` - Open/close mobile menu
- `handleNavClick()` - Close menu on link click

**Styling**: `Navbar.module.css`

```jsx
// Usage in App.jsx
<Navbar
  cartCount={totalCartItems}
  onCartClick={handleCartClick}
  isDarkMode={isDarkMode}
  onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
/>
```

---

### 2. Hero.jsx
**Location**: `src/components/Hero.jsx`

**Props**:
- `onMenuClick` (function) - Scroll to menu section

**Features**:
- Responsive grid layout
- Gradient background
- Decorative floating elements
- Animated text (slideIn effect)
- Call-to-action button

**Key Functions**:
- Button click triggers `onMenuClick` which scrolls to menu

**Styling**: `Hero.module.css`

```jsx
// Usage
<Hero onMenuClick={handleMenuClick} />

// In App.jsx
const handleMenuClick = () => {
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
};
```

---

### 3. SearchBar.jsx
**Location**: `src/components/SearchBar.jsx`

**Props**:
- `searchQuery` (string) - Current search text
- `onSearchChange` (function) - Update search query

**Features**:
- Real-time filtering
- Clear button appears when text entered
- Placeholder text
- Magnifying glass icon

**Key Functions**:
- `handleClear()` - Reset search field

**Styling**: `SearchBar.module.css`

```jsx
// Usage
<SearchBar
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
/>
```

---

### 4. Filter.jsx
**Location**: `src/components/Filter.jsx`

**Props**:
- `activeFilter` (string) - Current active filter
- `onFilterChange` (function) - Update active filter

**Features**:
- 4 filter options: all, makanan, minuman, popular
- Active button styling
- Instant filter application

**Filter Options**:
```javascript
[
  { id: 'all', label: 'Semua' },
  { id: 'makanan', label: 'Makanan' },
  { id: 'minuman', label: 'Minuman' },
  { id: 'popular', label: 'Popular' },
]
```

**Styling**: `Filter.module.css`

```jsx
// Usage
<Filter
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
/>
```

---

### 5. FoodCard.jsx
**Location**: `src/components/FoodCard.jsx`

**Props**:
- `food` (object) - Food item data
- `onAddToCart` (function) - Add item to cart

**Food Object Structure**:
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

**Features**:
- Image with hover zoom effect
- Category badge with color coding
- Star rating display
- Popular badge with pulse animation
- Responsive layout

**Key Functions**:
- `renderStars(rating)` - Display star rating

**Styling**: `FoodCard.module.css`

```jsx
// Usage in MenuSection
{filteredFoods.map((food) => (
  <FoodCard
    key={food.id}
    food={food}
    onAddToCart={onAddToCart}
  />
))}
```

---

### 6. MenuSection.jsx
**Location**: `src/components/MenuSection.jsx`

**Props**:
- `foods` (array) - All food items
- `activeFilter` (string) - Current filter
- `searchQuery` (string) - Search text
- `onAddToCart` (function) - Add to cart callback
- `isLoading` (boolean) - Loading state

**Features**:
- Responsive grid layout
- Combines search and filter logic
- Empty state message
- Loading spinner
- Auto-fill grid columns

**States Used**:
- `filteredFoods` - Filtered array of foods

**Key Functions**:
- `useEffect` - Apply filters and search

**Filtering Logic**:
1. Filter by search query (case-insensitive)
2. Filter by category (makanan/minuman)
3. Filter by popularity

**Styling**: `MenuSection.module.css`

```jsx
// Usage
<MenuSection
  foods={foods}
  activeFilter={activeFilter}
  searchQuery={searchQuery}
  onAddToCart={handleAddToCart}
  isLoading={isLoading}
/>
```

---

### 7. Cart.jsx
**Location**: `src/components/Cart.jsx`

**Props**:
- `isOpen` (boolean) - Cart visibility
- `onClose` (function) - Close cart
- `cartItems` (array) - Items in cart
- `onUpdateQuantity` (function) - Change quantity
- `onRemoveItem` (function) - Remove item

**Cart Item Structure**:
```javascript
{
  id: 1,
  name: "Nasi Goreng",
  price: 25000,
  quantity: 2,
  ...otherFoodData
}
```

**Features**:
- Slide-out sidebar with overlay
- Add/subtract quantity buttons
- Remove item button
- Empty cart message
- Auto-calculated total
- Checkout button (disabled)

**Styling**: `Cart.module.css`

**Important Notes**:
- Uses fixed positioning
- Overlay closes cart when clicked
- Quantity decreases to 0 trigger removal
- Total auto-updates

```jsx
// Usage
<Cart
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
  cartItems={cartItems}
  onUpdateQuantity={handleUpdateQuantity}
  onRemoveItem={handleRemoveItem}
/>
```

---

### 8. About.jsx
**Location**: `src/components/About.jsx`

**Features**:
- Restaurant information
- Animated statistics counters
- Grid layout for stats
- Responsive two-column layout

**States Used**:
- `stats` - Object with customers, menu, years

**Key Functions**:
- `useEffect` - Animate counters on mount
- `animateCounter()` - Smooth number animation

**Animated Counters**:
- 1000+ Customers
- 50+ Menu items
- 10 Years Experience

**Animation Details**:
- Duration: 2000ms (2 seconds)
- Updates every 50ms
- Smooth increment

**Styling**: `About.module.css`

```jsx
// Usage
<About />
```

---

### 9. Contact.jsx
**Location**: `src/components/Contact.jsx`

**Features**:
- Contact information cards
- Map placeholder
- Icon display
- Two-column layout

**Contact Information**:
```javascript
[
  { icon: '📍', title: 'Alamat', content: '...' },
  { icon: '📞', title: 'Telepon', content: '...' },
  { icon: '✉️', title: 'Email', content: '...' },
]
```

**Styling**: `Contact.module.css`

```jsx
// Usage
<Contact />
```

---

### 10. Footer.jsx
**Location**: `src/components/Footer.jsx`

**Features**:
- Multi-column layout
- Social media links
- Quick links
- Business hours
- Back-to-top button
- Copyright information

**States Used**:
- `showBackToTop` - Show/hide button

**Key Functions**:
- `useEffect` - Scroll listener
- `scrollToTop()` - Smooth scroll to top

**Social Icons**:
- Facebook, Twitter, Instagram, YouTube

**Styling**: `Footer.module.css`

```jsx
// Usage
<Footer />
```

---

## 🎯 Component Hierarchy

```
App (Main)
├── Navbar
├── Hero
├── SearchBar
├── Filter
├── MenuSection
│   └── FoodCard (x10)
├── Cart
├── About
├── Contact
└── Footer
```

## 🔄 Data Flow

### Adding to Cart Flow
```
User clicks "Add to Cart" on FoodCard
↓
FoodCard calls props.onAddToCart(food)
↓
App.handleAddToCart(food) executes
↓
Check if item exists in cartItems
├─ Yes: Increase quantity
└─ No: Add new item with quantity 1
↓
setCartItems updates state
↓
Navbar cartCount updates automatically
↓
Cart component re-renders if open
```

### Search/Filter Flow
```
User types in SearchBar OR clicks Filter
↓
onChange event triggers
↓
App.setSearchQuery or App.setActiveFilter
↓
MenuSection receives new props
↓
useEffect inside MenuSection triggers
↓
Filter foods based on search + category
↓
setFilteredFoods updates
↓
FoodCard components re-render
```

### Dark Mode Flow
```
User clicks moon icon in Navbar
↓
Navbar calls props.onDarkModeToggle()
↓
App.setIsDarkMode(!isDarkMode)
↓
useEffect adds/removes 'dark-mode' class to body
↓
CSS media queries activate for dark theme
↓
All components reflect dark mode
```

---

## 📦 Props Drilling Prevention

**Current Approach:**
- Props passed only to components that need them
- No excessive prop drilling
- State kept at App level for global needs

**If You Need More Optimization:**
- Consider Context API for theme
- Redux for complex state management

---

## 🎨 Styling Architecture

### CSS Modules
- Each component has its own CSS file
- Prevents class name conflicts
- Easy to find related styles

### Global Styles
- `src/styles/index.css` - Global variables and resets
- CSS Variables for theming
- Responsive breakpoints

### Color Variables
```css
--primary-color: #ff9500
--primary-dark: #e68a00
--text-dark: #2c3e50
--text-light: #7f8c8d
--bg-light: #f8f9fa
--bg-white: #ffffff
```

---

## 🔧 Common Modifications

### Change Food Image
```javascript
// In foods.js
image: "https://your-image-url.jpg"
```

### Add New Filter
```javascript
// In Filter.jsx
{ id: 'newfilter', label: 'New Filter' }

// In MenuSection.jsx useEffect
} else if (activeFilter === 'newfilter') {
  filtered = filtered.filter((food) => food.newProp === true);
}
```

### Modify Cart Behavior
```javascript
// In App.jsx handleAddToCart
// Add custom logic here
```

### Change Animation Duration
```css
/* In respective CSS file */
animation: slideInLeft 0.8s ease; /* Change 0.8s */
```

---

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Styles not showing | Check CSS file import path |
| Cart not updating | Ensure onAddToCart prop passed correctly |
| Search not working | Check MenuSection useEffect |
| Mobile menu not closing | Verify handleNavClick in Navbar |
| Dark mode not working | Ensure CSS has both light and dark styles |

---

## 🚀 Performance Tips

1. Use `key={food.id}` in map functions ✓ (Already done)
2. Memoize callbacks if list grows large
3. Use React DevTools to check re-renders
4. Keep state as close to usage as possible ✓ (Already done)

---

## 📚 Next Learning Steps

1. **Add Local Storage**: Persist cart data
2. **Context API**: Share dark mode globally
3. **Custom Hooks**: Extract filter logic
4. **Animation Library**: Use Framer Motion
5. **Form Validation**: Add contact form
6. **API Integration**: Connect to backend

---

This component guide should help you understand the structure and make modifications easily!
