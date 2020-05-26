//alert('hello');
//CHALLENGE 1: YOUR AGE IN DAYS
function ageInDays() {
    var birthYear = prompt('what year were you born ..good friend');
    var ageInDays = (2020 - birthYear) * 365;
    //console.log(ageInDays);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDays+'days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
