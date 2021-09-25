var vector1 = [1, 1, 1];
var vector2 = [2, 2, 2];
var dotProductValue = 0;
console.log("Your Variables are V1 and V2", vector1, vector2);
console.log("");
for (i = 0; i < vector1.length; i++) {
  var N = i;
  dotProductValue = vector2[N] * vector1[i] + dotProductValue;
}
if (dotProductValue == 0) {
  console.log("Vectors Are Prependiculer");
}
console.log("Vectors are not Prepndiculer");
console.log("Dot Product Value Equal To", dotProductValue);
