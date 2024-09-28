async function carregarGraficos() {
    const moduloBrasil = await import('./quantidadebrasil.js');
    moduloBrasil.areasDeEstudoMaisEscolhidasBrasil();

    const moduloParana = await import('./quantidadeparana.js');
    moduloParana.areasDeEstudoMaisEscolhidasParana();
}

carregarGraficos();
