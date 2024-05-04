// footer.js
document.addEventListener("DOMContentLoaded", function() {
    // Set copyright year
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").textContent = currentYear;
    
    // Set last modified date
    var lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = lastModified.toLocaleDateString();
});