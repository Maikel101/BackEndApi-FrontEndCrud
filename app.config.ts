import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch  } from '@angular/common/http';

//1.-Para trabajar con Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

//2.-Para trabajar con cont peticiones http
import { HttpClientModule } from '@angular/common/http';

//3.-Para trabajar con Tablas en material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//4.-Para trabajar con controles de formularios de material
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MomentDateModule } from '@angular/material-moment-adapter';

//5.-Para trabajar con mensaje de alertas
import {MatSnackBarModule} from '@angular/material/snack-bar';

//6.-Para trabajar con iconos de material
import {MatIconModule} from '@angular/material/icon';

//7.-Para trabajar con modales de material
import {MatDialogModule} from '@angular/material/dialog';

//8.-Para trabajar con cuadriculas
import {MatGridListModule} from '@angular/material/grid-list';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch()),
    ReactiveFormsModule,
    HttpClientModule, 
    MatButtonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule]
};

