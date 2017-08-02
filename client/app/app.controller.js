class AppController {
    constructor(Words, StoryGenerator) {
        this.Words = Words;
        // console.log(this.Words);
    }
    // createStory() {
    //     this.storyText = StoryGenerator.generateStory(this.story, this.userWords);
    // }
    // addUserWords(userWords, input) {
    //     let userInput = document.getElementById()
    //     userWords.noun.push(input)
    // }
}

AppController.$inject = ['Words', 'StoryGenerator'];

export default AppController;

    // this.defaultWords = {
    //   noun: ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'],
    //   verb: ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'],
    //   adjective: ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'],
    //   adverb: ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely']
    // };
