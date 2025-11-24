
function showMessage() {
  alert("Hello from Feature 2 (Backend JS Logic)!");
}

// attach to button if it exists (so frontend works when merged)
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn');
  if (btn) btn.addEventListener('click', showMessage);
});

