import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service'; 
import {Trip} from '../models/trip'

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css', 
  host: {ngSkipHydration: 'true'}
})

export class TripCardComponent {
@Input ('trip') trip: any

constructor(private router: Router, private authenticationService: AuthenticationService){}

public isLoggedIn()
{
  return this.authenticationService.isLoggedIn();
}

  ngOnInit() {
  }

  public editTrip(trip:Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }


}
