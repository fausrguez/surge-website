import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CAFFEINE_WARNING, CONTACT_EMAIL, SOCIALS } from '../../core/content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly email = CONTACT_EMAIL;
  readonly socials = SOCIALS;
  readonly warning = CAFFEINE_WARNING;
  readonly year = 2026;
}
