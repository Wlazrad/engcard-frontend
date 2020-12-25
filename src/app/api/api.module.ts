/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { DikiControllerService } from './services/diki-controller.service';
import { PdfWordControllerService } from './services/pdf-word-controller.service';
import { TestControllerService } from './services/test-controller.service';
import { TxtControllerService } from './services/txt-controller.service';
import { WordControllerService } from './services/word-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthControllerService,
    DikiControllerService,
    PdfWordControllerService,
    TestControllerService,
    TxtControllerService,
    WordControllerService,
    BasicErrorControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
