const arcanosMaiores = [
    {
        numero: "1",
        titulo: "Mago",
        imagem: "",
        caminho: "vontade",
        atributoPrincipal: "aspirar",
        atributosGerais: "negociar, especular, prometer, aspirar",
        material: `negociação, promessa, habilidade, possibilidade, especulação;
 situação pueril e frágil em que tudo depende do consulente embora haja tendências favoráveis`,
        mental: `criatividade, astúcia, nova ideia, pesquisa rápida, plano inovador;
 expressão positiva e falante`,
        sentimental: `expectativa, vontade, aspiração, desejo frágil; atração
 efêmera, mas com possibilidade de se tornar real, tudo dependerá do outro aceitar o flerte`,
        espiritual: `nova filosofia, busca de estudo transcendental, iniciação mística, mediunidade`,
        quatroPlanos: `não dispersar, crer em si, analisar os fatos,
 continuar, ir em frente`,
        conselho: `ser criativo, flexível e buscar novos projetos; pedir ajuda
 aos amigos`,
        negativa: `desânimo, inércia, mexerico; falta de oportunidade ou
 sorte`
    },
    {
        numero: "2",
        titulo: "Sacerdotisa",
        imagem: "",
        caminho: "vontade",
        atributoPrincipal: "analisar",
        atributosGerais: "passividade, reflexão, carência, fidelidade",
        material: `passividade, averiguação, burocracia, inação, sem avanço
 momentâneo; tudo depende do consulente`,
        mental: `planejamento, reflexão, bom-senso, sabedoria, segredo sobre o que se
 almeja; não se expressa por palavras ou gestos, falando muito pouco`,
        sentimental: `mágoa, ressentimento, carência afetiva ou sentimento não revelado a quem ama,
 sendo virtuosa e fiel ao parceiro(a) se tiver um relacionamento; introspectiva, se for solteiro(a)`,
        espiritual: `intuição, devoção, mediunidade, conhecimento místico`,
        quatroPlanos: `o fundamental é agir imediatamente, falar,
 realizar ou pedir conselhos a familiares`,
        conselho: `manter a calma, aguardar, analisar com cuidado, não
 fazer nada!`,
        negativa: `precipitação, desacordo, insegurança, fofoca, falta de apoio`
    },
    {
        numero: "3",
        titulo: "Imperatriz",
        imagem: "",
        caminho: "vontade",
        atributoPrincipal: "desenvolver",
        atributosGerais: "inspiração, dedução, preservação, desenvolvimento",
        material: `crescimento, prosperidade, promoção, aquisição, realização desejada; 
 tudo se realiza naturalmente, muita sorte`,
        mental: `inteligência, sensatez, planejamento, capacidade de análise dedutiva,
 boas ideias; fala articulada, boa expressão`,
        sentimental: `alegria, prazer, desejo ou vontade de amar (solteiros) ou amor (relacionamentos)`,
        espiritual: `compreensão, meditação, intuição, busca da harmonia`,
        quatroPlanos: `não mudar absolutamente nada, continuar
 na ação e nos projetos em andamento`,
        conselho: `manter o autocontrole em relação a tudo, ter confiança
 em si, não desistir dos ideais`,
        negativa: `desinteresse, dissimulação, fracasso; autoconfiança
 exagerada`
    },
    {
        numero: "4",
        titulo: "Imperador",
        imagem: "",
        caminho: "vontade",
        atributoPrincipal: "controlar",
        atributosGerais: "poder, controle, realização, autoridade",
        material: `manutenção, concretização, poder, autoritarismo; realização
 difícil, mas possível`,
        mental: `plano objetivo, ideia prática, automoralismo, inflexível;
expressão direta e áspera`,
        sentimental: `possessividade, rigidez, insensível, não dá afeto pela insegurança; egoísmo
 nos relacionamentos, mas com atitude paternalista, provedora e protetora`,
        espiritual: `ausência de compreensão, falta de fé, ceticismo, materialismo`,
        quatroPlanos: `ser condescendente, afável e menos tenso;
 observar e aprender com os outros`,
        conselho: `manter a autoridade, impor a vontade pessoal; não se
 abater, continuar os objetivos`,
        negativa: `limitação, estagnação, fraqueza; tendência ao fracasso`
    },
    {
        numero: "5",
        titulo: "Sacerdote",
        imagem: "",
        caminho: "vontade",
        atributoPrincipal: "disciplinar",
        atributosGerais: "dogma, doutrina, sociedade, moralidade",
        material: `organização, união, sociedade, equilíbrio, reciprocidade;
 realização com obstáculos burocráticos`,
        mental: `dogma, rigidez, moralidade, unilateralidade, inflexibilidade;
 expressão afável e corretiva`,
        sentimental: `afeto, consideração, lealdade; para solteiros indica amizade, e
 para casados, respeito`,
        espiritual: `espiritualidade, fé, religiosidade, devoção`,
        quatroPlanos: `agir na legalidade, ouvir as outras pessoas;
 ser fiel e honesto`,
        conselho: `reorganizar o meio ambiente, ter fé, seguir a moral e as
 leis`,
        negativa: `equívoco, logro, retardamento; fracasso por negligência`
    },
    {
        numero: "6",
        titulo: "Enamorado",
        imagem: "",
        caminho: "livre-arbítrio",
        atributoPrincipal: "escolher",
        atributosGerais: "opção, amor, intuição, encontrar",
        material: `encontro, benefício, ofertas múltiplas, compra/venda, promoção,
vantagens; bom período profissional, namoro ou casamento`,
        mental: `dúvida, indecisão, conflito interior, opções diversas; fala
 hesitante ou expressão indefinida`,
        sentimental: `amor, afeto, alegria, felicidade, desejo; o romantismo é a
 tônica, e a harmonia, o objetivo`,
        espiritual: `intuição, canalização, mediunidade, devoção`,
        quatroPlanos: `agir de acordo com a consciência, evitar a
 emoção; cuidado com a vaidade`,
        conselho: `buscar a paz, a união entre os opostos, reconciliação;
 não discutir, ser gentil`,
        negativa: `desacordo, separação, insatisfação; a falta de tato e
 compreensão`
    },
    {
        numero: "7",
        titulo: "Carro",
        imagem: "",
        caminho: "prazer",
        atributoPrincipal: "direcionar",
        atributosGerais: "direcionar, impulsionar, progresso, determinação",
        material: `progresso, desenvolvimento, segurança, realização; poder sobre
 todas as ações, resolução, vitórias`,
        mental: `determinação, criatividade, planejamento, inteligência
 aguçada; expressão clara, comunicação`,
        sentimental: `atração, magnetismo, impulsividade; desejo incontrolável e
 coragem para lutar pelo amor`,
        espiritual: `poder e controle mental, mediunidade, força mística`,
        quatroPlanos: `o caminho é correto, mas se deve ir com
 moderação; cuidado com a impulsividade`,
        conselho: `direcionar a vida; ser mais objetivo`,
        negativa: `inércia, obstáculo, irreflexão; falta de planejamento ou
 de coragem`
    },
    {
        numero: "8",
        titulo: "Justiça",
        imagem: "",
        caminho: "prazer",
        atributoPrincipal: "ajustar",
        atributosGerais: "racional, lei, justiça, cautela",
        material: `busca da ordem e do equilíbrio; dificuldades, obstáculos e
 problemas serão resolvidos se o consulente observar os direitos e os deveres (lei e moralidade)`,
        mental: `organização, planejamento, racionalidade, ponderação;
 expressão severa, rígida`,
        sentimental: `frieza, distanciamento, imparcialidade, diplomacia; amizade (solteiro).
 Reavaliação afetiva, busca de isolamento (casado)`,
        espiritual: `proteção, equilíbrio, harmonia; fim da negatividade`,
        quatroPlanos: `observar todos os prós e contras, ter
 cautela, ser ponderado; cuidado com as palavras`,
        conselho: `ser mais racional, frio e imparcial com os fatos; não se
 deixar envolver emocionalmente`,
        negativa: `prejuízo, orgulho, intolerância; ansiedade exagerada`
    },
    {
        numero: "9",
        titulo: "Eremita",
        imagem: "",
        caminho: "prazer",
        atributoPrincipal: "pesquisar",
        atributosGerais: "prudência, obstáculos, sabedoria, pesquisa",
        material: `progresso lento, obstáculo superável, realização em longo prazo,
 adiamento, burocracia; o consulente tem toda vantagem`,
        mental: `planejamento, prudência, estudo e pesquisa, para uma nova
 vida; mais ouve do que fala, expressão parcimoniosa`,
        sentimental: `afeto, paz, calma, interiorização, respeito, lealdade (casado). Adora
ajudar e acolher, boa amizade (solteiro)`,
        espiritual: `intuição, aprofundamento, meditação, iluminação, mediunidade`,
        quatroPlanos: `tentar agilizar os fatos, nunca desistir; o
 tempo resolverá tudo`,
        conselho: `ter paciência, calma, perdoar e seguir em frente; buscar
 o isolamento, calar-se`,
        negativa: `esterilidade, retrocesso, precipitação, ansiedade; falta de
 tempo hábil`
    },
    {
        numero: "10",
        titulo: "Roda da Fortuna",
        imagem: "",
        caminho: "prazer",
        atributoPrincipal: "alterar",
        atributosGerais: "destino, fortuna, mudança, instabilidade",
        material: `instabilidade, transferência, alteração, obstáculos passageiros, promoção;
 pequena mudança ocasionada por outra pessoa ou situação`,
        mental: `incoerência, plano desconexo, ideias sem conclusão,
 tormento; expressão confusa, fala exagerada`,
        sentimental: `ansiedade, nervosismo, agitação, inquietação, desgaste
 emocional (compromissado). Possibilidade de novos afetos (solteiro)`,
        espiritual: `interferência, inveja, negatividade ou desproteção (causados por
 terceiros), perda momentânea de fé`,
        quatroPlanos: `deve-se ter calma, concentrando-se nos
 objetivos; buscar ajuda dos amigos`,
        conselho: `deixar o destino fluir, não impedir nada, aceitar as
 mudanças`,
        negativa: `interrupção, dificuldade, inação; ninguém o auxiliará`
    },
    {
        numero: "11",
        titulo: "Força",
        imagem: "",
        caminho: "prazer",
        atributoPrincipal: "dominar",
        atributosGerais: "domínio, equilíbrio, vitalidade, sutileza",
        material: `domínio, empreendimento, administração, sucesso, promoção;
 realização com esforço e tensão; autocontrole em dificuldades insolúveis a curto prazo`,
        mental: `inteligência, paciência, projeto real, praticidade, flexibilidade;
 expressão clara e definida`,
        sentimental: `afetividade, magnetismo e forte desejo; entrega total ao amor e ao desejo`,
        espiritual: `proteção, crescimento, poder mental e místico`,
        quatroPlanos: `aceitar todos os limites, dar valor ao
 próximo; evitar a manipulação`,
        conselho: `ser forte, manter o amor-próprio, dominar a situação
 com toda a coragem`,
        negativa: `descontrole, discussão, impaciência; falta de poder pessoal`
    },
    {
        numero: "12",
        titulo: "Pendurado",
        imagem: "",
        caminho: "dor",
        atributoPrincipal: "resignar",
        atributosGerais: "resignação, utopia, ilusão, mártir",
        material: `impossibilidade, dificuldade, erro, inércia, obstáculo, irrealização;
 dívidas a longo prazo, prejuízos`,
        mental: `obsessão, utopia, perturbação, busca da perfeição moral, erro
 de julgamento, nostalgia; calado, expressão taciturna`,
        sentimental: `amargura, aflição, sofrimento, agonia, nostalgia; amor
 platônico, cego ou não correspondido que causa angústia`,
        espiritual: `devoção, filantropia, abnegação, religiosidade; fé como solução dos problemas`,
        quatroPlanos: `ter amor-próprio, mudar o paradigma da
 vida; ser flexível e prático`,
        conselho: `calar, meditar, não fazer nada, orar`,
        negativa: `abertura, desenvolvimento, liberdade; não há obstáculos,
 tudo está correto`
    },
    {
        numero: "13",
        titulo: "Morte",
        imagem: "",
        caminho: "dor",
        atributoPrincipal: "modificar",
        atributosGerais: "mudança, transformação, raiva, ceticismo",
        material: `mudança desejada ou alteração inesperada (tudo é originado pelo consulente); obstáculo
 superável, caminhos diferentes do planejado; pagamento de dívidas,
 compra/venda, promoção profissional, prosperidade vindoura`,
        mental: `reorganização, análise crítica, lucidez, objetividade; expressão
 áspera, fala rude e opinante`,
        sentimental: `melancolia, tristeza, rancor, desamor, distanciamento,
 amargura; descrença na vida afetiva, mas indica reequilíbrio futuro`,
        espiritual: `medo, falta de fé, ceticismo, afastamento religioso`,
        quatroPlanos: `ser mais moderado, reflexivo, calmo; não
 discutir, ser amável`,
        conselho: `fazer as mudanças necessárias, eliminar os obstáculos,
 replanejar o futuro; aprender a dizer “não”`,
        negativa: `imobilidade, fracasso, vaidade; dificuldade momentânea`
    },
    {
        numero: "14",
        titulo: "Temperança",
        imagem: "",
        caminho: "dor",
        atributoPrincipal: "Reconciliar",
        atributosGerais: "temperança, transmutação, trégua, temporalidade",
        material: `lentidão, conciliação, trégua, realização demorada, obstáculo,
 burocracia; difícil solução a curto prazo`,
        mental: `reflexão, adaptação, longo planejamento, ponderação
excessiva, bons pensamentos, paciência; pouca expressão verbal, silêncio`,
        sentimental: `tédio, marasmo, enfado, passividade amorosa (comprometido). Tendência a
 sublimação afetiva, falta de perspectiva (solteiro)`,
        espiritual: `proteção angelical, mediunidade, poder de autocura`,
        quatroPlanos: `se tiver paciência, mantenha os ideais até
 o fim; caso contrário, desista`,
        conselho: `ser moderado, aceitar a limitação do tempo; espere e
 será vitorioso`,
        negativa: `precipitação, desunião, discórdia; não há tempo hábil`
    },
    {
        numero: "15",
        titulo: "Diabo",
        imagem: "",
        caminho: "dor",
        atributoPrincipal: "desejar",
        atributosGerais: "prazer, ambição, desejo, vaidade",
        material: `poder, domínio, diversão, investimentos e ganhos; realiza tudo o
 que se deseja, mas não há satisfação`,
        mental: `sagacidade, ardil, inteligência, determinação, obsessão nos objetivos;
 expressão perspicaz, falante e entusiasta`,
        sentimental: `paixão, vontade, prazer, egoísmo, possessividade (comprometido). Forte atração
 e altamente sedutor (solteiro)`,
        espiritual: `displicência, intensidade astral, poder místico e mágico`,
        quatroPlanos: `moderar a ambição, refletir, sobre todas as
 consequências, aceitar os limites sociais`,
        conselho: `ser mais audacioso, apaixonado na vida, buscar o prazer
 pessoal, pensar mais em si`,
        negativa: `desinteresse, fracasso, desilusão; falta de motivação`
    },
    {
        numero: "16",
        titulo: "Torre",
        imagem: "",
        caminho: "dor",
        atributoPrincipal: "dissolver",
        atributosGerais: "ruptura, dor, desespero, obsessão",
        material: `dissolução, obstáculo intransponível, promoção ou realização com prejuízo (tudo
causado por terceiros); dificuldade ou perda irreparável, infortúnio`,
        mental: `inconformismo, decepção, confusão, irracionalidade,
 incompreensão obsessão; expressão nervosa, discórdia, brigas`,
        sentimental: `desilusão, medo, sofrimento, abandono, desespero, amargor.
 Preso em amores passados, afetividade sem futuro (solteiro)`,
        espiritual: `fé cega, fanatismo, credulidade, desproteção; busca de milagres impossíveis`,
        quatroPlanos: `perdoar a si e aos outros, ter fé, rever a
 nova vida`,
        conselho: `fazer todas as mudanças, romper definitivamente com o
 passado`,
        negativa: `construção, fortalecimento, coragem; não há obstáculos
 nem ajuda`
    },
    {
        numero: "17",
        titulo: "A Estrela",
        imagem: "",
        caminho: "esperança",
        atributoPrincipal: "Harmonizar",
        atributosGerais: "esperança, idealismo, paz, pureza",
        material: `realização, prosperidade, crescimento, promoção, caminhos
 abertos; tudo é possível, basta querer`,
        mental: `inspiração, discernimento, certeza, idealismo, credulidade;
 expressão clara, gentil e sem malícia`,
        sentimental: `afeto, otimismo, esperança, paz; para os solteiros indica
 amizade, e para casados, lealdade`,
        espiritual: `intuição, proteção, meditação, mediunidade`,
        quatroPlanos: `continuar o que se propôs a realizar e ser
 mais realista; avançar sem medo`,
        conselho: `manter a esperança e a dedicação, ter otimismo na
 vida; a fé remove obstáculos`,
        negativa: `desapontamento, mágoas, insatisfação; desalento`
    },
    {
        numero: "18",
        titulo: "A Lua",
        imagem: "",
        caminho: "evolução",
        atributoPrincipal: "expandir",
        atributosGerais: "autoconhecimento, inconsciente, fertilidade, superstição",
        material: `prosperidade, caminhos diversos, promoção, competição, ganhos, popularidade;
 todas as dificuldades serão resolvidas`,
        mental: `ilusão, devaneio, dualidade, hesitação, incerteza, refletindo sobre o passado
 ou em crise existencial; expressão confusa, fala incoerente`,
        sentimental: `ciúme, paixão, egoísmo, atração, desejo; a emoção é mais
 forte que a razão, gerando angústia e desarmonia`,
        espiritual: `poder e magia pessoal, intuição aguçada, força astral`,
        quatroPlanos: `ter cuidado com a imaginação, a lucidez é
 fundamental.`,
        conselho: `buscar o autoconhecimento e a verdade dos fatos;
 reavaliar o passado`,
        negativa: `desvantagem, prejuízo; cuidado com o pragmatismo ou o
 perfeccionismo`
    },
    {
        numero: "19",
        titulo: "O Sol",
        imagem: "",
        caminho: "evolução",
        atributoPrincipal: "triunfar",
        atributosGerais: "consciente, prosperidade, felicidade, verdade",
        material: `sucesso, realização, promoção, prosperidade, ganhos; tudo se
 resolve da melhor forma`,
        mental: `consciência, verdade, inteligência, bons pensamentos, novos estudos;
 expressão clara e verdadeira`,
        sentimental: `alegria, afeto, entusiasmo, carinho, lealdade; os
 relacionamentos afetivos tendem ao amor sólido e recíproco`,
        espiritual: `evolução, proteção arcangélica, iluminação, devoção, intuição`,
        quatroPlanos: `não mudar nada, tudo está correto e
 perfeito; manter a esperança`,
        conselho: `ser mais otimista, harmonizar-se, realizar os desejos,
 abrir-se para o mundo`,
        negativa: `adiamento, interrupção, desamor; tendência ao fracasso
 por falta de comunicação`
    },
    {
        numero: "20",
        titulo: "O Julgamento",
        imagem: "",
        caminho: "evolução",
        atributoPrincipal: "transcender",
        atributosGerais: "transcendência, novidade, destino, espiritualidade",
        material: `novidade, surpresa, renovação, novos caminhos; mudanças,
 oportunidades sempre positivas (originadas pelo destino, sorte)`,
        mental: `meticulosidade, intelectualidade, análise, pesquisa para uma
 vida nova; expressão crítica e construtiva`,
        sentimental: `novas emoções, expectativa, afeto, perdão; o coração se
 renova, a esperança retorna`,
        espiritual: `fé, compreensão, iluminação, devoção`,
        quatroPlanos: `aceitar a mudança e a nova vida que será
 bem melhor`,
        conselho: `perdoar, transcender e buscar a paz interior; a
 renovação é a única saída para o sucesso`,
        negativa: `dúvidas, adiamento, falsas promessas; ninguém, nem o
 destino, irá auxiliar`
    },
    {
        numero: "21",
        titulo: "O Mundo",
        imagem: "",
        caminho: "evolução",
        atributoPrincipal: "progredir",
        atributosGerais: "conclusão, síntese, progresso, perfeição",
        material: `conclusão, realização, resultado desejado, prosperidade, ganhos;
 mudança (originada pelo consulente)`,
        mental: `questionamento, novos planos, análise ou crítica construtiva;
 expressão harmônica e objetiva`,
        sentimental: `sinceridade, afeição, honestidade, felicidade, amor-próprio, fidelidade;
 autossuficiência e autoestima`,
        espiritual: `proteção angelical, êxtase, intuição, mediunidade, autorrealização`,
        quatroPlanos: `continuar as metas e planejamentos, tudo
 está perfeito`,
        conselho: `momento de finalizar os objetivos, mudar e ampliar os
 horizontes; mudar o que for necessário`,
        negativa: `dispersão, incapacidade, dificuldade; obstáculos difíceis de
 serem transpostos`
    },
    {
        numero: "",
        titulo: "O Louco",
        imagem: "",
        caminho: "evolução",
        atributoPrincipal: "revolucionar",
        atributosGerais: "evolução, ousadia, nada, caos",
        material: `precipitação, erro, busca indefinida; obstáculo, prejuízo; aparente
 possibilidade de ganho, mas é nulo`,
        mental: `desatenção, irreflexão, indecisão, excesso de confiança;
expressão eloquente e alegre, mas fala sem pensar`,
        sentimental: `prazer, alegria, desejo forte; afeição efêmera e frágil`,
        espiritual: `desordem, negativismo, problema astral; caos mediúnico
 (originado pelo consulente)`,
        quatroPlanos: `organizar as ideias e ser mais coerente em
 tudo, cuidado com o excesso de otimismo`,
        conselho: `buscar ser feliz, usar a liberdade de expressão, ousar;
 não se importar com a sociedade`,
        negativa: `objetividade, acerto, confiança, organização,
 sucesso`
    }    
]