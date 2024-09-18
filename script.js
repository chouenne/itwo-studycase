const body = document.querySelector('body');
const toggle = document.getElementById('toggle');


toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
}

function toggleDetails(id) {
  var details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
  } else {
      details.style.display = "none";
  }
}

  if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      icon.style.transform = "rotate(180deg)"; // Rotate the icon
      icon.style.color = "green"; // Change the icon color to green
  } else {
      details.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Reset the icon rotation
      icon.style.color = ""; // Reset the icon color
  }

  // Function to toggle the drawer (menu)
function toggleDrawer() {
  const socialIcons = document.getElementById('social-icons');
  
  // Toggle the 'drawer-open' class on the body or a parent element
  document.body.classList.toggle('drawer-open');
}





