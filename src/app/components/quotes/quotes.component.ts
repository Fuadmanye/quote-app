import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    // Quotes Array
    quotes:Quotes[]=[
        new Quotes('Try not to become a man of success, but rather try to become a man of value.','Willard','Abdul', new Date(2022,1,23),2,1),
        new Quotes('Business opportunities are like buses, theres always another one coming.','Richard Branson','Faith',new Date(2020,3,30),4,3),
        new Quotes('Life is an awful, ugly place to not have a best friend','Dessen Sarah', 'Raymo',new Date(2019,7,23),3,4),
        new Quotes('The future belongs to those who believe in the beauty of their dreams.','Franklin Benson', 'Mercy',new Date(2021,4,10),1,0),
        
    ]

     //function for ading a new quote
     addNewQuote(quote: Quotes) {
       
      this.quotes.push(quote)
    }

  //function for toggling small text
     toggleDetails(index: number) {
        
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }  
  
  //function for deleting quote

  deletingQuote(deleteQuote: any, index: number){
      if(deleteQuote){
          let toDelete =confirm("Are you sure you want to delete this quote?")

          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  //function for getting the quote with the highest upvotes
  // initialValue:number
  // newValue:number
  // counter:number
  
  // highlightHighest(){

  //    this.initialValue=0
  //    this.newValue=0

  //    for (this.counter=0; this.counter<this.quotes.length; this.counter++){
  //        this.newValue =this.quotes[this.counter].upVote;

  //        if(this.newValue > this.initialValue){
  //            this.initialValue =this.newValue
  //        }
  //        return this.initialValue
  //    }


  // }
  
  highlightHighest() {
      
      let quotesUpvote = []
      let highestUpVote: number
      for (let j = 0; j < this.quotes.length; j++) {
        quotesUpvote.push( this.quotes[j].upVote)
      }
      
          //The sort callback has to return

          // a negative number if a < b
          // 0 if a === b
          // a positive number if a > b

      quotesUpvote.sort(function (a, b) {
          //if b>a then b-a>0 and will return a positive number
        return b - a
      })
      highestUpVote = quotesUpvote[0]
      return highestUpVote;
    }
  
    
constructor() { }

ngOnInit(): void {
}

}