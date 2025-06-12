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

function pageCursor() {
  var div = document.querySelector("body");
var cursor = document.querySelector(".cursor"); 

div.addEventListener("mousemove", function(para){
  const rect = cursor.getBoundingClientRect();
  gsap.to(".cursor", {
    x: para.x,
    y: para.y,
    duration: 0.6,
    ease: "back.out",
  })
})
}
pageCursor();

  function discoverPlanet() {
    
  const liItems = document.querySelectorAll('.p-name-li');
  const activeBar = document.querySelector('.active-bar');

  function moveActiveBar(target) {
    const rect = target.getBoundingClientRect();
    const parentRect = target.parentElement.getBoundingClientRect();

    // Set width and left based on the clicked li
    activeBar.style.width = `${rect.width}px`;
    activeBar.style.left = `${rect.left - parentRect.left}px`;
  }

  // Set initial position on first load
  moveActiveBar(liItems[1]);

  liItems.forEach((li) => {
    li.addEventListener('click', (e) => {
      moveActiveBar(e.target);
    });
  });

liItems.forEach((li) => {
  li.addEventListener('click', (e) => {
    liItems.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
    moveActiveBar(e.target);
  });
});
}
discoverPlanet();
//--------------- GSAP animation start here.

var tl = gsap.timeline();


// function breakTheText() {
//     var logoText = document.querySelector(".word-mark");
//     var logoTextContent = logoText.textContent;
//     var splittedText = logoTextContent.split("");
//     var clutter = "";

//     splittedText.forEach(function(letter) {
//         clutter += `<span>${letter}</span>`;
//     });

//     logoText.innerHTML = clutter;
// }
// breakTheText();

// // navigation gsap
// tl.from(".word-mark span", {  // animation for move that split text.
//   y: -70, 
//   opacity: 0,
//   duration: 1,
//   delay:0.2,
//   stagger:0.15,
// })

// tl.from(".search-d", {
//     top: -150,
//     duration: 0.3,
// })
// tl.from(".n-f-ul li", {
//     y: -150,
//     duration: 0.3,
//     stagger: 0.2,
//     opacity: 0,
// })

// tl.from(".con-d span", {
//     y: -150,
//     duration: 0.3,
//     opacity: 0,
//     stagger: 0.2,
// })

// // land page gsap animation
// tl.from( ".land-text-hold h3",
//     { scale: -0, opacity: 0 },
//     { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
// );
// tl.from( ".land-text-hold h1",
//     { scale: -0, opacity: 0 },
//     { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
// );

// tl.to(".obj-hold img", {
//     scale: 1,
//     opacity: 1,
//     duration: 1.5,
//     ease: "back.out(1.7)"
// })
// tl.to(".land-text", {
//     scale: 1,
//     opacity: 1,
//     duration: 1,
//     stagger: 1,
//     ease: "back.out(1.7)"
//  });

 gsap.to(".n-f-ul li", {
    scrollTrigger: {
      trigger: ".land-page", // navigation's parent div
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    opacity: 0,
    y: -50,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
  });