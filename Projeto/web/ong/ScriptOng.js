function show()
{
    return confirm('Confira os dados antes de prosseguir: \n\nEmail: '+document.getElementById('email').value + '\nNome: '+document.getElementById('nome').value + '\nCEP: '+document.getElementById('cep').value + '\nTelefone: '+document.getElementById('tel').value + '\nEndereço: '+document.getElementById('end').value+ '\nMetodos de doação: '+document.getElementById('met').value + '\nRequisitos de adoção: '+document.getElementById('req').value + '\nEstado: '+document.getElementById('estado').value)
}