import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  private http = inject(HttpClient);
  
  resposta = signal('');

  testar() 
  {
    this.http.get<{msg: string}>('http://localhost:5231/api/teste')
      .subscribe(
        {
          next: (res) => 
          {
            this.resposta.set(res.msg);
            console.log('Sucesso:', res);
          },
          error: (err) => 
          {
            console.error('Erro de conexão:', err);
            this.resposta.set('Falha ao conectar. Verifique o console.');
          }
        });
  }
}