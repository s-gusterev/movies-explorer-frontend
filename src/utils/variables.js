const listTechs = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

const linksPortfolio = [
  {
    name: 'Статичный сайт',
    link: 'https://github.com/s-gusterev/how-to-learn',
  },
  {
    name: 'Адаптивный сайт',
    link: 'https://github.com/s-gusterev/russian-travel',
  },
  {
    name: 'Одностраничное приложение',
    link: 'https://github.com/s-gusterev/react-mesto-api-full',
  },
];

const SEARCH_REGEX = /^[а-яА-ЯёЁa-zA-Z0-9-]{2,36}$/;
const EMAIL_REGEX = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
const NAME_REGEX = /^[а-яА-ЯёЁa-zA-Za]{2,36}$/;

export {
  listTechs,
  linksPortfolio,
  SEARCH_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NAME_REGEX,
};
