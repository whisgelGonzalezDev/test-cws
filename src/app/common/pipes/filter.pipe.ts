import { Pipe, PipeTransform } from '@angular/core';
import { IHogwarts } from '../models/ihogwarts.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: IHogwarts[]): any {
    const resultPosts: IHogwarts[] = [];
    for(const post of value){
      if(post.house.toLowerCase().indexOf(args) > -1){
        resultPosts.push(post);
        console.log(resultPosts);
      };
    };
    return resultPosts;
  }

}
