// DATA SHEET: História de Portugal para Crianças - Portal Virtual
// Containing 5 eras, 5 heroes, 6 map hotpots, 15 poetry puzzles, and 7 maritime challenges.

window.HISTORICAL_ERAS = [
    {
        id: "fundacao",
        title: "Fundação de Portugal",
        century: "Século XII",
        years: "1128 - 1249",
        badge: "🏰 Berço da Nação",
        description: "É aqui que tudo começa! O jovem D. Afonso Henriques zanga-se com a mãe na Batalha de São Mamede e decide criar um país novinho em folha. Com muita coragem e batalhas heroicas, tornou-se o nosso primeiro Rei!",
        funFact: "Sabias que D. Afonso Henriques era conhecido como 'O Conquistador' e dizia-se que era tão alto e forte que a sua espada pesava mais do que qualquer outro cavaleiro conseguia levantar?",
        color: "bg-amber-50 border-amber-200 text-amber-900",
        events: [
            { year: "1128", title: "Batalha de São Mamede", desc: "D. Afonso Henriques lidera os barões contra as tropas da própria mãe, D. Teresa, assumindo o Condado.", icon: "⚔️" },
            { year: "1139", title: "Batalha de Ourique", desc: "Vence uma histórica contenda contra cinco reis mouros poderosos. Os soldados aclamam-no como Rei!", icon: "🛡️" },
            { year: "1143", title: "Tratado de Zamora", desc: "O reino vizinho aceita formalmente que Portugal é um reino independente e livre.", icon: "📜" },
            { year: "1147", title: "Conquista de Lisboa", desc: "Com ajuda dos fiéis cavaleiros cruzados, D. Afonso Henriques conquista o Castelo de São Jorge.", icon: "🏰" },
            { year: "1249", title: "Conquista do Algarve", desc: "D. Afonso III conquista Faro e Silves, terminando a reconquista e desenhando as fronteiras de hoje.", icon: "🌅" }
        ],
        figures: [
            { name: "D. Afonso Henriques", role: "O Primeiro Rei", bio: "Nasceu em Guimarães e lutou a vida toda pela independência nacional com o escudo das quinas azuis.", icon: "👑" },
            { name: "D. Dinis", role: "O Rei Poeta e Lavrador", bio: "Fundou a Universidade de Coimbra, plantou o Pinhal de Leiria e inventou lindas cantigas de amor.", icon: "✍️" },
            { name: "Rainha Santa Isabel", role: "A Santa do Milagre", bio: "Famosa pela sua tremenda bondade. Diz a lenda que converteu moedas de ouro em formosas rosas.", icon: "🌹" }
        ]
    },
    {
        id: "descobrimentos",
        title: "A Era dos Descobrimentos",
        century: "Séculos XV - XVI",
        years: "1415 - 1580",
        badge: "⛵ Navegadores dos Mares",
        description: "Os portugueses construíram caravelas de madeira e partiram à aventura por mares nunca antes navegados! Enfrentaram tempestades e monstros para conhecer e trazer especiarias lendárias.",
        funFact: "Os marinheiros na caravela alimentavam-se de biscoitos duros como pedra, tendo de molhá-los na sopa líquida para os conseguir mastigar!",
        color: "bg-sky-50 border-sky-200 text-sky-900",
        events: [
            { year: "1415", title: "Conquista de Ceuta", desc: "Portugal toma a praça no norte de África, marcando o início oficial da expansão marítima.", icon: "⚔️" },
            { year: "1419", title: "Descoberta das Ilhas", desc: "Zarco chega à Ilha da Madeira, e logo depois Diogo de Silves encontra o arquipélago dos Açores.", icon: "🏝️" },
            { year: "1488", title: "Dobrar o Cabo Marítimo", desc: "Bartolomeu Dias dobra o tempestuoso Cabo das Tormentas, rebatizado de Cabo da Boa Esperança.", icon: "🌊" },
            { year: "1498", title: "Vasco da Gama na Índia", desc: "O destemido almirante guia navios até Calecute por mar, abrindo a rota comercial do Oriente.", icon: "🍛" },
            { year: "1500", title: "Brasil à Vista!", desc: "Pedro Álvares Cabral afasta-se no Atlântico e descobre a paradisíaca Terra de Santa Cruz.", icon: "🌴" }
        ],
        figures: [
            { name: "Infante D. Henrique", role: "O Organizador", bio: "Cérebro que planeava e reunia os cientistas e mapas na Fortaleza sagrada de Sagres.", icon: "🗺️" },
            { name: "Vasco da Gama", role: "Almirante da Índia", bio: "Superou tempestades terríveis para abrir o maior caminho comercial de especiarias do mundo.", icon: "⚓" },
            { name: "Luís de Camões", role: "O Maior Poeta", bio: "Escreveu 'Os Lusíadas'. Perdeu um olho em batalha e salvou os escritos nadando no naufrágio.", icon: "👁️" }
        ]
    },
    {
        id: "crise_restauracao",
        title: "Reis Filipes & Restauração",
        century: "Século XVII",
        years: "1578 - 1755",
        badge: "⚔️ Renascer do Reino",
        description: "O jovem rei D. Sebastião desaparece no deserto de África e Portugal perde a coroa para Espanha. Mas 60 anos depois, os portugueses unem-se e reclamam a liberdade!",
        funFact: "Ainda hoje os portugueses dizem que estão 'à espera de D. Sebastião numa manhã de nevoeiro' quando aguardam um milagre difícil!",
        color: "bg-rose-50 border-rose-200 text-rose-900",
        events: [
            { year: "1578", title: "Batalha de Alcácer Quibir", desc: "D. Sebastião combate em Marrocos e desaparece na batalha, deixando o trono sem herdeiros.", icon: "🐎" },
            { year: "1580", title: "União Ibérica", desc: "O rei Filipe II de Espanha reclama o trono. Durante 60 anos, há apenas um monarca ibérico.", icon: "🏰" },
            { year: "1640", title: "Restauração da Independência", desc: "No dia 1 de Dezembro, nobres portugueses aclamam o Duque de Bragança como legítimo rei D. João IV.", icon: "🎺" },
            { year: "1755", title: "O Terramoto de Lisboa", desc: "Um gigantesco abalo destrói Lisboa em pleno feriado, seguido de um maremoto e incêndios.", icon: "🌋" },
            { year: "1756", title: "A Reconstrução Pombalina", desc: "Marquês de Pombal comanda a reconstrução da Baixa de Lisboa com as sismo-resistentes gaiolas de madeira.", icon: "📐" }
        ],
        figures: [
            { name: "D. Sebastião", role: "O Desejado", bio: "Rei menino que sumiu nas dunas quentes e alimentou a lendária crença do seu regresso patriótico.", icon: "🛡️" },
            { name: "D. João IV", role: "O Restaurador", bio: "Duque de Bragança que assumiu a pesada coroa devolvendo a liberdade integral à bandeira lusa.", icon: "👑" },
            { name: "Marquês de Pombal", role: "O Reformador", bio: "Prático primeiro-ministro que ergueu das cinzas a Lisboa Pombalina do Iluminismo.", icon: "🏛️" }
        ]
    },
    {
        id: "revolucao_republica",
        title: "Comboio & República",
        century: "Século XIX - XX",
        years: "1856 - 1910",
        badge: "🚂 O Progresso Social",
        description: "Portugal modernizou-se! Chegaram os primeiros comboios a vapor, instalaram-se as linhas de telégrafo e construíram-se pontes de ferro. E em 1910 nasce a República!",
        funFact: "A primeira viagem de comboio em Portugal, em 1856, deixou as pessoas apavoradas com a 'terrível' velocidade de 30 km/h!",
        color: "bg-emerald-50 border-emerald-200 text-emerald-900",
        events: [
            { year: "1807", title: "Invasões Francesas", desc: "Tropas de Napoleão entram no país. A Corte foge para o Brasil para salvaguardar a nação.", icon: "⚔️" },
            { year: "1856", title: "Inauguração do Comboio", desc: "D. Pedro V abre a primeira linha ferroviária de Lisboa ao Carregado, trazendo progresso.", icon: "🚂" },
            { year: "1890", title: "O Ultimato Britânico", desc: "Inglaterra exige que Portugal recue os seus planos do Mapa Cor-de-Rosa nas colónias.", icon: "🗺️" },
            { year: "1910", title: "Implantação da República", desc: "O povo uniu-se no dia 5 de Outubro para colocar fim à Monarquia e declarar a nova República.", icon: "🚩" }
        ],
        figures: [
            { name: "Rainha D. Maria II", role: "A Educadora", bio: "Rainha que amava o ensino e impulsionou as primeiras escolas básicas nacionais para o povo.", icon: "👑" },
            { name: "Fontes Pereira de Melo", role: "O Engenheiro", bio: "Grande obreiro que cobriu Portugal de estradas modernas, telégrafos e linhas férreas.", icon: "🛠️" },
            { name: "Fernando Pessoa", role: "O Poeta dos Mil Nomes", bio: "Génio da escrita que escrevia inventando poetas com alma própria, os heterónimos.", icon: "🎩" }
        ]
    },
    {
        id: "democracia",
        title: "Revolução dos Cravos",
        century: "Século XX - XXI",
        years: "1974 - Hoje",
        badge: "🕊️ Liberdade de Pensar",
        description: "Após anos duros de uma ditadura com censura, os canos das armas dos jovens soldados encheram-se de cravos vermelhos! O 25 de Abril trouxe de volta o riso e a canção livre.",
        funFact: "A senha secreta transmitida na rádio nacional para arrancar a revolução foi a canção censurada 'Grândola, Vila Morena'!",
        color: "bg-purple-50 border-purple-200 text-purple-900",
        events: [
            { year: "1933", title: "O Estado Novo", desc: "António de Oliveira Salazar inaugura um rígido regime sem eleições democráticas ou livre expressão.", icon: "🤫" },
            { year: "1974", title: "25 de Abril", desc: "Militares revoltam-se pacificamente. Celeste oferece cravos e o povo celebra o fim da censura.", icon: "🌺" },
            { year: "1986", title: "Adesão à União Europeia", desc: "Portugal integra a família democrática europeia, recebendo fundos para autoestradas e progresso.", icon: "🇪🇺" },
            { year: "1998", title: "Expo 98 e Nobel", desc: "Lisboa acolhe a exposição mundial dos oceanos e José Saramago conquista o Nobel da Literatura.", icon: "🐋" }
        ],
        figures: [
            { name: "Amália Rodrigues", role: "Diva do Fado", bio: "A maravilhosa voz profunda que passeou e celebrou a saudade lusa em todos os palcos mundiais.", icon: "🎤" },
            { name: "Salgueiro Maia", role: "Capitão do Povo", bio: "Destemido capitão da revolução pacífica que tomou a capital de cravo na lapela e sem sangue.", icon: "⭐" },
            { name: "José Saramago", role: "Nobel da Escrita", bio: "Primeiro autor de língua portuguesa a erguer o selo de nobel com sagazes e fantásticos livros.", icon: "👓" }
        ]
    }
];

