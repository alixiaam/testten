function calculateTip() {
    // Get the input values and convert them to numbers
    let tip = parseFloat(document.getElementById("Tip").value);
    let total = parseFloat(document.getElementById("Bill").value);

    // Calculate the tip amount and the new total
    let tipAmount = (tip / 100) * total;
    let newTotal = tipAmount + total;

    // Display the result
    document.getElementById("result").innerHTML = `Tip Amount: $${tipAmount.toFixed(2)}<br>Total Amount: $${newTotal.toFixed(2)}`;
}
