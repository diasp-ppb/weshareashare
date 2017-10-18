module.exports = [
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'What is your name?',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'WeShareAShare',
        },
    },
];
