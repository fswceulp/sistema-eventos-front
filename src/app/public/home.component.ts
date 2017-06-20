import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
	private route: ActivatedRoute,
	private router: Router
	) { }

    ngOnInit() { }
	
	telaAdministrador() {
        this.router.navigate(['/admin']);
    }
	
}