import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // O endereço exato do seu back-end em Java
  private apiUrl = 'http://localhost:8080/api/produtos';

  // Injetamos a ferramenta de rede no nosso serviço
  constructor(private http: HttpClient) { }

  // Este método vai até a API e traz a lista de produtos cadastrados
  listarProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}