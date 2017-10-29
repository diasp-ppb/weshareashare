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
            },
            {
                text: "What is your telephone number?",
            },
            {
                text: "What is your cellphone number?",
            },
            {
                text: "Tell me your NIF please",
            },
            {
                text: "Can I have your ID/CC if you will?",
            },
            {
                text: "When is your birthday?",
            },
            {
                text: "What is your profession?",
            },
            {
                text: "What is your employer's name?",
            },
            {
                text: "Tell me your email please?",
            },
            {
                text:  "Do you want updates?",
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
