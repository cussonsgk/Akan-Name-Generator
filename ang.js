document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!day || !month || !year || !gender)
    {alert("Please fill in your DOB and select your gender");
    return;}
  if (day<1 || day>31 || month<1 || month>12)
    {alert("Enter a valid date");
    return;}
