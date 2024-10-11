import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {DashboardService} from "./dasboard.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'dash-board',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    FormsModule, HttpClientModule
  ],
  providers: [DashboardService],
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  @Input() message :string = '';
  @Output() passDataFromChild = new EventEmitter<string>();
  txtmsg:string='Sending Back to Parent!!';
  receivedData: any;
  empName: string | undefined;
  empLocation: string | undefined;
  managerId: number = 0;

  constructor(private route: ActivatedRoute,
              private dashboardService: DashboardService) {
    console.log('Dashboard Compoent Constructor Invoked!!');
  }

  ngOnInit(): void {
    console.log('Inside Dashboard component On Init Method');
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.queryParamMap.get('rest'));
    this.passDataFromChild.emit(this.txtmsg);

    //get the data from backend
    this.dashboardService.getIndexData().subscribe({
        next: (data) => {
            console.log("Data Updated!!!"+data);
        },error: (error) => {
            console.error(error);
        },
        complete: () => {console.log('Process Completed...')}
    }) ;
    // //get the data from backend
    // this.dashboardService.getData().subscribe((data) => {
    //     this.receivedData = data;
    // });
  }

  submit() {
    console.log('Button Clicked!! : ');
    this.passDataFromChild.emit(this.txtmsg);
  }

  submitData() {
    console.log('Received Data : '+this.empName + ' , '+this.empLocation+' , '+this.managerId);
    const reqParam = {
      empName: this.empName,
      empLocation: this.empLocation,
      managerId: this.managerId
    };

    // this.dashboardService.postData(reqParam).subscribe({
    //     next: (data) => {
    //         console.log(data);
    //     },
    //     error: (error) => {
    //         console.error(error);
    //     },
    //     complete: () => {console.log('Process Completed...')}
    // });
  }

  updateData() {
    const reqParam = {
      title: 'Data',
      requestId: 2,
      data: 'Please check once'
    };
    // this.dashboardService.updateData(reqParam).subscribe({
    //     next: (data) => {
    //         console.log("Data Updated!!!");
    //     },error: (error) => {
    //         console.error(error);
    //     },
    //     complete: () => {console.log('Process Completed...')}
    // }) ;
  }

  removeData() {
    const id = 5;
    // this.dashboardService.removeData(id).subscribe({
    //     next: (data) => {
    //         console.log("Data Deleted!!!");
    //     },error: (error) => {
    //         console.error(error);
    //     },
    //     complete: () => {console.log('Process Completed...')}
    // })
  }

}
