import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels:string[] = ['Sun (2/7)', 'Mon (3/7)', 'Tue (4/7)', 'Wed (5/7)', 'Thu (6/7)', 'Fri (7/7)', 'Sat (8/7)'];
  public barChartType: ChartType = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    { data: [22, 26, 32, 33, 22, 24, 15], label: 'Prediction',
      backgroundColor: 'rgba(77,183,220,0.2)',
      borderColor: 'rgba(77,183,220,1)',
      pointBackgroundColor: 'rgba(77,183,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,183,220,1)' 
    },
    {data: [20, 28, 30, 35, 26, 28, 18], label: 'Observation'}
  ];
  
  public barChartData2:any[] = [
    { data: [22, 26, 32, 33, 22, 24, 15], label: 'Prediction',
      backgroundColor: 'rgba(200,159,177,0.2)',
      borderColor: 'rgba(200,159,177,1)',
      pointBackgroundColor: 'rgba(77,183,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,183,220,1)' 
    },
    {data: [20, 28, 30, 35, 26, 28, 18], label: 'Observation',
      backgroundColor: 'rgba(190,30,30,0.2)',
      borderColor: 'rgba(190,30,30,1)'
    }
  ];


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35)
      ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[1].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  public randomize2():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35),
      Math.round(Math.random() * 35)
      ];
    let clone = JSON.parse(JSON.stringify(this.barChartData2));
    clone[1].data = data;
    this.barChartData2 = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor() {}

}
