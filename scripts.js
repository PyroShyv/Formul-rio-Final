
document.getElementById('inputZip').addEventListener('input', function(event) {
    var cep = event.target.value;
    
    
    cep = cep.replace(/\D/g, '');
    
   
    if (cep.length > 8) {
        cep = cep.substring(0, 8);
    }

    
    event.target.value = cep;
});


function formatarCEP(cep) {
    
    cep = cep.replace(/\D/g, '');
    
    if (cep.length > 5) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
    }
    return cep;
}

document.getElementById('btninscrever').addEventListener('click', function(event) {
    event.preventDefault();  

    var email = document.getElementById('inputEmail4').value;
    var senhaoculta = "*********";
    var senha = document.getElementById('inputPassword4').value;
    var endereco = document.getElementById('inputAddress').value;
    var complemento = document.getElementById('inputAddress2').value;
    var cidade = document.getElementById('inputCity').value;
    var estado = document.getElementById('inputState').value;
    var cep = document.getElementById('inputZip').value;

    // Formatar o CEP
    cep = formatarCEP(cep);

    alert(
        "Dados do Formulário"
        + "\n\nO seu email é: " + email
        + "\nA sua senha é: " + senhaoculta
        + "\nO seu endereço é: " + endereco
        + "\nO complemento do seu endereço: " + complemento
        + "\nA sua cidade é: " + cidade
        + "\nSeu estado é: " + estado
        + "\nSeu Cep é: " + cep
    );
});
