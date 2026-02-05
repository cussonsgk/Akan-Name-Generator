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
  const CC = Math.floor(year/100);
  const YY = year %100;
  const MM = month;
  const DD = day;
  const dow =
    ((4*CC-2*CC-1)+Math.floor((5*YY)/4)+Math.floor((26*(MM+1))/10)+DD) % 7;
  const boynames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const girlnames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const akanname = gender.value === "male"
      ? boynames[dow]
      : girlnames[dow];
  document.getElementById("dayandname").innerText = `You were born on ${days[dow]} and \nyour Akan name is ${akanname}.`; });
