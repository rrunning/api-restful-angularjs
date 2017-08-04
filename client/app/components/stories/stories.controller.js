class StoriesController {
  constructor(Words) {
    this.name = 'stories';
    console.log('this.Words.userWords:',Words.userWords);
  }  
}

const getWords = () => {
  // $ctrl.nouns
}

StoriesController.$inject = ['Words', 'StoryGenerator'];

export default StoriesController;
