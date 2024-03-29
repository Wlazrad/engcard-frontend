import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from '@nativescript/angular';

import {AppRoutingModule} from '@src/app/app-routing.module.tns';
import {AppComponent} from '@src/app/app.component';
import {AutoGeneratedComponent} from '@src/app/auto-generated/auto-generated.component';
import {CardComponent} from '@src/app/word/card/card.component';
import {WordListTeachComponent} from '@src/app/word/word-list-teach/word-list-teach.component';
import {WordGuessComponent} from '@src/app/word-guess/word-guess.component';
import {FooterComponent} from '@src/app/footer/footer.component';
import {HeaderComponent} from '@src/app/header/header.component';
import {SignatureFieldComponent} from '@src/app/signature-pad/signatureFieldComponent';
import {MatSliderModule} from "@angular/material/slider";


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent,
    CardComponent,
    WordListTeachComponent,
    WordGuessComponent,
    FooterComponent,
    HeaderComponent,
    SignatureFieldComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
