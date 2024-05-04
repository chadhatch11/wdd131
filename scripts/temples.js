
document.addEventListener("DOMContentLoaded", function() {

    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").textContent = currentYear;
    
 
    var lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = lastModified.toLocaleDateString();
});