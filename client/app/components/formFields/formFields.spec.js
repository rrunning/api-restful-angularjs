import FormFieldsModule from './formFields';
import FormFieldsController from './formFields.controller';
import FormFieldsComponent from './formFields.component';
import FormFieldsTemplate from './formFields.html';

describe('FormFields', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FormFieldsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FormFieldsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FormFieldsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FormFieldsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FormFieldsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FormFieldsController);
    });
  });
});
