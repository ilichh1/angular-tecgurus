import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-two',
  templateUrl: './componente-two.component.html',
  styleUrls: ['./componente-two.component.css']
})
export class ComponenteTwoComponent implements OnInit {
  public idFromURL: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idFromURL = Number(this.route.snapshot.paramMap.get('id'));
  }

  /**
   * Valida que el usuario tenga el id permitido
   * Desactualizado
   * Solo para referencia
   */
  public createRouteSubscription(): void {
    this.route.params.subscribe(params => {
      // El parametro siempre se retorna en string
      // si necesitas algo distinto a un string
      // conviertelo a ese tipo de dato
      console.log(params.id)
      if (Number(params.id) !== 27) {
        this.router.navigate(['/componente-1']);
      }
    });
  }



}
