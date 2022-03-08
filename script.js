// Setting Function To Compute The Interest
function compute() {
    // Getting The Amount Value
    var principal = document.getElementById("principal").value;
    // If The Amount Value Is Equal To Or Less Than Zero 
    // Show An Alert To User and Focus On The Input Field Again
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    // If Everything is good then complete computing
    } else {
        // Getting Interest Rate Value
        var rate = document.getElementById("rate").value;
        // Getting Years Value
        var years = document.getElementById("years").value;
        // Calculating The Final Value After Interests
        var interest = principal * years * rate / 100;
        // Calculating The Final Year
        var year = new Date().getFullYear() + parseInt(years);
        // Changing HTML Value Of result container to detailed message of the interests
        var result = document.getElementById("result").innerHTML = 'If you deposit <mark>'+ principal +'</mark>,<br>at an interest rate of <mark>'+ rate +'</mark>.<br>You will receive an amount of <mark>'+ interest +'</mark>,<br>in the year <mark>'+ year + '</mark>';
    }
}

function updateRate()  {
    // Getting Interest Rate Value
    var rateVal = document.getElementById("rate").value;
    // Updating It's Value In rate_val container
    document.getElementById("rate_val").innerText = rateVal + "%";
}