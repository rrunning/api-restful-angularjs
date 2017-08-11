class FormFieldsController {
  constructor(Words, StoryGenerator) {
    this.Words = Words;
  }
  updateNouns() {
    const nounArray = this.nounString;
    this.Words.fillNouns(nounArray);
  }
  updateVerbs() {
    const verbArray = this.verbString;
    this.Words.fillVerbs(verbArray);
  }
  updateAdverbs() {
    const adverbArray = this.adverbString;
    this.Words.fillAdverbs(adverbArray);
  }
  updateAdjectives() {
    const adjectivesArray = this.adjectiveString;
    this.Words.fillAdjectives(adjectivesArray);
  }

  $onChanges(changes) {
    // console.log('changes', changes);
  }

}

FormFieldsController.$inject = ['Words', 'StoryGenerator'];

export default FormFieldsController;
