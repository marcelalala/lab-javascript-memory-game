class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    }

  shuffleCards() {
    // this.cards.sort(() => Math.random() - 0.5) 
for (let i = this.cards.length -1; i >= 1; i -=1) {
  let j = Math.floor(Math.random() * i)
  let aux = this.cards[i];
  this.cards[i] = this.cards[j];
  this.cards[j] = aux;
}
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }

}