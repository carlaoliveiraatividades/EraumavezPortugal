import { HistoricalEra, HistoricalCharacter, Achievement, QuizQuestion, MapHotspot } from "./types";

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: "fundacao",
    title: "Fundação de Portugal",
    century: "Século XII",
    years: "1128 - 1249",
    badge: "🏰 Berço da Nação",
    description: "É aqui que tudo começa! O jovem D. Afonso Henriques zanga-se com a mãe na Batalha de São Mamede e decide criar um país novinho em folha. Com muita coragem e batalhas heroicas, tornou-se o nosso primeiro Rei!",
    funFact: "Sabias que D. Afonso Henriques era conhecido como 'O Conquistador' e dizia-se que era tão alto e forte que a sua espada pesava mais do que qualquer outro cavaleiro conseguia levantar?",
    color: "bg-amber-50 border-amber-200 text-amber-900",
    textColor: "text-amber-800",
    borderColor: "border-amber-300",
    accentBg: "bg-amber-100",
    events: [
      {
        year: "1128",
        title: "Batalha de São Mamede (Guimarães)",
        desc: "D. Afonso Henriques lidera os barões de Portugal contra os exércitos da sua própria mãe, D. Teresa, para governar o Condado Portucalense e declarar a independência!",
        icon: "⚔️"
      },
      {
        year: "1139",
        title: "Batalha de Ourique & O Milagre",
        desc: "D. Afonso Henriques vence uma batalha milagrosa contra cinco reis mouros poderosos. Os seus soldados aclamam-no orgulhosamente como Rei de Portugal!",
        icon: "🛡️"
      },
      {
        year: "1143",
        title: "Tratado de Zamora",
        desc: "O Reino de Castela aceita finalmente que Portugal é um país independente. D. Afonso Henriques é oficialmente o primeiro Rei de Portugal!",
        icon: "📜"
      },
      {
        year: "1147",
        title: "Conquista de Lisboa",
        desc: "Com a ajuda de destemidos cavaleiros cruzados que iam de barco para a Terra Santa, D. Afonso Henriques conquista o Castelo de São Jorge em Lisboa!",
        icon: "🏰"
      },
      {
        year: "1249",
        title: "Conquista do Algarve",
        desc: "D. Afonso III conquista Faro e Silves, terminando a reconquista do sul. Portugal ganha as fronteiras que tem quase até hoje, sendo o país mais antigo da Europa com a mesma fronteira!",
        icon: "🌅"
      }
    ],
    figures: [
      {
        name: "D. Afonso Henriques",
        role: "O Primeiro Rei de Portugal",
        bio: "O fundador da pátria, nasceu em Guimarães e lutou toda a vida pela nossa independência com o seu escudo das quinas azuis.",
        icon: "👑",
        characterKey: "afonso_henriques"
      },
      {
        name: "D. Dinis",
        role: "O Rei Poeta e Lavrador",
        bio: "Fundou a nossa primeira Universidade (em Coimbra), plantou o famoso Pinhal de Leiria para proteger as areias e escreveu lindas poesias de amor!",
        icon: "✍️"
      },
      {
        name: "Rainha Santa Isabel",
        role: "A Rainha do Milagre das Rosas",
        bio: "Esposa de D. Dinis, era famosa pela sua bondade e caridade. Reza a lenda que transformou moedas de ouro em lindas rosas quando o rei a questionou.",
        icon: "🌹"
      }
    ]
  },
  {
    id: "descobrimentos",
    title: "A Era dos Descobrimentos",
    century: "Séculos XV - XVI",
    years: "1415 - 1580",
    badge: "⛵ Navegadores dos Mares",
    description: "Os portugueses construíram caravelas de madeira e partiram à aventura por mares nunca antes navegados! Enfrentaram tempestades e monstros imaginários para conhecer o mundo inteiro e trazer especiarias raras.",
    funFact: "Os marinheiros na caravela alimentavam-se principalmente de biscoitos duros como pedra, que muitas vezes tinham de molhar na sopa para conseguir mastigar!",
    color: "bg-sky-50 border-sky-200 text-sky-900",
    textColor: "text-sky-800",
    borderColor: "border-sky-300",
    accentBg: "bg-sky-100",
    events: [
      {
        year: "1415",
        title: "Conquista de Ceuta",
        desc: "Portugal conquista esta cidade no norte de África. É o ponto de partida oficial para a grande aventura dos Descobrimentos Marítimos!",
        icon: "⚔️"
      },
      {
        year: "1419",
        title: "Descoberta da Madeira e Açores",
        desc: "João Gonçalves Zarco e Tristão Vaz Teixeira chegam à Ilha da Madeira, e pouco depois Diogo de Silves encontra o maravilhoso arquipélago dos Açores desabitado.",
        icon: "🏝️"
      },
      {
        year: "1488",
        title: "Dobrar o Cabo das Tormentas",
        desc: "Bartolomeu Dias consegue passar o cabo mais perigoso de África! O rei muda-lhe o nome para 'Cabo da Boa Esperança' porque agora sabiam que era possível chegar à Índia por mar.",
        icon: "🌊"
      },
      {
        year: "1498",
        title: "Vasco da Gama chega à Índia",
        desc: "O intrépido navegador realiza a viagem mais longa da história até então, ancorando em Calecute! Portugal torna-se o senhor supremo do comércio de pimenta, canela e seda.",
        icon: "🍛"
      },
      {
        year: "1500",
        title: "Pedro Álvares Cabral no Brasil",
        desc: "Com uma enorme frota a caminho da Índia, os navios afastam-se no oceano Atlântico e avistam a 'Terra de Santa Cruz' — o gigante e maravilhoso Brasil!",
        icon: "🌴"
      }
    ],
    figures: [
      {
        name: "Infante D. Henrique",
        role: "O Impulsionador das Descobertas",
        bio: "O grande cérebro que organizava as viagens a partir de Sagres. Reunia os melhores cientistas, astrónomos e cartógrafos da época.",
        icon: "🗺️"
      },
      {
        name: "Vasco da Gama",
        role: "O Almirante dos Mares da Índia",
        bio: "O navegador que comandou a fantástica armada de caravelas até à Índia, estabelecendo a rota marítima comercial mais rica do planeta.",
        icon: "⚓",
        characterKey: "vasco_da_gama"
      },
      {
        name: "Luís de Camões",
        role: "O Maior Poeta de Portugal",
        bio: "Escreveu 'Os Lusíadas', a fantástica epopeia em verso que imortalizou as aventuras dos navegadores. Perdeu um olho numa batalha e sobreviveu a um naufrágio!",
        icon: "👁️‍🗨️",
        characterKey: "camoes"
      }
    ]
  },
  {
    id: "crise_restauracao",
    title: "Crise, Reis Filipes & Restauração",
    century: "Séculos XVI - XVIII",
    years: "1578 - 1755",
    badge: "⚔️ O Renascer do Reino",
    description: "O jovem rei D. Sebastião desaparece no deserto de África e Portugal perde a independência para os reis de Espanha (os Filipes). Mas 60 anos depois, os portugueses unem-se e reclamam a liberdade!",
    funFact: "Ainda hoje os portugueses dizem que estão 'à espera de D. Sebastião numa manhã de nevoeiro' quando aguardam um milagre difícil de acontecer!",
    color: "bg-rose-50 border-rose-200 text-rose-900",
    textColor: "text-rose-800",
    borderColor: "border-rose-300",
    accentBg: "bg-rose-100",
    events: [
      {
        year: "1578",
        title: "Batalha de Alcácer Quibir",
        desc: "O jovem rei D. Sebastião parte para combater em Marrocos e desaparece misteriosamente na batalha. Sem deixar herdeiros, o trono fica vazio!",
        icon: "🐎"
      },
      {
        year: "1580",
        title: "União Ibérica (Três reis Filipes)",
        desc: "O rei Filipe II de Espanha assume a coroa portuguesa. Durante 60 anos, Portugal e Espanha partilham o mesmo monarca e o mesmo império.",
        icon: "🏰"
      },
      {
        year: "1640",
        title: "A Restauração da Independência",
        desc: "No dia 1 de Dezembro, um grupo de nobres patriotas (os Conjurados) corre com os governantes espanhóis de Lisboa e aclama D. João IV como o legítimo rei português!",
        icon: "🎺"
      },
      {
        year: "1755",
        title: "O Grande Terramoto de Lisboa",
        desc: "No dia 1 de Novembro, um terramoto gigante destrói quase toda a cidade de Lisboa. Seguiu-se um tsunami e um grande incêndio.",
        icon: "🌋"
      },
      {
        year: "1756",
        title: "A Reconstrução Pombalina",
        desc: "O Marquês de Pombal comanda a reconstrução da Baixa de Lisboa com ruas largas e perpendiculares e casas feitas com um sistema de 'gaiola' de madeira à prova de sismos!",
        icon: "📐"
      }
    ],
    figures: [
      {
        name: "D. Sebastião",
        role: "O Desejado",
        bio: "O rei menino que subiu ao trono muito cedo e cujo desaparecimento alimentou o mito de que voltaria num cavalo branco para salvar a nação.",
        icon: "🛡️"
      },
      {
        name: "D. João IV",
        role: "O Restaurador",
        bio: "O Duque de Bragança que assumiu a pesada tarefa de liderar Portugal de volta à liberdade, fundando a última dinastia de reis.",
        icon: "👑"
      },
      {
        name: "Marquês de Pombal",
        role: "O Primeiro-Ministro Reformador",
        bio: "Sebastião José de Carvalho e Melo, o homem prático que disse 'enterrar os mortos e cuidar dos vivos' e desenhou a bela Lisboa Pombalina.",
        icon: "🏛️"
      }
    ]
  },
  {
    id: "revolucao_republica",
    title: "Século das Luzes, Caminho de Ferro & República",
    century: "Séculos XIX - Início XX",
    years: "1807 - 1910",
    badge: "🚂 O Século do Progresso",
    description: "Portugal modernizou-se! Chegaram os primeiros comboios a vapor, instalaram-se as linhas de telégrafo e construíram-se fantásticas pontes de ferro. Depois de muitas lutas políticas, a Monarquia chegou ao fim e nasceu a República!",
    funFact: "Sabias que a primeira viagem de comboio em Portugal, entre Lisboa e Carregado em 1856, deixou as pessoas assustadíssimas com a velocidade de 30 km/h?",
    color: "bg-emerald-50 border-emerald-200 text-emerald-900",
    textColor: "text-emerald-800",
    borderColor: "border-emerald-300",
    accentBg: "bg-emerald-100",
    events: [
      {
        year: "1807",
        title: "As Invasões Francesas",
        desc: "As tropas de Napoleão invadem Portugal. A corte portuguesa foge para o Brasil para proteger o reino, deixando em Lisboa uma enorme resistência.",
        icon: "⚔️"
      },
      {
        year: "1856",
        title: "Inauguração do Comboio",
        desc: "D. Pedro V inaugura a primeira linha ferroviária. É o início de uma grande modernização liderada pelo ministro Fontes Pereira de Melo!",
        icon: "🚂"
      },
      {
        year: "1890",
        title: "O Ultimato Britânico",
        desc: "A Inglaterra exige que Portugal desista dos seus planos de ligar Angola a Moçambique por terra ('Mapa Cor-de-Rosa'). Este facto gera revolta no povo.",
        icon: "🗺️"
      },
      {
        year: "1910",
        title: "Implantação da República (5 de Outubro)",
        desc: "O povo e os militares revoltam-se, põem fim à Monarquia e declaram a República. É criada a bandeira verde e vermelha e o nosso hino nacional!",
        icon: "🚩"
      }
    ],
    figures: [
      {
        name: "Rainha D. Maria II",
        role: "A Educadora",
        bio: "A amada rainha que subiu ao trono muito jovem, adorava ler, e foi responsável por impulsionar as escolas primárias e o ensino público.",
        icon: "👑",
        characterKey: "maria_ii"
      },
      {
        name: "Fontes Pereira de Melo",
        role: "O Engenheiro do Progresso",
        bio: "Político dinâmico que construiu as primeiras estradas modernas, pontes metálicas, portos de mar e as linhas ferroviárias.",
        icon: "🛠️"
      },
      {
        name: "Fernando Pessoa",
        role: "O Poeta dos Mil Rostos",
        bio: "O génio literário que escrevia sob vários nomes falsos chamados heterónimos. Cada um tinha a sua própria vida e estilo de escrita fantástico!",
        icon: "🎩",
        characterKey: "fernando_pessoa"
      }
    ]
  },
  {
    id: "democracia",
    title: "Ditadura, 25 de Abril & Hoje",
    century: "Século XX - XXI",
    years: "1926 - Hoje",
    badge: "🕊️ Liberdade e Democracia",
    description: "Após anos cinzentos de uma ditadura onde não se podia falar livremente, os canos das armas dos soldados encheram-se de cravos vermelhos! O 25 de Abril trouxe de volta a alegria, a liberdade, a música e a entrada na União Europeia.",
    funFact: "A senha secreta para começar a revolução do 25 de Abril de 1974 foi a transmissão na rádio da música 'Grândola, Vila Morena' a meio da noite!",
    color: "bg-purple-50 border-purple-200 text-purple-900",
    textColor: "text-purple-800",
    borderColor: "border-purple-300",
    accentBg: "bg-purple-100",
    events: [
      {
        year: "1933",
        title: "Início do Estado Novo (Ditadura)",
        desc: "António de Oliveira Salazar cria um regime rígido em Portugal. Não havia eleições livres, existia censura na imprensa e a polícia secreta espitava tudo.",
        icon: "🤫"
      },
      {
        year: "1974",
        title: "Revolução dos Cravos (25 de Abril)",
        desc: "Os capitães do exército revoltam-se de forma pacífica. Celeste Caeiro oferece flores aos soldados, que as colocam nos canos das suas espingardas!",
        icon: "🌺"
      },
      {
        year: "1986",
        title: "Adesão à União Europeia",
        desc: "Portugal assina a entrada na Comunidade Económica Europeia (CEE). O país desenvolve-se imenso com autoestradas, hospitais e novas oportunidades.",
        icon: "🇪🇺"
      },
      {
        year: "1998",
        title: "Expo 98 & Nobel de Saramago",
        desc: "Lisboa acolhe uma exposição mundial maravilhosa dedicada aos Oceanos e o fabuloso escritor José Saramago ganha o Prémio Nobel da Literatura!",
        icon: "🐋"
      }
    ],
    figures: [
      {
        name: "Amália Rodrigues",
        role: "A Rainha do Fado",
        bio: "A grande voz de Portugal que levou o nosso fado tradicional a todos os grandes palcos do mundo, cantando com a alma portuguesa.",
        icon: "🎤"
      },
      {
        name: "Salgueiro Maia",
        role: "O Capitão sem Medo",
        bio: "O jovem militar heroico que comandou as tropas com calma e coragem em Lisboa durante a revolução do 25 de Abril, sem derramar uma gota de sangue.",
        icon: "⭐"
      },
      {
        name: "José Saramago",
        role: "O Escritor do Nobel",
        bio: "O único autor de língua portuguesa a vencer o prémio mais importante do mundo da literatura, com histórias cheias de imaginação livre.",
        icon: "👓"
      }
    ]
  }
];

