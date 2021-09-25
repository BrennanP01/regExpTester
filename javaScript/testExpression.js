// tests the expression
function testExpression(){
    // get the regexp and phrase
    const regEx = document.getElementById("inpRegexp").value;
    const phrase = document.getElementById("inpPhrase").value;

    // test phrase against regexp
    var tester = new RegExp(regEx);
    const doesFollow = tester.test(phrase);

    // display result of test
    if(doesFollow == true){
        document.getElementById("result").innerHTML = "Yes";
    } else {
        document.getElementById("result").innerHTML = "No";
    }

    // Log for debugging
    console.log(regEx);
    console.log(phrase);
    console.log(doesFollow);
}