let d = process.argv[2];
if (!d) {
    console.log("Please give a date. Example: node date.js 2026-11-20");
}
 else {
    let n = new Date(d);
    if (isNaN(n.getTime())) {
        console.log("That is not a valid date");
    } 
    else {
        let w = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log("Day:", n.getDate());
        console.log("Month:", m[n.getMonth()]);
        console.log("Year:", n.getFullYear());
        console.log("Day of the week:", w[n.getDay()]);
    }
}