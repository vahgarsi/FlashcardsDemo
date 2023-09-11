// Define the URLs of the pages you want to scroll through
const pages = [
    '/index.html',
    '/page1/.html',
    '/page2/.html',
    '/page3/.html',
    '/page4/.html',
    '/page5/.html',
    '/page6/.html'
    // Add more page URLs as needed
];
// let currentPageIndex = 0;

// // Function to scroll to the next page
// function scrollToNextPage() {
//     if (currentPageIndex < pages.length - 1) {
//         currentPageIndex++;
//         window.location.href = pages[currentPageIndex];
//     }
// }

// let currentPageIndex = 0;
// let isScrolling = false;

// // Function to scroll to the next page with smooth animation
// function scrollToNextPage() {
//     if (!isScrolling && currentPageIndex < pages.length - 1) {
//         isScrolling = true;
//         const nextPage = pages[currentPageIndex + 1];

//         window.scrollTo({
//             top: document.querySelector(nextPage).offsetTop,
//             behavior: 'smooth',
//         });

//         setTimeout(() => {
//             isScrolling = false;
//             currentPageIndex++;
//         }, 1000); // Adjust the delay as needed for smooth transition
//     }
// }

// // Add an event listener for scrolling
// window.addEventListener('wheel', (event) => {
//     if (event.deltaY > 0) {
//         // Scroll down
//         scrollToNextPage();
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const totalPages = 5; // Set the total number of pages
//     let currentPage = 1;
  
//     window.addEventListener('wheel', function(e) {
//       if (e.deltaY > 0 && currentPage < totalPages) {
//         currentPage++;
//       } else if (e.deltaY < 0 && currentPage > 1) {
//         currentPage--;
//       }
  
//       // Generate the URL of the next/previous page
//       const nextPageUrl = `/page${currentPage}`;
  
//       // Navigate to the next/previous page
//       window.location.href = nextPageUrl;
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     const totalPages = 5;
//     let currentPage = 1;
//     let isScrolling = false;
  
//     function throttleScroll() {
//       if (!isScrolling) {
//         isScrolling = true;
//         setTimeout(function() { isScrolling = false; }, 1000); // Set the delay between scrolls
//         handleScroll();
//       }
//     }
  
//     function handleScroll() {
//       window.removeEventListener('wheel', throttleScroll);
      
//       if (currentPage < totalPages && window.scrollY >= window.innerHeight) {
//         currentPage++;
//         setTimeout(function() {
//           scrollToPage(currentPage);
//         }, 500); // Set the delay before navigating to the next page
//       } else if (currentPage > 1 && window.scrollY === 0) {
//         currentPage--;
//         setTimeout(function() {
//           scrollToPage(currentPage);
//         }, 500); // Set the delay before navigating to the previous page
//       }
  
//       setTimeout(function() {
//         window.addEventListener('wheel', throttleScroll);
//       }, 200); // Set a delay before allowing another scroll event
//     }
  
//     function scrollToPage(page) {
//       const nextPageUrl = `/page${page}`;
//       window.location.href = nextPageUrl;
//     }
  
//     window.addEventListener('wheel', throttleScroll);
//   });
  

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the list of pages
//     const pages = document.querySelectorAll('.page');
  
//     // Set up event listeners
//     pages.forEach((page, index) => {
//       page.addEventListener('wheel', function(e) {
//         // Prevent the default scroll behavior
//         e.preventDefault();
  
//         // Determine the direction of scroll
//         const delta = Math.sign(e.deltaY);
  
//         // Calculate the index of the next page
//         const nextPageIndex = Math.min(Math.max(index - delta, 0), pages.length - 1);
  
//         // Scroll to the next page
//         pages[nextPageIndex].scrollIntoView({ behavior: 'smooth' });
//       });
//     });
//   });


// working but disable for now

// document.addEventListener('DOMContentLoaded', function() {
//     // Detect when the user scrolls to the top of the page
//     window.addEventListener('scroll', function() {
//         if (window.scrollY === 0) {
//             var prevLink = document.getElementById('prevPage');
//             if (prevLink) {
//                 window.location.href = prevLink.href;
//             }
//         }
//     });

//     // Detect when the user scrolls to the bottom of the page
//     window.addEventListener('scroll', function() {
//         if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
//             var nextLink = document.getElementById('nextPage');
//             if (nextLink) {
//                 window.location.href = nextLink.href;
//             }
//         }
//     });
// });



  
  
