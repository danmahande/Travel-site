// small JS for year and contact form feedback
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();
document.getElementById('year3')?.textContent = new Date().getFullYear();

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name')?.value || 'Friend';
  alert('Thanks, ' + name + '! Your message has been received. (Demo only)');
  document.getElementById('contactForm')?.reset();
}

// 🔍 Search and Clear functionality
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const searchInput = document.getElementById('searchInput');

if (searchBtn && clearBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();

    // Hide all recommendations
    document.querySelectorAll('.recommendation').forEach(sec => {
      sec.style.display = 'none';
    });

    if (query.includes('beach')) {
      document.getElementById('beach').style.display = 'block';
    } else if (query.includes('temple')) {
      document.getElementById('temple').style.display = 'block';
    } else if (query.includes('country')) {
      document.getElementById('country').style.display = 'block';
    } else if (query) {
      alert('No matching recommendations found.');
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    document.querySelectorAll('.recommendation').forEach(sec => {
      sec.style.display = 'block'; // Show all again
    });
  });
}
