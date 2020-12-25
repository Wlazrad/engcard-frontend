import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WordControllerService} from "../api/services/word-controller.service";
import {DikiControllerService, TxtControllerService} from "../api/services";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-word-list',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  wordForm: FormGroup;
  options: string[] = ['one'];
  filteredOptions: Observable<string[]>;
  filteredOptionsForTwo: Observable<string[]>;

  constructor(private formBuilder: FormBuilder,
              private wordControllerService: WordControllerService,
              private dikiControllerService: DikiControllerService,
              private txtControllerService: TxtControllerService) {
  }

  ngOnInit(): void {
    this.wordForm = this.buildWordForm();

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  addWord() {
    this.wordControllerService.addWordUsingPOST(this.wordForm.value).subscribe();
  }

  buildWordForm() {
    return this.formBuilder.group({
      articulation: ['', Validators.maxLength(10)],
      createdBy: '',
      createdDate: '',
      lastModifiedBy: '',
      lastModifiedDate: '',
      partOne: ['', Validators.maxLength(10)],
      partTwo: ['', Validators.maxLength(10)],
      polishMeaning: ['', Validators.maxLength(10)],
      spelling: ['', Validators.maxLength(10)],
      title: ['', Validators.maxLength(10)],
      partOfSpeech: ['', Validators.maxLength(10)],
    });
  }


  autoComplete() {
    this.txtControllerService.getAutoCompleteListUsingGET1Response(this.wordForm.get('partOne').value).subscribe(response => {
      this.options = response.body;
      console.log(this.options.length);

      this.filteredOptions = this.wordForm.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  autoCompleteForTwo() {
    this.txtControllerService.getAutoCompleteListUsingGET1Response(this.wordForm.get('partTwo').value).subscribe(response => {
      this.options = response.body;
      console.log(this.options.length);

      this.filteredOptionsForTwo = this.wordForm.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }
}
