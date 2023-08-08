import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'UFxqbGvVIOrmTOdl1gp9TA8e31Y1D5kh';



  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) =>  oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );

    if (this.tagsHistory.length > 10 )
      this._tagsHistory.pop();

  }

  public searchTag ( tag: string):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);


  }


}
