function show()
{
    return confirm('Confira os dados antes de prosseguir: \n\nCPF: '+document.getElementById('cpf').value + '\nNome: '+document.getElementById('nome').value+ '\nTelefone: '+document.getElementById('tel').value)
}