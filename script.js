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

var tl = gsap.timeline();

function breakTheText() {
    var logoText = document.querySelector(".word-mark");
    var logoTextContent = logoText.textContent;
    var splittedText = logoTextContent.split("");
    var clutter = "";

    splittedText.forEach(function(letter) {
        clutter += `<span>${letter}</span>`;
    });

    logoText.innerHTML = clutter;
}
breakTheText(); // call the function to work it.


tl.from(".word-mark span", {  // animation for move that split text.
  y: -70, 
  opacity: 0,
  duration: 1,
  delay:0.2,
  stagger:0.15,
})

tl.from(".search-d", {
    top: -150,
    duration: 0.3,
})
tl.from(".n-f-ul li", {
    y: -150,
    duration: 0.3,
    stagger: 0.2,
    opacity: 0,
})

tl.from(".con-d span", {
    y: -150,
    duration: 0.3,
    opacity: 0,
    stagger: 0.2,
})