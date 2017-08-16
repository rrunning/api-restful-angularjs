import angular from 'angular';

let wordsModule = angular.module('app.words', [])
.factory('Words', Words)
.name;

const userWords = {
    nouns: [],
    adjectives: [],
    verbs: [],
    adverbs: []
};

const defaultNouns = ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'];
const defaultVerbs = ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'];
const defaultAdjectives = ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'];
const defaultAdverbs = ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely'];


function Words(){
    const service = {
        fillNouns: (nounsList) => {
            while (nounsList.length < 4) {
                const randomWord = defaultNouns[Math.floor(Math.random() * 10)];
                if (nounsList.indexOf(randomWord) === -1) {
                nounsList.push(randomWord);
                }
            }
            userWords.nouns = nounsList;
        },
        fillVerbs: (verbsList) => {
            while (verbsList.length < 4) {
                const randomWord = defaultVerbs[Math.floor(Math.random() * 10)];
                if (verbsList.indexOf(randomWord) === -1) {
                    verbsList.push(randomWord);
                }
            }
            userWords.verbs = verbsList;

        },
        fillAdverbs: (adverbsList) => {
             while (adverbsList.length < 4) {
               const randomWord = defaultAdverbs[Math.floor(Math.random() * 10)];
               if (adverbsList.indexOf(randomWord) === -1) {
                 adverbsList.push(randomWord);
               }
             }
            userWords.adverbs = adverbsList;
        },
        fillAdjectives: (adjectivesList) => {
            while (adjectivesList.length < 4) {
              const randomWord = defaultAdjectives[Math.floor(Math.random() * 10)];
              if (adjectivesList.indexOf(randomWord) === -1) {
                adjectivesList.push(randomWord);
              }
            }
            userWords.adjectives = adjectivesList;
        },
        userWords: userWords,
        
        getNouns: () => (userWords.nouns),
        getVerbs: () => (userWords.verbs),
        getAdverbs: () => (userWords.adverbs),
        getAdjectives: () => (userWords.adjectives),
    };
    return service;
}

export default wordsModule;