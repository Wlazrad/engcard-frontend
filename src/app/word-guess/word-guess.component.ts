import {Component, OnInit} from '@angular/core';
import {Word} from "@src/app/api/models/word";
import {WordControllerService} from "@src/app/api/services/word-controller.service";

@Component({
  selector: 'app-word-guess',
  templateUrl: './word-guess.component.html',
  styleUrls: ['./word-guess.component.css']
})
export class WordGuessComponent implements OnInit {
  words: Word[];

  isVisible = false;
  isHidden = true;

  changeLanguage = true;

  constructor(private wordControllerService: WordControllerService) {
  }

  ngOnInit(): void {
    this.wordControllerService.getAllNoTeachWordUsingGETResponse().subscribe(response => {
      this.words = response.body;
    });
  }

  removeWord(word: Word): void {
    this.wordControllerService.deleteWordUsingDELETE(word.id).subscribe(response => {
      this.ngOnInit();
    });
  }

  addToTeachWord(word: Word): void {
    this.wordControllerService.addToTeachWordUsingPUT(word.id).subscribe(response => {
      this.ngOnInit();
    });
  }

  cutWord(word: Word): number {
    let count: number = 0;
    for (let i = 0; i < word.articulation.length; i++) {
      if (word.articulation.charAt(i) != word.partOne.charAt(i)) {
        break;
      }
      count++;
    }
    console.log(count);
    return count;
  }

  cutSecondWord(word: Word): number {
    let count: number = 0;
    for (let i = 0; i < word.articulation.length; i++) {
      if (word.articulation.charAt(this.cutWord(word) + i) != word.partTwo.charAt(i)) {
        break;
      }
      count++;
    }
    console.log(count);
    return count;
  }

  show() {
    this.isVisible = !this.isVisible;
  }

  hidden() {
    this.isHidden = !this.isHidden;
  }

  changed() {
    this.changeLanguage = this.changeLanguage;
  }
}
