class AppController {
    constructor(Words, StoryGenerator) {
        this.Words = Words;
        // console.log(this.Words);
        // this.userWords = Words.userWords;
        console.log('app user words:',this.userWords);
    }
    $onChanges(changes) {
        console.log('changes:', changes);
        console.log(this.userWords);
    }
}

AppController.$inject = ['Words', 'StoryGenerator'];

export default AppController;