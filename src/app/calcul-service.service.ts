import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {
 

  constructor() { }
  public getNumberOf(list:any[], critiria:string, value:any){
    
    if(critiria=="userId"){
      return list.filter(x=>x.userId==value).length
    }
    else if(critiria=="completed"){
      return list.filter(x=>x.completed==value).length
    }
    else if(critiria=="title"){
      return list.filter(x=>x.title==value).length
    }
    else if(critiria=="username"){
      return list.filter(x=>x.username==value).length
    }
  }
  
}
