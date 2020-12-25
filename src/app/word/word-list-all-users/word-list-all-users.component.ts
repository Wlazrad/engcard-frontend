import { Component, OnInit } from '@angular/core';
import {WordControllerService} from "../../api/services/word-controller.service";
import {Word} from "../../api/models/word";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list-all-users.component.html',
  styleUrls: ['./word-list-all-users.component.css']
})
export class WordListAllUsersComponent implements OnInit {
  words : Word[];

  constructor(private wordControllerService: WordControllerService) {
  }

  ngOnInit(): void {
    this.wordControllerService.getWordListAllUsersUsingGETResponse().subscribe(response => {this.words = response.body});
  }

  removeWord(word: Word): void {
    this.wordControllerService.deleteWordUsingDELETE(word.id).subscribe(response => {this.ngOnInit()});
  }
}
