class AppController {
    constructor(Words, StoryGenerator) {
        this.Words = Words;
    }
}

AppController.$inject = ['Words', 'StoryGenerator'];

export default AppController;