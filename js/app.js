

function Bank(){
    var a = document.getElementById('loan').value
    var b = document.getElementById('credit').value
    var c = document.getElementById('percent').value
    if (a!= 0 && b!= 0 && c!=0) {
        a = Number(a)
        b = Number(b)
        c = Number(c)
        if (500<=a && a<=1000000 && 6<=b && b<=48) {
            document.getElementById('amount').innerHTML = ((a+a*c/100)).toFixed(2)
            document.getElementById('payment').innerHTML = ((a+a*c/100)/b).toFixed(2)
        }
        else{
            alert('Daxil etdiyiniz mebleg kecerli deyil')
        }
    }
    else{
        alert('Duzgun deyer daxil et')
    }
}