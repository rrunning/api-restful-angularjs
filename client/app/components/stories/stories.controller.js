class StoriesController {
  constructor(Words) {
    this.name = 'stories';
    this.Words = Words;
    this.hideChristmasStory = true;
    this.hideShoppingStory = true;
    this.hideBrainstormStory = true;
  }  

  showStory(story) {
    if (story === 'christmas') {
      this.hideChristmasStory = false;
      this.hideShoppingStory = true;
      this.hideBrainstormStory = true;
    }
    if (story === 'shopping') {
      this.hideChristmasStory = true;
      this.hideShoppingStory = false;
      this.hideBrainstormStory = true;
    }
    if (story === 'brainstorm') {
      this.hideChristmasStory = true;
      this.hideShoppingStory = true;
      this.hideBrainstormStory = false;

    }    
  }
}

StoriesController.$inject = ['Words', 'StoryGenerator'];

export default StoriesController;
