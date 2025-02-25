// Extract birth date from url
let params = new URLSearchParams(document.location.search);
let url_birthday = params.get("birthday");
let birth_month = parseInt(url_birthday.substring(0,2), 10);
let birth_day = parseInt(url_birthday.substring(2,4), 10);
let birth_year = parseInt(url_birthday.substring(4), 10);
let birth_date = new Date(birth_year, birth_month - 1, birth_day);

// Get current date
let current_date = new Date();

// Get life lived
console.log(birth_date);
// get total seconds between the times
var life_lived = Math.abs(current_date - birth_date) / 1000;

// calculate (and subtract) whole years
var years = Math.floor(life_lived / (86400 * 365.25));
life_lived -= years * (86400 * 365.25);

// calculate (and subtract) whole days
var days = Math.floor(life_lived / 86400);
life_lived -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(life_lived / 3600) % 24;
life_lived -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(life_lived / 60) % 60;
life_lived -= minutes * 60;

// what's left is seconds
var seconds = life_lived % 60;

console.log("Years:", years);
console.log("Days:", days);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);


// Build the life grid
var life_grid = document.getElementById("life_grid");
var month = birth_month;
var year = birth_year;

for(var col = 0; col < 50; col++) {
    for(var row = 0; row < 24; row++) {
        const life_unit_id = String(year) + String(month++).padStart(2, '0');
        const current_life_unit = String(current_date.getFullYear()) + String(current_date.getMonth() + 1).padStart(2, '0');

        var life_unit = document.createElement("div");
        life_unit.className = "life_unit";
        life_unit.id = life_unit_id;

        console.log("ID: " + life_unit_id + ", Today: " + current_life_unit);
        // Color lived units red
        if(parseInt(life_unit_id, 10) < parseInt(current_life_unit, 10)) {
            if(month == birth_month + 1) {
                life_unit.style.backgroundColor = "blue";                
            } else {
                life_unit.style.backgroundColor = "red";
            }
        } else {
            if(month == birth_month + 1) {
                life_unit.style.backgroundColor = "grey";                
            }
        }

        life_grid.appendChild(life_unit);

        // Wrap months and years
        if(month > 12) {
            month = 1;
            year++;
        }
    }
    life_grid.appendChild(document.createElement("br"));
}
