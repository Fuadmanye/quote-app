import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  upvotes = 0;
  downvotes = 0;
  isComplete= true;

  quotes: Quotes[]=[

    new Quotes(0,'Abdul','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes(1,'Richard','Business','“Business opportunities are like buses, there’s always another one coming.”',0,0,'Branson'),
    new Quotes(2,'Dessen','Friends','“Life is an awful, ugly place to not have a best friend.”',0,0,'Sarah'),
    new Quotes(3,'Franklin','Life','“The future belongs to those who believe in the beauty of their dreams.”',0,0,'Benson'),

  ]
  getCurrentId(){
    return this.quotes.length +1
  }
  newQuote(quote:any) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    quote.title=quote.title;
    quote.quote=quote.quote;
    quote.submitedBy=quote.submitedBy;
    this.quotes.unshift(quote)
  }
  upVote(quote:any){
    quote.upvote= quote.upvote+1;
    console.log('quote.upvote')
  }
  downVote(quote:any){
    quote.downvote = quote.downvote+1;
  }
  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

 

  constructor() { }

  ngOnInit(): void {
  }
}


  constructor() { }

  ngOnInit(): void {
  }
}
