import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding: 50px; text-align: center;">
      <h1>Integração Projeto 01</h1>
      <button (click)="testar()">Verificar Back-end</button>
      <h2 style="color: #2e7d32;">{{ resposta() }}</h2>
    </div>
  `
})
export class AppComponent {
  private http = inject(HttpClient);
  resposta = signal('');

  testar() {
    // REMOVIDO O 'S' DO HTTPS ABAIXO:
    this.http.get<{msg: string}>('http://localhost:5231/api/teste')
      .subscribe({
        next: (res) => {
          this.resposta.set(res.msg);
          console.log('Sucesso:', res);
        },
        error: (err) => {
          console.error('Erro de conexão:', err);
          this.resposta.set('Falha ao conectar. Verifique o console.');
        }
      });
  }
}