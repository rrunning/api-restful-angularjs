import template from './stories.html';
import controller from './stories.controller';
import './stories.scss';

let storiesComponent = {
  bindings: {
    userWords: '<',
    defaultWords: '<',
  },
  template,
  controller
};

export default storiesComponent;
