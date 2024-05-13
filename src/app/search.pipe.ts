import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interface/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Users:User[],term:string): User[] {
    if(term) {
      return Users.filter( (user)=>user.id===Number(term));

    }else{
      return Users;
    }
  }

}
