import template from './formFields.html';
import controller from './formFields.controller';
import './formFields.scss';

let formFieldsComponent = {
  bindings: {userWords: '='},
  template,
  controller
};

export default formFieldsComponent;