export const HISTORICAL_CHARACTERS: HistoricalCharacter[] = [
  {
    key: "afonso_henriques",
    name: "D. Afonso Henriques",
    title: "O Conquistador e Primeiro Rei",
    eraId: "fundacao",
    avatar: "👑",
    color: "from-amber-400 to-yellow-600",
    accentBg: "bg-amber-100",
    greeting: "Saudações, jovem fidalgo! Eu sou D. Afonso Henriques, o primeiro Rei de Portugal! Estás pronto para defender as muralhas do nosso reino?",
    bio: "Nasci em Guimarães e lutei intrépido para transformar o Condado Portucalense num país independente. Com o meu escudo marcado com cinco quinas azuis e a minha pesada espada, conquistei terras e marquei as primeiras fronteiras!",
    funTrivia: "Diz-se que a minha força vinha do amor à nossa terra e que as minhas botas mediam quase meio metro de comprimento!"
  },
  {
    key: "camoes",
    name: "Luís de Camões",
    title: "O Poeta dos Navegadores",
    eraId: "descobrimentos",
    avatar: "👁️",
    color: "from-sky-400 to-blue-600",
    accentBg: "bg-sky-100",
    greeting: "Olá, jovem bardo das palavras fantásticas! Abre a tua imaginação para rimas e tempestades! Sou o Luís de Camões, o teu humilde servo das letras!",
    bio: "Andei a viajar pelo mundo inteiro nas caravelas! Perdi o meu olho direito em combates na costa de África e quase me afoguei num naufrágio terrível onde tive de nadar com apenas um braço enquanto segurava os manuscritos de 'Os Lusíadas'!",
    funTrivia: "Consigo rimar quase tudo o que dizes e adoro desafiar monstros marítimos com o poder de uma bela caneta!"
  },
  {
    key: "vasco_da_gama",
    name: "Vasco da Gama",
    title: "O Almirante do Mar da Índia",
    eraId: "descobrimentos",
    avatar: "⚓",
    color: "from-cyan-400 to-indigo-600",
    accentBg: "bg-cyan-100",
    greeting: "Ahoy, jovem grumete corajoso! Eu sou o Vasco da Gama! Sentes o aroma a pimenta e canela no ar? Iça as velas para desbravar oceanos misteriosos!",
    bio: "Fui o comandante escolhido pelo Rei para liderar a armada pioneira que navegou à volta de toda a África até à fantástica Índia. Enfrentámos ondas gigantes, ventos contra e o temível Adamastor para encontrar o caminho das especiarias!",
    funTrivia: "O meu mapa era feito à mão em pele de ovelha e o meu instrumento preferido para guiar os barcos era o astrolábio apontado às estrelas!"
  },
  {
    key: "maria_ii",
    name: "Rainha D. Maria II",
    title: "A Educadora e Modernizadora",
    eraId: "revolucao_republica",
    avatar: "👵",
    color: "from-emerald-400 to-teal-600",
    accentBg: "bg-emerald-100",
    greeting: "Sejas bem-vindo, querido aluno do saber infinito! Eu sou a Rainha D. Maria II. Estorva-te a preguiça e vem comigo aprender sobre o progresso e o ensino!",
    bio: "Subi ao trono de Portugal num período de muitas discórdias, mas dediquei todo o meu empenho a modernizar o nosso país. Criei as primeiras escolas primárias públicas porque sabia que um país só é forte quando as suas crianças sabem ler e pensar por si mesmas!",
    funTrivia: "Fui rainha com apenas 15 anos e o meu reinado trouxe o primeiro grande comboio a vapor para o nosso belo país!"
  },
  {
    key: "fernando_pessoa",
    name: "Fernando Pessoa",
    title: "O Poeta das Mil Almas",
    eraId: "revolucao_republica",
    avatar: "🎩",
    color: "from-purple-400 to-violet-600",
    accentBg: "bg-purple-100",
    greeting: "Boa tarde, pequeno sonhador de universos infinitos! Sou o Fernando Pessoa, ou talvez o Alberto Caeiro, ou Álvaro de Campos... Quem queres que seja hoje?",
    bio: "Escrevi as poesias mais criativas e profundas da nossa língua. Para não escrever sempre da mesma forma, criei 'amigos imaginários' chamados heterónimos — escritores fictícios com estilos e gostos completamente diferentes dos meus!",
    funTrivia: "Adoro beber um bom café na Baixa de Lisboa enquanto invento mundos inteiros e escrevo frases em guardanapos de papel!"
  }
];

