import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ Constants } from '@data/constants/constants';
import { CharacterAPIResp } from '../interfaces/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyApiService {

  private baseCharacter = Constants.API_ENDPOINT_CHARACTER;
  constructor(
    private http: HttpClient,
  ) { 
  }

  getCharacter(): Observable<CharacterAPIResp>{
    return this.http.get<CharacterAPIResp>(this.baseCharacter);
  }

  
}
