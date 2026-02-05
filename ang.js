document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const gender = document.querySelector('input[name="gender"]:checked');
