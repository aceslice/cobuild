let input = document.querySelector("input");
const inputContainer = document.querySelector(".input-container");
let icon = document.querySelector(".icon");
icon.addEventListener("click", (e) => {
  e.preventDefault();
  transferData();
});

inputContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  transferData();
});
function transferData() {
  // Encode the data to be passed in the URL
  var encodedData = encodeURIComponent(input.value);
  // Construct the URL with the encoded data
  var url = "form.html?data=" + encodedData;
  // Redirect to the destination page
  window.location.href = url;
}
