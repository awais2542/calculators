function bmr_calc(){
    
    const age = +document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = +document.getElementById('height').value;
    const weight = +document.getElementById('weight').value;
    const activity = +document.getElementById('activity').value;


    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('activity', activity);
    let result;
    if(gender === 'male' || gender === 'MALE'){
        
         result = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else {
         result = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    const  daily_calories = result * activity ;
    document.getElementById('show').textContent =`YOUR BMR is ${result.toFixed(2)}calories/day.\nTo maintain your weight, you need approximately${daily_calories.toFixed(2)}calories/day based on your activity`



}


// function bmr_calc() {
//     // Retrieve and convert inputs to numbers
//     let age = parseFloat(document.getElementById("age").value);
//     let gender = document.getElementById("gender").value.toLowerCase();
//     let height = parseFloat(document.getElementById("height").value);
//     let weight = parseFloat(document.getElementById("weight").value);

//     // Debugging: log input values
//     console.log('Age:', age);
//     console.log('Gender:', gender);
//     console.log('Height:', height);
//     console.log('Weight:', weight);

//     // Check if all inputs are valid numbers
//     if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
//         document.getElementById("show").innerHTML = "Please enter valid numbers for age, height, and weight.";
//         return;
//     }

//     // Calculate BMR based on gender
//     let result;
//     if (gender === "male") {
//         result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
//     } else if (gender === "female") {
//         result = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
//     } else {
//         document.getElementById("show").innerHTML = "Please enter a valid gender (male or female).";
//         return;
//     }

//     // Debugging: log the result
//     console.log('BMR Result:', result);

//     // Display the result
//     document.getElementById("show").innerHTML = result.toFixed(2);
// }
