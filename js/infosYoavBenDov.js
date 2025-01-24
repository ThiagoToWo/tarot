const arcanosMaiores = [
    {
        numero: "1",
        titulo: "O Mago",
        imagem: "a01.jpg",
        interpretacao: `O começo de algo. Sorte de iniciante. Ter
vários instrumentos e meios à disposição. Uso de forças
sobrenaturais. Criar a realidade com poder da mente.
Treinamento e aquisição de habilidades práticas. Improvisação.
Exibir ou mostrar para outras pessoas.`,
        mensagem: "Crie uma nova realidade.",
        invertida: `Trapaça, truque de mão, enganar. Ostentar, fingir. Falta
de autoconsciência sobre o corpo, a sexualidade ou motivos
básicos. Prestes a perder algo devido à inexperiência ou
imprecisão.`
    },
    {
        numero: "2",
        titulo: "A Papisa",
        imagem: "a02.jpg",
        interpretacao: `Sabedoria combinada com intelecto e intuição.
Uma mãe espiritual. Uma mulher escondendo sua força num
mundo dominado por homens. Modéstia. Segredos, algo oculto,
mistério. Obter uma dica de algo que permanece amplamente
desconhecido. Impossível dar uma resposta definitiva agora.`,
        mensagem: "Saiba definir limites.",
        invertida: `A necessidade de esconder a verdadeira natureza por
trás das convenções da sociedade normal. Abordagem
conservadora do sexo e do corpo. Bloqueio emocional.`
    },
    {
        numero: "3",
        titulo: "A Imperatriz",
        imagem: "a03.jpg",
        interpretacao: `Abundância, crescimento, produtividade.
Toque natural ou humano dentro de um ambiente artificial.
Inteligência emocional. Proteção e cuidados. Maternidade. Uma
figura feminina poderosa. Identidade feminina forte.`,
        mensagem: "Aja com base nos seus instintos.",
        invertida: `Comportamento impulsivo. Alguém com quem é difícil
argumentar. Superproteção. Envolvimento excessivo na vida dos
outros. Problemas com uma forte figura materna.`
    },
    {
        numero: "4",
        titulo: "O Imperador",
        imagem: "a04.jpg",
        interpretacao: `Conquistas práticas e materiais. Assuntos
relacionados ao local de trabalho ou à fonte de renda. Autoridade
e controle. Uma posição de comando. Uma figura paterna
protetora, patrão ou patrocinador. Assertividade. Assuntos
militares.`,
        mensagem: "Mostre poder de liderança e responsabilidade.",
        invertida: `Beligerância, violência, tentar resolver as coisas com a
força bruta. Ditadura. Possibilidade de abuso sexual. Dificuldade
em lidar com uma figura paterna dominante. Negação e ocultação
de fraquezas interiores.`
    },
    {
        numero: "5",
        titulo: "O Papa",
        imagem: "a05.jpg",
        interpretacao: `Professor, instrutor ou conselheiro. Educação e
conhecimento. Experiência acadêmica. Religião organizada,
medicina convencional ou psicologia. Pai espiritual. Consulta ou
tratamento com um especialista. Casamento.`,
        mensagem: "Respeite o conhecimento e a educação.",
        invertida: `Adesão excessiva a convenções e normas
ultrapassadas. Burocracia. Uma instituição opressiva. Hipocrisia,
discriminação. Divórcio.`
    },
    {
        numero: "6",
        titulo: "O Amante",
        imagem: "a06.jpg",
        interpretacao: `Amor, relacionamento amoroso.
Envolvimento emocional. Necessidade de fazer uma escolha ou
se desvencilhar de influências passadas. As inclinações do
coração correspondem à vontade divina. Pequenos passos são
sinais de desejo interior.`,
        mensagem: "Siga o caminho do coração.",
        invertida: `Relacionamento complexo entre várias pessoas; por
exemplo, um triângulo amoroso ou tensão entre mãe e esposa.
Hesitação, dilema. Confusão com relação aos próprios
sentimentos e vontades.`
    },
    {
        numero: "7",
        titulo: "O Carro",
        imagem: "a07.jpg",
        interpretacao: `Vitória ou uma conquista que coloca o
consulente numa posição forte e protegida. Ambição, energia,
motivação para seguir em frente. Honra pública. Poder e status
alto.`,
        mensagem: "Ouse e vença.",
        invertida: `Fraqueza oculta atrás da fachada. Arrogância, vaidade.
Superproteção. Fechamento emocional. Confusão com relação
aos próprios objetivos. Perder o toque simples com as pessoas e
o contato com a realidade.`
    },
    {
        numero: "8",
        titulo: "A Justiça",
        imagem: "a08.jpg",
        interpretacao: `Lei e ordem, questões legais e judiciais.
Julgamento justo e equilibrado. Uma consciência desenvolvida.
Racionalidade. Argumentar com base em regras claras e normas
comuns. Um toque de graça e humanidade além de
considerações objetivas.`,
        mensagem: "Aja conforme a razão e as normas aceitas.",
        invertida: `Pequena responsabilidade. Uma atitude crítica e
reprovadora. Sentimentos de culpa. Controle repressivo de si e
dos outros. Ideias negativas que impedem a mudança e o avanço.`
    },
    {
        numero: "9",
        titulo: "O Eremita",
        imagem: "a09.jpg",
        interpretacao: `Uma busca pela verdade ou entendimento
espiritual. Concentrar-se num propósito claro. Cuidado, exame
cuidadoso. Autoprivação por uma causa significativa. Lealdade
aos princípios. Fé inabalável.`,
        mensagem: "Procure a essência das coisas.",
        invertida: `Uma atitude fechada e reclusa. Isolamento, solidão.
Ideias fixas. Cuidado e suspeita excessivos. Uma abordagem
crítica, à procura de defeitos. Desejos ocultos e negados.`
    },
    {
        numero: "10",
        titulo: "A Roda da Fortuna",
        imagem: "a10.jpg",
        interpretacao: `Mudança nas circunstâncias e
na posição. Um aumento após uma queda. Jogatina, pôr fé nos
caprichos da sorte. Ciclos da vida, fechamento de círculos.
Adaptação para a rotina da vida cotidiana. Uma dica sobre
encarnações anteriores.`,
        mensagem: "Aceite os altos e baixos da vida.",
        invertida: `Um declínio após um período de ascendência. O perigo
espreita no cume. Movendo-se num círculo fechado. Humor
oscilante. Sentir-se impotente para mudar uma situação.`
    },
    {
        numero: "11",
        titulo: "A Força",
        imagem: "a11.jpg",
        interpretacao: `Poder e coragem para enfrentar desafios.
Expressão controlada de impulsos criativos, anseios e desejos.
Mobilização de recursos internos em direção a um objetivo
comum. Assumir riscos.`,
        mensagem: "Assuma o controle sobre si mesmo.",
        invertida: `A necessidade de manter as coisas sob controle gera
tensões constantes. Risco de perder a capacidade de controle.
Conflito interior e avaliação irrealista das próprias forças pode
levar ao fracasso.`
    },
    {
        numero: "12",
        titulo: "O Enforcado",
        imagem: "a12.jpg",
        interpretacao: `Ver as coisas de um ponto de vista
único. Enfrentar dificuldades por uma causa nobre. Período de
profundo autoexame. Passividade. Aceitação da realidade,
mesmo que seja o oposto do que se espera.`,
        mensagem: "Veja as coisas da perspectiva oposta.",
        invertida: `Isolamento. Vitimismo. Incapacidade de agir. Negar as
próprias qualidades únicas, esforçando-se para ser “normal” a
todo custo. Viver uma realidade particular e fantasiosa.`
    },
    {
        numero: "13",
        titulo: "",
        imagem: "a13.jpg",
        interpretacao: `O fim de algo cuja hora chegou. Romper influências do
passado ou o apego a figuras dominantes. Desistir do supérfluo e
manter apenas o essencial. A desintegração do velho abre
espaço para o novo.`,
        mensagem: "Deixe ir o que já acabou.",
        invertida: `Dificuldade para lidar com perdas ou mudanças.
Dificuldades temporárias, um desafio difícil. Desintegração.
Percepção de uma verdade dolorosa. Esta carta não prevê morte
futura, mas pode refletir ansiedade com a possibilidade de morrer
ou o ato de lamentar uma perda que já aconteceu.`
    },
    {
        numero: "14",
        titulo: "A Temperança",
        imagem: "a14.jpg",
        interpretacao: `Reconciliação, compromisso,
relaxamento de tensões. Integração de opostos. Capacidade de
fazer o aparentemente impossível. Um lento processo de
destilação e melhoria. Autoaperfeiçoamento.`,
        mensagem: "Encontre a medida certa.",
        invertida: `Avanços e retrocessos, sem fazer um progresso real.
Perder a paciência com um processo demorado. Preocupação
consigo mesmo, ato de afastar outros que possam ajudar.`
    },
    {
        numero: "15",
        titulo: "O Diabo",
        imagem: "a15.jpg",
        interpretacao: `Uma explosão de criatividade. Paradoxos e
contradições. Ironia e zombaria de normas comuns. Agindo a
partir de desejos, paixões e impulsos. Superar trauma familiar do
passado.`,
        mensagem: "Expresse paixão e desejo.",
        invertida: `Tentação, atração pelo sombrio e proibido. Exploração,
dominação. Autossatisfação compulsiva. O comportamento insensível tem seu preço. Dificuldade em
desapegar-se de um vínculo prejudicial.`
    },
    {
        numero: "16",
        titulo: "A Torre",
        imagem: "a16.jpg",
        interpretacao: `Romper estruturas sólidas. Livrar-se de um
confinamento. Progresso repentino após longas preparações.
Encontro sexual vigoroso e cheio de energia. O sucesso está na
simplicidade e na modéstia.`,
        mensagem: "Retorne ao terreno sólido da realidade.",
        invertida: `Choque. Colapso de projetos ou estruturas confiáveis.
Uma queda de uma posição aparentemente sólida e segura.
Caos, confusão, dificuldade em entender o que está acontecendo.
Vaidade e orgulho levam ao fracasso.`
    },
    {
        numero: "17",
        titulo: "A Estrela",
        imagem: "a17.jpg",
        interpretacao: `Abertura, simplicidade, retorno à natureza.
Pureza, honestidade. Mostrar-se “como você é”, aceitando o
próprio corpo e os próprios desejos. Generosidade. Sorte do céu.
Sentimento intuitivo de orientação ou energia proveniente de um
plano superior.`,
        mensagem: "Flua a partir de uma fonte pura.",
        invertida: `Otimismo ingênuo e pensamento positivo. Expor a si
mesmo ao perigo ou abuso. Dificuldade em estabelecer fronteiras
adequadas. Desperdício, esbanjamento.`
    },
    {
        numero: "18",
        titulo: "A Lua",
        imagem: "a18.jpg",
        interpretacao: `Emoções profundas, talvez relacionadas à mãe
ou a uma figura feminina. Uma experiência diferente da realidade.
Ansiar por algo inacessível. Encontrar os pontos fortes ocultos.
Ocupação com o passado distante. Um tesouro escondido.`,
        mensagem: "Não tenha medo de ir fundo.",
        invertida: `Sentimentos vagos e perturbadores. Dificuldades
emocionais. Um período de depressão. Perigo à espreita sob a
superfície. Recuar. O caminho a seguir é difícil de encontrar.`
    },
    {
        numero: "19",
        titulo: "O Sol",
        imagem: "a19.jpg",
        interpretacao: `Luz e calor, abundância, bênçãos. Sentimentos
agradáveis. Cura emocional ou física. Parceria, confiança,
compartilhamento, fraternidade. Toque humano. Figura paterna
ideal. Assuntos relacionados a crianças ou filhos. Definir limites de
uma maneira moderada e não opressiva.`,
        mensagem: "Encontre parceiros adequados.",
        invertida: `Viver num espaço limitado. Dificuldade para enfrentar a
realidade de frente. Imaturidade, dependência dos outros. Alguém
ou algo muito intenso e enérgico, com o qual é difícil se sentir à
vontade. Um pai ausente.`
    },
    {
        numero: "20",
        titulo: "O Julgamento",
        imagem: "a20.jpg",
        interpretacao: `Revelação, esclarecimento, um novo
entendimento. Ponto de virada num processo de terapia. Cura de
um relacionamento familiar. Revelação, segredos descobertos,
notoriedade. Nascimento de um bebê ou algo novo.`,
        mensagem: "Desperte para a realidade espiritual.",
        invertida: `Revelação de algo que deveria ter sido mantido oculto.
Falta de privacidade. Constatação desagradável. Problema ligado
à relação entre pai e filho. Muito drama e alarde.`
    },
    {
        numero: "21",
        titulo: "O Mundo",
        imagem: "a21.jpg",
        interpretacao: `Conclusão de um processo. Atividade
equilibrada e realizações em vários domínios. Contato com
lugares distantes. Harmonia e correspondência entre diferentes
planos. Gravidez. Algo novo está para nascer. A dança da vida.`,
        mensagem: "Tudo está perfeito como está.",
        invertida: `Vida numa bolha. Dificuldade para compartilhar o próprio
mundo com os outros. Desconexão entre os sentimentos e a vida
exterior. Preocupação consigo mesmo, autoimagem idealizada,
incapacidade de seguir em frente.`
    },
    {
        numero: "",
        titulo: "O Louco",
        imagem: "a22.jpg",
        interpretacao: `Liberdade com relação a convenções e normas. Algo ou
alguém único e excepcional. Opções mantidas em aberto. Desistir
do controle. Espontaneidade. Incerteza. Atenção para o aqui e
agora. Partir numa viagem.`,
        mensagem: "Continue em movimento.",
        invertida: `Dificuldade em escolher e se comprometer com algo
Inquietação. Falta de propósito. Se perder.
Comportamento tolo. Excentricidade. Falta de aceitação no
ambiente social. Dificuldade em planejar com antecedência.`
    }    
]

