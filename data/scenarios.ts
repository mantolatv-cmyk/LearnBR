import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  // 1. FAMÍLIA (Family)
  {
    id: 'familia',
    title: 'Family & Gatherings',
    titlePt: 'Família Brasileira',
    description: 'Learn Brazilian Portuguese vocabulary for family members, relationships, and traditional Sunday family lunches.',
    descriptionPt: 'Aprenda vocabulário sobre membros da família e o tradicional almoço de domingo.',
    icon: 'Users',
    image: '/images/familia.jpg',
    color: 'rose',
    available: true,
    vocabulary: [
      {
        portuguese: 'Mãe / Mamãe',
        english: 'Mother / Mom',
        pronunciation: 'migh / mah-MIGH',
        levels: {
          A1: { pt: 'Minha mãe faz o melhor feijão do mundo.', en: 'My mother makes the best beans in the world.' },
          A2: { pt: 'Minha mãe sempre reúne a família inteira no domingo.', en: 'My mother always gathers the whole family on Sunday.' },
          B1: { pt: 'Ela tem um amor maternal incondicional e muita paciência.', en: 'She has unconditional maternal love and lots of patience.' }
        }
      },
      {
        portuguese: 'Pai / Papai',
        english: 'Father / Dad',
        pronunciation: 'pie / pah-PIE',
        levels: {
          A1: { pt: 'Meu pai trabalha no centro da cidade.', en: 'My father works downtown.' },
          A2: { pt: 'Meu pai adora fazer churrasco para os vizinhos.', en: 'My father loves barbecuing for the neighbors.' },
          B1: { pt: 'Meu pai me ensinou a ter resiliência e foco nos estudos.', en: 'My father taught me resilience and dedication to studies.' }
        }
      },
      {
        portuguese: 'Irmão',
        english: 'Brother',
        pronunciation: 'eer-MOWN (nasal)',
        levels: {
          A1: { pt: 'Eu divido o quarto com meu irmão.', en: 'I share a room with my brother.' },
          A2: { pt: 'Meu irmão mais velho joga futebol todo sábado.', en: 'My older brother plays soccer every Saturday.' }
        }
      },
      {
        portuguese: 'Irmã',
        english: 'Sister',
        pronunciation: 'eer-MAH (nasal)',
        levels: {
          A1: { pt: 'Minha irmã estuda na universidade federal.', en: 'My sister studies at the federal university.' },
          A2: { pt: 'Minha irmã mais nova é muito divertida.', en: 'My younger sister is very fun.' }
        }
      },
      {
        portuguese: 'Vovó / Avó',
        english: 'Grandmother / Grandma',
        pronunciation: 'vaw-VAW (open "o")',
        levels: {
          A1: { pt: 'Minha avó mora no interior de Minas Gerais.', en: 'My grandmother lives in the countryside of Minas Gerais.' },
          A2: { pt: 'A vovó sempre prepara bolo de fubá quentinho.', en: 'Grandma always bakes warm cornmeal cake.' }
        }
      },
      {
        portuguese: 'Vovô / Avô',
        english: 'Grandfather / Grandpa',
        pronunciation: 'voh-VOH (closed "o")',
        levels: {
          A1: { pt: 'Meu avô adora contar histórias da juventude.', en: 'My grandfather loves telling stories from his youth.' },
          A2: { pt: 'O vovô toma café passado toda manhã.', en: 'Grandpa drinks pour-over coffee every morning.' }
        }
      },
      {
        portuguese: 'Tio / Tia',
        english: 'Uncle / Aunt',
        pronunciation: 'CHEE-oo / CHEE-ah',
        levels: {
          A1: { pt: 'Meu tio mora no Rio de Janeiro.', en: 'My uncle lives in Rio de Janeiro.' },
          A2: { pt: 'Minha tia trouxe presentes para todos os sobrinhos.', en: 'My aunt brought gifts for all the nieces and nephews.' }
        }
      },
      {
        portuguese: 'Primo / Prima',
        english: 'Cousin (male / female)',
        pronunciation: 'PREE-moo / PREE-mah',
        levels: {
          A1: { pt: 'Eu vou à praia com meus primos no verão.', en: 'I go to the beach with my cousins in the summer.' },
          A2: { pt: 'Minha prima é médica em Salvador.', en: 'My cousin is a doctor in Salvador.' }
        }
      },
      {
        portuguese: 'Pais',
        english: 'Parents (NOT relatives!)',
        pronunciation: 'PIES',
        levels: {
          A1: { pt: 'Meus pais são casados há trinta anos.', en: 'My parents have been married for thirty years.' },
          A2: { pt: 'Lembrete: "pais" significa mother & father; "parentes" significa relatives!', en: 'Reminder: "pais" means mother & father; "parentes" means relatives!' }
        }
      },
      {
        portuguese: 'Parentes',
        english: 'Relatives / Extended Family',
        pronunciation: 'pah-REN-chees',
        levels: {
          A1: { pt: 'No Natal, recebemos muitos parentes em casa.', en: 'At Christmas, we host many relatives at home.' },
          A2: { pt: 'Todos os meus parentes moram no Brasil.', en: 'All my relatives live in Brazil.' }
        }
      },
      {
        portuguese: 'Sogro / Sogra',
        english: 'Father-in-law / Mother-in-law',
        pronunciation: 'SAW-groo / SAW-grah',
        levels: {
          A1: { pt: 'Minha sogra faz uma feijoada deliciosa.', en: 'My mother-in-law makes a delicious feijoada.' },
          A2: { pt: 'Meu sogro gosta de assistir aos jogos de domingo.', en: 'My father-in-law likes watching Sunday soccer games.' }
        }
      },
      {
        portuguese: 'Sobrinho / Sobrinha',
        english: 'Nephew / Niece',
        pronunciation: 'soh-BREE-nyoo / soh-BREE-nyah',
        levels: {
          A1: { pt: 'Meu sobrinho tem apenas quatro anos.', en: 'My nephew is only four years old.' },
          A2: { pt: 'Eu adoro passear no parque com minha sobrinha.', en: 'I love taking walks in the park with my niece.' }
        }
      }
    ],
    dialogue: [
      { speaker: 'Lucas', portuguese: 'Oi, Juliana! Você vai ao almoço de família no domingo?', english: 'Hi Juliana! Are you going to the family lunch on Sunday?', isPrimary: true },
      { speaker: 'Juliana', portuguese: 'Com certeza! Minha vovó vai fazer feijoada completa.', english: 'Definitely! My grandma is going to make a full feijoada.', isPrimary: false },
      { speaker: 'Lucas', portuguese: 'Que delícia! Quem mais vai estar por lá?', english: 'How delicious! Who else will be there?', isPrimary: true },
      { speaker: 'Juliana', portuguese: 'Meus tios, meus primos de São Paulo e minha cunhada.', english: 'My aunt and uncle, my cousins from São Paulo, and my sister-in-law.', isPrimary: false },
      { speaker: 'Lucas', portuguese: 'Nossa, a casa vai estar cheia! Família brasileira é sempre animada.', english: 'Wow, the house will be packed! Brazilian families are always so lively.', isPrimary: true },
      { speaker: 'Juliana', portuguese: 'É verdade! Sempre tem música, risada e muita comida boa.', english: 'True! There is always music, laughter, and plenty of good food.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Minha mãe faz o melhor feijão.', english: 'My mother makes the best beans.', example: 'Essential family vocab: Mãe' },
      { portuguese: 'Meus pais moram em Curitiba.', english: 'My parents live in Curitiba.', example: 'Notice: Pais = Parents, not relatives' },
      { portuguese: 'Eu almoço com meus avós aos domingos.', english: 'I have lunch with my grandparents on Sundays.', example: 'Avô (closed = grandpa), Avó (open = grandma)' },
      { portuguese: 'Meu primo toca violão muito bem.', english: 'My cousin plays acoustic guitar very well.', example: 'Primo = male cousin, Prima = female cousin' },
      { portuguese: 'Minha tia mora perto da praia.', english: 'My aunt lives near the beach.', example: 'Tia / Tio = Aunt / Uncle' },
      { portuguese: 'Tenho muitos parentes no Nordeste.', english: 'I have many relatives in the Northeast.', example: 'Parentes = relatives' }
    ],
    quiz: [
      {
        question: 'How do you say "My parents" in Portuguese without falling into the false cognate trap?',
        options: ['Meus parentes', 'Meus pais', 'Meus paises', 'Meus parceiros'],
        correctIndex: 1,
        explanation: '"Meus pais" means "my parents" (mother and father). "Parentes" is a false cognate meaning "relatives"!'
      },
      {
        question: 'What is the phonetic difference between "Avô" and "Avó"?',
        options: [
          '"Avô" has a closed "o" (like "oh") for grandfather; "Avó" has an open "o" (like "aw") for grandmother.',
          'They sound exactly identical in Brazil.',
          '"Avó" is grandfather and "Avô" is grandmother.',
          'Only children use these words in Portuguese.'
        ],
        correctIndex: 0,
        explanation: 'Circumflex (^) creates a closed sound (Avô = Grandfather), whereas acute (´) creates an open sound (Avó = Grandmother)!'
      },
      {
        question: 'Translate: "My brother is older than me."',
        options: [
          'Meu primo é mais velho que eu.',
          'Meu irmão é mais velho do que eu.',
          'Meu tio é menor do que eu.',
          'Meu sobrinho é mais alto.'
        ],
        correctIndex: 1,
        explanation: '"Irmão" means brother, and "mais velho do que eu" translates to "older than me".'
      },
      {
        question: 'Which word means "Mother-in-law" in Portuguese?',
        options: ['Cunhada', 'Sobrinha', 'Sogra', 'Prima'],
        correctIndex: 2,
        explanation: '"Sogra" is mother-in-law. "Sogro" is father-in-law.'
      },
      {
        question: 'What is a typical Brazilian Sunday tradition called?',
        options: ['Almoço de domingo em família', 'Jantar de terça-feira', 'Café da meia-noite', 'Lanche da madrugada'],
        correctIndex: 0,
        explanation: 'The "Almoço de domingo em família" (Sunday family lunch) is a central staple of Brazilian culture and bonding.'
      }
    ],
    trueOrFalse: {
      part1: [
        { statement: '"Pais" means parents (mother and father).', statementPt: '"Pais" significa mãe e pai.', isTrue: true, explanation: 'Yes! "Pais" means parents, while "parentes" means relatives.' },
        { statement: '"Sobrinho" means grandfather.', statementPt: '"Sobrinho" significa avô.', isTrue: false, explanation: 'False! "Sobrinho" means nephew. Grandfather is "Avô".' },
        { statement: '"Cunhado" is your brother-in-law.', statementPt: '"Cunhado" é seu irmão por lei (irmão do cônjuge).', isTrue: true, explanation: 'Correct! Cunhado is brother-in-law, and Cunhada is sister-in-law.' }
      ]
    },
    reading: {
      level1: {
        textPt: 'Aos domingos, a família Silva se reúne na casa da vovó Maria. O almoço começa por volta das duas da tarde, com muita conversa, arroz, feijão fresco e churrasco no quintal. As crianças brincam enquanto os adultos tomam café e contam histórias.',
        textEn: 'On Sundays, the Silva family gathers at grandma Maria’s house. Lunch starts around two in the afternoon, with plenty of chatting, fresh rice and beans, and barbecue in the backyard. The children play while the adults drink coffee and share stories.',
        questions: [
          {
            question: 'Where does the family gather on Sundays?',
            options: ['At a restaurant', 'At grandma Maria’s house', 'At the beach', 'At school'],
            correctIndex: 1,
            explanation: 'The text states: "a família Silva se reúne na casa da vovó Maria".'
          }
        ]
      }
    },
    speakingPractice: {
      part1: [
        { question: 'Como se chama sua mãe?', translation: 'What is your mother\'s name?', tip: 'Pronounce "chama" like "SHAH-mah".' },
        { question: 'Você tem irmãos ou irmãs?', translation: 'Do you have brothers or sisters?', tip: 'Remember the nasal "ão" in "irmãos" — air goes through nose and mouth together.' }
      ]
    },
    buildSentence: {
      level1: [
        { portuguese: 'Minha mãe faz comida deliciosa.', english: 'My mother makes delicious food.', words: ['Minha', 'mãe', 'faz', 'comida', 'deliciosa.'] },
        { portuguese: 'Nós visitamos meus avós todo domingo.', english: 'We visit my grandparents every Sunday.', words: ['Nós', 'visitamos', 'meus', 'avós', 'todo', 'domingo.'] }
      ],
      level2: [
        { portuguese: 'Toda a família estendida se reuniu no feriado.', english: 'The entire extended family gathered on the holiday.', words: ['Toda', 'a', 'família', 'estendida', 'se', 'reuniu', 'no', 'feriado.'] }
      ]
    },
    usefulExpressions: [
      {
        expression: 'Casa de mãe',
        literalTranslation: 'Mother\'s house',
        actualMeaning: 'A comforting place where you are pampered and eat well',
        examplePt: 'Depois de uma semana puxada, nada melhor que ir pra casa de mãe.',
        exampleEn: 'After a tough week, nothing beats going to mom’s house.',
        culturalContext: 'In Brazil, moms are famous for insisting their adult children eat hearty second and third portions.'
      }
    ],
    wouldYouRather: [
      {
        questionPt: 'No domingo com a família reunida, qual sobremesa você prefere?',
        questionEn: 'On Sunday with the family gathered, which dessert do you prefer?',
        optionA: 'Pudim de leite condensado da vovó com furinhos',
        optionB: 'Pudim de leite condensado lisinho e bem cremoso',
        culturalNote: 'No Brasil, a discussão entre pudim com furinhos (mais aerado) ou lisinho (mais denso) é quase um esporte nacional nas sobremesas de domingo!'
      },
      {
        questionPt: 'Após o grande almoço de domingo, qual perrengue você encara?',
        questionEn: 'After the big Sunday lunch, which challenge would you rather face?',
        optionA: 'Lavar a montanha de louça e panelas da pia',
        optionB: 'Ouvir o tio do pavê contando a mesma piada pela décima vez',
        culturalNote: 'O "tio do pavê" é a clássica figura brasileira de família que pergunta em todo almoço: "É pavê ou pacumê?". É o clássico trocadilho tiozão do Brasil!'
      },
      {
        questionPt: 'Sobre o feijão do almoço, qual é a sua preferência suprema?',
        questionEn: 'Regarding Sunday lunch beans, what is your supreme preference?',
        optionA: 'Feijão sempre por cima do arroz',
        optionB: 'Feijão sempre por baixo do arroz',
        culturalNote: 'Colocar o feijão por cima ou por baixo do arroz divide o Brasil em dois grupos apaixonados. A maioria defende com unhas e dentes: feijão por cima!'
      }
    ]
  },

  // 2. AMIGOS (Friends & Hanging Out)
  {
    id: 'amigos',
    title: 'Friends & Hanging Out',
    titlePt: 'Amigos e Rolê',
    description: 'Learn conversational Brazilian Portuguese for meeting friends, making plans ("marcar um rolê"), and chatting at a boteco.',
    descriptionPt: 'Aprenda vocabulário sobre amizades, marcar rolê e bater papo com a galera.',
    icon: 'UserPlus',
    image: '/images/amigos.jpg',
    color: 'lavender',
    available: true,
    vocabulary: [
      {
        portuguese: 'Amigo / Amiga',
        english: 'Friend (male / female)',
        pronunciation: 'ah-MEE-goo / ah-MEE-gah',
        levels: {
          A1: { pt: 'Ele é meu melhor amigo da faculdade.', en: 'He is my best friend from college.' },
          A2: { pt: 'Nós somos amigos de infância.', en: 'We are childhood friends.' }
        }
      },
      {
        portuguese: 'A galera / O pessoal',
        english: 'The group / The guys / The crew',
        pronunciation: 'ah gah-LEH-rah',
        levels: {
          A1: { pt: 'A galera vai se encontrar no bar às oito.', en: 'The crew is meeting at the bar at eight.' },
          A2: { pt: 'Chamei todo o pessoal para o meu aniversário.', en: 'I invited everyone to my birthday.' }
        }
      },
      {
        portuguese: 'Rolê (ou rolé no RJ)',
        english: 'Hangout / Outing / Adventure (slang)',
        pronunciation: 'hoh-LEH',
        levels: {
          A1: { pt: 'Bora dar um rolê no parque?', en: 'Shall we take a stroll / hang out in the park?' },
          A2: { pt: 'Aquele rolê de ontem foi incrível!', en: 'That outing yesterday was amazing!' }
        }
      },
      {
        portuguese: 'Bater papo',
        english: 'To chat / To shoot the breeze',
        pronunciation: 'bah-TEHR PAH-poo',
        levels: {
          A1: { pt: 'Adoro sentar no café e bater papo.', en: 'I love sitting at the café and chatting.' },
          A2: { pt: 'Ficamos horas batendo papo sobre música.', en: 'We spent hours chatting about music.' }
        }
      },
      {
        portuguese: 'Boteco / Barzinho',
        english: 'Casual Brazilian bar / pub',
        pronunciation: 'boh-TEH-koo',
        levels: {
          A1: { pt: 'Vamos tomar um suco naquele boteco?', en: 'Shall we grab a juice at that casual bar?' },
          A2: { pt: 'O boteco da esquina tem petiscos maravilhosos.', en: 'The corner bar has wonderful appetizers.' }
        }
      },
      {
        portuguese: 'Rachar a conta',
        english: 'To split the bill',
        pronunciation: 'hah-SHAHR ah KOHN-tah',
        levels: {
          A1: { pt: 'Vamos rachar a conta em três?', en: 'Shall we split the bill three ways?' },
          A2: { pt: 'No Brasil, é muito comum rachar a conta igualmente.', en: 'In Brazil, splitting the bill equally is very common.' }
        }
      }
    ],
    dialogue: [
      { speaker: 'Matheus', portuguese: 'E aí, cara! Beleza? O que você vai fazer hoje à noite?', english: 'What’s up, man! All good? What are you doing tonight?', isPrimary: true },
      { speaker: 'Camila', portuguese: 'E aí! Nada planejado ainda. A galera tá querendo sair?', english: 'Hey! Nothing planned yet. Are the guys wanting to go out?', isPrimary: false },
      { speaker: 'Matheus', portuguese: 'Sim! Marcamos um rolê num boteco na Vila Madalena.', english: 'Yes! We scheduled a hangout at a bar in Vila Madalena.', isPrimary: true },
      { speaker: 'Camila', portuguese: 'Fechou! Que horas a gente se encontra lá?', english: 'Deal! What time are we meeting there?', isPrimary: false },
      { speaker: 'Matheus', portuguese: 'Por volta das oito. Te mando a localização no Zap!', english: 'Around eight. I’ll send you the location on WhatsApp!', isPrimary: true }
    ],
    flashcards: [
      { portuguese: 'E aí, beleza?', english: 'Hey, what’s up / all good?', example: 'The universal Brazilian greeting' },
      { portuguese: 'Bora marcar um rolê!', english: 'Let’s set up a hangout!', example: 'Bora = short for "vamos embora" / let’s go' },
      { portuguese: 'Vamos rachar a conta.', english: 'Let’s split the bill.', example: 'Rachar = to split / share' },
      { portuguese: 'Fechou!', english: 'It’s a deal! / Sounds good!', example: 'Super common agreement slang' },
      { portuguese: 'A galera tá animada.', english: 'The crew is hyped up.', example: 'Galera = the crew / friends' }
    ],
    quiz: [
      {
        question: 'What does the Brazilian slang "Bora dar um rolê" mean?',
        options: ['Let\'s do some intense homework', 'Let\'s go hang out / take a walk', 'Let\'s go to sleep', 'Let\'s cook lunch'],
        correctIndex: 1,
        explanation: '"Rolê" is Brazilian slang for an outing, trip, or hangout with friends.'
      },
      {
        question: 'How do Brazilians say "Deal! / Sounds like a plan!" casually?',
        options: ['Fechou!', 'Abriu!', 'Nunca!', 'Talvez não.'],
        correctIndex: 0,
        explanation: '"Fechou!" (literally "closed!") means "It\'s a deal!" or "Agreed!" in Brazilian slang.'
      },
      {
        question: 'What does "Rachar a conta" mean when dining with Brazilian friends?',
        options: ['To pay for everyone yourself', 'To run away without paying', 'To split the bill', 'To ask for a takeout box'],
        correctIndex: 2,
        explanation: '"Rachar" means to split, so "rachar a conta" means splitting the restaurant or bar bill.'
      }
    ],
    wouldYouRather: [
      {
        questionPt: 'Na hora de pagar a mesa do boteco com a galera, o que você prefere?',
        questionEn: 'When paying the boteco table with friends, which do you prefer?',
        optionA: 'Rachar a conta igualmente em partes iguais sem estresse',
        optionB: 'Fazer as contas de cada coxinha e cerveja e pagar no Pix exato',
        culturalNote: 'No boteco brasileiro, o tradicional é a "saideira" e "rachar a conta" por igual para não complicar, mas o Pix hoje permite que cada um pague exatamente o que consumiu!'
      },
      {
        questionPt: 'Para curtir o sábado à noite com os amigos, qual é o seu rolê?',
        questionEn: 'To enjoy Saturday night with friends, what is your hangout?',
        optionA: 'Mesa de plástico na calçada do boteco com cerveja gelada e porção de batata',
        optionB: 'Festa balada fechada com música eletrônica alta e fila na porta',
        culturalNote: 'A clássica mesa de plástico amarela na calçada do boteco é sagrada no Brasil: símbolo de informalidade, amizade sincera e conversa descontraída.'
      }
    ]
  },

  // 3. CORPO & SAÚDE (Body Parts & Health)
  {
    id: 'corpo',
    title: 'Body Parts & Wellness',
    titlePt: 'Partes do Corpo e Saúde',
    description: 'Learn anatomy, describing how you feel, going to the pharmacy ("drogaria"), and doctor visits in Brazil.',
    descriptionPt: 'Aprenda vocabulário sobre o corpo humano, sintomas e como se comunicar na farmácia.',
    icon: 'Accessibility',
    image: '/images/corpo.jpg',
    color: 'peach',
    available: true,
    vocabulary: [
      {
        portuguese: 'Cabeça',
        english: 'Head',
        pronunciation: 'kah-BEH-sah',
        levels: {
          A1: { pt: 'Estou com muita dor de cabeça hoje.', en: 'I have a big headache today.' },
          A2: { pt: 'Coloque um chapéu para proteger a cabeça do sol.', en: 'Put on a hat to protect your head from the sun.' }
        }
      },
      {
        portuguese: 'Olhos / Olho',
        english: 'Eyes / Eye',
        pronunciation: 'AW-lyoos / AW-lyoo',
        levels: {
          A1: { pt: 'Ela tem olhos castanhos e expressivos.', en: 'She has expressive brown eyes.' }
        }
      },
      {
        portuguese: 'Coração',
        english: 'Heart',
        pronunciation: 'koh-rah-SOWN (nasal)',
        levels: {
          A1: { pt: 'Meu coração bate forte quando corro.', en: 'My heart beats fast when I run.' }
        }
      },
      {
        portuguese: 'Braço / Perna',
        english: 'Arm / Leg',
        pronunciation: 'BRAH-soo / PEHR-nah',
        levels: {
          A1: { pt: 'Machuquei o braço direito na academia.', en: 'I hurt my right arm at the gym.' },
          A2: { pt: 'Minhas pernas estão cansadas da caminhada.', en: 'My legs are tired from the hike.' }
        }
      },
      {
        portuguese: 'Farmácia / Drogaria',
        english: 'Pharmacy / Drugstore',
        pronunciation: 'fahr-MAH-see-ah',
        levels: {
          A1: { pt: 'Tem uma farmácia aberta 24 horas aqui perto?', en: 'Is there a 24-hour pharmacy open nearby?' },
          A2: { pt: 'Preciso comprar um protetor solar na drogaria.', en: 'I need to buy sunscreen at the drugstore.' }
        }
      }
    ],
    dialogue: [
      { speaker: 'Paciente', portuguese: 'Bom dia, doutor. Estou me sentindo mal desde ontem.', english: 'Good morning, doctor. I’ve been feeling unwell since yesterday.', isPrimary: true },
      { speaker: 'Médico', portuguese: 'Bom dia! O que você está sentindo? Tem febre ou dor de cabeça?', english: 'Good morning! What symptoms do you have? Fever or headache?', isPrimary: false },
      { speaker: 'Paciente', portuguese: 'Sim, muita dor de cabeça e dor no corpo todo.', english: 'Yes, lots of headache and body aches all over.', isPrimary: true },
      { speaker: 'Médico', portuguese: 'Vou medir sua pressão e passar uma receita de remédio.', english: 'I will check your blood pressure and write a prescription.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Estou com dor de cabeça.', english: 'I have a headache.', example: 'Pattern: "Estar com dor de [part]"' },
      { portuguese: 'Preciso ir à farmácia.', english: 'I need to go to the pharmacy.', example: 'Brazilian drugstores sell medicine & toiletries' },
      { portuguese: 'Melhoras!', english: 'Get well soon!', example: 'Universal well-wishing expression' }
    ],
    quiz: [
      {
        question: 'How do you say "I have a stomach ache" naturally in Brazilian Portuguese?',
        options: ['Estou com dor de barriga.', 'Tenho estômago machucado.', 'Sou dor no corpo.', 'Faço dor de dente.'],
        correctIndex: 0,
        explanation: 'Brazilians use "estar com dor de [body part]" to express pain or aches.'
      }
    ]
  },

  // 4. CASA & TAREFAS (Home & Chores)
  {
    id: 'casa',
    title: 'Home & Daily Chores',
    titlePt: 'Casa e Faxina',
    description: 'Master rooms of the house, household cleaning ("fazer uma faxina"), and Brazilian domestic daily routines.',
    descriptionPt: 'Vocabulário sobre cômodos da casa, eletrodomésticos e o hábito brasileiro da faxina.',
    icon: 'Home',
    image: '/images/casa_faxina.jpg',
    color: 'mint',
    available: true,
    vocabulary: [
      {
        portuguese: 'Quarto',
        english: 'Bedroom',
        pronunciation: 'KWAHR-too',
        levels: {
          A1: { pt: 'Meu quarto é bem iluminado e arejado.', en: 'My bedroom is well-lit and breezy.' }
        }
      },
      {
        portuguese: 'Cozinha',
        english: 'Kitchen',
        pronunciation: 'koh-ZEE-nyah',
        levels: {
          A1: { pt: 'A cozinha tem cheiro de café fresco.', en: 'The kitchen smells like fresh coffee.' }
        }
      },
      {
        portuguese: 'Banheiro',
        english: 'Bathroom',
        pronunciation: 'bahn-YAY-roo',
        levels: {
          A1: { pt: 'Onde fica o banheiro, por favor?', en: 'Where is the bathroom, please?' }
        }
      },
      {
        portuguese: 'Fazer uma faxina',
        english: 'To do a deep cleaning',
        pronunciation: 'fah-ZEHR OO-mah fah-SHEE-nah',
        levels: {
          A1: { pt: 'Sábado de manhã é dia de fazer faxina!', en: 'Saturday morning is deep cleaning day!' }
        }
      },
      {
        portuguese: 'Lavar a louça',
        english: 'To wash the dishes',
        pronunciation: 'lah-VAHR ah LOW-sah',
        levels: {
          A1: { pt: 'Quem cozinha não lava a louça.', en: 'Whoever cooks doesn’t wash the dishes.' }
        }
      }
    ],
    dialogue: [
      { speaker: 'Gabriel', portuguese: 'Hoje é dia de faxina geral na casa!', english: 'Today is whole house cleaning day!', isPrimary: true },
      { speaker: 'Beatriz', portuguese: 'Pode deixar! Eu limpo a cozinha e lavo a louça.', english: 'Leave it to me! I’ll clean the kitchen and do dishes.', isPrimary: false },
      { speaker: 'Gabriel', portuguese: 'Beleza, eu varro a sala e passo pano no chão dos quartos.', english: 'Great, I’ll sweep the living room and mop the bedrooms.', isPrimary: true }
    ],
    flashcards: [
      { portuguese: 'Dia de faxina', english: 'Cleaning day', example: 'A beloved Brazilian ritual with upbeat music!' },
      { portuguese: 'Lavar a louça', english: 'To wash the dishes', example: 'Essential household chore' },
      { portuguese: 'Passar pano no chão', english: 'To mop the floor', example: 'Standard Brazilian floor cleaning technique' }
    ],
    quiz: [
      {
        question: 'What is the Brazilian cultural term for a thorough deep clean of the home?',
        options: ['Faxina', 'Festa', 'Férias', 'Feira'],
        correctIndex: 0,
        explanation: '"Faxina" is the iconic Brazilian term for a deep, sparkling house cleaning.'
      }
    ]
  },

  // 5. CASA 2 (Home Appliances & Community)
  {
    id: 'casa2',
    title: 'Appliances & Neighbors',
    titlePt: 'Eletrodomésticos e Vizinhos',
    description: 'Expand your domestic Portuguese with appliances, apartment building etiquette, and Brazilian neighborhood life.',
    descriptionPt: 'Mais vocabulário sobre a casa, eletrodomésticos, condomínio e boa convivência.',
    icon: 'Sparkles',
    image: '/images/vizinhos.jpg',
    color: 'emerald',
    available: true,
    vocabulary: [
      {
        portuguese: 'Geladeira',
        english: 'Refrigerator / Fridge',
        pronunciation: 'zheh-lah-DAY-rah',
        levels: { A1: { pt: 'Tem água gelada na geladeira.', en: 'There is cold water in the fridge.' } }
      },
      {
        portuguese: 'Porteiro / Portaria',
        english: 'Doorman / Concierge desk',
        pronunciation: 'pohr-TAY-roo',
        levels: { A1: { pt: 'O porteiro recebeu a encomenda do correio.', en: 'The doorman received the mail package.' } }
      },
      {
        portuguese: 'Vizinho / Vizinha',
        english: 'Neighbor (male / female)',
        pronunciation: 'vee-ZEE-nyoo',
        levels: { A1: { pt: 'Minha vizinha me emprestou um pouco de açúcar.', en: 'My neighbor lent me a little sugar.' } }
      }
    ],
    dialogue: [
      { speaker: 'Morador', portuguese: 'Boa tarde, Seu Jorge! Chegou alguma encomenda pra mim?', english: 'Good afternoon, Mr. Jorge! Did any package arrive for me?', isPrimary: true },
      { speaker: 'Porteiro', portuguese: 'Boa tarde! Sim, deixaram uma caixa aqui na portaria.', english: 'Good afternoon! Yes, they left a box here at the front desk.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Água gelada na geladeira', english: 'Cold water in the fridge', example: 'Essential in the Brazilian climate' },
      { portuguese: 'Falar com o porteiro', english: 'To speak with the doorman', example: 'Everyday apartment life in Brazil' }
    ],
    quiz: [
      {
        question: 'In a Brazilian apartment building, who is the "porteiro"?',
        options: ['The landlord', 'The doorman / concierge', 'The plumber', 'The mail delivery person'],
        correctIndex: 1,
        explanation: 'The "porteiro" manages the entrance gate and packages in Brazilian residential buildings.'
      }
    ]
  },

  // 6. REVISÃO 1 (Review 1)
  {
    id: 'revisao-1',
    title: 'Review 1: Foundations',
    titlePt: 'Revisão 1: Fundamentos',
    description: 'Consolidate everything learned across Family, Friends, Body, and Home with comprehensive comprehension challenges.',
    descriptionPt: 'Revisão completa dos primeiros tópicos: família, amigos, corpo humano e rotina da casa.',
    icon: 'Star',
    image: '/images/revisao1.jpg',
    color: 'amber',
    available: true,
    vocabulary: [
      {
        portuguese: 'Revisão e Prática',
        english: 'Review & Practice',
        levels: { A1: { pt: 'A repetição diária consolida o aprendizado.', en: 'Daily repetition consolidates learning.' } }
      }
    ],
    dialogue: [
      { speaker: 'Professor', portuguese: 'Parabéns por completar o primeiro bloco! Como você se sente?', english: 'Congratulations on completing block one! How do you feel?', isPrimary: true },
      { speaker: 'Aluno', portuguese: 'Muito bem! Já consigo falar sobre minha família e rotina em português.', english: 'Great! I can already talk about my family and routine in Portuguese.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Pais = Parents (Mother & Father)', english: 'Remember: Parentes = Relatives', example: 'Crucial distinction' },
      { portuguese: 'Bora marcar um rolê!', english: 'Let\'s set up an outing!', example: 'Conversational mastery' }
    ],
    quiz: [
      {
        question: 'Which of the following sentences is grammatically and culturally natural in Brazilian Portuguese?',
        options: [
          'No domingo, minha família faz churrasco e bate papo.',
          'No domingo, meus parentes são minha mãe e meu pai.',
          'Eu faxino na geladeira todos os dias.',
          'Bora marcar um rolê no hospital sem dor.'
        ],
        correctIndex: 0,
        explanation: '"No domingo, minha família faz churrasco e bate papo" is natural, accurate, and culturally authentic.'
      }
    ]
  },

  // 7. HOBBIES & SAMBA
  {
    id: 'hobbies',
    title: 'Hobbies, Music & Samba',
    titlePt: 'Hobbies, Música e Lazer',
    description: 'Discover Brazilian pastimes: playing cavaquinho or guitar, dancing samba, beach walks, and relaxing in a hammock.',
    descriptionPt: 'Expresse seus passatempos: tocar violão, dançar forró e samba, ler na rede e relaxar.',
    icon: 'Palette',
    image: '/images/hobbies.jpg',
    color: 'amber',
    available: true,
    vocabulary: [
      {
        portuguese: 'Tocar violão',
        english: 'To play acoustic guitar',
        pronunciation: 'toh-KAHR vee-oh-LOWN',
        levels: { A1: { pt: 'Ele toca violão na roda de samba.', en: 'He plays guitar in the samba circle.' } }
      },
      {
        portuguese: 'Dançar samba e forró',
        english: 'To dance samba and forró',
        pronunciation: 'dahn-SAHR SAHM-bah ee foh-HAW',
        levels: { A1: { pt: 'Dançar forró a dois é muito popular no Brasil.', en: 'Partner dancing forró is very popular in Brazil.' } }
      },
      {
        portuguese: 'Deitar na rede',
        english: 'To lie in a hammock',
        pronunciation: 'day-TAHR nah HEH-jee',
        levels: { A1: { pt: 'Adoro deitar na rede no fim de tarde.', en: 'I love resting in the hammock in the late afternoon.' } }
      }
    ],
    dialogue: [
      { speaker: 'Thiago', portuguese: 'O que você curte fazer nos finais de semana?', english: 'What do you enjoy doing on weekends?', isPrimary: true },
      { speaker: 'Marina', portuguese: 'Eu adoro tocar violão e ir à praia tomar água de coco.', english: 'I love playing acoustic guitar and going to the beach for coconut water.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Tocar violão', english: 'To play acoustic guitar', example: 'Note: "Guitarra" in Portuguese specifically means electric guitar!' },
      { portuguese: 'Deitar na rede', english: 'To lie in the hammock', example: 'Beloved relaxation icon across Brazil' }
    ],
    quiz: [
      {
        question: 'In Portuguese, what is the difference between "Violão" and "Guitarra"?',
        options: [
          '"Violão" is the acoustic nylon/steel guitar; "Guitarra" is the electric guitar.',
          '"Violão" is a violin, and "Guitarra" is an acoustic guitar.',
          'They are completely identical words.',
          '"Violão" is a cello.'
        ],
        correctIndex: 0,
        explanation: 'In Brazil, "violão" means an acoustic guitar, while "guitarra" is an electric guitar!'
      }
    ]
  },

  // 8. ESPORTES & FUTEBOL
  {
    id: 'esportes',
    title: 'Football Culture & Sports',
    titlePt: 'Futebol e Esportes',
    description: 'Dive into the heart of Brazilian culture: football ("futebol"), beach volleyball, capoeira, and cheering at Maracanã.',
    descriptionPt: 'Vocabulário esportivo essencial: futebol, pelada com os amigos, capoeira e torcida.',
    icon: 'Trophy',
    image: '/images/futebol.jpg',
    color: 'orange',
    available: true,
    vocabulary: [
      {
        portuguese: 'Futebol / Pelada',
        english: 'Soccer / Casual pickup match',
        pronunciation: 'foo-chee-BAWL / peh-LAH-dah',
        levels: { A1: { pt: 'Toda quarta tem pelada com os colegas.', en: 'Every Wednesday there is a pickup match with colleagues.' } }
      },
      {
        portuguese: 'Fazer um gol / Golaço',
        english: 'To score a goal / Spectacular goal',
        pronunciation: 'goh-LAH-soo',
        levels: { A1: { pt: 'Ele marcou um golaço de fora da área!', en: 'He scored a spectacular goal from outside the box!' } }
      },
      {
        portuguese: 'Torcedor / Torcida',
        english: 'Fan / Cheering crowd',
        pronunciation: 'tohr-see-DAH',
        levels: { A1: { pt: 'A torcida cantou o jogo inteiro no estádio.', en: 'The fans sang the entire match in the stadium.' } }
      },
      {
        portuguese: 'Capoeira',
        english: 'Capoeira (Afro-Brazilian martial art)',
        pronunciation: 'kah-poo-AY-rah',
        levels: { A1: { pt: 'A capoeira combina arte marcial, dança e música.', en: 'Capoeira combines martial art, dance, and music.' } }
      }
    ],
    dialogue: [
      { speaker: 'Danilo', portuguese: 'Você torce para qual time de futebol no Brasil?', english: 'Which soccer team do you root for in Brazil?', isPrimary: true },
      { speaker: 'Alex', portuguese: 'Eu acompanho o Flamengo, e você?', english: 'I follow Flamengo, and you?', isPrimary: false },
      { speaker: 'Danilo', portuguese: 'Sou corintiano roxo! Vamos ao estádio domingo?', english: 'I’m a die-hard Corinthians fan! Shall we go to the stadium Sunday?', isPrimary: true }
    ],
    flashcards: [
      { portuguese: 'Pelada de fim de semana', english: 'Weekend casual pickup game', example: 'A staple social event in Brazil' },
      { portuguese: 'Torcer para um time', english: 'To root for a team', example: '"Eu torço para..."' }
    ],
    quiz: [
      {
        question: 'What is a "pelada" in Brazilian slang when talking about sports?',
        options: ['A professional FIFA final', 'A casual, informal pickup soccer game with friends', 'A swimming contest', 'A yoga lesson'],
        correctIndex: 1,
        explanation: 'A "pelada" is an informal pickup soccer game played on sand, grass, or streets across Brazil.'
      }
    ],
    wouldYouRather: [
      {
        questionPt: 'Para viver a emoção do futebol brasileiro, qual experiência você escolhe?',
        questionEn: 'To experience the thrill of Brazilian soccer, which experience do you choose?',
        optionA: 'Assistir a um clássico no Maracanã lotado com a torcida cantando sem parar',
        optionB: 'Jogar uma pelada descalço na praia de Copacabana ao pôr do sol',
        culturalNote: 'O Maracanã com 70 mil pessoas cantando é uma experiência quase religiosa, enquanto a pelada na praia é a essência pura e descontraída do futebol-arte brasileiro.'
      }
    ]
  },

  // 9. SUPERMERCADO & FEIRA LIVRE
  {
    id: 'supermercado',
    title: 'Supermarket & Street Market',
    titlePt: 'Supermercado e Feira Livre',
    description: 'Experience buying groceries in Brazil: tropical fruits, weighing produce, and eating pastel de feira with sugarcane juice.',
    descriptionPt: 'Aprenda a fazer compras no mercado, pesar legumes e saborear pastel de feira com caldo de cana.',
    icon: 'ShoppingCart',
    image: '/images/supermercado.jpg',
    color: 'emerald',
    available: true,
    vocabulary: [
      {
        portuguese: 'Feira livre',
        english: 'Open-air street market',
        pronunciation: 'FAY-rah LEE-vree',
        levels: { A1: { pt: 'Toda quinta-feira tem feira livre na minha rua.', en: 'Every Thursday there is a street market on my street.' } }
      },
      {
        portuguese: 'Pastel de feira e caldo de cana',
        english: 'Deep-fried stuffed pastry and sugarcane juice',
        pronunciation: 'pahs-TEHL / KAHL-doo jee KAH-nah',
        levels: { A1: { pt: 'Ir à feira e comer pastel de carne é tradição.', en: 'Going to the street market and eating meat pastel is tradition.' } }
      },
      {
        portuguese: 'Frutas tropicais (Manga, Maracujá, Goiaba, Caju)',
        english: 'Tropical fruits (Mango, Passionfruit, Guava, Cashew fruit)',
        levels: { A1: { pt: 'O maracujá brasileiro é muito doce e aromático.', en: 'Brazilian passion fruit is very sweet and aromatic.' } }
      },
      {
        portuguese: 'Carrinho de compras',
        english: 'Shopping cart',
        pronunciation: 'kah-HEEN-nyoo jee KOHM-prahs',
        levels: { A1: { pt: 'Pegue um carrinho de compras na entrada.', en: 'Grab a shopping cart at the entrance.' } }
      }
    ],
    dialogue: [
      { speaker: 'Feirante', portuguese: 'Olha o tomate fresquinho! Quer provar uma manga doce, freguês?', english: 'Look at the fresh tomatoes! Want to taste a sweet mango, customer?', isPrimary: false },
      { speaker: 'Cliente', portuguese: 'Quero sim! Me dá também um pastel de queijo e um caldo de cana com limão.', english: 'Yes please! Also give me a cheese pastel and sugarcane juice with lime.', isPrimary: true },
      { speaker: 'Feirante', portuguese: 'Sai no capricho agora mesmo!', english: 'Coming right up, made with extra care!', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Caldo de cana com limão', english: 'Fresh sugarcane juice with lime', example: 'The classic accompaniment to pastel de feira' },
      { portuguese: 'Quanto custa o quilo?', english: 'How much does a kilogram cost?', example: 'Essential question when buying produce' }
    ],
    quiz: [
      {
        question: 'What is the quintessential Brazilian snack combo at an open-air "feira livre"?',
        options: ['Pastel de feira com caldo de cana', 'Hambúrguer com milkshake', 'Pizza com refrigerante', 'Sushi com chá gelado'],
        correctIndex: 0,
        explanation: 'The hot crispy pastel paired with ice-cold sugarcane juice (caldo de cana) is Brazil\'s supreme street market ritual.'
      }
    ]
  },

  // 10. COMPRAS & FEIRINHA
  {
    id: 'compras',
    title: 'Shopping & Asking for Discounts',
    titlePt: 'Compras e Negociação',
    description: 'Learn clothing vocabulary, trying clothes in the fitting room ("provador"), and asking for discounts ("tem desconto no Pix?").',
    descriptionPt: 'Vocabulário de compras, provador de roupas e formas naturais de negociar desconto.',
    icon: 'ShoppingBag',
    image: '/images/compras.jpg',
    color: 'sky',
    available: true,
    vocabulary: [
      {
        portuguese: 'Provador',
        english: 'Fitting room / Dressing room',
        pronunciation: 'proh-vah-DOHR',
        levels: { A1: { pt: 'Posso experimentar essa camisa no provador?', en: 'May I try on this shirt in the fitting room?' } }
      },
      {
        portuguese: 'Tem desconto no Pix?',
        english: 'Is there a discount if I pay via Pix (instant transfer)?',
        pronunciation: 'tehng deh-SKOHN-too noo PEEX?',
        levels: { A1: { pt: 'Quase todas as lojas no Brasil dão 5% a 10% de desconto no Pix.', en: 'Almost all Brazilian stores give 5% to 10% discount on Pix.' } }
      },
      {
        portuguese: 'Tamanho (P, M, G, GG)',
        english: 'Size (Small, Medium, Large, Extra Large)',
        levels: { A1: { pt: 'Você tem essa calça no tamanho M?', en: 'Do you have these pants in size Medium?' } }
      },
      {
        portuguese: 'Pagar com cartão de crédito / débito',
        english: 'To pay with credit / debit card',
        levels: { A1: { pt: 'No Brasil, perguntam sempre: "Crédito ou débito?"', en: 'In Brazil, they always ask: "Credit or debit?"' } }
      }
    ],
    dialogue: [
      { speaker: 'Vendedora', portuguese: 'Olá! Posso ajudar a encontrar seu tamanho?', english: 'Hello! Can I help you find your size?', isPrimary: false },
      { speaker: 'Cliente', portuguese: 'Oi! Gostei dessa camiseta. Tem tamanho G?', english: 'Hi! I liked this t-shirt. Do you have size Large?', isPrimary: true },
      { speaker: 'Vendedora', portuguese: 'Temos sim! O provador fica logo ali no fundo.', english: 'Yes we do! The fitting room is right in the back.', isPrimary: false },
      { speaker: 'Cliente', portuguese: 'Ficou ótima! Se eu pagar no Pix, rola um desconto?', english: 'It fit great! If I pay with Pix, is there a discount?', isPrimary: true },
      { speaker: 'Vendedora', portuguese: 'Com certeza, consigo fazer 10% de desconto à vista!', english: 'Certainly, I can do 10% off for instant payment!', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Crédito ou débito?', english: 'Credit or debit?', example: 'The ubiquitous payment question in Brazil' },
      { portuguese: 'Tem desconto?', english: 'Is there a discount?', example: 'Very common and polite to ask' }
    ],
    quiz: [
      {
        question: 'What do the letters "P, M, G" stand for on Brazilian clothing tags?',
        options: ['Pequeno, Médio, Grande (Small, Medium, Large)', 'Preto, Marrom, Grafite', 'Pouco, Muito, Gigante', 'Pronto, Mais, Grátis'],
        correctIndex: 0,
        explanation: 'P = Pequeno (Small), M = Médio (Medium), G = Grande (Large), GG = Extra Large.'
      }
    ]
  },

  // 11. PROFISSÕES & TRABALHO
  {
    id: 'profissoes',
    title: 'Work & Professional Life',
    titlePt: 'Profissões e Trabalho',
    description: 'Learn career titles, workplace conversations, remote work terms ("home office"), and networking in Brazil.',
    descriptionPt: 'Vocabulário profissional: carreiras, reuniões, home office e o mercado de trabalho.',
    icon: 'Briefcase',
    image: '/images/profissoes.jpg',
    color: 'indigo',
    available: true,
    vocabulary: [
      {
        portuguese: 'Trabalho / Emprego',
        english: 'Work / Job',
        pronunciation: 'trah-BAH-lyoo / ehm-PRAY-goo',
        levels: { A1: { pt: 'Eu trabalho com desenvolvimento de software.', en: 'I work with software development.' } }
      },
      {
        portuguese: 'Fazer home office',
        english: 'To work from home (remote work)',
        levels: { A1: { pt: 'Hoje em dia, muitos brasileiros trabalham de home office.', en: 'Nowadays, many Brazilians work from home.' } }
      },
      {
        portuguese: 'Reunião',
        english: 'Meeting',
        pronunciation: 'hey-oo-nee-OWN (nasal)',
        levels: { A1: { pt: 'Tenho uma reunião com a diretoria às dez horas.', en: 'I have a meeting with the board at ten o’clock.' } }
      },
      {
        portuguese: 'Professor / Professora',
        english: 'Teacher / Professor',
        levels: { A1: { pt: 'Minha mãe é professora de biologia.', en: 'My mother is a biology teacher.' } }
      }
    ],
    dialogue: [
      { speaker: 'Carla', portuguese: 'Qual é a sua profissão, Lucas?', english: 'What is your profession, Lucas?', isPrimary: true },
      { speaker: 'Lucas', portuguese: 'Eu sou engenheiro civil. Trabalho numa empresa em São Paulo.', english: 'I am a civil engineer. I work at a firm in São Paulo.', isPrimary: false },
      { speaker: 'Carla', portuguese: 'Que bacana! Você trabalha presencial ou híbrido?', english: 'How cool! Do you work on-site or hybrid?', isPrimary: true },
      { speaker: 'Lucas', portuguese: 'Híbrido. Três dias na firma e dois dias em home office.', english: 'Hybrid. Three days at the office and two days from home.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Sou desenvolvedor(a) de software.', english: 'I am a software engineer / developer.', example: 'Notice: Brazilians don’t need an article before professions (Sou médico, NOT Sou um médico)' },
      { portuguese: 'Fazer home office', english: 'To work remotely', example: 'Loanword universally used in Brazil' }
    ],
    quiz: [
      {
        question: 'How do you say "I am a doctor" correctly in Brazilian Portuguese?',
        options: ['Eu sou um médico.', 'Eu sou médico.', 'Eu faço médico.', 'Eu tenho médico.'],
        correctIndex: 1,
        explanation: 'In Portuguese, you omit the indefinite article when stating your profession: "Eu sou médico" (or "médica").'
      }
    ]
  },

  // 12. REVISÃO 2 (Review 2)
  {
    id: 'revisao-2',
    title: 'Review 2: Everyday Immersion',
    titlePt: 'Revisão 2: Imersão Prática',
    description: 'Consolidate Hobbies, Sports, Markets, Shopping, and Professions into confident conversational flow.',
    descriptionPt: 'Revisão intermediária integrando esportes, feiras, compras e ambiente de trabalho.',
    icon: 'Star',
    image: '/images/revisao2.jpg',
    color: 'amber',
    available: true,
    vocabulary: [
      {
        portuguese: 'Imersão no Cotidiano',
        english: 'Daily Immersion',
        levels: { A1: { pt: 'Praticar com situações reais acelera a fluência.', en: 'Practicing real scenarios accelerates fluency.' } }
      }
    ],
    dialogue: [
      { speaker: 'Mentor', portuguese: 'Você já consegue se virar na feira, fazer compras e falar sobre trabalho!', english: 'You can already manage at the market, go shopping, and talk about work!', isPrimary: true },
      { speaker: 'Estudante', portuguese: 'Estou amando aprender as expressões reais do dia a dia no Brasil.', english: 'I’m loving learning authentic daily expressions in Brazil.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Pastel de feira com caldo de cana', english: 'Street market snack perfection', example: 'Unforgettable culinary tradition' },
      { portuguese: 'Crédito ou débito?', english: 'Credit or debit?', example: 'Card machine prompt' }
    ],
    quiz: [
      {
        question: 'Which phrase is used to ask for a discount when paying with instant digital bank transfer in Brazil?',
        options: ['Tem desconto no Pix?', 'Pode parcelar em cheque?', 'Aceita escambo?', 'Faz fiado?'],
        correctIndex: 0,
        explanation: '"Tem desconto no Pix?" is the modern, smart question asked everywhere from bakeries to shopping malls.'
      }
    ]
  },

  // 13. LUGARES PÚBLICOS & CIDADE
  {
    id: 'lugares',
    title: 'Public Places & City Life',
    titlePt: 'Lugares Públicos e a Cidade',
    description: 'Navigate Brazilian cities: the subway ("metrô"), bus stations, historic squares, and corner bakeries ("padarias").',
    descriptionPt: 'Vocabulário para se locomover pela cidade, pedir informações e frequentar a padaria.',
    icon: 'MapPin',
    image: '/images/lugares_publicos.jpg',
    color: 'cyan',
    available: true,
    vocabulary: [
      {
        portuguese: 'Padaria (Padoca)',
        english: 'Bakery / Deli (cultural institution in Brazil)',
        pronunciation: 'pah-dah-REE-ah',
        levels: { A1: { pt: 'Todo brasileiro toma café com pão na chapa na padaria.', en: 'Every Brazilian has coffee with toasted French bread at the bakery.' } }
      },
      {
        portuguese: 'Estação de metrô',
        english: 'Subway station',
        pronunciation: 'ehs-tah-SOWN jee meh-TROW',
        levels: { A1: { pt: 'O metrô de São Paulo é limpo, seguro e rápido.', en: 'The São Paulo subway is clean, safe, and fast.' } }
      },
      {
        portuguese: 'Pedir informação / Onde fica...?',
        english: 'To ask for directions / Where is...?',
        levels: { A1: { pt: 'Com licença, onde fica a praça central?', en: 'Excuse me, where is the central square?' } }
      },
      {
        portuguese: 'Pão na chapa com pingado',
        english: 'Grilled buttered bread with milk coffee (classic breakfast)',
        levels: { A1: { pt: 'Um pão na chapa com pingado é o café da manhã paulistano clássico.', en: 'Grilled buttered bread with milk coffee is the classic São Paulo breakfast.' } }
      }
    ],
    dialogue: [
      { speaker: 'Turista', portuguese: 'Com licença! Onde fica a estação de metrô mais próxima?', english: 'Excuse me! Where is the nearest subway station?', isPrimary: true },
      { speaker: 'Paulistano', portuguese: 'Siga direto por duas quadras e vire à direita depois da padaria.', english: 'Go straight for two blocks and turn right after the bakery.', isPrimary: false },
      { speaker: 'Turista', portuguese: 'Muito obrigado pela ajuda!', english: 'Thank you very much for your help!', isPrimary: true },
      { speaker: 'Paulistano', portuguese: 'Imagina! Bom passeio!', english: 'Don’t mention it! Have a great stroll!', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Com licença, onde fica...?', english: 'Excuse me, where is...?', example: 'The polite opener for asking directions' },
      { portuguese: 'Pão na chapa e pingado', english: 'Grilled bread & coffee with a splash of milk', example: 'The ultimate Brazilian bakery breakfast order' },
      { portuguese: 'Imagina!', english: 'Don’t mention it! / You’re welcome!', example: 'Casual Brazilian substitute for "de nada"' }
    ],
    quiz: [
      {
        question: 'What is a "pingado" at a Brazilian padaria (bakery)?',
        options: [
          'Coffee with a small splash of warm milk',
          'A tropical passionfruit cocktail',
          'A large cake slice',
          'A glass of tap water'
        ],
        correctIndex: 0,
        explanation: 'A "pingado" is black coffee with a "drop" (pingo) of milk, served in an American-style glass cup at the counter.'
      }
    ]
  },

  // 14. ANIMAIS & FAUNA BRASILEIRA
  {
    id: 'animais',
    title: 'Animals & Brazilian Wildlife',
    titlePt: 'Animais e Fauna Brasileira',
    description: 'Learn about domestic pets and Brazil\'s world-famous wildlife: capybaras, golden lion tamarins, and the iconic caramel mutt dog.',
    descriptionPt: 'Animais de estimação e a rica biodiversidade brasileira: capivara, vira-lata caramelo e tucano.',
    icon: 'PawPrint',
    image: '/images/animais.jpg',
    color: 'stone',
    available: true,
    vocabulary: [
      {
        portuguese: 'Capivara',
        english: 'Capybara (largest rodent, peaceful Brazilian icon)',
        pronunciation: 'kah-pee-VAH-rah',
        levels: { A1: { pt: 'As capivaras passeiam tranquilamente pelos parques de Curitiba.', en: 'Capybaras stroll peacefully through the parks of Curitiba.' } }
      },
      {
        portuguese: 'Vira-lata caramelo',
        english: 'Caramel mixed-breed dog (beloved unofficial Brazilian mascot)',
        levels: { A1: { pt: 'Todo bairro brasileiro tem um simpático vira-lata caramelo.', en: 'Every Brazilian neighborhood has a friendly caramel mutt.' } }
      },
      {
        portuguese: 'Mico-leão-dourado',
        english: 'Golden lion tamarin',
        levels: { A1: { pt: 'O mico-leão-dourado estampa a nota de vinte reais.', en: 'The golden lion tamarin is depicted on the twenty-real bill.' } }
      },
      {
        portuguese: 'Arara-azul e Tucano',
        english: 'Blue macaw and Toucan',
        levels: { A1: { pt: 'O tucano tem um bico grande e cores deslumbrantes.', en: 'The toucan has a large beak and stunning colors.' } }
      }
    ],
    dialogue: [
      { speaker: 'Estrangeiro', portuguese: 'Olha que animal enorme na beira do lago! É um urso?', english: 'Look what huge animal at the lakeshore! Is it a bear?', isPrimary: true },
      { speaker: 'Guia', portuguese: 'Haha, não! É uma capivara, o maior roedor do mundo. Elas são muito dóceis.', english: 'Haha, no! That’s a capybara, the largest rodent in the world. They are very docile.', isPrimary: false },
      { speaker: 'Estrangeiro', portuguese: 'Que linda! Elas são tão calmas.', english: 'How beautiful! They are so calm.', isPrimary: true }
    ],
    flashcards: [
      { portuguese: 'Vira-lata caramelo', english: 'Beloved caramel mixed-breed dog', example: 'A national meme and cultural treasure in Brazil' },
      { portuguese: 'Capivara pacífica', english: 'Peaceful capybara', example: 'Known worldwide for their calm demeanor' }
    ],
    quiz: [
      {
        question: 'Which dog is affectionately considered the unofficial mascot of Brazilian pop culture?',
        options: ['O vira-lata caramelo', 'O poodle gigante', 'O husky siberiano', 'O bulldog francês'],
        correctIndex: 0,
        explanation: 'The "vira-lata caramelo" (caramel mixed-breed dog) is an ubiquitous, cherished symbol across all of Brazil.'
      }
    ]
  },

  // 15. CULINÁRIA BRASILEIRA
  {
    id: 'culinaria',
    title: 'Brazilian Gastronomy',
    titlePt: 'Culinária Brasileira Autêntica',
    description: 'Explore culinary treasures: feijoada, pão de queijo quentinho, coxinha com catupiry, brigadeiro, and moqueca.',
    descriptionPt: 'Aprenda vocabulário culinário, receitas e pratos emblemáticos da gastronomia do Brasil.',
    icon: 'ChefHat',
    image: '/images/culinaria.jpg',
    color: 'red',
    available: true,
    vocabulary: [
      {
        portuguese: 'Feijoada completa',
        english: 'Feijoada (black bean stew with pork, rice, farofa, collard greens & orange)',
        pronunciation: 'fay-zhoo-AH-dah',
        levels: { A1: { pt: 'A feijoada de sábado com os amigos é inesquecível.', en: 'Saturday feijoada with friends is unforgettable.' } }
      },
      {
        portuguese: 'Pão de queijo quentinho',
        english: 'Warm cheese bread (crispy outside, chewy inside)',
        pronunciation: 'pown jee KAY-zhoo kehn-CHEEN-nyoo',
        levels: { A1: { pt: 'O pão de queijo de Minas Gerais com café é a melhor combinação.', en: 'Minas Gerais cheese bread with coffee is the best combination.' } }
      },
      {
        portuguese: 'Coxinha com catupiry',
        english: 'Shredded chicken croquette with creamy Brazilian cheese',
        pronunciation: 'koh-SHEEN-nyah',
        levels: { A1: { pt: 'A coxinha é o salgado mais famoso das lanchonetes.', en: 'The coxinha is the most famous savory pastry in snack bars.' } }
      },
      {
        portuguese: 'Brigadeiro',
        english: 'Brigadeiro (chocolate fudge truffle rolled in sprinkles)',
        pronunciation: 'bree-gah-DAY-roo',
        levels: { A1: { pt: 'Festa de aniversário no Brasil não existe sem brigadeiro.', en: 'A birthday party in Brazil does not exist without brigadeiros.' } }
      }
    ],
    dialogue: [
      { speaker: 'Garçom', portuguese: 'Boa tarde! O que vão pedir para almoçar hoje?', english: 'Good afternoon! What will you order for lunch today?', isPrimary: false },
      { speaker: 'Cliente', portuguese: 'Vamos querer a feijoada para duas pessoas com couve, farofa e laranja.', english: 'We’d like the feijoada for two with collard greens, farofa, and orange.', isPrimary: true },
      { speaker: 'Garçom', portuguese: 'Perfeito! E para beber, uma caipirinha de limão tradicional?', english: 'Perfect! And to drink, a traditional lime caipirinha?', isPrimary: false },
      { speaker: 'Cliente', portuguese: 'Com certeza! Feijoada pede caipirinha.', english: 'Certainly! Feijoada calls for caipirinha.', isPrimary: true }
    ],
    flashcards: [
      { portuguese: 'Pão de queijo quentinho', english: 'Warm cheese bread', example: 'Made from cassava starch (polvilho) and cured cheese' },
      { portuguese: 'Brigadeiro de panela', english: 'Stovetop brigadeiro fudge', example: 'Eaten with a spoon straight from the pan on movie nights' },
      { portuguese: 'Feijoada com farofa', english: 'Feijoada with seasoned cassava flour', example: 'Farofa adds essential crunch' }
    ],
    quiz: [
      {
        question: 'What are the core ingredients of the beloved Brazilian sweet "Brigadeiro"?',
        options: [
          'Condensed milk, cocoa powder/chocolate, and butter',
          'Flour, eggs, and heavy cream',
          'Mashed sweet potatoes and cinnamon',
          'Peanut butter and honey'
        ],
        correctIndex: 0,
        explanation: 'Brigadeiro is made by simmering condensed milk with butter and cocoa powder, then rolled in chocolate sprinkles!'
      }
    ],
    wouldYouRather: [
      {
        questionPt: 'Entre os dois maiores clássicos da comida de rua do Brasil, qual é o seu favorito?',
        questionEn: 'Between the two greatest Brazilian street food classics, which is your favorite?',
        optionA: 'Pastel de feira frito na hora com caldo de cana com limão',
        optionB: 'Coxinha dourada com recheio de frango com catupiry e Guaraná gelado',
        culturalNote: 'Pastel de feira com caldo de cana e coxinha com guaraná são os dois maiores patrimônios afetivos da culinária de rua brasileira!'
      },
      {
        questionPt: 'Num dia de chuva ou maratona de séries, qual doce você escolhe?',
        questionEn: 'On a rainy day or movie marathon, which sweet do you choose?',
        optionA: 'Brigadeiro de panela comendo de colher ainda morno',
        optionB: 'Bolo de cenoura fofinho com cobertura crocante de chocolate',
        culturalNote: 'O brigadeiro de colher e o bolo de cenoura com cobertura de chocolate são os "comfort foods" doces mais queridos de qualquer casa brasileira.'
      }
    ]
  },

  // 16. TECNOLOGIA & ZAPZAP
  {
    id: 'tecnologia',
    title: 'Tech, Pix & WhatsApp Culture',
    titlePt: 'Tecnologia, Pix e ZapZap',
    description: 'Master digital life in Brazil: sending audio notes on WhatsApp ("Zap"), making a Pix, and mobile data top-ups.',
    descriptionPt: 'Vocabulário tecnológico do dia a dia: mandar áudio no Zap, fazer um Pix e carregar o celular.',
    icon: 'Laptop',
    image: '/images/tecnologia.jpg',
    color: 'slate',
    available: true,
    vocabulary: [
      {
        portuguese: 'Mandar um áudio no Zap',
        english: 'To send a voice note on WhatsApp',
        pronunciation: 'mahn-DAHR oong OW-jee-oo noo ZAHP',
        levels: { A1: { pt: 'Te mandei um áudio de dois minutos explicando tudo.', en: 'I sent you a two-minute voice note explaining everything.' } }
      },
      {
        portuguese: 'Fazer um Pix',
        english: 'To transfer money instantly via Pix (free central bank system)',
        pronunciation: 'fah-ZEHR oong PEEX',
        levels: { A1: { pt: 'Qual é a sua chave Pix? Meu CPF ou celular?', en: 'What is your Pix key? My national ID or phone number?' } }
      },
      {
        portuguese: 'Qual é a senha do Wi-Fi?',
        english: 'What is the Wi-Fi password?',
        levels: { A1: { pt: 'Com licença, qual é a senha do Wi-Fi daqui?', en: 'Excuse me, what is the Wi-Fi password here?' } }
      },
      {
        portuguese: 'Bateria acabando / Carregador',
        english: 'Low battery / Charger',
        levels: { A1: { pt: 'Minha bateria tá em 5%. Você tem carregador tipo C?', en: 'My battery is at 5%. Do you have a USB-C charger?' } }
      }
    ],
    dialogue: [
      { speaker: 'Pedro', portuguese: 'Amigo, a gente precisa dividir a gasolina do rolê.', english: 'Friend, we need to split the gas for the trip.', isPrimary: true },
      { speaker: 'Renan', portuguese: 'Tranquilo! Deu quanto? Me passa sua chave Pix.', english: 'No problem! How much was it? Give me your Pix key.', isPrimary: false },
      { speaker: 'Pedro', portuguese: 'Deu trinta reais pra cada. Minha chave é meu número de celular.', english: 'It was thirty reais each. My key is my cell phone number.', isPrimary: true },
      { speaker: 'Renan', portuguese: 'Pronto, acabei de enviar o Pix! Te mandei o comprovante no Zap.', english: 'Done, just sent the Pix! I sent you the receipt on WhatsApp.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Passa a sua chave Pix', english: 'Send me your Pix key', example: 'Used for instant payments 24/7 across Brazil' },
      { portuguese: 'Te mandei no Zap', english: 'I sent it to you on WhatsApp', example: '"Zap" or "ZapZap" is Brazil’s nickname for WhatsApp' }
    ],
    quiz: [
      {
        question: 'What is "Pix" in Brazilian everyday life?',
        options: [
          'An instant, free, 24/7 digital payment system created by Brazil\'s Central Bank',
          'A type of cheese pastry',
          'A brand of solar power panels',
          'A soccer tournament'
        ],
        correctIndex: 0,
        explanation: 'Pix revolutionized Brazil\'s economy: it is an instantaneous, free electronic payment method used by everyone.'
      }
    ],
    wouldYouRather: [
      {
        questionPt: 'Quando você precisa contar uma história longa e cheia de fofoca, o que você faz?',
        questionEn: 'When you need to tell a long story full of gossip, what do you do?',
        optionA: 'Mandar um áudio de 5 minutos no Zap explicando cada detalhe',
        optionB: 'Digitar um textão enorme de 30 linhas com vários emojis',
        culturalNote: 'Mandar áudio no WhatsApp (o famoso "Zap") é uma instituição nacional brasileira: as pessoas contam histórias como se fossem episódios de podcast!'
      },
      {
        questionPt: 'Ao fazer compras ou pagar contas do mês, qual é a sua regra?',
        questionEn: 'When shopping or paying monthly bills, what is your rule?',
        optionA: 'Pedir desconto do chefe e pagar à vista no Pix na mesma hora',
        optionB: 'Parcelar em 12 vezes sem juros no cartão de crédito',
        culturalNote: 'O hábito de parcelar tudo em 12x ("no carnê" ou "no cartão") é clássico no Brasil, mas o Pix hoje dá o poder de pechinchar 5% a 10% de desconto imediato!'
      }
    ]
  },

  // 17. REDES SOCIAIS & GÍRIAS
  {
    id: 'redes-sociais',
    title: 'Social Media & Brazilian Slang',
    titlePt: 'Redes Sociais e Gírias da Net',
    description: 'Unlock authentic Brazilian slang: "sextou", "tamo junto (TMJ)", "arrasou", "biscoitar", and internet memes.',
    descriptionPt: 'Vocabulário jovem e digital: gírias brasileiras, memes, postar stories e bombar na web.',
    icon: 'Share2',
    image: '/images/redes_sociais.jpg',
    color: 'violet',
    available: true,
    vocabulary: [
      {
        portuguese: 'Sextou!',
        english: 'It\'s Friday! / Weekend mode activated!',
        pronunciation: 'says-TOE!',
        levels: { A1: { pt: 'Acabou o expediente, sextou com força!', en: 'Work is over, Friday celebration mode activated!' } }
      },
      {
        portuguese: 'Tamo junto (TMJ)',
        english: 'We\'re in this together / I got your back / Anytime',
        pronunciation: 'TAH-moo ZHOON-too',
        levels: { A1: { pt: 'Valeu pela ajuda ontem, cara! — Tamo junto!', en: 'Thanks for the help yesterday, man! — I got your back!' } }
      },
      {
        portuguese: 'Arrasou!',
        english: 'You nailed it! / You killed it! / Fabulous!',
        pronunciation: 'ah-hah-ZOH!',
        levels: { A1: { pt: 'Adorei a sua apresentação no evento, arrasou!', en: 'I loved your presentation at the event, you nailed it!' } }
      },
      {
        portuguese: 'Biscoitar',
        english: 'Fishing for compliments on social media (slang)',
        pronunciation: 'bees-koy-TAHR',
        levels: { A1: { pt: 'Ela postou uma foto bonita só pra biscoitar.', en: 'She posted a nice selfie just fishing for likes/compliments.' } }
      }
    ],
    dialogue: [
      { speaker: 'Larissa', portuguese: 'Finalmente cinco horas da tarde de sexta! Sextou, galera!', english: 'Finally 5 PM on Friday! Sextou, everyone!', isPrimary: true },
      { speaker: 'Bruno', portuguese: 'Sextou demais! Vi a foto nova que você postou nos stories, arrasou no look!', english: 'Sextou indeed! I saw your new story photo, you rocked that look!', isPrimary: false },
      { speaker: 'Larissa', portuguese: 'Obrigada! Fui biscoitar um pouquinho antes de sair pro rolê.', english: 'Thank you! Just fishing for some compliments before going out.', isPrimary: true }
    ],
    flashcards: [
      { portuguese: 'Sextou!', english: 'It\'s Friday! Weekend celebration starts now!', example: 'Celebrated across Brazil every Friday' },
      { portuguese: 'Tamo junto (TMJ)', english: 'We’re in this together / Anytime / Got your back', example: 'Used constantly in text and speech' },
      { portuguese: 'Arrasou!', english: 'You rocked it! / Slayed!', example: 'Enthusiastic praise' }
    ],
    quiz: [
      {
        question: 'When do Brazilians enthusiastically shout or post "Sextou!"?',
        options: [
          'On Friday, celebrating the arrival of the weekend',
          'On Monday morning during team meetings',
          'On Wednesday after an exam',
          'On Saturday night at midnight'
        ],
        correctIndex: 0,
        explanation: '"Sextou" turns "sexta-feira" (Friday) into an exuberant verb meaning "Friday has arrived, let the fun begin!"'
      }
    ]
  },

  // 18. REVISÃO 3 (Mastery Review)
  {
    id: 'revisao-3',
    title: 'Review 3: Portuguese Mastery',
    titlePt: 'Revisão 3: Mestre do Português',
    description: 'The ultimate Brazilian Portuguese milestone test covering tech, food, wildlife, city navigation, and colloquial mastery.',
    descriptionPt: 'Desafio final integrando tecnologia, culinária, gírias da internet e fluência prática.',
    icon: 'Star',
    image: '/images/revisao3.jpg',
    color: 'amber',
    available: true,
    vocabulary: [
      {
        portuguese: 'Fluência e Conexão Cultural',
        english: 'Fluency & Cultural Connection',
        levels: { A1: { pt: 'Você agora compreende a alma e a linguagem do povo brasileiro.', en: 'You now understand the soul and language of the Brazilian people.' } }
      }
    ],
    dialogue: [
      { speaker: 'Professor', portuguese: 'Você completou todos os módulos de Português Brasileiro do Dia a Dia!', english: 'You completed all Everyday Brazilian Portuguese modules!', isPrimary: true },
      { speaker: 'Aluno', portuguese: 'Muito obrigado! Agora estou pronto para viajar para o Brasil e falar com todo mundo.', english: 'Thank you so much! Now I am ready to travel to Brazil and chat with everyone.', isPrimary: false }
    ],
    flashcards: [
      { portuguese: 'Mestre do Português Brasileiro', english: 'Brazilian Portuguese Master', example: 'Ready to converse with locals anywhere in Brazil!' },
      { portuguese: 'Valeu demais!', english: 'Thank you so much! / Awesome!', example: 'Warm, heartfelt appreciation' }
    ],
    quiz: [
      {
        question: 'Which of the following phrases demonstrates authentic, fluent Brazilian Portuguese mastery?',
        options: [
          'E aí, galera! Fechou o rolê? Manda o Pix que eu pago a conta do boteco!',
          'Eu sou um estudante que tem comida na mesa de ferro.',
          'Hoje eu faxino o futebol na padaria americana.',
          'Por favor onde fica o urso no lago da praia?'
        ],
        correctIndex: 0,
        explanation: 'Option 1 combines natural greeting (E aí, galera), agreement slang (fechou), modern digital payment (Pix), and casual culture (boteco) seamlessly!'
      }
    ]
  }
];
