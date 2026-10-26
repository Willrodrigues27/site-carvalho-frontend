import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from './produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  // Lista que vai guardar os produtos que chegam do Java
  produtos: any[] = []; 

  constructor(private produtoService: ProdutoService) {}

  // Este método corre automaticamente quando o site abre
  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados; // Guarda os dados do banco na nossa lista
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos do Java:', erro);
      }
    });
  }
}