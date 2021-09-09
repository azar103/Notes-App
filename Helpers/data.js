import uuid from 'react-native-uuid';
import moment from 'moment';

const notes = [
  {
    id: uuid.v4(),
    title: 'How to make your personal brand stand out ounline',
    category: 'Personal',
    description:
      'Velit pariatur Lorem nisi nisi tempor. In mollit ea amet voluptate sunt dolore adipisicing. Non minim exercitation id laboris deserunt nulla deserunt laborum esse nostrud tempor.Duis minim excepteur enim id. Mollit qui voluptate nostrud proident id veniam nulla elit laborum esse sint id. Enim adipisicing enim aliqua occaecat proident nulla exercitation cillum qui amet ad adipisicing aute ea. Voluptate aute enim quis nulla laborum ea. Culpa elit ullamco veniam consequat aute est aliquip adipisicing velit. Veniam amet sint incididunt mollit dolore.',
    creation_date: moment(new Date()).format('MMM DD,YYYY'),
  },
  {
    id: uuid.v4(),
    title: 'Beatiful Weather App UI',
    category: 'Personal',
    description:
      'Mollit aliquip et excepteur aliquip dolor irure qui labore sint consequat duis esse voluptate reprehenderit. In laborum reprehenderit laboris adipisicing ea pariatur nostrud nulla sint reprehenderit enim dolore voluptate. Commodo do ea laborum esse consequat Lorem velit tempor duis et aute ut. Exercitation minim cillum dolor aute reprehenderit ut dolor ipsum exercitation commodo. Sit laboris ullamco voluptate velit. Qui consectetur ad mollit commodo eu duis nostrud aliquip incididunt anim velit est esse deserunt. Ipsum Lorem pariatur nulla aliquip eu voluptate exercitation sunt mollit excepteur eu laborum aliqua. Proident eiusmod nostrud veniam elit nulla culpa quis anim in nulla ex eu. Officia enim consectetur laborum occaecat sunt ex mollit deserunt nulla irure eiusmod. Aliqua mollit ipsum ex ut occaecat occaecat exercitation veniam amet sint sit.',
    creation_date: moment(new Date()).format('MMM DD,YYYY'),
  },
  {
    id: uuid.v4(),
    title: 'Catching Mobile App',
    category: 'Work',
    description:
      'Fugiat et duis veniam pariatur ex voluptate ea do aute ea officia esse. Ullamco deserunt non et cupidatat ea aliqua laborum cillum officia. Deserunt aliqua id nulla cillum proident magna culpa. Ea elit quis do consectetur ex commodo. Dolor aliquip officia ullamco aute sunt sunt veniam duis eiusmod est.',
    creation_date: moment(new Date()).format('MMM DD,YYYY'),
  },
  {
    id: uuid.v4(),
    title: 'Bla Bla Bla',
    category: 'Ideas',
    description:
      'Consectetur veniam officia magna proident laborum adipisicing exercitation adipisicing elit tempor dolor sunt. Est excepteur anim dolor excepteur eu Lorem. Eu qui dolor ad et amet qui duis velit sit elit ea labore culpa. Pariatur officia aute velit cillum ipsum.',
    creation_date: moment(new Date()).format('MMM DD,YYYY'),
  },

  {
    id: uuid.v4(),
    title: 'Bla Bla Bla',
    category: 'Ideas',
    description:
      'Consectetur veniam officia magna proident laborum adipisicing exercitation adipisicing elit tempor dolor sunt. Est excepteur anim dolor excepteur eu Lorem. Eu qui dolor ad et amet qui duis velit sit elit ea labore culpa. Pariatur officia aute velit cillum ipsum.',
    creation_date: moment(new Date()).format('MMM DD,YYYY'),
  },
];

export default notes;
