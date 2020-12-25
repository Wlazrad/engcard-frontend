/* tslint:disable */
import { User } from './user';
export interface Word {
  articulation?: string;
  createdBy?: string;
  createdByObj?: User;
  createdDate?: string;
  id?: number;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  partOfSpeech?: 'rzeczownik' | 'przymiotnik' | 'czasownik';
  partOne?: string;
  partTwo?: string;
  polishMeaning?: string;
  spelling?: string;
  teach?: boolean;
  title?: string;
  user?: User;
}
