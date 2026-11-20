let m = new Map();
m.set(101, "Varun");
m.set(102, "Tushar");
m.set(103, "Anmol");
m.set(104, "Baldur");
console.log("After insertion:", m);
console.log("Total students:", m.size);
m.delete(103);
console.log("After deletind roll no 103:", m);
let r = 102;
if (m.has(r)) {
    console.log("Roll no " + r + " belongs to " + m.get(r));
}
else {
    console.log("Roll no " + r + " not found");
}
console.log("Searching for 103:", m.has(103));
console.log("Iterating with for...of:");
for (let [k, v] of m) {
    console.log(k + " -> " + v);
}
console.log("Iterating with forEach:");
m.forEach(function (v, k) {
    console.log("Roll " + k + ": " + v);
});