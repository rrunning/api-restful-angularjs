class FormFieldsController {
  constructor(Words, StoryGenerator) {
    this.Words = Words;
    console.log(this.Words);
  }
  updateNouns() {
    const nounArray = convertStringToArray(this.nounString);
    this.Words.fillNouns(nounArray);
  }
  updateVerbs() {
    const verbArray = convertStringToArray(this.verbString);
    this.Words.fillVerbs(verbArray);
  }
  updateAdverbs() {
    const adverbArray = convertStringToArray(this.adverbString);
    this.Words.fillAdverbs(adverbArray);
  }
  updateAdjectives() {
    const adjectivesArray = convertStringToArray(this.adjectiveString);
    this.Words.fillAdjectives(adjectivesArray);
  }

  $onChanges(changes) {
    // console.log('changes', changes);
  }

}

const convertStringToArray = (string) => {
  return string.split(',');
}

FormFieldsController.$inject = ['Words', 'StoryGenerator'];

export default FormFieldsController;
