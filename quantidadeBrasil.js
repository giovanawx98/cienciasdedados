import { getCSS, tickConfig } from "./common.js"

async function areasDeEstudoMaisEscolhidas() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/areas-estudo-brasil.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasAreas = Object.keys(dados)
    const quantidadeDeEstudantes = Object.values(dados)

    const data = [
        {
            x: nomeDasAreas, 
            y: quantidadeDeEstudantes, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Áreas de Estudo Mais Escolhidas no Brasil',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Áreas de Estudo',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de Estudantes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

areasDeEstudoMaisEscolhidas()
