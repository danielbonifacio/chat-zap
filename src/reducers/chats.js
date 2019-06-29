const initialState = [
  {
    contact: {
      name: 'Marcos Vinicius',
      image: '',
    },
    messges: [
      {
        text: 'Olá mundo',
        read: false,
        amIAuthor: false,
        dateTime: '2019-04-05 18:00:22',
      },
      {
        text: 'Coé desgraça',
        read: false,
        amIAuthor: false,
        dateTime: '2019-04-05 18:01:22',
      }
    ],
  }
];

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