window.HISTORICAL_CHARACTERS = [
    { key: "afonso_henriques", name: "D. Afonso Henriques", title: "O Conquistador e Primeiro Rei", eraId: "fundacao", avatar: "👑", color: "from-amber-400 to-yellow-600", accentBg: "bg-amber-100", greeting: "Saudações, jovem fidalgo! Eu sou D. Afonso Henriques, o primeiro Rei de Portugal! Estás pronto para defender as muralhas do nosso reino?", bio: "Nasci em Guimarães e lutei intrépido para mudar o Condado a país livre. Com o meu escudo de cinco quinas azuis e a minha pesada espada, firmei a pátria!", funTrivia: "Diz-se que a minha força vinha das montanhas de Guimarães e que a minha espada pesava mais do que qualquer outro cavaleiro aguentava!" },
    { key: "camoes", name: "Luís de Camões", title: "O Poeta dos Navegadores", eraId: "descobrimentos", avatar: "👁️", color: "from-sky-400 to-blue-600", accentBg: "bg-sky-100", greeting: "Olá, jovem bardo das rimas alegres! Abre a imaginação a ventos e monstros! Sou Luís de Camões, o teu servo das letras!", bio: "Naveguei pelo mundo todo! Perdi o olho direito lutando em África e sobrevivi a um naufrágio tenebroso onde nadei com um só braço erguendo 'Os Lusíadas'!", funTrivia: "Consigo rimar qualquer palavra e adoro rir na cara de monstros com o sopro de uma boa caneta!" },
    { key: "vasco_da_gama", name: "Vasco da Gama", title: "O Almirante do Mar Índico", eraId: "descobrimentos", avatar: "⚓", color: "from-cyan-400 to-indigo-600", accentBg: "bg-cyan-100", greeting: "Ahoy, pequeno marinheiro! Eu sou Vasco da Gama! Sentes o aroma a pimenta no ar? Iça as velas para desbravar perigos nunca dantes vistos!", bio: "Fui o temerário capitão indicado pelo Rei para guiar a frota de caravelas até à fabulosa Índia. Dobrámos tormentas para vencer o caminho!", funTrivia: "O meu mapa era desenhado à mão sobre pele de ovelha e o meu melhor guia marítimo eram as estrelas de noite!" },
    { key: "maria_ii", name: "Rainha D. Maria II", title: "A Educadora e Rainha", eraId: "revolucao_republica", avatar: "👵", color: "from-emerald-400 to-teal-600", accentBg: "bg-emerald-100", greeting: "Sejas bem-vindo, jovem cientista do saber! Sou a Rainha D. Maria II. Despacha a preguiça e partilha comigo o gosto pela leitura!", bio: "Subi ao trono num tempo de discórdia, mas dediquei-me com amor a modernizar o reino. Abri as primeiras escolas primárias para ensinar as crianças!", funTrivia: "Fui coroada com tenros 15 anos e o meu legado inaugurou o primeiro comboio a vapor de ferro!" },
    { key: "fernando_pessoa", name: "Fernando Pessoa", title: "O Poeta das Mil Almas", eraId: "revolucao_republica", avatar: "🎩", color: "from-purple-400 to-violet-600", accentBg: "bg-purple-100", greeting: "Boa tarde, pequeno sonhador! Sou o Fernando Pessoa, ou Álvaro de Campos, ou Ricardo Reis... Quem desejas que eu seja na caneta hoje?", bio: "Criei outros escritores falsos chamados heterónimos. Cada um de nós tinha estilo de pensar, caligrafias e biografias totalmente originais!", funTrivia: "Adoro tomar café na Baixa de Lisboa enquanto invento mundos profundos e os copio para pequenos papéis!" }
];

