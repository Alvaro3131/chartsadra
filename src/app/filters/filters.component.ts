import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  template: `
   <form [formGroup]="reportForm">
    <select
      name=""
      id=""
      style="margin-bottom: 10px"
     
      formControlName="mes"
    >
      <option value="">Seleccione un Mes</option>
      <option value="Enero">Enero</option>

      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Setiembre">Setiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
      <option value="Diciembre">Diciembre</option>
    </select>

    <select
      name=""
      id=""
      style="margin-bottom: 10px"
  
      formControlName="actividad"
    >
      <option value=1>META</option>

      <option value=2>EJECUTADO</option>
    </select>

          <button class="btn btn-info btn-sm btn-round btn-icon float-left"
                  (click)="onFilter()" data-toggle="tooltip" rel="tooltip" ngbTooltip="Buscar">
                  buscar
            <i class="nc-icon ui-1_zoom-split"></i>
          </button>
       
  </form>
  `,
})
export class FiltersComponent implements OnInit {
  reportForm = new FormGroup({
    mes: new FormControl('', [Validators.required]),
    actividad: new FormControl(1, [Validators.required]),
  });
  @Output() eventFilters = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  public onFilter(): void {
    
    this.eventFilters.emit(this.reportForm.value);

  }
}
