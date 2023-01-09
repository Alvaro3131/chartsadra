import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ResponseEnero } from '../model/response';

@Component({
  selector: 'app-list',
  template: `
    <div style="width: 20%; float: left">
      <div style="overflow-x: auto">
        <table>
          <tr>
            <th>Etiquetas de fila</th>
            <th class="thnumber">
              Suma de N° REVISIÓN DE INFORMACIÓN SOCIOECONOMICA
            </th>
          </tr>
          <tr>
            <td style="font-weight: bold">Enero</td>
            <td style="font-weight: bold">{{ totalmonthJanuary }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Enero'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Enero'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Febrero</td>
            <td style="font-weight: bold">{{ totalmonthFebrary }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Febrero'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Febrero'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Marzo</td>
            <td style="font-weight: bold">{{ totalmonthMarch }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Marzo'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Marzo'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Abril</td>
            <td style="font-weight: bold">{{ totalmonthApril }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Abril'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Abril'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Mayo</td>
            <td style="font-weight: bold">{{ totalmonthMay }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Mayo'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Mayo'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Junio</td>
            <td style="font-weight: bold">{{ totalmonthJune }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Junio'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Junio'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Julio</td>
            <td style="font-weight: bold">{{ totalmontJuly }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Julio'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Julio'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Agosto</td>
            <td style="font-weight: bold">{{ totalmonthAugust }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Agosto'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Agosto'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Setiembre</td>
            <td style="font-weight: bold">{{ totalmonthSetember }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Setiembre'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Setiembre'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Octubre</td>
            <td style="font-weight: bold">{{ totalmontOctober }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Octubre'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Octubre'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Noviembre</td>
            <td style="font-weight: bold">{{ totalmontNovember }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Noviembre'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Noviembre'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Diciembre</td>
            <td style="font-weight: bold">{{ totalmonthDecember }}</td>
          </tr>
          <tr *ngFor="let sede of ResponseEnero">
            <td *ngIf="sede.mes == 'Diciembre'">{{ sede.sede }}</td>
            <td *ngIf="sede.mes == 'Diciembre'">{{ sede.cantidad }}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Total General</td>
            <td style="font-weight: bold">{{ totalgeneral }}</td>
          </tr>
        </table>
      </div>
    </div>

    <div style="width: 80%; float: right">
      <canvas
        baseChart
        [datasets]="barChartData"
        [labels]="barChartLabels"
        [options]="barChartOptions"
        [plugins]="barChartPlugins"
        [legend]="barChartLegend"
        [chartType]="barChartType"
        height="100"
      >
      </canvas>
    </div>
  `,
  styles: [
    `
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
      }

      th,
      td {
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      .drop-toggle {
        background-color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
        border: 1px solid #ccc;
        width: 233px;
        text-align: left;
      }
      .drop-toggle i {
        float: right;
      }
      .drop-show {
        padding: 4px;
        width: 222px;
        background-color: #fff;
        border: 1px solid #bababa;
        position: absolute;
        z-index: 100;
        -webkit-box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        margin-left: 1px;
      }
      .drop-show label {
        display: block;
        font-size: 15px;
        cursor: pointer;
      }
      .drop-show label input {
        vertical-align: top;
      }
      .drop-show label span {
        display: inline-block;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  @Input() ResponseEnero?: ResponseEnero[] = [];
  @Input() totalmonthJanuary = 0;
  @Input() totalmonthFebrary = 0;
  @Input() totalmonthMarch = 0;
  @Input() totalmonthApril = 0;
  @Input() totalmonthMay = 0;
  @Input() totalmonthJune = 0;
  @Input() totalmontJuly = 0;
  @Input() totalmonthAugust = 0;
  @Input() totalmonthSetember = 0;
  @Input() totalmontNovember = 0;
  @Input() totalmontOctober = 0;
  @Input() totalmonthDecember = 0;
  @Input() totalgeneral = 0;

  @Input() barChartLabels: Label[];
  @Input() barChartData: ChartDataSets[];

  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (label, index, labels) {
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },
          },
        },
      ],
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
      },
    },
  };
  constructor() {}

  ngOnInit() {}
}
