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
                key: "NAME",
            },
            {
                text: "Are you male or female?",
                options: ['male','female'],
                key: "GENDER",
            },
            {
                text: "What is your address?",
                options: [],
                key: "ADDRESS",
            },
            {
                text: "What city do you live in?",
                options: [],
                key: "CITY",
            },
            {
                text: "What is your postal code?",
                options: [],
                key: "POSTAL",
            },
            {
                text: "What is your telephone number?",
                options: [],
                key: "TELEPHONE",
            },
            {
                text: "What is your cellphone number?",
                options: [],
                key: "CELLPHONE",
            },
            {
                text: "Tell me your NIF please",
                options: [],
                key: "NIF",
            },
            {
                text: "Can I have your ID/CC if you will?",
                options: [],
                key: "ID",
            },
            {
                text: "When is your birthday?",
                options: [],
                key: "BIRTHDAY",
            },
            {
                text: "What is your profession?",
                options: [],
                key: "JOB",
            },
            {
                text: "What is your employer's name?",
                options: [],
                key: "BOSS",
            },
            {
                text: "Tell me your email please?",
                options: [],
                key: "EMAIL",
            },
            {
                text:  "Do you want updates?",
                options: [],
                key: "UPDATES",
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
