const appointments =
JSON.parse(
localStorage.getItem("appointments")
) || [];

console.log(
"Appointments Loaded"
);
