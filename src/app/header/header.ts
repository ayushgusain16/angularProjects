import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HighlightDirective],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
