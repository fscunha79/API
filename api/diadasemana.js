// api/DiaDaSemana.js
module.exports = (request, response) => {
    const data = request.query.data;
    if (!data) {
        return response.send('Por favor, forneça uma data no formato dd/mm/aaaa.');
    }

    const partes = data.split('/');
    if (partes.length !== 3) {
        return response.send('Data inválida. Use o formato dd/mm/aaaa.');
    }

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Meses em JavaScript são 0-indexados
    const ano = parseInt(partes[2], 10);

    const dataObj = new Date(ano, mes, dia);
    const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    // return res.send(`O dia da semana para a data ${data} é: ${diasDaSemana[dataObj.getDay()]}`);

    response.json({
        data: data,
        diaDaSemana: diasDaSemana[dataObj.getDay()]
    });
};