window.MAP_HOTSPOTS = [
    { id: "guimaraes", name: "Guimarães", x: 43, y: 18, title: "Guimarães, Berço de Portugal", description: "O belíssimo ponto de nascimento da nação! No Castelo medieval de Guimarães encontras o orgulhoso letreiro esculpido 'Aqui Nasceu Portugal'.", fact: "Em 1128, a Batalha de São Mamede deu a D. Afonso Henriques as chaves do Condado.", color: "bg-amber-500" },
    { id: "porto", name: "Porto", x: 40, y: 24, title: "O Porto da Invicta", description: "Bravíssima cidade costeira que deu o próprio nome a Portugal (Portus Cale) e resistiu a cercos inimigos com glória.", fact: "Aqui nasceram os barcos rabelos que carregavam pipas de vinho sobre o Douro.", color: "bg-teal-500" },
    { id: "coimbra", name: "Coimbra", x: 45, y: 45, title: "Coimbra dos Estudantes", description: "Segunda capital histórica. O rei D. Dinis inaugurou aqui a primeira Universidade em 1290, famosa pela magnífica biblioteca guardada.", fact: "Pequenos morcegos amigáveis guardam os livros comendo todos os insetos nocivos à noite!", color: "bg-purple-500" },
    { id: "lisboa", name: "Lisboa", x: 32, y: 68, title: "Lisboa dos Descobrimentos", description: "Conquistada por D. Afonso, tornou-se porto colossal de partida marítima para todo o globo e capital do império.", fact: "Inaugurando o comboio a vapor, em Belém podes visitar a icónica Torre e saborear pastéis tradicionais de nata.", color: "bg-sky-500" },
    { id: "sagres", name: "Sagres de Sagrada Escola", x: 27, y: 92, title: "Sagres do Fim do Mundo", description: "Punto geográfico escarpado onde se juntavam cartógrafos luso-italianos e se construíam frotas fantásticas.", fact: "Julgavam antigamente que após este cabo as águas ferviam e o navio caía no precipício!", color: "bg-rose-500" },
    { id: "ourique", name: "Ourique", x: 42, y: 80, title: "Ourique dos Cinco Reis", description: "Diz a lenda mística que aqui D. Afonso Henriques conquistou estrondosa vitória perante cinco grandes reis rivais.", fact: "Os guerreiros elevaram-no nos escudos aclamando-o formalmente como vosso Soberano Real!", color: "bg-emerald-500" }
];

