import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {
  id:number;
  ticket:Ticket;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private ticketsService:TicketsService) {
 
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    this.ticketsService.addTicket(this.id).subscribe(
      ticket=>{
        console.log("xxxxx");
        console.log(ticket);
        this.ticket=ticket;
      },
      err=>{
        console.log(err)
      }
    );
    });
  }

}
