import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ResponseEnero } from './model/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ResponseEnero?: ResponseEnero[] = [];
  totalmonthJanuary = 0;
  totalmonthFebrary = 0;
  totalmonthMarch = 0;
  totalmonthApril = 0;
  totalmonthMay = 0;
  totalmonthJune = 0;
  totalmontJuly = 0;
  totalmonthAugust = 0;
  totalmonthSetember = 0;
  totalmontNovember = 0;
  totalmontOctober = 0;
  totalmonthDecember = 0;
  totalgeneral = 0;

  Response?: any[] = [
    { mes: 'Febrero', sede: 'Arequipa', cantidad: 30, actividad: 1 },
    { mes: 'Marzo', sede: 'Arequipa', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Arequipa', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Arequipa', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Arequipa', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Arequipa', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Arequipa', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Arequipa', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Arequipa', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Arequipa', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Arequipa', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Juliaca', cantidad: 1, actividad: 1 },
    { mes: 'Febrero', sede: 'Juliaca', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Juliaca', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Juliaca', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Juliaca', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Juliaca', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Juliaca', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Juliaca', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Juliaca', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Juliaca', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Juliaca', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Juliaca', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Lima', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Lima', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Lima', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Lima', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Lima', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Lima', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Lima', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Lima', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Lima', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Lima', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Lima', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Lima', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Tacna', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Tacna', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Tacna', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Tacna', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Tacna', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Tacna', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Tacna', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Tacna', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Tacna', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Tacna', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Tacna', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Tacna', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Tarapoto', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Tarapoto', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Tarapoto', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Tarapoto', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Tarapoto', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Tarapoto', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Tarapoto', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Tarapoto', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Tarapoto', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Tarapoto', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Tarapoto', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Tarapoto', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Cusco', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Cusco', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Cusco', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Cusco', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Cusco', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Cusco', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Cusco', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Cusco', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Cusco', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Cusco', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Cusco', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Cusco', cantidad: 10, actividad: 1 },

    { mes: 'Enero', sede: 'Jaén', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Jaén', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Jaén', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Jaén', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Jaén', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Jaén', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Jaén', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Jaén', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Jaén', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Jaén', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Jaén', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Jaén', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Pucallpa', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Pucallpa', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Pucallpa', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Pucallpa', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Pucallpa', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Pucallpa', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Pucallpa', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Pucallpa', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Pucallpa', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Pucallpa', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Pucallpa', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Pucallpa', cantidad: 10, actividad: 1 },
    { mes: 'Enero', sede: 'Aguaytía', cantidad: 10, actividad: 1 },
    { mes: 'Febrero', sede: 'Aguaytía', cantidad: 20, actividad: 1 },
    { mes: 'Marzo', sede: 'Aguaytía', cantidad: 9, actividad: 1 },
    { mes: 'Abril', sede: 'Aguaytía', cantidad: 8, actividad: 1 },
    { mes: 'Mayo', sede: 'Aguaytía', cantidad: 5, actividad: 1 },
    { mes: 'Junio', sede: 'Aguaytía', cantidad: 3, actividad: 1 },
    { mes: 'Julio', sede: 'Aguaytía', cantidad: 10, actividad: 1 },
    { mes: 'Agosto', sede: 'Aguaytía', cantidad: 9, actividad: 1 },
    { mes: 'Setiembre', sede: 'Aguaytía', cantidad: 8, actividad: 1 },
    { mes: 'Octubre', sede: 'Aguaytía', cantidad: 5, actividad: 1 },
    { mes: 'Noviembre', sede: 'Aguaytía', cantidad: 3, actividad: 1 },
    { mes: 'Diciembre', sede: 'Aguaytía', cantidad: 10, actividad: 1 },

    { mes: 'Febrero', sede: 'Arequipa', cantidad: 10, actividad: 2 },
    { mes: 'Marzo', sede: 'Arequipa', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Arequipa', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Arequipa', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Arequipa', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Arequipa', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Arequipa', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Arequipa', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Arequipa', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Arequipa', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Arequipa', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Juliaca', cantidad: 5, actividad: 2 },
    { mes: 'Febrero', sede: 'Juliaca', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Juliaca', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Juliaca', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Juliaca', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Juliaca', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Juliaca', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Juliaca', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Juliaca', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Juliaca', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Juliaca', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Juliaca', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Lima', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Lima', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Lima', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Lima', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Lima', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Lima', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Lima', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Lima', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Lima', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Lima', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Lima', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Lima', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Tacna', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Tacna', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Tacna', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Tacna', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Tacna', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Tacna', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Tacna', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Tacna', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Tacna', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Tacna', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Tacna', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Tacna', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Tarapoto', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Tarapoto', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Tarapoto', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Tarapoto', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Tarapoto', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Tarapoto', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Tarapoto', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Tarapoto', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Tarapoto', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Tarapoto', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Tarapoto', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Tarapoto', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Cusco', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Cusco', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Cusco', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Cusco', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Cusco', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Cusco', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Cusco', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Cusco', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Cusco', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Cusco', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Cusco', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Cusco', cantidad: 10, actividad: 2 },

    { mes: 'Enero', sede: 'Jaén', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Jaén', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Jaén', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Jaén', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Jaén', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Jaén', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Jaén', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Jaén', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Jaén', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Jaén', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Jaén', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Jaén', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Pucallpa', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Pucallpa', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Pucallpa', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Pucallpa', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Pucallpa', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Pucallpa', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Pucallpa', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Pucallpa', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Pucallpa', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Pucallpa', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Pucallpa', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Pucallpa', cantidad: 10, actividad: 2 },
    { mes: 'Enero', sede: 'Aguaytía', cantidad: 10, actividad: 2 },
    { mes: 'Febrero', sede: 'Aguaytía', cantidad: 20, actividad: 2 },
    { mes: 'Marzo', sede: 'Aguaytía', cantidad: 9, actividad: 2 },
    { mes: 'Abril', sede: 'Aguaytía', cantidad: 8, actividad: 2 },
    { mes: 'Mayo', sede: 'Aguaytía', cantidad: 5, actividad: 2 },
    { mes: 'Junio', sede: 'Aguaytía', cantidad: 3, actividad: 2 },
    { mes: 'Julio', sede: 'Aguaytía', cantidad: 10, actividad: 2 },
    { mes: 'Agosto', sede: 'Aguaytía', cantidad: 9, actividad: 2 },
    { mes: 'Setiembre', sede: 'Aguaytía', cantidad: 8, actividad: 2 },
    { mes: 'Octubre', sede: 'Aguaytía', cantidad: 5, actividad: 2 },
    { mes: 'Noviembre', sede: 'Aguaytía', cantidad: 3, actividad: 2 },
    { mes: 'Diciembre', sede: 'Aguaytía', cantidad: 10, actividad: 2 },
  ];

  public barChartLabels: Label[];

  public barChartData: ChartDataSets[];
  private filter: Object = {};
  constructor() {}
  public calculatesumtotal(): void {
    this.totalgeneral =
      this.totalmonthJanuary +
      this.totalmonthFebrary +
      this.totalmonthMarch +
      this.totalmonthApril +
      this.totalmonthMay +
      this.totalmonthJune +
      this.totalmontJuly +
      this.totalmonthAugust +
      this.totalmonthSetember +
      this.totalmontNovember +
      this.totalmontOctober +
      this.totalmonthDecember;
  }
  public calculateTotalbyMotnh(mes: string, actividad: number) {
    var filter = [];
    filter = this.Response.filter(
      (x) => x.mes == mes && x.actividad == actividad
    );
    var total = 0;
    filter.forEach((item) => {
      total += item.cantidad;
    });
    return total;
  }

  public randomize(mes: String, actividad: number): void {
    this.ResponseEnero = this.Response.filter(
      (x) => x.mes == mes && x.actividad == actividad
    );

    const copyItems = [];
    const labelItems = [];
    const colors = [];

    this.ResponseEnero.forEach((item) => {
      copyItems.push(item.cantidad);
      labelItems.push(item.sede);
      colors.push(item.color);
    });

    this.barChartData = [
      {
        data: copyItems,
        backgroundColor: colors,
      },
    ];
    this.barChartLabels = labelItems;
    this.calculatetotAllMotnhs(actividad);
    this.calculatesumtotal();
  }
  addcolors() {
    this.Response.forEach((element, i) => {
      switch (element.sede) {
        case 'Arequipa': {
          this.Response[i].color = '#efb810';
          break;
        }
        case 'Juliaca': {
          this.Response[i].color = '#FF0000';
          break;
        }
        case 'Lima': {
          this.Response[i].color = '#5dc1b9';
          break;
        }
        case 'Tacna': {
          this.Response[i].color = '#008000';
          break;
        }
        case 'Tarapoto': {
          this.Response[i].color = '#0000FF';
          break;
        }
        case 'Cusco': {
          this.Response[i].color = '#FFA500';
          break;
        }
        case 'Jaén': {
          this.Response[i].color = '#e30052';
          break;
        }
        case 'Pucallpa': {
          this.Response[i].color = '#B695C0';
          break;
        }
        case 'Aguaytía': {
          this.Response[i].color = '#32CD32';
          break;
        }
      }
    });
  }
  calculatetotAllMotnhs(actividad: number) {
    this.totalmonthJanuary = this.calculateTotalbyMotnh('Enero', actividad);
    this.totalmonthFebrary = this.calculateTotalbyMotnh('Febrero', actividad);
    this.totalmonthMarch = this.calculateTotalbyMotnh('Marzo', actividad);
    this.totalmonthApril = this.calculateTotalbyMotnh('Abril', actividad);
    this.totalmonthMay = this.calculateTotalbyMotnh('Mayo', actividad);
    this.totalmonthJune = this.calculateTotalbyMotnh('Junio', actividad);
    this.totalmontJuly = this.calculateTotalbyMotnh('Julio', actividad);
    this.totalmonthAugust = this.calculateTotalbyMotnh('Agosto', actividad);
    this.totalmonthSetember = this.calculateTotalbyMotnh(
      'Setiembre',
      actividad
    );
    this.totalmontOctober = this.calculateTotalbyMotnh('Octubre', actividad);
    this.totalmontNovember = this.calculateTotalbyMotnh('Noviembre', actividad);
    this.totalmonthDecember = this.calculateTotalbyMotnh(
      'Diciembre',
      actividad
    );
    this.calculatesumtotal();
  }
  public onFilter($event: any): void {
    this.filter = $event;
    console.log(this.filter['actvidad']);
    this.randomize(this.filter['mes'], this.filter['actividad']);
  }
  ngOnInit() {
    this.calculatetotAllMotnhs(1);
    this.addcolors();
    this.barChartData = [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ];

    this.barChartLabels = [
      'Arequipa',
      'Juliaca',
      'Lima',
      'Tacna',
      'Tarapoto',
      'Cusco',
      'Jaen',
      'Pucallpa',
      'Aguaytia',
    ];
  }
}
