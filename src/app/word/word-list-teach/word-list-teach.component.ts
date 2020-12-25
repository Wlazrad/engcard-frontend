import { Component, OnInit } from '@angular/core';
import {Word} from "@src/app/api/models/word";
import {WordControllerService} from "@src/app/api/services/word-controller.service";

@Component({
  selector: 'app-word-list-teach',
  templateUrl: './word-list-teach.component.html',
  styleUrls: ['./word-list-teach.component.css']
})
export class WordListTeachComponent implements OnInit {
  words : Word[];

  constructor(private wordControllerService: WordControllerService) {
  }

  ngOnInit(): void {
    this.wordControllerService.getAllTeachWordUsingGETResponse().subscribe(response => {this.words = response.body});
  }

  removeWord(word: Word): void {
    this.wordControllerService.deleteWordUsingDELETE(word.id).subscribe(response => {this.ngOnInit()});
  }

  removeFromTeachWord(word: Word): void {
    this.wordControllerService.removeFromTeachWordUsingPUT(word.id).subscribe(response => {this.ngOnInit()});
  }

  cutWord(word: Word): number {
    let count: number = 0;
    for (let i = 0; i<word.articulation.length; i++){
      if (word.articulation.charAt(i) != word.partOne.charAt(i)){
        break;
      }
      count++;
    }
    console.log(count);
    return count;
  }

  cutSecondWord(word: Word): number {
    let count: number = 0;
    for (let i = 0; i<word.articulation.length; i++){
      if (word.articulation.charAt(this.cutWord(word)+i) != word.partTwo.charAt(i)){
        break;
      }
      count++;
    }
    console.log(count);
    return count;
  }
}
