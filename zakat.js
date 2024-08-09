function check_zakat(){
    let cash = +document.getElementById("cash").value;
    let gold = +document.getElementById("gold").value;
    let silver = +document.getElementById("silver").value;
    let inv_share = +document.getElementById("inv_share").value;
    let owed = +document.getElementById("owed").value;
    let stock = +document.getElementById("stock").value;
    let other = +document.getElementById("other").value;
    let sum1 = cash+gold+silver+inv_share+owed+stock+other;
    // what you owe 
    let expense = +document.getElementById("expense").value;
    let short_term_dbt = +document.getElementById("short_term_dbt").value;
    let other_exp = +document.getElementById("other_exp").value;
    let sum2 = expense + short_term_dbt + other_exp;
    let total_sum = sum1-sum2;

    // result 
    let res =total_sum * 0.025;
    document.getElementById("show_zakat").innerHTML=(`Your Zakat that you will pay: ${res.toFixed(2)}RS`);



}




