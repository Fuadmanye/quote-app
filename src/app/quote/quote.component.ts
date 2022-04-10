import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote[] = [
    new Quote(1, 'Life Quote', 'All that we are is the result of what we have thought','Serena Williams',new Date(2019,9,14)),
    new Quote(2, 'Health Quote', 'A few germs never hurt anyone','Serena Williams',new Date(2019,6,9)),
    new Quote(3, 'Wisdom Quote','Sometimes the questions are complicated, and the answers are simple.','Dr. Seuss',new Date(2019,1,12)),


  ];
showAuthor(index: string | number){
  this.myQuotes[index:].moreDetails = !this.myQuotes[index].moreDetails;
}
removeQuote(toDelete: any,index: number){
  if(toDelete){
    let confirmDelete = confirm('Are you sure you want to delete this quote?');

  if(confirmDelete){
    this.myQuotes.splice(index,1);
  }
}
}

addNewQuote(myQuote: Quote){
  let myQuoteLength = this.myQuotes.length;
  myQuote.id = myQuoteLength + 1;
  myQuote.datePosted = new Date();
  this.myQuotes.push(myQuote)
}
  constructor() { }

  ngOnInit() {
  }

}
