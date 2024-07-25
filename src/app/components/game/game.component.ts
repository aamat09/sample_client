import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIconButton,
    MatIcon,
    NgForOf,
    NgIf,
    MatButton,
    MatCardTitle
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  piles: number[] = [3, 4, 5]; // Initial piles
  currentPlayer: string = 'Player'; // Player's turn
  winner: string | null = null; // Track the winner

  constructor() { }

  ngOnInit(): void {
  }

  removeSticks(pileIndex: number, count: number) {
    if (this.piles[pileIndex] >= count) {
      this.piles[pileIndex] -= count;

      // Check for a winner
      if (this.piles.every(pile => pile === 0)) {
        this.winner = this.currentPlayer;
      } else {
        // Switch players
        this.currentPlayer = this.currentPlayer === 'Player' ? 'Computer' : 'Player';
        if (this.currentPlayer === 'Computer') {
          this.computerMove();
        }
      }
    }
  }

  computerMove() {
    // Simple AI: Remove one stick from the first non-empty pile
    for (let i = 0; i < this.piles.length; i++) {
      if (this.piles[i] > 0) {
        this.removeSticks(i, 1);
        break;
      }
    }
  }

  resetGame() {
    this.piles = [3, 4, 5];
    this.currentPlayer = 'Player';
    this.winner = null;
  }
}
