import { Component, OnInit } from '@angular/core';
import {WordControllerService} from "../../api/services/word-controller.service";
import {Word} from "../../api/models/word";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  words : Word[];

  constructor(private wordControllerService: WordControllerService) {
  }

  ngOnInit(): void {
    this.wordControllerService.getWordListUsingGETResponse().subscribe(response => {this.words = response.body});
  }

  removeWord(word: Word): void {
    this.wordControllerService.deleteWordUsingDELETE(word.id).subscribe(response => {this.ngOnInit()});
  }

  addToTeachWord(word: Word): void {
    this.wordControllerService.addToTeachWordUsingPUT(word.id).subscribe(response => {this.ngOnInit()});
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
