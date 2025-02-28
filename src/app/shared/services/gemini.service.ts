import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { API } from '@shared/constants/apiConstants';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  constructor(private http: HttpClient) { }

  generateContent(prompt: any): Observable<string> {
    return this.http
      .post<{ response: string }>(environment.ApiUrl + API.gemini.generatePrompt, prompt)
      .pipe(map((res) => res.response));
  }

}
