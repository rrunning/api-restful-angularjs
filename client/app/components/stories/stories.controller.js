class StoriesController {
  constructor(Words) {
    this.name = 'stories';
    this.Words = Words;
  }

}

const getWords = () => {
  // $ctrl.nouns
}


StoriesController.$inject = ['Words', 'StoryGenerator'];


export default StoriesController;
