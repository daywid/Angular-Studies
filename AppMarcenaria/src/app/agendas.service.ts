import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './Agenda';
const httpOptions = {
headers: new HttpHeaders({
'Content-Type' : 'application/json'
})
}
@Injectable({
providedIn: 'root'
})
export class AgendasService {
apiUrl = 'http://localhost:5000/Agenda';
constructor(private http: HttpClient) { }

listar(): Observable<Agenda[]> {
  const url = `${this.apiUrl}/listar`;
  return this.http.get<Agenda[]>(url);
}

buscar(id: number): Observable<Agenda> {
  const url = `${this.apiUrl}/buscar/${id}`;
  return this.http.get<Agenda>(url);
}

cadastrar(agenda: Agenda): Observable<any> {
  const url = `${this.apiUrl}/cadastrar`;
  return this.http.post<Carro>(url, agenda, httpOptions);
}

atualizar(agenda: Agenda): Observable<any> {
  const url = `${this.apiUrl}/atualizar`;
  return this.http.put<Agenda>(url, agenda, httpOptions);
}

excluir(id: number): Observable<any> {
  const url = `${this.apiUrl}/buscar/${id}`;
  return this.http.delete<string>(url, httpOptions);
}





}