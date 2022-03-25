import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import { BooksSet2 } from '../book.interfaces';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-chart',
  template: `<button mat-raised-button style="margin-left: 50px;" color="primary" (click)="openDialog()">Watch graphics</button>`
})
export class BookChartComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(BookChartDialog, {
      width: '600px',
      height: '440px',
      hasBackdrop: false
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: `app-book-chart-dialog`,
  template: `<div mat-dialog-content>
  <canvas class="myChart" width="500" height="300" #canvas></canvas>
  </div>
  <div mat-dialog-actions>
    <button mat-raised-button style="margin: 0 auto; padding: 0 20px 0 20px; font-size: 20px" color="primary" (click)="onNoClick()">Close window</button>
  </div>`
})
export class BookChartDialog implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('canvas') canvas!: ElementRef;
  labels: string[] = [];
  count: number[] = [];
  myChart!: Chart;

  constructor(
    public dialogRef: MatDialogRef<BookChartDialog>,
    public booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.getBooksInfo()
  }

  getBooksInfo(): void {
    this.booksService.getBooks2()
    .subscribe((arr: BooksSet2[]) => {
      arr.forEach((item: BooksSet2) => {
        this.labels.push(item.releaseDate);
        this.count.push(Number(item.qtyRelease));
      })
    })
  }

  ngAfterViewInit(): void {
    this.myChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [{
              label: '# of Dates',
              data: this.count,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

  ngAfterViewChecked(): void {
    this.myChart.update();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}