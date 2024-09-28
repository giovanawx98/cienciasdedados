export function areasDeEstudoMaisEscolhidasBrasil() {
 
    const dadosBrasil = {
        "Exatas": 3500000,
        "Humanas": 4500000,
        "Biológicas": 2000000,
        "Outras": 1000000
    };

    const nomeDasAreas = Object.keys(dadosBrasil);
    const quantidadeDeEstudantes = Object.values(dadosBrasil);

    const dataBrasil = [
        {
            x: nomeDasAreas, 
            y: quantidadeDeEstudantes, 
            type: 'bar',
            marker: {
                color: '#DB7093' 
            }
        }
    ];

    const layoutBrasil = {
        plot_bgcolor: '#008B8B',  
        paper_bgcolor: '#BC8F8F', 
        title: {
            text: 'Áreas de Estudo Mais Escolhidas no Brasil',
            font: {
                color: '#DB7093', 
                size: 30
            }
        },
        xaxis: {
            title: { text: 'Áreas de Estudo', font: { color: '#BC8F8F' } }
        },
        yaxis: {
            title: { text: 'Número de Estudantes', font: { color: '#BC8F8F' } }
        }
    };

    const graficoBrasil = document.createElement('div');
    graficoBrasil.className = 'grafico';
    document.getElementById('graficos-container').appendChild(graficoBrasil);
    Plotly.newPlot(graficoBrasil, dataBrasil, layoutBrasil);
}
