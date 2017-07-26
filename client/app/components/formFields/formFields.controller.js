class FormFieldsController {
  constructor() {
    this.name = 'formFields';

  }

  $onChanges(changes) {
    console.log('changes', changes);
  }
}

export default FormFieldsController;
