function bmiCalculator(weight, height); {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}
//console//
var bmi = bmiCalculator(65, 2.6);
console.log(bmi);