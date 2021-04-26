import { Component,ChangeDetectionStrategy } from '@angular/core';
import { TextAnimation } from "ngx-teximate";
import { rollIn } from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'AdvGame';

  text = "Start editing to see some magic happen :)";

  enterAnimation: TextAnimation = {
    animation: rollIn,
    delay: 50,
    type: "letter"
  };
}
