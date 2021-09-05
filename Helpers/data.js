import uuid from 'react-native-uuid';
const id = uuid.v4();
const notes = [
  {
    id: uuid.v4(),
    title: 'How to make your personal brand stand out ounline',
    description:
      'Velit pariatur Lorem nisi nisi tempor. In mollit ea amet voluptate sunt dolore adipisicing. Non minim exercitation id laboris deserunt nulla deserunt laborum esse nostrud tempor.',
    creation_date: new Date().toLocaleString(),
  },
  {
    id: uuid.v4(),
    title: 'Beatiful Weather App UI',
    description:
      'Mollit aliquip et excepteur aliquip dolor irure qui labore sint consequat duis esse voluptate reprehenderit. In laborum reprehenderit laboris adipisicing ea pariatur nostrud nulla sint reprehenderit enim dolore voluptate. Commodo do ea laborum esse consequat Lorem velit tempor duis et aute ut. Exercitation minim cillum dolor aute reprehenderit ut dolor ipsum exercitation commodo. Sit laboris ullamco voluptate velit.',
    creation_date: new Date().toLocaleString(),
  },
  {
    id: uuid.v4(),
    title: 'Catching Mobile App',
    description:
      'Fugiat et duis veniam pariatur ex voluptate ea do aute ea officia esse. Ullamco deserunt non et cupidatat ea aliqua laborum cillum officia. Deserunt aliqua id nulla cillum proident magna culpa. Ea elit quis do consectetur ex commodo. Dolor aliquip officia ullamco aute sunt sunt veniam duis eiusmod est.',
    creation_date: new Date().toLocaleString(),
  },
  {
    id: uuid.v4(),
    title: 'Bla Bla Bla',
    description:
      'Consectetur veniam officia magna proident laborum adipisicing exercitation adipisicing elit tempor dolor sunt. Est excepteur anim dolor excepteur eu Lorem. Eu qui dolor ad et amet qui duis velit sit elit ea labore culpa. Pariatur officia aute velit cillum ipsum.',
    creation_date: new Date().toLocaleString(),
  },
];

export default notes;
