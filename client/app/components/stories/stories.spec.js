import StoriesModule from './stories';
import StoriesController from './stories.controller';
import StoriesComponent from './stories.component';
import StoriesTemplate from './stories.html';

describe('Stories', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StoriesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StoriesController();
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
      expect(StoriesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = StoriesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(StoriesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(StoriesController);
    });
  });
});