const arcanosMenores = [
    {
        numero: "Às",
        titulo: "Paus",
        imagem: "b01.jpg",
        interpretacao: `Impulso criativo. Sexualidade ativa. Impulsos fortes.
Energia e direção. Força da vida. Início de crescimento. Dispersar
os esforços em diferentes direções.`,
        mensagem: "",
        invertida: `Falta de energia, restrição, sexualidade reprimida, um
bloqueio criativo.`
    },
    {
        numero: "2",
        titulo: "Paus",
        imagem: "b02.jpg",
        interpretacao: `Encruzilhadas. Várias opções para escolher. Todo curso
oferece benefícios. Um breve encontro com alguém que segue
seu próprio caminho. Bloquear o avanço de um oponente.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "3",
        titulo: "Paus",
        imagem: "b03.jpg",
        interpretacao: `Direção. Avançar depois de um momento de hesitação.
Encontrar um caminho intermediário entre dois cursos de ação.
Ganhar vantagem mantendo a neutralidade entre dois lados
conflitantes.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "4",
        titulo: "Paus",
        imagem: "b04.jpg",
        interpretacao: `Paralisação. Uma pausa temporária para se preparar
para futuros avanços. Tensões no momento, mas boas
perspectivas a longo prazo. Fazer um movimento agora não é
interessante para ninguém.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "5",
        titulo: "Paus",
        imagem: "b05.jpg",
        interpretacao: `Superação. Vencer uma oposição fraca. Romper o
equilíbrio. Focar o objetivo principal. Iniciativa para fazer uma
jogada vencedora.`,
        mensagem: "",
        invertida: `(com a parte coberta da haste central na parte inferior da
carta) Deparar-se com uma situação complexa, perdendo
vantagem.`
    },
    {
        numero: "6",
        titulo: "Paus",
        imagem: "b06.jpg",
        interpretacao: `Colaboração. Uma forte aliança entre duas partes com
objetivos diferentes, mas interesses comuns no momento.
Condições favoráveis para satisfazer o gosto pelo luxo.`,
        mensagem: "",
        invertida: `(com a flor decorada na parte inferior da carta) Busca
excessiva pelo luxo. Necessidade de romper uma aliança de
oponentes.`
    },
    {
        numero: "7",
        titulo: "Paus",
        imagem: "b07.jpg",
        interpretacao: `Luta. Alguém lutando contra muitos oponentes.
Obstinação, resistência, manter a posição numa situação de
conflito. Um combate difícil com um resultado incerto.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "8",
        titulo: "Paus",
        imagem: "b08.jpg",
        interpretacao: `Regulamentação. É possível avançar apenas seguindo
as regras. Ocupação com objetivos de curto prazo enquanto
perde a perspectiva de longo prazo. Um bloqueio.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "9",
        titulo: "Paus",
        imagem: "b09.jpg",
        interpretacao: `Interrupção. Dificuldades e oposições muito difíceis de
superar. Desistir dos projetos para evitar conflitos. Começar de
novo após um período desafiador.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "10",
        titulo: "Paus",
        imagem: "b10.jpg",
        interpretacao: `Lealdade. Uma parceria ou aliança vence dificuldades,
conseguindo superá-las. Intenções puras e perseverança levam
ao sucesso. Honrar os princípios, apesar de todas as dificuldades.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "Valete",
        titulo: "Paus",
        imagem: "b11.jpg",
        interpretacao: `Um potencial criativo que ainda precisa ser
processado. Manter uma distância segura dos acontecimentos e
aguardar o momento certo.`,
        mensagem: "",
        invertida: `Uma tarefa além das forças do consulente. Dificuldade
no controle de desejos e impulsos. Abordagem imatura da
sexualidade.
`
    },
    {
        numero: "Cavaleiro",
        titulo: "Paus",
        imagem: "b12.jpg",
        interpretacao: `Uma mudança de direção, para satisfazer
desejos e paixões. Uma parada temporária, mas ainda com
energia e desejo de avanço.`,
        mensagem: "",
        invertida: `Preocupação com a satisfação dos próprios desejos.
Problema na definição de objetivos de longo prazo. Cair em
tentação.
`
    },
    {
        numero: "Rainha",
        titulo: "Paus",
        imagem: "b13.jpg",
        interpretacao: `Uma figura feminina com uma forte
personalidade. Coisas relacionadas com comida e o ato de comer.
Manter a cordialidade, deixando claro que se pode usar de
truculência se necessário. Uma posição segura e bem defendida.`,
        mensagem: "",
        invertida: `Intimidação, ameaça. Usar a sexualidade como um meio
de controle. Problemas com uma forte figura materna. Medo do
poder feminino.`
    },
    {
        numero: "Rei",
        titulo: "Paus",
        imagem: "b14.jpg",
        interpretacao: `Uma atitude madura com relação a impulsos e
desejos. Criatividade controlada. Incentivar a si mesmo para
avançar. Investir ativos atuais em projetos futuros.`,
        mensagem: "",
        invertida: `Planos de avanço frustrados por atitudes
contraproducentes. Hesitação, conflitos. Tendência para tornar as
coisas muito difíceis e complexas.`
    },
    {
        numero: "Às",
        titulo: "Copas",
        imagem: "c01.jpg",
        interpretacao: `O início de um relacionamento amoroso. Expressão
de sentimentos calorosos. Desejo romântico por algo
extraordinário. Crescimento emocional e espiritual.`,
        mensagem: "",
        invertida: `Insensibilidade emocional, sentir um vazio. Evitar
intimidade. Sentimentos negativos. Coração partido.`
    },
    {
        numero: "2",
        titulo: "Copas",
        imagem: "c02.jpg",
        interpretacao: `Parceria. Um relacionamento romântico ou um
relacionamento pessoal próximo. Dinâmica interpessoal baseada
em normas sociais. Paixão num relacionamento amoroso que
pode se revelar destrutiva.`,
        mensagem: "",
        invertida: `Uma crise num relacionamento. Decepção com alguém
perto de você.`
    },
    {
        numero: "3",
        titulo: "Copas",
        imagem: "c03.jpg",
        interpretacao: `Nascimento. Algo novo traz alegria e felicidade. Cuidar
de uma criança. Questões da relação pai e filho. Um projeto
comum motivado por sentimentos e não apenas por interesses.`,
        mensagem: "",
        invertida: `Problemas na relação com os pais ou com um filho.
 Forte aliança de duas pessoas deixa uma terceira de fora.`
    },
    {
        numero: "4",
        titulo: "Copas",
        imagem: "c04.jpg",
        interpretacao: `Família. Um coletivo de pessoas (família, comunidade
etc.) com uma história e um sentimento de grupo. Compromisso
com um grupo em detrimento de interesses pessoais.`,
        mensagem: "",
        invertida: `Problemas e discórdia na família ou numa comunidade
duradoura. Uma estrutura social fixa que não permite adaptação
ou flexibilidade.`
    },
    {
        numero: "5",
        titulo: "Copas",
        imagem: "c05.jpg",
        interpretacao: `Conexões. Popularidade, relações com muitas
pessoas. Tornar-se o centro das atenções num grupo. Confiar nas
conexões com outras pessoas para avançar ou superar
dificuldades.`,
        mensagem: "",
        invertida: `Preocupação excessiva com a atividade social. Perder a
si mesmo em múltiplas conexões superficiais. Cultivar o contato
virtual em vez de contatos reais.`
    },
    {
        numero: "6",
        titulo: "Copas",
        imagem: "c06.jpg",
        interpretacao: `Continuidade. Um relacionamento de longo prazo.
Repetição entre diferentes gerações da família. Uma aliança
pessoal estável.`,
        mensagem: "",
        invertida: `Monotonia, repetição tediosa. Perda de tempo e
repetição das mesmas armadilhas emocionais.`
    },
    {
        numero: "7",
        titulo: "Copas",
        imagem: "c07.jpg",
        interpretacao: `Individualidade. Uma pessoa isolada encontrando seu
lugar num grupo. Contato com pessoas em posições elevadas.
Qualidades excepcionais apreciadas.`,
        mensagem: "",
        invertida: `Problemas de integração num grupo ou organização. Ser
parte de um coletivo, mas se sentir isolado e distante.`
    },
    {
        numero: "8",
        titulo: "Copas",
        imagem: "c08.jpg",
        interpretacao: `Envolvimento. Desenvolver relacionamentos pessoais
dentro de um grupo. Um ambiente favorável a relações humanas.
Uma festa ou reunião familiar.`,
        mensagem: "",
        invertida: `Interferência do ambiente na vida de um casal. As
pressões da família em relações românticas ou assuntos
pessoais.`
    },
    {
        numero: "9",
        titulo: "Copas",
        imagem: "c09.jpg",
        interpretacao: `Coordenação. Pessoas ou peças trabalhando juntas,
cada uma em seu devido lugar. Aceitar o papel de alguém num
relacionamento social ou ambiente de grupo. Felicidade. Desejos
se tornando realidade.`,
        mensagem: "",
        invertida: `Uma situação social confusa. Dificuldade para se situar
num ambiente complexo.`
    },
    {
        numero: "10",
        titulo: "Copas",
        imagem: "c10.jpg",
        interpretacao: `Liderança. Uma pessoa com qualidades especiais
recebe reconhecimento e um cargo alto. Assumir a
responsabilidade por outras pessoas. Manter uma posição
superior.`,
        mensagem: "",
        invertida: `Um líder em queda. Perda de popularidade. Decepção
por causa da ingratidão das pessoas que ajudou.`
    },
    {
        numero: "Valete",
        titulo: "Copas",
        imagem: "c11.jpg",
        interpretacao: `Primeiras etapas hesitantes de um romance.
Timidez. Intenções sinceras. Tentar descobrir os próprios
sentimentos.`,
        mensagem: "",
        invertida: `Envolvimento excessivo nos sentimentos pessoais.
Perder contato com outras pessoas. Negligência em assuntos
práticos.`
    },
    {
        numero: "Cavaleiro",
        titulo: "Copas",
        imagem: "c12.jpg",
        interpretacao: `Um gesto romântico, oferecer o coração,
cortejar. Abertura, sinceridade, um coração simples. Um amante
em potencial pode aparecer.`,
        mensagem: "",
        invertida: `Sentimentos superficiais e instáveis. Uma atitude
excessivamente otimista, mas irrealista. Uma exibição aberta de
sentimentos rasos ou pouco sinceros.`
    },
    {
        numero: "Rainha",
        titulo: "Copas",
        imagem: "c13.jpg",
        interpretacao: `Um mundo interior rico que não é revelado.
Proteger a privacidade ou ativos valiosos. Fortes sentimentos
mantidos sob controle.`,
        mensagem: "",
        invertida: `Postura fechada, defensiva. Desconfiança dos outros
devido a experiências passadas negativas. Esconder as emoções
sob o disfarce de criticismo racional.`
    },
    {
        numero: "Rei",
        titulo: "Copas",
        imagem: "c14.jpg",
        interpretacao: `Maturidade emocional, otimismo, capacidade de
superar feridas do passado e olhar para o futuro. Abertura para
coisas novas, mas com prudência e cautela. Fechar os ouvidos
para as vozes do passado.`,
        mensagem: "",
        invertida: `Dificuldade em superar um golpe emocional. Perspectiva
pessimista causada por experiências passadas negativas.`
    },
    {
        numero: "Às",
        titulo: "Ouros",
        imagem: "d01.jpg",
        interpretacao: `Um bom começo para as coisas materiais.
Estabilidade financeira e física. Uma perspectiva prática. Uma
soma significativa de dinheiro. Abordagem utilitarista. Ganância.
Algo básico e sem sofisticação.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "2",
        titulo: "Ouros",
        imagem: "d02.jpg",
        interpretacao: `Dualidade. Duas opções ou dois elementos. Colaborar
enquanto mantém distância. Numa estrada sinuosa, avançar de
maneiras complexas. Reconhecimento e familiaridade.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "3",
        titulo: "Ouros",
        imagem: "d03.jpg",
        interpretacao: `Resultados. Uma parceria ou aliança produz frutos.
Primeiros resultados de um projeto. Boas perspectivas.`,
        mensagem: "",
        invertida: `Decepção. Uma parceria ou projeto que não dá os frutos
esperados.`
    },
    {
        numero: "4",
        titulo: "Ouros",
        imagem: "d04.jpg",
        interpretacao: `Estabilidade. Ativos materiais sólidos. Algo testado
pelo tempo. Confiabilidade. Tradição, honra e reputação.
Instituições sociais bem estabelecidas.`,
        mensagem: "",
        invertida: `Conservadorismo. Seguir padrões antigos e
ultrapassados.`
    },
    {
        numero: "5",
        titulo: "Ouros",
        imagem: "d05.jpg",
        interpretacao: `Ruptura. Algo novo aparece e desestabiliza estruturas
existentes. Um novo elemento chama atenção, mas também
desperta resistência.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "6",
        titulo: "Ouros",
        imagem: "d06.jpg",
        interpretacao: `Expansão. Abundância de recursos e possíveis
maneiras de avançar. Uma perspectiva positiva, sucesso. Um
bom equilíbrio entre estabilidade e movimento.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "7",
        titulo: "Ouros",
        imagem: "d07.jpg",
        interpretacao: `Aceitação. Algo novo é bem recebido. Ajuda e
proteção. Integrar-se num sistema sem perder a individualidade.`,
        mensagem: "",
        invertida: `Falta de independência, necessidade de contar com a
ajuda e a aceitação dos outros.`
    },
    {
        numero: "8",
        titulo: "Ouros",
        imagem: "d08.jpg",
        interpretacao: `Uniformidade. Uma estrutura mecânica.
Considerações práticas provam ser eficientes, mas carecem de
um toque humano. Trabalho de rotina. Um avanço lento e
paciente.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "9",
        titulo: "Ouros",
        imagem: "d09.jpg",
        interpretacao: `Motivação. Encontrar um nicho para si mesmo num
sistema já existente. Pensamento resiliente e independente dando
frutos a longo prazo.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "10",
        titulo: "Ouros",
        imagem: "d10.jpg",
        interpretacao: `Abundância. Atividade intensiva em assuntos
práticos. Sucesso material e realizações. Alguns podem estar
recebendo mais que outros.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "Valete",
        titulo: "Ouros",
        imagem: "d11.jpg",
        interpretacao: `Um esforço prático. Potenciais inexplorados
estão ao seu alcance. Sucesso tangível no início. Uma sólida
base material para maiores avanços.`,
        mensagem: "",
        invertida: `Hesitação, falta de um propósito claro. Pensar em
termos de realizações passadas faz com que se perca
oportunidades no presente.`
    },
    {
        numero: "Cavaleiro",
        titulo: "Ouros",
        imagem: "d12.jpg",
        interpretacao: `Avanço numa direção prática. Uma
expressão produtiva de criatividade. Um objetivo claro à vista.`,
        mensagem: "",
        invertida: `Busca constante por dinheiro sem alcançar estabilidade
material. Paixões e desejos podem interferir em planos práticos.`
    },
    {
        numero: "Rainha",
        titulo: "Ouros",
        imagem: "d13.jpg",
        interpretacao: `Ativos tangíveis, estabilidade material e
pessoal, uma visão sóbria e realista. Observando as coisas de
uma perspectiva prática e pragmática.`,
        mensagem: "",
        invertida: `Conservadorismo, resistência à mudança, visar apenas a
preservação dos ativos existentes. Observar as coisas apenas da
perspectiva material.`
    },
    {
        numero: "Rei",
        titulo: "Ouros",
        imagem: "d14.jpg",
        interpretacao: `Confiança e segurança, uma atitude cautelosa, mas
uma visão otimista. Procurando novas conquistas enquanto
mantém ativos existentes seguros.`,
        mensagem: "",
        invertida: `Insatisfação com o que já se tem. Pouco-caso com as
coisas boas da situação atual. Uma perspectiva limitada.`
    },
    {
        numero: "Às",
        titulo: "Espadas",
        imagem: "e01.jpg",
        interpretacao: `Uma iniciativa planejada. Pensamento racional e
lógico, argúcia mental. Uma decisão conclusiva. Prontidão para
lutar. Ambição, competitividade. Uma vitória com realizações
estáveis.`,
        mensagem: "",
        invertida: `Pensamentos negativos e improdutivos. Equívocos,
ilusões. Autossabotagem. Lesão.`
    },
    {
        numero: "2",
        titulo: "Espadas",
        imagem: "e02.jpg",
        interpretacao: `Limites. Limites que protegem e definem algo que
está em desenvolvimento. Fazer pleno uso da situação presente.
Preparativos para futuros avanços. Uma visão clara abrangendo a
situação como um todo.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "3",
        titulo: "Espadas",
        imagem: "e03.jpg",
        interpretacao: `Vitória. Superando uma oposição fraca. Superar um
dilema e seguir adiante numa direção clara. Uma terceira pessoa
intervém e vence dois oponentes enfraquecidos.`,
        mensagem: "",
        invertida: `Uma falha. Derrota de um oponente mais fraco. Tentativa
frustrada de tomar uma decisão definitiva.`
    },
    {
        numero: "4",
        titulo: "Espadas",
        imagem: "e04.jpg",
        interpretacao: `Restrição. Um espaço limitado para o
desenvolvimento e para manobra. Tentar pressionar para vencer
restrições. Potenciais de crescimento depois que limitações atuais
diminuírem.`,
        mensagem: "",
        invertida: `Confinamento e bloqueio. Falta de motivação ou energia
para sair de uma situação limitada.`
    },
    {
        numero: "5",
        titulo: "Espadas",
        imagem: "e05.jpg",
        interpretacao: `Ruptura. Um impulso para a frente que supera os
limites existentes. Manter o ânimo numa situação difícil. Fazer as
coisas do próprio jeito.`,
        mensagem: "",
        invertida: `Uma iniciativa inútil para mudar a situação. Teimosia que
não leva a lugar nenhum. Fatores opressivos não podem ser
eliminados no momento.`
    },
    {
        numero: "6",
        titulo: "Espadas",
        imagem: "e06.jpg",
        interpretacao: `Adaptação. Aceitar limitações e adaptar-se a elas.
Respeitar a ordem presente. Comprometer-se a fim de tirar o
melhor proveito da situação.`,
        mensagem: "",
        invertida: `Resignação, renúncia, desistir da ambição para mudar
as coisas para melhor. Falta de espírito de luta.`
    },
    {
        numero: "7",
        titulo: "Espadas",
        imagem: "e07.jpg",
        interpretacao: `Sagacidade. Atitude focada e determinação.
Concentrar-se num objetivo claro e fazer o que for preciso para
alcançá-lo. Vencer uma luta com probabilidades equilibradas.`,
        mensagem: "",
        invertida: `Uma visão estreita e egocêntrica. Investir os esforços e
recursos de alguém numa causa perdida.`
    },
    {
        numero: "8",
        titulo: "Espadas",
        imagem: "e08.jpg",
        interpretacao: `Defesas. Erguer escudos e bloqueios. Mecanismos
de defesa psicológica. Necessidade de estar no controle total. Um
tesouro bem guardado. Entrar nos domínios de outra pessoa com
a permissão dela.`,
        mensagem: "",
        invertida: `Similar.`
    },
    {
        numero: "9",
        titulo: "Espadas",
        imagem: "e09.jpg",
        interpretacao: `Coragem. Vencer uma luta contra uma força
superior. Intenções puras. Fazer bom uso de meios imperfeitos.`,
        mensagem: "",
        invertida: `Perder contra um oponente mais forte. Desleixo.
Preparativos imperfeitos para vencer um desafio.`
    },
    {
        numero: "10",
        titulo: "Espadas",
        imagem: "e10.jpg",
        interpretacao: `Exaustão. Uma situação complexa com muitos
interesses conflitantes. Uma longa batalha sem um resultado
claro. Necessidade de encontrar um aliado que queira atacar o
problema de um ponto de vista diferente.`,
        mensagem: "",
        invertida: `Imobilidade. Impossibilidade de mudança no momento.
Sentimento de ser atacado por todos os lados. Uma derrota
dolorosa e humilhante.`
    },
    {
        numero: "Valete",
        titulo: "Espadas",
        imagem: "e11.jpg",
        interpretacao: `Preparação para um desafio futuro. Buscar
conciliar razão e desejos intensos. Hesitação em usar o próprio
poder.`,
        mensagem: "",
        invertida: `Confusão, pensamentos negativos e inibidores,
autossabotagem. O mau uso das próprias ferramentas pode
causar danos.`
    },
    {
        numero: "Cavaleiro",
        titulo: "Espadas",
        imagem: "e12.jpg",
        interpretacao: `Energia e recursos para avançar. Ainda
procurando a direção certa. Pairar acima das restrições práticas.
Determinação e perseverança.`,
        mensagem: "",
        invertida: `Tentar impor as próprias opiniões equivocadas. Insistir
numa direção errada. Perder o contato com a realidade.`
    },
    {
        numero: "Rainha",
        titulo: "Espadas",
        imagem: "e13.jpg",
        interpretacao: `Uma posição segura e protegida. Defender o
próprio território. Preparação para algo que ainda não deve ser
exposto.`,
        mensagem: "",
        invertida: `Atitude defensiva e rigidez. Suspeita e ideias fixas
bloqueando o avanço e impedindo novas conexões.`
    },
    {
        numero: "Rei",
        titulo: "Espadas",
        imagem: "e14.jpg",
        interpretacao: `Determinação em romper com o passado. Força
de vontade. Sentir-se preparado para lidar com a incerteza.
Sabedoria e maturidade intelectual.`,
        mensagem: "",
        invertida: `Um coração dividido. A necessidade de romper com algo
ao qual ainda se está ligado. Calcular demais numa tentativa vã
de superar a incerteza.`
    }
]