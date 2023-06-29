import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public radarData = {
    labels: [
      'PM10',
      'PM2.5',
      'SO2',
      'NO2',      
      'O3',      
      'CO'
    ],
    datasets: [
      {
      label: 'Air Pollutant Consistituent',
      data: [25,28,12,15,13,7],
      backgroundColor: 'rgba(200,159,177,0.2)',
      borderColor: 'rgba(200,159,177,1)',
      pointBackgroundColor: 'rgba(77,183,220,1)',
      hoverOffset: 4
      },
      {
        label: 'Compare to past 24-hour',
        data: [35,33,8,7,5,4],
        backgroundColor: 'rgba(77,183,220,0.2)',
        borderColor: 'rgba(77,183,220,1)',
        pointBackgroundColor: 'rgba(77,183,220,1)',
        hoverOffset: 4
        },
    ]
  };
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  public radarType: ChartType = 'radar';
  constructor() {}
  public randomize():void {
    // Only Change 3 values
    var a5 = Math.round(Math.random() * 8 );
    var a2 = Math.round(Math.random() * 50);
    var a3 = Math.round(Math.random() * 20);
    var a4 = Math.round(Math.random() * 12);
    var a1 = 100 - a5  - a2 - a3 - a4;
    let data = [ a1, a2, a3, a4, a5 ];
    let clone = JSON.parse(JSON.stringify(this.radarData));
    clone.datasets[0].data = data;
    this.radarData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