window.QUIZ_QUESTIONS = [
    { id: "q_fund_1", eraId: "fundacao", question: "Quem foi o primeiríssimo Rei de Portugal?", options: ["D. Dinis", "D. Afonso Henriques", "D. Sebastião", "Filipe I"], correctAnswer: 1, explanation: "D. Afonso Henriques conquistou a soberania lusa com imensa valentia e tornou-se o primeiro rei em 1139!" },
    { id: "q_fund_2", eraId: "fundacao", question: "Onde se proclama que 'Nasceu Portugal'?", options: ["Lisboa", "Faro", "Guimarães", "Coimbra"], correctAnswer: 2, explanation: "Guimarães é apelidada de Cidade Berço, o assento de nascença da dinastia e da Batalha pioneira!" },
    { id: "q_fund_3", eraId: "fundacao", question: "O que a Rainha Santa Isabel converteu em rosas no seu milagre?", options: ["Espadas", "Uvas doces", "Moedas de ouro e pão", "Peixe frito"], correctAnswer: 2, explanation: "Ao ser indagada pelo rei o que carregava, ela soltou o avental: apareceram formosas rosas vermelhas silvestres!" },
    
    { id: "q_desc_1", eraId: "descobrimentos", question: "Que barcos de velas triangulares inventaram para bolinar contra ventos?", options: ["Submarinos", "Canoas", "Iates", "Caravelas"], correctAnswer: 3, explanation: "As caravelas contavam com velame especial triangular que lhes facultava marear mesmo contra as rajadas!" },
    { id: "q_desc_2", eraId: "descobrimentos", question: "Quem rumou até à Índia pelo mar em 1498 trazendo pimenta e canela?", options: ["D. Afonso", "Vasco da Gama", "Cabral", "Camões"], correctAnswer: 1, explanation: "Vasco da Gama pilotou a destemida frota em dois conturbados anos de navegação contornando as praias de África." },
    { id: "q_desc_3", eraId: "descobrimentos", question: "Qual o livro do poeta Camões que louva as epopeias das Descobertas?", options: ["A Selva", "Os Lusíadas", "O Principezinho", "Histórias Curiosas"], correctAnswer: 1, explanation: "A obra 'Os Lusíadas' é o marco épico português dedicado às glórias dos corajosos heróis marinheiros." },
    
    { id: "q_rest_1", eraId: "crise_restauracao", question: "Qual o jovem rei desaparecido nas dunas de Marrocos sob nevoeiro?", options: ["D. Sebastião", "D. João IV", "D. Dinis", "D. Pedro"], correctAnswer: 0, explanation: "O rei-menino sumiu na Batalha de Alcácer Quibir em 1578, alimentando o mito patriótico de retornar vitorioso." },
    { id: "q_rest_2", eraId: "crise_restauracao", question: "Que feriado assinala a libertação da tutela espanhola em 1640?", options: ["Dia do Chouriço", "Dia da Restauração nacional", "Dia do Estudante", "Dia Marítimo"], correctAnswer: 1, explanation: "No dia 1 de Dezembro celebramos a Restauração, culminada com a devida coroação de D. João IV." },
    { id: "q_rest_3", eraId: "crise_restauracao", question: "Como se chama a gaiola flexível inventada para resistir a terramotos?", options: ["Gaiola Pombalina", "Janela Sarda", "Palácio de Cristal", "Castelo de Madeira"], correctAnswer: 0, explanation: "A Gaiola Pombalina era uma rede interior em cruz flexível que bamboleava perante o sismo sem tombar a habitação!" },
    
    { id: "q_rep_1", eraId: "revolucao_republica", question: "Em que célebre data assinalamos o advento da República em 1910?", options: ["25 de Abril", "10 de Junho", "5 de Outubro", "1 de Janeiro"], correctAnswer: 2, explanation: "No dia 5 de Outubro foi deposta a monarquia lusa iniciando-se formalmente as dinastias de governos eleitos!" },
    { id: "q_rep_2", eraId: "revolucao_republica", question: "Que lindas cores enverga hoje a bandeira de Portugal repúblico?", options: ["Azul e Branco", "Verde e Vermelho", "Amarelo e Roxo", "Rosa e Verde"], correctAnswer: 1, explanation: "Bandeira com o selo central das quinas. O verde espelha fé, enquanto o vermelho evoca a enorme bravura popular." },
    { id: "q_rep_3", eraId: "revolucao_republica", question: "Que nome atribuiu o poeta Fernando Pessoa aos seus nomes autorais?", options: ["Pseudofantasias", "Apelidos", "Heterónimos", "Sóis literários"], correctAnswer: 2, explanation: "Os heterónimos! Escritas ricas onde atribuía caligrafias, filosofias e identidades únicas a cada um dos poetas imaginados." },
    
    { id: "q_dem_1", eraId: "democracia", question: "Qual a graciosa flor símbolo da revolução sem pólvora de 1974?", options: ["O Cravo Vermelho", "O Girassol", "A Tulipa", "A Orquídea"], correctAnswer: 0, explanation: "Celeste e o rancho de cravos do 25 de Abril, preenchendo os canos das armas num magnífico canto de paz e liberdade!" },
    { id: "q_dem_2", eraId: "democracia", question: "Qual o canto do fado consagrado que a diva Amália cantou ao mundo?", options: ["Fado de Coimbra", "O Fado Tradicional", "O Vira do Norte", "Samba Riba"], correctAnswer: 1, explanation: "O Fado Património Imaterial de Lisboa, expressivo e saudoso acompanhado de guitarras lusas formosas." },
    { id: "q_dem_3", eraId: "democracia", question: "Quem foi o insigne autor português galardoado com o Prémio Nobel em 1998?", options: ["Eça", "Saramago", "Camões", "Antero"], correctAnswer: 1, explanation: "O brilhante mestre José Saramago conquistou a glória literária dourada em Estocolmo com histórias incríveis." }
];

