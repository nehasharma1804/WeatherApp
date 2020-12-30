import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
   
  constructor( public boardService: GameServiceService ) { }

  ngOnInit() {
    console.log(this.boardService.board)
  }

 

}