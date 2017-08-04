class StoriesController {
  constructor(Words) {
    this.name = 'stories';
    console.log('this.Words.userWords:',Words.userWords);
    this.Words.userWords = Words.userWords;
  }  
}

StoriesController.$inject = ['Words', 'StoryGenerator'];

export default StoriesController;
