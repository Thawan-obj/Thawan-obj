function show()
{
    return confirm('Confira os dados antes de prosseguir: \n\nCPF: '+document.getElementById('cpf').value + '\nNome: '+document.getElementById('nome').value + '\nFormação: '+document.getElementById('form').value + '\nTelefone: '+document.getElementById('tel').value)
}