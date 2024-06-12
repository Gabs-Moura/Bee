document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;
        const detalhes = document.getElementById('detalhes').value;

        if (nome && email && celular && detalhes) {
            const cadastro = { nome, email, celular, detalhes };
            let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
            clientes.push(cadastro);
            localStorage.setItem('clientes', JSON.stringify(clientes));
            form.reset();
        } else {
            alert('Preencha todos os campos!');
        }
    });
});