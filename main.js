// calculate expense
function calculateExpense(incomeID, foodID, rentID, clothesID) {
    // calling getInputValues function
    const income = getInputValues(incomeID);
    const foodExpense = getInputValues(foodID);
    const rentExpense = getInputValues(rentID);
    const clothesExpense = getInputValues(clothesID);
    console.log(income,foodExpense,rentExpense,clothesExpense)
    // calling input error function
    if (income == NaN) {
        console.log('not a number')
    }
    inputError(income, incomeID, 'income-error');
    inputError(foodExpense, foodID, 'food-error');
    inputError(rentExpense, rentID, 'rent-error');
    inputError(clothesExpense, clothesID, 'cloth-error');

    // check negative value and calculate expense
    if (income > 0 && foodExpense > 0 && rentExpense > 0 && clothesExpense > 0 && income !=NaN && foodExpense !=NaN && rentExpense !=NaN && clothesExpense !=NaN) {
        const totalExpense = foodExpense + rentExpense + clothesExpense
        const balance = income - totalExpense;
        if (totalExpense > income) {
            document.getElementById('expense-error').style.display = 'block';
            document.getElementById('expense-error').innerHTML = 'expense can\'t be more than income';
            document.getElementById("expense-amount").innerHTML = 0;
            document.getElementById("balance-amount").innerHTML = 0;
        } else {
            document.getElementById("expense-amount").innerHTML = totalExpense;
        document.getElementById("balance-amount").innerHTML = balance;
        document.getElementById('expense-error').style.display = 'none';
        document.getElementById('income-error').style.display = 'none';
        document.getElementById('food-error').style.display = 'none';
        document.getElementById('rent-error').style.display = 'none';
        document.getElementById('cloth-error').style.display = 'none';
        }
        

    } else {
        document.getElementById("expense-amount").innerHTML = 0;
        document.getElementById("balance-amount").innerHTML = 0;
    }

}

// input error function
function inputError(amount, amountID, errorID) {
    console.log(amount,errorID,amountID)
    if (amount < 0 || isNaN(amount) == true) {
        document.getElementById(errorID).style.display = 'block'
        document.getElementById(errorID).innerHTML = amountID + " can't be a negative or string";
    }
}

// calculate savings
function calculateSavings(incomeID, savingID) {


    
    const income = getInputValues(incomeID);
    const balance = parseFloat(document.getElementById("balance-amount").innerHTML);
    const savingPercent = getInputValues(savingID) / 100;
        const savingAmount = income * savingPercent;
    const remainingBalance = balance - savingAmount;
    
    if (savingPercent > 0 && savingAmount < balance && savingAmount > 0) {
        document.getElementById("saving-amount").innerHTML = savingAmount;
        document.getElementById("remaining-amount").innerHTML = remainingBalance;
        document.getElementById('saving-error').style.display = 'none';
    } else {
        document.getElementById('saving-error').style.display = 'block';
        document.getElementById('saving-error').innerHTML = savingID+' must be positive '+ '& saving-amount '+' must be less than savings!';
        document.getElementById("saving-amount").innerHTML = 0;
        document.getElementById("remaining-amount").innerHTML = 0;
        
    }
    
}


// get input values
function getInputValues(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

