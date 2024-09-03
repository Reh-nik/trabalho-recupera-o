const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "A Tailândia é um país do Sudeste Asiático conhecido pelas praias tropicais, pelos palácios reais suntuosos, pelas ruínas antigas e pelos templos ornamentados com figuras de Buda, embora não tenha muito reconhecimento dos outros países, carrega uma cultura vasta e diferente do nosso comum. Você conhece alguém que consuma a cultura tailandesa? (entretenimento, séries, músicas)",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Atualmente vem tendo mais reconhecimento,"
            },
            {
                texto: "Não",
                afirmacao: "Mesmo hoje em dia com o grande acesso à internet, muitas pessoas não conhecem sobre essa cultura,"
            }
        ]
    },
    {
        enunciado: "Hoja em dia, os famosos 'doramas' estão ficando cada vez mais famosos, fazendo pessoas do outro lado do mundo se interessarem pela diferente cultura, as séries tailândesas (chamadas de lakorn) não tem tanto destaque quanto as de outros países do leste asiático (como coréia do sul, japão e china) mas estão sendo mais acessiveis, podendo ser vistos em streamings famosos como a Netflix, e tendo grande visibilidade no Youtube, podendo até ultrapassar 10mi de vizualizações, o que você acha sobre essas séries diferentes? ",
        alternativas: [
            {
                texto:  "Acho interessante, pois mostram uma cultura totalmente diferente.",
                afirmacao: "muitas pessoas tem interesse pelo diferente, o que torna culturas assim cada vez mais conhecidas,"
            },
            {
                texto: "Não é algo que me interessa muito.",
                afirmacao: "ainda muitas pessoas preferem o mais comum e não costumam dar tanta visibilidade para o que consideram muito diferente,"
            }
           
        ]
    },
    {
        enunciado: "Existem muitos artistas tailandeses que possuem grande fama no ocidente, diversos desses artistas estão até vindo para o Brasil e estão sendo bem recepcionados, ficando surpresos com o grande número de fãs que existem de um lado do mundo que apresenta uma cultura e idioma completamente diferente, você imaginava que esses artistas tinham essa visibilidade no Brasil?",
        alternativas: [
            {
                texto: "Sim, já via eles sendo bem comentados",
                afirmacao: "os artistas vem tendo mais reconhecimento e fama, estão sendo cada vez mais comentados."
            },
            {
                texto: "Não, não imaginava que eram conhecidos",
                afirmacao: "por mais que os artistas estejam sendo mais falados, existem muitas pessoas que não sabem sobre, pois nosso país é muito grande."
            }
            
        ]
    },
    {
        enunciado: "A Tailândia está se tornando bem comentada aqui no Brasil, mas o Brasil também é muito comentado na Tailândia, por mais que a cultura e o idioma sejam bem diferentes um do outro, muitos consideram que esses dois países tem a mesma energia, pois os dois se mostram muito animados e receptivos, a cultura brasileira também é bem famosa e amada por muitos tailândeses, você se sente interessado pela tailândia ou pela cultura tailandesa?",
        alternativas: [
            {
                texto: "Sim, acho interessante por ser diferente.",
                afirmacao: "Essa cultura diferente pode atrair muitos, é realmente muito interessante saber sobre diferentes culturas."
            },
            {
                texto: "Não consigo ter muito interesse, prefiro o comum",
                afirmacao: "Por mais que muitos não se interessem, não podemos negar o fato de que ela está se tornando popular."
            }
        ]
    },
  
]; 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A Tailândia tem muitas diferenças do Brasil, mas essas diferenças são o que tornam esse país cada vez mais interessante, gerando grande curiosidade e se tornando cada vez mais comentada.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();