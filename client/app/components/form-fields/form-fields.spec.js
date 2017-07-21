import Form-fieldsModule from './form-fields';
import Form-fieldsController from './form-fields.controller';
import Form-fieldsComponent from './form-fields.component';
import Form-fieldsTemplate from './form-fields.html';

describe('Form-fields', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Form-fieldsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Form-fieldsController();
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
      expect(Form-fieldsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Form-fieldsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Form-fieldsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Form-fieldsController);
    });
  });
});
