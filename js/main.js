// Basic filtering logic
function applyFilters() {
  const courtVal = document.getElementById('courtSelect').value;
  const practiceVal = document.getElementById('practiceSelect').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const authorVal = document.getElementById('authorName').value.toLowerCase();

  const articles = document.querySelectorAll('.article');

  articles.forEach(article => {
    let show = true;
    const articleCourt = article.getAttribute('data-court');
    const articlePractice = article.getAttribute('data-practice');
    const articleDate = article.getAttribute('data-date');
    const articleAuthor = article.getAttribute('data-author').toLowerCase();

    // Court filter
    if (courtVal !== 'all' && courtVal !== articleCourt) {
      show = false;
    }
    // Practice filter
    if (practiceVal !== 'all' && practiceVal !== articlePractice) {
      show = false;
    }
    // Date filter
    if (startDate && articleDate < startDate) show = false;
    if (endDate && articleDate > endDate) show = false;
    // Author filter
    if (authorVal && !articleAuthor.includes(authorVal)) show = false;

    article.style.display = show ? 'flex' : 'none';
  });
}

// Example placeholders for sign-in/register
function handleSignIn() {
  alert('Sign In functionality to be implemented.');
}

function handleRegister() {
  alert('Register functionality to be implemented.');
}

// Basic search
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('globalSearch').value.toLowerCase();
  const articles = document.querySelectorAll('.article');
  
  articles.forEach(article => {
    const title = article.querySelector('h3').textContent.toLowerCase();
    const excerpt = article.querySelector('p').textContent.toLowerCase();
    if (title.includes(query) || excerpt.includes(query)) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });
});
