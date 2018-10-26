import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../_models/index';
@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(users: User[], searchText : string): User[] {
    // if search term is undefiend
      if(!searchText ||  !users ) {
        return users// return null;
      }
      //returns updated users
      return users.filter(user =>
            user.username.toLowerCase().includes(searchText.toLowerCase()) ||
            user.FirstName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.LastName.toLowerCase().includes(searchText.toLowerCase())
      );
      }
  }