export const MAP_HOTSPOTS: MapHotspot[] = [
  {
    id: "guimaraes",
    name: "Guimarães",
    x: 43,
    y: 18,
    title: "Guimarães, o Berço da Nação",
    description: "Foi aqui que nasceu Portugal! Nas muralhas do Castelo de Guimarães podes ler esculpido 'Aqui Nasceu Portugal'.",
    fact: "Em 1128, a Batalha de São Mamede nas proximidades deu início à governação independente de D. Afonso Henriques.",
    color: "bg-amber-500"
  },
  {
    id: "porto",
    name: "Porto",
    x: 40,
    y: 24,
    title: "O Porto Invisível e Invicta",
    description: "Deu o nome a Portugal (Portus Cale) e resistiu bravamente a cercos e generais, ganhando o título carinhoso de 'A Cidade Invicta'.",
    fact: "Foi aqui que nasceram os famosos barcos rabelos que transportavam o delicioso Vinho do Porto pelo Rio Douro.",
    color: "bg-teal-500"
  },
  {
    id: "coimbra",
    name: "Coimbra",
    x: 45,
    y: 45,
    title: "Coimbra, a Cidade dos Estudantes",
    description: "Foi a segunda capital de Portugal. O grande rei D. Dinis criou aqui a primeira Universidade em 1290, famosa pela sua espantosa Biblioteca Joanina guardada por morcegos!",
    fact: "Os morcegos que habitam o teto da biblioteca de Coimbra comem os insetos à noite para proteger os livros antigos de papel e pele!",
    color: "bg-purple-500"
  },
  {
    id: "lisboa",
    name: "Lisboa",
    x: 32,
    y: 68,
    title: "Lisboa, a Cidade dos Descobrimentos",
    description: "Conquistada aos mouros por D. Afonso Henriques, tornou-se o ponto de partida das caravelas e a capital do império português.",
    fact: "Do porto de Belém saíram Vasco da Gama e Cabral. Hoje podemos ver aí a grande Torre de Belém e o Padrão dos Descobrimentos.",
    color: "bg-sky-500"
  },
  {
    id: "sagres",
    name: "Sagres e Lagos",
    x: 27,
    y: 92,
    title: "Sagres, o Fim do Mundo Antigo",
    description: "O Infante D. Henrique mandou construir em Sagres uma grande muralha e pontes de observação. Era a lendária 'Escola de Sagres' para os descobridores.",
    fact: "Antigamente acreditava-se que logo a seguir a este cabo o mar fervia e que navios inteiros caíam num abismo cheio de serpentes gigantes!",
    color: "bg-rose-500"
  },
  {
    id: "ourique",
    name: "Ourique",
    x: 42,
    y: 80,
    title: "Ourique e o Milagre dos Reis",
    description: "Diz a história que nos campos de Ourique, contra todas as probabilidades, D. Afonso Henriques derrotou o temível exército inimigo composto por cinco reis mouros.",
    fact: "Após a vitória brilhante, os soldados ergueram D. Afonso Henriques nos seus escudos declarando-o o primeiro Rei de Portugal.",
    color: "bg-emerald-500"
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: "coroa_afonso",
    title: "Cavaleiro do Reino",
    description: "Termina o Quiz da Fundação de Portugal e recebe a coroa de D. Afonso Henriques!",
    icon: "👑",
    unlocked: false,
    points: 100,
    badgeColor: "bg-amber-500 text-white shadow-amber-300",
    category: "quiz"
  },
  {
    id: "mestre_caravela",
    title: "Navegador dos Sete Mares",
    description: "Ajuda Vasco da Gama a guiar a sua caravela à Índia sem bater nos monstros marinhos!",
    icon: "⛵",
    unlocked: false,
    points: 150,
    badgeColor: "bg-sky-500 text-white shadow-sky-300",
    category: "ocean"
  },
  {
    id: "poeta_estrelas",
    title: "Poeta das Estrelas",
    description: "Completa o enigma poético e decifra os versos mágicos de Luís de Camões!",
    icon: "✍️",
    unlocked: false,
    points: 100,
    badgeColor: "bg-purple-500 text-white shadow-purple-300",
    category: "poetry"
  },
  {
    id: "conversa_imperio",
    title: "Conversador do Império",
    description: "Fala com um dos personagens históricos animados e pergunta pelas suas memórias!",
    icon: "💬",
    unlocked: false,
    points: 50,
    badgeColor: "bg-emerald-500 text-white shadow-emerald-300",
    category: "chat"
  },
  {
    id: "explorador_tempo",
    title: "Explorador de Séculos",
    description: "Explora todas as 5 eras na linha do tempo para te tornares um mestre da História!",
    icon: "⏳",
    unlocked: false,
    points: 120,
    badgeColor: "bg-rose-500 text-white shadow-rose-300",
    category: "timeline"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Fundação (id: fundacao)
  {
    id: "q_fund_1",
    eraId: "fundacao",
    question: "Quem foi o primeiríssimo Rei de Portugal?",
    options: [
      "D. Dinis, o Rei Poeta",
      "D. Afonso Henriques, o Conquistador",
      "D. Sebastião, o Desejado",
      "Filipe I, o Espanhol"
    ],
    correctAnswer: 1,
    explanation: "D. Afonso Henriques ganhou a independência em batalhas heróicas e tornou-se em 1139 o primeiro rei do nosso belo país!"
  },
  {
    id: "q_fund_2",
    eraId: "fundacao",
    question: "Onde se diz que 'Nasceu Portugal'?",
    options: [
      "Lisboa",
      "Algarve",
      "Guimarães",
      "Coimbra"
    ],
    correctAnswer: 2,
    explanation: "Guimarães é conhecida como a 'Cidade Berço' de Portugal porque foi aí que nasceu o nosso primeiro rei e onde se deu a Batalha de São Mamede!"
  },
  {
    id: "q_fund_3",
    eraId: "fundacao",
    question: "O que diz a lenda que a Rainha Santa Isabel transformou em rosas diante do rei D. Dinis?",
    options: [
      "Espadas de guerra",
      "Uvas doces",
      "Moedas de ouro e pão",
      "Peixe seco"
    ],
    correctAnswer: 2,
    explanation: "O rei perguntou o que ela levava no regaço. Ela, que distribuía pão e ouro aos pobres escondida, respondeu 'são rosas, senhor!' e ao abrir o manto, apareceram rosas vermelhas!"
  },

  // Descobrimentos (id: descobrimentos)
  {
    id: "q_desc_1",
    eraId: "descobrimentos",
    question: "Qual era o tipo de barcos leves de madeira e velas triangulares que os portugueses inventaram para ir descobrir o mundo?",
    options: [
      "Submarinos",
      "Canoas",
      "Iates olímpicos",
      "Caravelas"
    ],
    correctAnswer: 3,
    explanation: "As caravelas eram barcos fantásticos! Com as suas velas em forma de triângulo podiam 'bolinar' — ou seja, navegar mesmo com o vento contra!"
  },
  {
    id: "q_desc_2",
    eraId: "descobrimentos",
    question: "Quem descobriu o caminho marítimo direto para a Índia em 1498, trazendo especiarias raras?",
    options: [
      "D. Afonso Henriques",
      "Vasco da Gama",
      "Pedro Álvares Cabral",
      "Luis de Camões"
    ],
    correctAnswer: 1,
    explanation: "O corajoso capitão Vasco da Gama liderou as caravelas numa viagem heróica de dois anos contornando toda a África até chegar à fabulosa Índia."
  },
  {
    id: "q_desc_3",
    eraId: "descobrimentos",
    question: "Qual é o nome do livro gigante escrito em verso por Luís de Camões de que fala de todas as nossas conquistas marítimas?",
    options: [
      "A Selva de Cimento",
      "Os Lusíadas",
      "Histórias de Saltar e Rir",
      "O Principezinho"
    ],
    correctAnswer: 1,
    explanation: "Os Lusíadas! É uma das maiores obras em poesia do mundo, onde Camões imortalizou heróis, amores, e marinheiros audazes face ao gigante Adamastor."
  },

  // Restauração (id: crise_restauracao)
  {
    id: "q_rest_1",
    eraId: "crise_restauracao",
    question: "Quem foi o rei jovem que desapareceu misteriosamente na Batalha de Alcácer Quibir numa manhã de nevoeiro?",
    options: [
      "D. Sebastião",
      "D. João IV",
      "D. Dinis",
      "D. Pedro V"
    ],
    correctAnswer: 0,
    explanation: "O rei D. Sebastião desapareceu no deserto de Marrocos em 1578, dando origem ao mito sebastianista de que regressaria um dia num cavalo branco."
  },
  {
    id: "q_rest_2",
    eraId: "crise_restauracao",
    question: "Como se chama o feriado que celebramos todos os anos no dia 1 de Dezembro, lembrando a liberdade face a Espanha em 1640?",
    options: [
      "Dia do Pão com Chouriço",
      "Dia da Restauração da Independência",
      "Dia do Estudante",
      "Dia do Marinheiro de Sagres"
    ],
    correctAnswer: 1,
    explanation: "No dia 1 de Dezembro de 1640 celebramos a Restauração da nossa Independência, derrotando a governação espanhola e coroando D. João IV."
  },
  {
    id: "q_rest_3",
    eraId: "crise_restauracao",
    question: "Como se chama o famoso sistema de madeiras cruzadas inventado para reconstruir as casas de Lisboa à prova de sismos após o terramoto de 1755?",
    options: [
      "A Gaiola Pombalina",
      "O Palácio de Cristal",
      "As Janelas de Alumínio",
      "Castelo de Palhas"
    ],
    correctAnswer: 0,
    explanation: "A Gaiola Pombalina! Era uma estrutura flexível e resistente de madeira colocada no interior das paredes que abanava com o sismo sem deixar a casa cair!"
  },

  // República (id: revolucao_republica)
  {
    id: "q_rep_1",
    eraId: "revolucao_republica",
    question: "Qual é o dia nacional em que celebramos o nascimento da República Portuguesa e o fim da Monarquia em 1910?",
    options: [
      "25 de Abril",
      "10 de Junho",
      "5 de Outubro",
      "1 de Janeiro"
    ],
    correctAnswer: 2,
    explanation: "No dia 5 de Outubro de 1910 foi proclamada a República a partir da varanda da Câmara Municipal de Lisboa, dando início a uma nova era de presidentes!"
  },
  {
    id: "q_rep_2",
    eraId: "revolucao_republica",
    question: "Quais são as cores oficiais da nossa atual bandeira nacional adotada com a República?",
    options: [
      "Azul e Branco com riscas pretas",
      "Verde e Vermelho com o escudo nacional",
      "Amarelo ocre e Roxa com estrelas",
      "Rosa choque e Verde alface"
    ],
    correctAnswer: 1,
    explanation: "Verde e Vermelho! O verde representa a esperança do povo e o vermelho o sangue e a coragem dos heróis da nação."
  },
  {
    id: "q_rep_3",
    eraId: "revolucao_republica",
    question: "Fernando Pessoa era famoso por escrever sob nomes de vários escritores criados na sua imaginação. Como se chamam esses nomes?",
    options: [
      "Apelidos",
      "Nomes Artísticos",
      "Heterónimos",
      "Pseudofantasias"
    ],
    correctAnswer: 2,
    explanation: "Heterónimos! Álvaro de Campos, Alberto Caeiro e Ricardo Reis eram os mais famosos. Tinham as suas próprias personalidades, opiniões e até caligrafias!"
  },

  // Democracia (id: democracia)
  {
    id: "q_dem_1",
    eraId: "democracia",
    question: "Que flor bonita Celeste Caeiro ofereceu aos soldados em 1974, tornando-se o símbolo da liberdade portuguesa no 25 de Abril?",
    options: [
      "O Cravo Vermelho",
      "O Girassol Amarelo",
      "A Tulipa Holandesa",
      "A Orquídea Branca"
    ],
    correctAnswer: 0,
    explanation: "O Cravo Vermelho foi colocado nos canos das espingardas e nos peitos dos soldados, simbolizando que a liberdade se alcançava com cravos e canções, e não com guerra."
  },
  {
    id: "q_dem_2",
    eraId: "democracia",
    question: "Qual é o nome do fado tradicional português de Lisboa que a incrível cantora Amália Rodrigues popularizou no mundo inteiro?",
    options: [
      "Fado de Coimbra",
      "O Fado, Património da Humanidade",
      "Canção da Primavera",
      "Samba de Roda"
    ],
    correctAnswer: 1,
    explanation: "O fado! É o canto expressivo e melancólico de Portugal que se tornou Património Imaterial da Humanidade graças a Amália, Carlos do Carmo e tantos outros."
  },
  {
    id: "q_dem_3",
    eraId: "democracia",
    question: "Qual foi o único grande escritor de língua portuguesa a vencer o prestigiado prémio Nobel da Literatura em 1998?",
    options: [
      "Luís de Camões",
      "José Saramago",
      "Eça de Queirós",
      "Sophia de Mello Breyner"
    ],
    correctAnswer: 1,
    explanation: "José Saramago! Ele escreveu obras extraordinárias como 'Memorial do Convento' e recebeu a maior medalha literária mundial em Estocolmo de láurea dourada."
  }
];
