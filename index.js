import { boston } from "./boston.js";

let data = boston.data;
let topearners = [];

for (let i = 0; i < data.length; i++) {
    if (data[i][11] < 20000000) {
        topearners.push({ name: data[i][8], salary: data[i][11] });
    }
}

topearners.sort(function(a, b) {
    return b.salary - a.salary;
});

topearners = topearners.slice(0, 5);

let Earners = '<h1><u>Top Earners:</u></h1>';
for (let i = 0; i < topearners.length; i++) {
    Earners += `<h2>Top Earner ${i + 1}: ${topearners[i].name} - Salary: ${topearners[i].salary}</h2>`;
}

document.getElementById("app").innerHTML = Earners;
console.log(topearners)
