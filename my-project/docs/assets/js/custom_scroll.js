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

let currentPageIndex = 0;
let isScrolling = false;

// Function to scroll to the next page with smooth animation
function scrollToNextPage() {
    if (!isScrolling && currentPageIndex < pages.length - 1) {
        isScrolling = true;
        const nextPage = pages[currentPageIndex + 1];

        window.scrollTo({
            top: document.querySelector(nextPage).offsetTop,
            behavior: 'smooth',
        });

        setTimeout(() => {
            isScrolling = false;
            currentPageIndex++;
        }, 1000); // Adjust the delay as needed for smooth transition
    }
}

// Add an event listener for scrolling
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll down
        scrollToNextPage();
    }
});
