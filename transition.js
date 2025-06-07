document.addEventListener("DOMContentLoaded", () => {
    var options = {
        threshold: 0.1
    }

    var observer = new IntersectionObserver(handleIntersect, options);

    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            (entry.isIntersecting) ? entry.target.classList.add("visible") : entry.target.classList.remove("visible");
        })
    }

    document.querySelectorAll(".container-green, .container-white").forEach(card => {
        observer.observe(card);
    })
})