window.POEMS = [
    {
        author: "Luís de Camões",
        context: "O amor é mistério e doce chama escreveu o mestre de um olho só:",
        verseLines: [
            "Amor é fogo que arde sem se ver,",
            "É ferida que dói e não se __________."
        ],
        correctAnswer: "sente",
        options: ["cura", "sente", "vê", "cala"],
        trivia: "Diz o povo que este é o soneto de amor mais declamado em toda a língua portuguesa!"
    },
    {
        author: "Fernando Pessoa",
        context: "Ensinando o bardo das mil almas a amar novos horizontes com paixão:",
        verseLines: [
            "Tudo vale a pena",
            "Se a alma não for __________."
        ],
        correctAnswer: "pequena",
        options: ["escura", "cansada", "pequena", "zangada"],
        trivia: "Do livro fantástico 'Mensagem', o único livro que Pessoa publicou em português durante a sua vida!"
    },
    {
        author: "Rei D. Dinis",
        context: "O nosso querido Rei Poeta medieval canta às flores a saudade do seu amigo:",
        verseLines: [
            "Ai flores, ai flores do verde __________,",
            "se sabedes novas do meu amigo?"
        ],
        correctAnswer: "pino",
        options: ["ramo", "pino", "prado", "rio"],
        trivia: "D. Dinis plantou o Pinhal de Leiria e foi o mestre maior das cantigas de amigo medievais!"
    },
    {
        author: "Luís de Camões",
        context: "Sobre as eternas voltas e mudanças que o destino dá na terra e mares:",
        verseLines: [
            "Mudam-se os tempos, mudam-se as __________,",
            "Todo o mundo é composto de mudança."
        ],
        correctAnswer: "vontades",
        options: ["idades", "vontades", "saudades", "verdades"],
        trivia: "Um soneto precioso que nos ensina a adaptarmo-nos a novas aventuras com coragem!"
    },
    {
        author: "Álvaro de Campos (Pessoa)",
        context: "O heterónimo engenheiro que adorava ver navios ao fundo do cais de Lisboa:",
        verseLines: [
            "O vento traz o cheiro do __________,",
            "E faz-me pensar em tudo o que sonhei."
        ],
        correctAnswer: "mar",
        options: ["mar", "lar", "fogo", "ar"],
        trivia: "Álvaro de Campos escrevia versos gigantes sobre barcos a vapor, máquinas e engrenagens modernas!"
    },
    {
        author: "Florbela Espanca",
        context: "A celebre poetisa do Alentejo que amava a vida e o afeto infinitamente:",
        verseLines: [
            "Eu quero amar, amar perdidamente!",
            "Amar só por amar: Aqui... e __________."
        ],
        correctAnswer: "além",
        options: ["bem", "além", "também", "ninguém"],
        trivia: "Florbela nasceu em Vila Viçosa e escrevia sonetos tão bonitos que pareciam canções românticas!"
    },
    {
        author: "Luís de Camões",
        context: "O grandioso e épico arranque de 'Os Lusíadas' que exalta os heróis:",
        verseLines: [
            "As armas e os barões __________,",
            "Que da ocidental praia Lusitana..."
        ],
        correctAnswer: "assinalados",
        options: ["afamados", "assinalados", "dourados", "armados"],
        trivia: "Esta célebre frase marca o início oficial da maior epopeia marítima escrita em língua portuguesa!"
    },
    {
        author: "Sophia de Mello Breyner",
        context: "A maravilhosa escritora que amava o azul puro do mar português:",
        verseLines: [
            "No meio do mar há uma ilha",
            "Onde o sol brilha e a água é __________."
        ],
        correctAnswer: "azul",
        options: ["quente", "azul", "funda", "doce"],
        trivia: "Sophia escreveu clássicos infantis divinais como 'A Menina do Mar' e 'O Cavaleiro da Dinamarca'!"
    },
    {
        author: "Rei D. Dinis",
        context: "O Rei Trovador compõe uma melodia de amor dedicado à sua bela dama:",
        verseLines: [
            "Quer'eu em maneira de proençal",
            "fazer cantarolando um cantar d' __________."
        ],
        correctAnswer: "amor",
        options: ["amor", "flor", "dor", "senhor"],
        trivia: "As cantigas medievais eram cantadas ao som de harpas, alaúdes e flautas nos castelos medievais!"
    },
    {
        author: "Ricardo Reis (Pessoa)",
        context: "O heterónimo doutor que amava contemplar a calma dos rios e jardins:",
        verseLines: [
            "Para ser grande, sê inteiro: nada",
            "Teu exagera ou __________."
        ],
        correctAnswer: "exclui",
        options: ["constrói", "exclui", "destrói", "reduz"],
        trivia: "Ricardo Reis era um médico fictício da antiguidade que Pessoa inventou para cantar a filosofia da moderação."
    },
    {
        author: "Alberto Caeiro (Pessoa)",
        context: "O sábio heterónimo que guardava rebanhos de pensamentos puros e naturais:",
        verseLines: [
            "O meu olhar é nítido como um __________,",
            "Tenho o hábito de andar pelas estradas..."
        ],
        correctAnswer: "girassol",
        options: ["girassol", "rio", "luar", "farol"],
        trivia: "Alberto Caeiro dizia que a natureza não precisa de estudos, basta abrires os olhos para a sentir com alegria!"
    },
    {
        author: "Gil Vicente",
        context: "O pai do teatro português e brincadeiras satíricas medievais da corte lusa:",
        verseLines: [
            "A barca do Inferno já tem __________ erguidas,",
            "Pronta para levar as almas perdidas."
        ],
        correctAnswer: "velas",
        options: ["velas", "cordas", "remos", "linhas"],
        trivia: "As suas peças teatrais cómicas (autos) eram encenadas mesmo dentro dos palácios!"
    },
    {
        author: "Florbela Espanca",
        context: "A sensibilidade extrema de ser um bardo e voar acima da planície alentejana:",
        verseLines: [
            "Ser poeta é ser mais alto, é ter um __________ fado,",
            "É ser grande e sublime no sentir..."
        ],
        correctAnswer: "outro",
        options: ["outro", "triste", "doce", "belo"],
        trivia: "Florbela punha tanta alma na caligrafia que as suas palavras comovem leitores até hoje!"
    },
    {
        author: "Bocage",
        context: "O poeta humorista de Setúbal que tocava flauta com pastores rústicos:",
        verseLines: [
            "Olha, Marília, as flautas dos pastores,",
            "Que bem que soam pelo verde __________!"
        ],
        correctAnswer: "prado",
        options: ["prado", "monte", "caminho", "redil"],
        trivia: "Bocage era famosíssimo pelas suas respostas rápidas e anedotas engraçadas na Baixa de Lisboa!"
    },
    {
        author: "Antero de Quental",
        context: "O líder revolucionário dos estudantes de Coimbra que amava sonhar com o infinito:",
        verseLines: [
            "Nas asas do Sonho, a alma __________ ao infinito,",
            "Onde o silêncio é uma prece de amor."
        ],
        correctAnswer: "sobe",
        options: ["sobe", "foge", "canta", "olha"],
        trivia: "Antero organizava debates acesos em Coimbra numa fantástica revolução de novas ideias literárias!"
    }
];

