import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgramacoesService } from './eventos/programacoes/programacoes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    templateUrl: 'admin.component.html',
    styleUrls: [ 'admin.component.css' ],
    encapsulation: ViewEncapsulation.None
})

export class AdminComponent implements OnInit {
    constructor(private programacoesService: ProgramacoesService,private activatedRoute: ActivatedRoute,
                     private router: Router) { }

    ngOnInit() { }
}