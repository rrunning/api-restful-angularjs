class AppController {
    constructor(Item) {
        this.Item = Item;
    }
}

AppController.$inject = ['Item'];

export default AppController;