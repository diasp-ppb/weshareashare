module.exports = [
    {
        _id: Math.round(Math.random() * 1000000),
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 21, 0)),
        user: {
            _id: 1,
            name: 'FF',
        },
        selectOption: {
            options: ['yes','no'],
            selected: 'yes',
            picked: false
        }
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'Do you want to start the subscription form? It will take around 7minutes.',
        user: {
            _id: 2,
            name: 'React Native',
        }
    },
];