function temperature() {
    // To convert celsius to fahrenheit
    // (CEL * 9/5) + 32
    var c = document.getElementById("c").value;
    var f = (c * 9/5) + 32;
    document.getElementById("f").value = f;
}


function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kg").value;
    var p = kg * 2.2;
    document.getElementById("lbs").value = p;
}


function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("m").value = m
}