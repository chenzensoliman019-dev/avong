# Avong Nen Romy - Adventure Destination Website

A beautiful, responsive single-page application for **Avong Nen Romy**, a nature-based outdoor recreation destination located in La Trinidad, Benguet.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🏞️ About

Avong Nen Romy is a premier outdoor recreation destination offering:
- **🏹 Archery** - Experience precision and focus
- **🎯 Throwing Sports** - Master accuracy and control
- **🎮 Airsoft** - Team-based tactical gameplay

The website provides information about activities, allows users to make bookings, and showcases the destination's mission and values.

## ✨ Features

- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **Single Page Application** - Smooth page transitions
- ✅ **Interactive Navigation** - Easy-to-use navigation system
- ✅ **Booking Form** - Integrated booking functionality
- ✅ **Modern Styling** - Green and orange color scheme with smooth animations
- ✅ **Custom Fonts** - Google Fonts integration (Caesar Dressing, Agdasima, Big Shoulders)
- ✅ **SEO-Ready** - Proper HTML structure and meta tags

## 📁 Project Structure

```
avong-nen-romy/
├── index.html          # Main HTML file with page structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript for page navigation and form handling
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/avong-nen-romy.git
   cd avong-nen-romy
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if http-server is installed)
     http-server
     ```

3. **Visit in browser**
   - Open `http://localhost:8000` (or your chosen port)

## 📄 Pages

### 🏠 Home Page
- Hero section with call-to-action
- Featured activities showcase
- Quick overview of the destination

### 🎯 Activities Page
- Detailed descriptions of each activity
- Features and benefits
- Professional instructor information

### 📅 Booking Page
- Contact form for reservations
- Activity selection dropdown
- Date and guest count selection
- Form validation and confirmation

### ℹ️ About Page
- Destination overview
- Mission and vision statements
- Why choose us section
- Contact information

## 🎨 Design

### Color Scheme
- **Primary Green**: `#3c7743` - Nature and growth
- **Accent Orange**: `#ff6b35` - Energy and adventure
- **Dark Background**: `#000` and `#1a1a1a` - Modern contrast
- **Text White**: `#fff` and `#d0d0d0` - Readability

### Typography
- **Logo & Headings**: Caesar Dressing (Cursive)
- **Secondary Headings**: Agdasima
- **Display Heading**: Big Shoulders Stencil Display

## 🔧 Customization

### Modify Colors
Edit `styles.css` and update the color values:
```css
.navbar { background: #3c7743; }  /* Green */
.cta-button { background: #ff6b35; } /* Orange */
```

### Update Content
Edit text content directly in `index.html`:
- Update destination name
- Modify activity descriptions
- Change contact information
- Update mission/vision statements

### Add Images
Replace emoji icons with actual images:
```html
<!-- Current -->
<div class="activity-icon">🏹</div>

<!-- With image -->
<img src="images/archery.jpg" alt="Archery" class="activity-image">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔗 Navigation

```
Home
├── Activities
├── Booking
└── About
```

All pages include navigation links for easy access between sections.

## 📝 Form Handling

The booking form currently:
- Validates all required fields
- Shows a confirmation message
- Resets the form
- Redirects to home page

To integrate with a backend:
1. Update the `handleBooking()` function in `script.js`
2. Add API endpoint call to send form data
3. Implement server-side validation

Example backend integration:
```javascript
function handleBooking(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  fetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => console.log('Booking submitted:', data));
}
```

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch
4. Website will be live at `https://yourusername.github.io/avong-nen-romy`

### Other Hosting
- Netlify, Vercel, or any static hosting service
- Upload all three files: `index.html`, `styles.css`, `script.js`

## 🐛 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📚 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations
- **Vanilla JavaScript** - No frameworks required
- **Google Fonts** - Custom typography

## 📞 Contact & Support

For inquiries about Avong Nen Romy:
- Email: info@avongnenromy.com
- Location: La Trinidad, Benguet

## 📜 License

This project is open source and available under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📸 Screenshots

*(Add screenshots of your website here)*

## 🎉 Acknowledgments

- Google Fonts for beautiful typography
- The community for feedback and support

---

Made with ❤️ for adventure enthusiasts in the Philippine highlands
