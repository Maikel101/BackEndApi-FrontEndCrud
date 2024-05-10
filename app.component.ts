import {MatDialog} from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogAddEditComponent } from './Dialogs/dialog-add-edit/dialog-add-edit.component';


import { Empleado } from './Interfaces/empleado';
import { EmpleadoService } from './Services/empleado.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, HttpClientModule,
    MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MomentDateModule,
    ReactiveFormsModule, MatSnackBarModule, MatDialogModule, MatGridListModule, DialogAddEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['NombreCompleto', 'Departamento', 'Sueldo', 'FechaContrato', 'Acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  constructor(private _empleadoServicio: EmpleadoService,
    public dialog: MatDialog){

  }

ngOnInit(): void {
  this.mostrarEmpleados();
}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarEmpleados(){
    this._empleadoServicio.getList().subscribe({
      next:(dataResponse) =>{
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      },error:(e) =>{}
    })
  }

  dialogoNuevoEmpleado() {
    this.dialog.open(DialogAddEditComponent,{
      disableClose:true,
      width:"350px"
    }).afterClosed().subscribe(resultado =>{
      if(resultado === "creado"){
        this.mostrarEmpleados();
      }
    })
  }


}




