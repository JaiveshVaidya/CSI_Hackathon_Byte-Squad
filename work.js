// Select the menu icon and the navigation
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.proslider');

// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  console.log("hii")
  // Toggle the 'active' class to show/hide the navigation
  nav.classList.toggle('active');
});