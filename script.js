const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchContainer = document.getElementById('search-container');

searchIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    searchBar.classList.add('active');
    searchBar.focus();
    searchIcon.style.opacity = '0'; 
});


// Hide search bar when clicking outside
document.addEventListener('click', function (e) {
    if (!searchContainer.contains(e.target)) {
        searchBar.classList.remove('active');
        searchBar.blur();
        searchIcon.style.opacity = '1'; // Show the search icon again
    }
});

//GSAP animation start here.

