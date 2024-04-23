//your JS code here. If required.
function removeSelectedColor() {
  var selectElement = document.getElementById("colorSelect");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  
  if (selectedOption) {
    selectElement.removeChild(selectedOption);
  }
}