window.SCENARIOS = [
    {
        title: "Desafio 1: A Partida do Tejo (Belém, 1497) ⛵",
        question: "A frota de Vasco da Gama está pronta para partir do Rio Tejo rumo ao desconhecido. Para garantir que as caravelas iniciam com boa ventura, o que decides ordenar como capitão?",
        choices: [
            { 
                text: "Fazer uma oração na Ermida de Belém, conferir as rotas com os cartógrafos reais e zarpar com maré cheia (Sabedoria real)", 
                safe: true, 
                foodMod: 0, crewMod: 15, windMod: 10,
                successMsg: "Esplêndido! A tripulação ganhou enorme confiança e os ventos do rio Tejo empurraram as naus suavemente!", 
                failMsg: "" 
            },
            { 
                text: "Partir imediatamente a correr sob a noite escura sem inspecionar as amarras nem conferir as marés (Acelerar rumo)", 
                safe: false, 
                foodMod: 0, crewMod: -15, windMod: -15,
                successMsg: "", 
                failMsg: "Pânico a bordo! Sob a escuridão, uma das cordas do timão partiu-se e os marinheiros ficaram enojados com o balanço desordenado do Tejo." 
            }
        ]
    },
    {
        title: "Desafio 2: Escala na Ilha da Madeira 🏝️",
        question: "Aportam na Ilha da Madeira para reabastecimento. A água potável pura e vegetais frescos são críticos para evitar o temível escorbuto. O que escolhes carregar?",
        choices: [
            { 
                text: "Encher pipas com água límpida das serras e carregar laranjas e limões sumarentos (Prevenir Escorbuto)", 
                safe: true, 
                foodMod: 30, crewMod: 10, windMod: 0,
                successMsg: "Excelente! As frutas ricas em vitamina C impedem que os vossos valentes marinheiros fiquem doentes de cama!", 
                failMsg: "" 
            },
            { 
                text: "Comprar puramente tonéis de vinho doce forte e carne conservada em sal por ser mais rápido e festivo (Pauperismo marítimo)", 
                safe: false, 
                foodMod: -20, crewMod: -15, windMod: 0,
                successMsg: "", 
                failMsg: "Deceção! A falta de citrinos frescos fez com que metade dos homens ficasse fraca e com gengivas doridas! Perdeste 1 vida." 
            }
        ]
    },
    {
        title: "Desafio 3: A 'Volta do Mar' no Atlântico Sul 🌊",
        question: "Ao aproximarem-se do Equador, o vento morre e a esquadra fica presa numa calmaria asfixiante. Para continuar a descer e contornar a África, que rota traças?",
        choices: [
            { 
                text: "Virar as caravelas num arco largo para oeste, no meio do oceano aberto, recolhendo ventos circulares (Volta do Mar)", 
                safe: true, 
                foodMod: -10, crewMod: 0, windMod: 35,
                successMsg: "Astúcia formidável! A manobra deu-vos fôlego e as velas abriram-se com um vento forte maravilhoso!", 
                failMsg: "" 
            },
            { 
                text: "Insistir em deslizar colado à areia árida da costa africana esperando um milagre de borla (Rumo Litoral)", 
                safe: false, 
                foodMod: -15, crewMod: -25, windMod: -30,
                successMsg: "", 
                failMsg: "Parados 20 dias sob um sol ardente! Os biscoitos apodreceram, a tripulação ameaça revoltar-se e as velas caíram inertes. Perdeste 1 vida." 
            }
        ]
    },
    {
        title: "Desafio 4: O Cabo de Todas as Tormentas 💨",
        question: "Alcançam o temível Cabo das Tormentas (Boa Esperança)! Ondas colossais batem furiosas nas naus. Como vais passar esta perigosa barreira costeira?",
        choices: [
            { 
                text: "Abrir o rumo bem longe para o sul em mar aberto selvagem para fugir aos rochedos e recifes (Curva de Segurança)", 
                safe: true, 
                foodMod: 0, crewMod: -10, windMod: 20,
                successMsg: "Vitória do timoneiro! Apesar do frio de gelar o nariz vindo da Antártida, passaram o cabo com os cascos intactos!", 
                failMsg: "" 
            },
            { 
                text: "Navegar coladinho às rochas para poupar dias, tentando abrigar a caravela da tempestade (Atalho Arriscado)", 
                safe: false, 
                foodMod: 0, crewMod: -20, windMod: -20,
                successMsg: "", 
                failMsg: "Terrível! Uma rajada violenta empurrou a nau de mantimentos contra as pedras afiadas locais, abrindo um grande rombo! Perdeste 1 vida." 
            }
        ]
    },
    {
        title: "Desafio 5: Febre na Costa Africana Oriental 🍋",
        question: "Ancoram em Moçambique. Quase metade da guarnição está acamada de febre e dores nos dentes após meses de sacrifício. Como decides agir?",
        choices: [
            { 
                text: "Comprar limões frescos dos nativos, dar banho com vinagre aos infelizes e arejar as cabines (Higiene científica lusa)", 
                safe: true, 
                foodMod: 20, crewMod: 30, windMod: 0,
                successMsg: "Milagre! Em poucos dias os vossos marinheiros voltaram a erguer-se rindo e prontos para cantar o fado de regresso!", 
                failMsg: "" 
            },
            { 
                text: "Afirmar que é bruxaria de sereia e ordenar que se apliquem sanguessugas na testa dos infelizes (Superstição)", 
                safe: false, 
                foodMod: 0, crewMod: -30, windMod: 0,
                successMsg: "", 
                failMsg: "Os infelizes ficaram apenas mais pálidos e o medo espalhou-se pela frota! Que falta de pedagogia médica. Perdeste 1 vida." 
            }
        ]
    },
    {
        title: "Desafio 6: Encontro com o Adamastor 🐉",
        question: "Na mística entrada do Oceano Índico, um gigante feito de fumo e rajadas cinzentas ergue-se barrando o caminho luso! O monstro Adamastor ruge ameaçador. Como respondes?",
        choices: [
            { 
                text: "Brada de cabeça erguida que carregas a esperança das vossas famílias e que as caravelas amam a coragem do saber (Bravura poética)", 
                safe: true, 
                foodMod: 0, crewMod: 25, windMod: 15,
                successMsg: "Magistral! O gigante enfraqueceu perante tamanha audácia literária, desfazendo-se em pranto manso que refrescou o mar!", 
                failMsg: "" 
            },
            { 
                text: "Dar meia volta em desespero, queimar os pergaminhos de navegação e chorar no canto da ponte pedindo perdão (Rendição)", 
                safe: false, 
                foodMod: -20, crewMod: -30, windMod: -15,
                successMsg: "", 
                failMsg: "O monstro gargalhou de escárnio levantando ondas brutais que destelharam a caravela capitânia! Perdeste 1 vida." 
            }
        ]
    },
    {
        title: "Desafio 7: O Triunfo e o Bazar de Calecute (Índia) 🍛👑",
        question: "Avistas finalmente os templos e praias de Calecute na Índia! Para assinalar o comércio inédito de pimenta, cravo e canela com o Samorim local, qual a vossa ação?",
        choices: [
            { 
                text: "Enviar embaixadores corteses vestidos de veludo trazendo presentes de bronze esculpido e ricas palavras (Diplomacia real)", 
                safe: true, 
                foodMod: 20, crewMod: 40, windMod: 0,
                successMsg: "Triunfo monumental! O Samorim acolheu-vos com honras, enchendo os porões de especiarias de ouro! Abriste as portas do mundo!", 
                failMsg: "" 
            },
            { 
                text: "Disparar os canhões imediatamente contra o porto para amedrontar os indianos e reclamar as sacas de temperos de graça (Ataque Corsário)", 
                safe: false, 
                foodMod: -10, crewMod: -20, windMod: 0,
                successMsg: "", 
                failMsg: "Desastre militar! Fomos cercados por barcos rápidos e postos a ferros num calabouço sufocante com perdas imensas! Perdeste 1 vida." 
            }
        ]
    }
];
