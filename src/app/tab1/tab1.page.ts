import { Component } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public lineChartData: ChartDataset[] = [
    { data: [20, 28, 30, 35, 26, 28, 18], 
      label: 'Road Side', 
      tension:0.5,
      backgroundColor: 'rgba(200,159,177,0.2)',
      borderColor: 'rgba(200,159,177,1)',
      pointBackgroundColor: 'rgba(200,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(200,159,177,0.8)'
    },
    {
      data: [22, 26, 32, 33, 22, 24, 15], 
      label: 'High Density',
      tension:0.5,
      backgroundColor: 'rgba(77,183,220,0.2)',
      borderColor: 'rgba(77,183,220,1)',
      pointBackgroundColor: 'rgba(77,183,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,183,220,1)'
    },
    { data: [18, 26, 29, 34, 32, 28, 24], 
      label: 'Ambient',
      tension:0.5,
      backgroundColor: 'rgba(148,210,177,0.2)',
      borderColor: 'rgba(148,210,177,1)',
      pointBackgroundColor: 'rgba(148,210,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,210,177,0.8)'
    },
  ];

  public lineChartLabels: Array<any> = ['Sun (2/7)', 'Mon (3/7)', 'Tue (4/7)', 'Wed (5/7)', 'Thu (6/7)', 'Fri (7/7)', 'Sat (8/7)'];
  
  public lineChartOptions: ChartOptions = { responsive: true };
  public lineChartLegend:boolean = true;
  public lineChartType: ChartType = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  public store: {label: string, value: string}[] = [];
  label = '';
  value = '';

  public items1: {label: string}[] =[];
  public items2: {value: string}[] =[];

  useDB()
  {
    alert('Connecting DB ...');
      this.items1.push({label: 'Station Taipa'});
      this.items2.push({value: '64'});
      this.items1.push({label: 'Station Macao'});
      this.items2.push({value: '85'});
      this.items1.push({label: 'Station Cotai'});
      this.items2.push({value: '43'});
      this.items1.push({label: 'Station Ka-Ho'});
      this.items2.push({value: '72'});
      this.items1.push({label: 'Station Fortaleza'});
      this.items2.push({value: '64'});
      var dataset = {label: '', value: ''}
      for(var i = 0; i < this.items1.length; i++) {
        dataset = {
          label :this.items1[i].label,
          value :this.items2[i].value
          }
        this.store.push(dataset);
      }    
  } 

  constructor() {}

}
