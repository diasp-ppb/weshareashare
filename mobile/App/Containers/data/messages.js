module.exports = [
    {
        _id: Math.round(Math.random() * 1000000),
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 21, 0)),
        user: {
            _id: 1,
            name: 'FF',
        },
        selectOption: {
            text: ['yes','no','asdadas']
        }
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'Do you want to start the subscription form? It will take around 7minutes.',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'React Native',
        }
    },
];
