// api/tempo.js
function tempo(request, response) {
    const dynamicDate = new Date();
    response.json({
        ano: dynamicDate.getFullYear(),
        mes: dynamicDate.getMonth() + 1,
        dia: dynamicDate.getDate(),
        hora: dynamicDate.getHours(),
        minuto: dynamicDate.getMinutes(),
        segundo: dynamicDate.getSeconds(),
        hhmmss: dynamicDate.toISOString().slice(11, 19)
    });
}

// Exporta a função
module.exports = tempo;
