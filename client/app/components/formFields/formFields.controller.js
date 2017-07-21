class FormFieldsController {
  constructor() {
    this.name = 'formFields';
    this.userWords = {
      noun: [],
      adjective: [],
      verb: [],
      adverb: []
    };
    this.defaultWords = {
      noun: ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'],
      verb: ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'],
      adjective: ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'],
      adverb: ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely']
    };
  }
}

export default FormFieldsController;
