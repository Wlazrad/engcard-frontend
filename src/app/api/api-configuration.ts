/* tslint:disable */
import {Injectable} from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//skojarz.pl:8080';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
