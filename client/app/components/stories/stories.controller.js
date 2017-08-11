class StoriesController {
  constructor(Words) {
    this.name = 'stories';
    this.Words = Words;
  }  
  $onChange() {
    console.log(this.Words.userWords);
  }
}

StoriesController.$inject = ['Words', 'StoryGenerator'];

export default StoriesController;
