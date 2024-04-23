document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("colorSelect");
    var button = document.querySelector('input[type="button"]');
    
    button.addEventListener("click", function() {
        var selectedIndex = selectElement.selectedIndex;
        if (selectedIndex !== -1) {
            selectElement.remove(selectedIndex);
        }
    });
});
