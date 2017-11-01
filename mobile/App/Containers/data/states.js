module.exports = [
    {   id:"start",
        states: [
            {
                text: 'Do you want to start the subscription form? It will take around 7minutes.',
                options: ['yes','no'],
            }
        ]
    },
    {
        id:"participants",
        states:[
            {
                text: "What is your full name?",
                options: [],
            },
            {
                text: "Are you male or female?",
                options: ['male','female'],
            },
            {
                text: "What is your address?",
                options: [],
            },
            {
                text: "What city do you live in?",
                options: [],
            },
            {
                text: "What is your postal code?",
                options: [],
            },
            {
                text: "What is your telephone number?",
                options: [],
            },
            {
                text: "What is your cellphone number?",
                options: [],
            },
            {
                text: "Tell me your NIF please",
                options: [],
            },
            {
                text: "Can I have your ID/CC if you will?",
                options: [],
            },
            {
                text: "When is your birthday?",
                options: [],
            },
            {
                text: "What is your profession?",
                options: [],
            },
            {
                text: "What is your employer's name?",
                options: [],
            },
            {
                text: "Tell me your email please?",
                options: [],
            },
            {
                text:  "Do you want updates?",
                options: [],
            }
        ]
    },
    {
        id:"death",
        states:[
            "NAME",
            "NIF",
            "RELATIONSHIP",
            "PERCENTAGE"
            //ask for another
        ]
    },
    {
        id:"subscription",
        states:[
            "VALUE",
            "SUBS",
            "RETURN",
            "METHOD",
            "CHECK",
            "BANK",
            "PPR"
        ]
    },
    {
        id:"sdd",
        states:[
            "IBAN",
            "ANUAL",
            "PERIOD",
            "START"
        ]
    }

];
