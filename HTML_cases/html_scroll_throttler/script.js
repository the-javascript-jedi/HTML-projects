// Throttle function definition
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Function to handle the scroll event
const handleScroll = throttle(() => {
  console.log("Throttled scroll event at", new Date().toLocaleTimeString());
}, 2000);

// Attach the throttled function to the scroll event
window.addEventListener("scroll", handleScroll);
