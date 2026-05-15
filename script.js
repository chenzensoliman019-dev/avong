/**
 * Page Navigation System
 * Handles switching between pages in the single-page app
 */
function show(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
    // Scroll to top
    selectedPage.scrollTop = 0;
  }
}

/**
 * Handle booking form submission
 * In a real application, this would send data to a server
 */
function handleBooking(event) {
  event.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    activity: document.getElementById('activity').value,
    date: document.getElementById('date').value,
    guests: document.getElementById('guests').value,
  };

  // Validate form
  if (!formData.name || !formData.email || !formData.phone || !formData.activity || !formData.date || !formData.guests) {
    alert('Please fill in all required fields');
    return;
  }

  // Show success message
  const successMessage = `
Thank you for your booking!

Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Activity: ${formData.activity}
- Date: ${formData.date}
- Guests: ${formData.guests}

We will contact you soon to confirm your reservation.
  `;

  alert(successMessage);

  // Reset form
  event.target.reset();

  // Redirect to home page
  show('pg-home');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  console.log('Avong Nen Romy Website Loaded');
  // Ensure home page is active on load
  show('pg-home');
});
