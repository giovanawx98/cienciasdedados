export function areasDeEstudoMaisEscolhidasParana() {

    const dadosParana = {
        "Exatas": 1500000,
        "Humanas": 1200000,
        "Biológicas": 800000,
        "Outras": 500000
    };

    const nomeDasAreas = Object.keys(dadosParana);
    const quantidadeDeEstudantes = Object.values(dadosParana);

    const dataParana = [
        {
            x: nomeDasAreas, 
            y: quantidadeDeEstudantes, 
            type: 'bar',
            marker: {
                color: '#DB7093' 
            }
        }
    ];

    const layoutParana = {
        plot_bgcolor: '#008B8B',  
        paper_bgcolor: '#BC8F8F', 
        title: {
            text: 'Áreas de Estudo Mais Escolhidas no Paraná',
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

    const graficoParana = document.createElement('div');
    graficoParana.className = 'grafico';
    document.getElementById('graficos-container').appendChild(graficoParana);
    Plotly.newPlot(graficoParana, dataParana, layoutParana);
}
