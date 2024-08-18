document.addEventListener('DOMContentLoaded', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        fadeInElements.forEach(function(element) {
            if (checkVisible(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger scroll event on load
});
