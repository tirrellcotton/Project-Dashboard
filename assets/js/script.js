
document.addEventListener("DOMContentLoaded", function() {
    // Mobile sidebar toggle
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const mobileOverlay = document.getElementById("mobileOverlay");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        mobileOverlay.classList.toggle("active");

        // Change icon based on state
        const icon = menuToggle.querySelector("i");
        if (sidebar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Close side bar when clicking outside on mobile
    mobileOverlay.addEventListener("click", function() {
        sidebar.classList.remove("active");
        mobileOverlay.classList.remove("active");

        // Reset icon to bars
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });

    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");   

        // Change icon based on theme
        const icon = themeToggle.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

        // Save preference to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

    // Close siebar when clicking outside of mobile
    document.addEventListener("click", function(e) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);

        if (sidebar.classList.contains("active") && !isClickInsideSidebar && !isClickOnToggle) {
            sidebar.classList.remove("active");
            mobileOverlay.classList.remove("active");

            // Reset icon to bars
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Load theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        const themeIcon = themeToggle.querySelector(".theme-toggle i");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    // Add hover effect to task bar
    document .querySelectorAll(".task-bar").forEach(task=> {
        task.addEventListener("mouseenter", function() {
            this.style.zIndex = "10";
        });
        task.addEventListener("mouseleave", function() {
            this.style.zIndex = "1";
        });
    });

    // Animate progress rings
    document.querySelectorAll(".progress-ring.progress-fill").forEach(ring=> {
        const circumference = 283 // 2 * Math.PI * radius (45)
        const progressRing = ring.closest(".progress-ring");
        const progressText = progressRing.querySelector(".progress-text").textContent;
        const percentage = parseInt(progressText);
        const offset = circumference - (percentage * circumference / 100);
        ring.style.strokeDashoffset = offset;
    });

});