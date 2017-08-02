class StoriesController {
  constructor(Words) {
    this.name = 'stories';
    this.Words = Words;
    console.log(this.Words.userWords);
  }  
}

const getWords = () => {
  // $ctrl.nouns
}


StoriesController.$inject = ['Words', 'StoryGenerator'];


export default StoriesController;
