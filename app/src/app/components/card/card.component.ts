import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() info: Object;
  @Input() height: String;
  @Input() clickable: Boolean;

  constructor() {}

  ngOnInit() {}
}
