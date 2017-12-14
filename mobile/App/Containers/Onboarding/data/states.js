module.exports = [
  { id: 'start',
    states: [
      {
        text: 'Do you want to start the subscription form? It will take around 7minutes.',
        options: ['yes', 'no'],
      },
    ],
  },
  {
    id: 'participants',
    states: [
      {
        text: 'Qual o prazo de investimento?',
        options: [{key:'1',text:'< 1 ano'}, {key:'2',text:'Entre 1 e 3 anos'}, {key:'3',text:'> 3 anos'}],
        key: 'DURATION',
      },
      {
        text: 'Que percetagem da sua poupança está a investir ?',
        options: [{key:'1',text:'< 25%'}, {key:'2',text:'Entre 25% e 50%'}, {key:'3',text:'> 50%'}],
        key: 'PERCENTAGE',
      },
      {
        text: 'Qual o seu objetivo de investimento?',
        options: [{key:'1',text:'Preservar o capital'}, {key:'2',text:'Fazer crescer o capital moderadamente mas preservando-o'}, {key:'3',text:'Fazer crescer o capital substancialmente'}],
        key: 'GOAL',
      },
      {
        text: 'Sabendo que o mercado desvalorizou 10 e o seu investimento desvalorizou 3, como se sente?',
        options: [{key:'1',text:'Insatisfeito'}, {key:'2',text:'Razoavelmente satisfeito'}, {key:'3',text:'Muito satisfeito'}],
        key: 'FEELING',
      },
      {
        text: 'Estaria disposto a investir em ativos de maior risco de forma a tentar obter uma melhor rentabilidade do seu investimento?',
        options: [{key:'1',text:'Nunca'}, {key:'2',text:'Sim, mas com alguma margem de segurança'}, {key:'3',text:'Sem dúvida'}],
        key: 'RISK',
      },
      {
        text: 'Que tipo de ativos o atraem mais?',
        options: [{key:'1',text:'Depósitos a prazo e Certificados de Aforro'}, {key:'2',text:'Obrigações e Produtos Garantidos'}, {key:'3',text:'Ações'}],
        key: 'TYPE',
      },
      {
        text: 'Que rentabilidade estaria disposto a obter nos próximos 12 meses?',
        options: [{key:'1',text:'Rentabilidade potencial entre -2% e 4%'}, {key:'2',text:'Rentabilidade potencial entre -5% e 9%'}, {key:'3',text:'Rentabilidade potencial entre -10% e 15%'}],
        key: 'PROFITABILITY',
      },
    ],
  },
  {
    id: 'death',
    states: [
      {
        text: "What is your employer's name?",
        options: [],
        key: 'BOSS',
      },
      {
        text: 'Tell me your email please?',
        options: [],
        key: 'EMAIL',
      },
      {
        text: 'Do you want updates?',
        options: [],
        key: 'UPDATES',
      },
      // ask for another
    ],
  },
  {
    id: 'subscription',
    states: [
      'VALUE',
      'SUBS',
      'RETURN',
      'METHOD',
      'CHECK',
      'BANK',
      'PPR',
    ],
  },
  {
    id: 'sdd',
    states: [
      'IBAN',
      'ANUAL',
      'PERIOD',
      'START',
    ],
  },

];
