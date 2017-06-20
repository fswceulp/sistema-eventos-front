import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'admin.component.html',
    styleUrls: [ 'admin.component.css' ],
    encapsulation: ViewEncapsulation.None
})

export class AdminComponent implements OnInit {
    constructor(
	private route: ActivatedRoute,
	private router: Router
	) { }

    ngOnInit() { }
	telaHome() {
        this.router.navigate(['/']);
    }
}