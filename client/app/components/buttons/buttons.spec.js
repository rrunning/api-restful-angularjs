import ButtonsModule from './buttons';
import ButtonsController from './buttons.controller';
import ButtonsComponent from './buttons.component';
import ButtonsTemplate from './buttons.html';

describe('Buttons', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ButtonsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ButtonsController();
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
      expect(ButtonsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ButtonsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ButtonsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ButtonsController);
    });
  });
});
