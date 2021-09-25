function gettheValueFromTheform() {
  vector1 = document.getElementsByClassName("Vector1");
  vector1 = vector1[0];
  vector1 = vector1.value;

  console.log(vector1);
  vector2 = document.getElementsByClassName("Vector2");
  vector2 = vector2[0];
  vector2 = vector2.value;
  console.log(vector2);

  toArray(vector2, vector1);
}

function dotProductValue() {
  var Product = 0;

  vector1 = document.getElementsByClassName("Vector1");
  vector1 = vector1[0];
  vector1 = vector1.value;
  vector2 = document.getElementsByClassName("Vector2");
  vector2 = vector2[0];
  vector2 = vector2.value;
  console.log("dotProductValue Invoked");

  for (i = 0; i < vector1.length; i++) {
    for (n = 0; n < 1; n++) {
      Product = vector1[i] * vector2[n] + Product;
    }
  }
  console.log(Product);
  isPrepenicular(Product);
}
function InvokeCaluation() {
  console.log("Invoked Calcuation");
  vector1 = document.getElementsByClassName("Vector1");
  vector1 = vector1[0].value;
  vector2 = document.getElementsByClassName("Vector2");
  vector2 = vector2[0];
  vector2 = vector2.value;
  console.log(vector1, vector2);
  vector1.values = vector1;
  vector2.values = vector2;
  dotProductValue();
}
function toArray() {
  console.log("To Array Invoked");

  InvokeCaluation();
}
function isPrepenicular(Product) {
  console.log("isPrepndicular");
  if (Product == 0) {
    console.log("The Vectors Are Prepndicular");
    console.log("The Value of The Product Is", Product);
    Result = document.getElementsByClassName("Result");
    Result = Result[0];
    Result.innerHTML =
      "The Vectors Are Prepndicular " +
      ",The Value of The Product Is " +
      Product;
  } else {
    console.log("The Vectors aren't prependicular");
    console.log("The Value of Product is ", Product);
    Result = document.getElementsByClassName("Result");
    Result = Result[0];
    Result.innerHTML =
      "The Vectors aren't prependicular " +
      "The Value of The Product Is  " +
      Product;
  }
}
