var products = ["Pen", "Pencil", "Bottle"];
var bill = 0;

while(true){

    var choice = prompt(
        "1. for Pen\n2. for Pencil\n3. for Bottle\n4. Exit\n\nEnter your Choice : "
    );

    switch(choice){

        case '1':
            var qty = Number(prompt("Enter Pen Quantity : "));

            if(qty <= 10){
                bill += (10 * qty);
            }
            else{
                bill += (10 * qty) - (10 * qty * 0.05);
            }
            break;


        case '2':
            var qty = Number(prompt("Enter Pencil Quantity : "));

            if(qty <= 10){
                bill += (5 * qty);
            }
            else{
                bill += (5 * qty) - (5 * qty * 0.05);
            }
            break;


        case '3':
            var qty = Number(prompt("Enter Bottle Quantity : "));

            if(qty <= 10){
                bill += (20 * qty);
            }
            else{
                bill += (20 * qty) - (20 * qty * 0.05);
            }
            break;


        case '4':
            console.log("Total Bill = " + bill);
            break;


        default:
            console.log("Invalid Choice");
    }


    if(choice == '4'){
        break;
    }
}

console.log("Final Bill : " + bill);