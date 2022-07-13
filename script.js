/*Created a class for cards that will identify them using their suit, rank and numerical value.
2 would be the lowest card and the ace will be the highest.*/
class Cards{
    constructor(suit, rank, number){
        this.suit = suit;
        this.rank = rank;
        this.number = number;
    }
}

/*Created a class for a player, this can be used to identify both players and each
player will have a name, an array that wil hold their 26 cards and a way to keep track of their points*/
class Player{
    constructor(nameOfPlayer){
        this.nameOfPlayer = nameOfPlayer;
        this.playersCards = [];
        this.points = 0;
    }
}

/*Created a class for a deck of cards that will create a full set of 52 cards, it will have their suit, rank, and numerical value.
it will take that created deck and it will take that deck and  shuffle it */
class DeckOfCards{
    constructor(){
        this.deckOf52Cards = [];
        this.createdDeck();
        this.shuffle();
    }

    createdDeck() {
        const suits = ['Diamonds', 'Hearts', 'Spades', 'Clovers'];
        let ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < ranks.length; x++) {
                    this.deckOf52Cards.push(new Cards(suits[i], ranks[x], values[x]));
            }
        }
    }

     shuffle(){
        for(let i = 0; i < 52; i++){
            let temporatyCard = this.deckOf52Cards[i];
            let x = Math.floor(Math.random() * 52);
            this.deckOf52Cards[i] = this.deckOf52Cards[x];
            this.deckOf52Cards[x] = temporatyCard;
        }
    }

  
}

/*Created a class to start a new game, this will take the previously created and shuffled deck. it will divide it and it will give
it to each player. 26 random cards for each player. ti will also console log the game round by round and keep track of the points each round. */
class NewGame{
    constructor(newDeck, playersInGame){
        this.newDeck = newDeck;
        this.playersInGame = playersInGame;
    }

    giveCards(){
        let allCards = this.newDeck.deckOf52Cards;
        let halfCards = Math.ceil(allCards.length / 2);
        this.playersInGame[0].playersCards = allCards.slice (0, halfCards);
        this.playersInGame[1].playersCards = allCards.slice (-halfCards);
    }

    whoWinsThePoint(){
        let p1Points = 0;
        let p2Points = 0;
        let bothPoints = [];

        for(let i = 0; this.playersInGame[0].playersCards.length; i++){
            if(playerOne.playersCards[i].number < playerTwo.playersCards[i].number){
                p1Points++;
                console.log
                (
                `David wins the round number ${i + 1}
                David had a ${playerOne.playersCards[i].rank} of ${playerOne.playersCards[i].suit}
                Daniel had a ${playerTwo.playersCards[i].rank} of ${playerTwo.playersCards[i].suit}
                David has ${p1Points} points
                Daniel has ${p2Points} points`
                );
            }else if(playerOne.playersCards[i].number > playerTwo.playersCards[i].number){
                p2Points++;
                console.log
                (
                `Daniel wins the round number ${i + 1}
                David had a ${playerOne.playersCards[i].rank} of ${playerOne.playersCards[i].suit}
                Daniel had a ${playerTwo.playersCards[i].rank} of ${playerTwo.playersCards[i].suit}
                David has ${p1Points} points
                Daniel has ${p2Points} points`
                );
            }else{
                console.log
                (
                    `it is a tie there is no points for either player`
                );
            }
        }
        bothPoints.push(p1Points);
        bothPoints.push(p2Points);
        return bothPoints;
    }

    whoWinsTheWar(points){
        if(points[0] > points[1]){
            console.log("Player 1 wins the war!!")
        }else{
            console.log('Player 2 wins the war!!')
        }

    }

}

/*created new instances of each class to be able to run the program */
let playerOne = new Player('David');
let playerTwo = new Player('Daniel');
let bicycleCards = new DeckOfCards();
let freshGame = new NewGame(bicycleCards, [playerOne, playerTwo]);
/*initialized some of the methods with in the NewGame class so they could run properly */
freshGame.giveCards();
let score = freshGame.whoWinsThePoint();
freshGame.whoWinsTheWar(score);

/*These where test to check that each class was working properly */
console.log(playerOne);
console.log(playerTwo);
console.log(bicycleCards);
console.log(freshGame);