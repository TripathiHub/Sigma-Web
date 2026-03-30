// The Window Scroller: You are developing a single-page application with a smooth 
// scrolling effect.Implement a function named smoothScrollToTop that smoothly scrolls 
// the window to the top when called.
// function smoothScrollToUp(){
//     window.scrollTo({
//         top : 0,
//         behavior : "smooth"
//     });
// }
function smoothScrollToTop() {
    let currentPosition = window.scrollY;

    if (currentPosition > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}