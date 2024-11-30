document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animate
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove class when out of view
            }
        });
    }, { threshold: 0.1 });

    scrollElements.forEach((el) => observer.observe(el));

    // Grow Animate
    const growElements = document.querySelectorAll(".grow-animate");

    const growObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove class when out of view
            }
        });
    }, { threshold: 0.1 });

    growElements.forEach((el) => growObserver.observe(el));

    // Cascading Animate
    const cascadingElements = document.querySelectorAll(".cascading-animate");

    const cascadingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); // Incremental delay (200ms per element)
            } else {
                // Remove the class so the animation can reapply when it reappears
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    cascadingElements.forEach((el) => cascadingObserver.observe(el));
});
