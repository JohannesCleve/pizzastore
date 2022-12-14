import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { Pizza } from '../models/pizza.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`/api/pizzas`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, payload).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${payload.id}`, payload).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http.delete<any>(`/api/pizzas/${payload.id}`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
