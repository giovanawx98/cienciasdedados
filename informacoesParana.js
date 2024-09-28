const url = 'https://raw.githubusercontent.com/giovanawx98/cienciasdedados/api/main/dados-parana.json'

async function vizualizarPreferenciasEstudoParana() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const totalEstudantes = (dados.total_estudantes / 1e6).toFixed(2) // em milhões
    
    const porcentagemExatas = (dados.preferencias.exatas * 100).toFixed(2)
    const porcentagemHumanas = (dados.preferencias.humanas * 100).toFixed(2)
    const porcentagemBiologicas = (dados.preferencias.biologicas * 100).toFixed(2)
    const porcentagemOutros = (dados.preferencias.outros * 100).toFixed(2)
    
    const horasExatas = Math.floor(dados.tempo_medio_estudo.exatas)
    const minutosExatas = Math.round((dados.tempo_medio_estudo.exatas - horasExatas) * 60)
    
    const horasHumanas = Math.floor(dados.tempo_medio_estudo.humanas)
    const minutosHumanas = Math.round((dados.tempo_medio_estudo.humanas - horasHumanas) * 60)

    const horasBiologicas = Math.floor(dados.tempo_medio_estudo.biologicas)
    const minutosBiologicas = Math.round((dados.tempo_medio_estudo.biologicas - horasBiologicas) * 60)

    const horasOutros = Math.floor(dados.tempo_medio_estudo.outros)
    const minutosOutros = Math.round((dados.tempo_medio_estudo.outros - horasOutros) * 60)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `
        No Paraná, existem aproximadamente <span>${totalEstudantes} milhões</span> de estudantes. 
        Dentre eles, <span>${porcentagemExatas}%</span> preferem estudar áreas de exatas e dedicam, em média, <span>${horasExatas} horas</span> e <span>${minutosExatas} minutos</span> por dia ao estudo.
        Já <span>${porcentagemHumanas}%</span> preferem áreas de humanas e estudam em média <span>${horasHumanas} horas</span> e <span>${minutosHumanas} minutos</span> por dia.
        Na área de biológicas, <span>${porcentagemBiologicas}%</span> dos estudantes dedicam <span>${horasBiologicas} horas</span> e <span>${minutosBiologicas} minutos</span> diários ao estudo.
        Outras áreas de estudo representam <span>${porcentagemOutros}%</span>, com uma média de <span>${horasOutros} horas</span> e <span>${minutosOutros} minutos</span> de dedicação diária.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarPreferenciasEstudoParana()
