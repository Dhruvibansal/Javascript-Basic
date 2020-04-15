prompt("what is your name?");
prompt("what is your lover's name?")
var lovescore = Math.random * 100;
lovescore = Math.floor(lovescore) + 1;
if (lovescore > 75) {
    alert("your love score is" + lovescore + "%" + "you are made for each other.");
}
if (lovescore > 30 && lovescore <= 75) {
    alert("your love score is" + lovescore + "%");

} else {
    alert("your love score is" + lovescore + "%" + "doesnot suits to each other");
}