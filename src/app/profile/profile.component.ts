import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../_services/token-storage.service';
import {PdfWordControllerService} from "@src/app/api/services/pdf-word-controller.service";
import {DomSanitizer} from "@angular/platform-browser";
import {saveAs} from "file-saver";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  name = 'Angular 5';
  fileUrl = 'http://localhost:8080/api/pdf/download/';


  constructor(private token: TokenStorageService,
              private pdfWordControllerService: PdfWordControllerService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  downloadMyCard(): void {
    this.pdfWordControllerService.downloadWordPDFUsingGET().subscribe(pdf => {
      const blob = new Blob([pdf], {type: 'application/pdf'});
      const filename = 'radek.pdf';
      saveAs(blob, filename);
    }, error => {
      console.log(error);
    });
  }
}

