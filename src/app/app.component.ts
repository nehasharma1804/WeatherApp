import { Component } from '@angular/core';
import {GameServiceService} from "./game-service.service";


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( public gameService: GameServiceService){
    //this.gameService.newGame()
  }
  
  resetGame(){
    this.gameService.newGame()
  }
}