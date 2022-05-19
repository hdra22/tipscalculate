function calculateTip(event){
    event.preventDefault();

    let bill = document.getElementById('bill').value;
    let quality = document.getElementById('quality').value;
    quality = parseFloat(quality);
    let people = document.getElementById('people').value;

    if(bill == '' | quality == 0){
        alert("Por favor, preencha os valores")
        return;
    }

    if(people == '' | people <= 1 ){
        people = 1;
        document.getElementById('each').style.display="none";
    } else{
        document.getElementById('each').style.display="block";
    }

    let total = (bill * quality) / people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit',calculateTip)