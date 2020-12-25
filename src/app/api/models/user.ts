/* tslint:disable */
import { Role } from './role';
export interface User {
  email?: string;
  id?: number;
  password?: string;
  roles?: Array<Role>;
  username?: string;
}
