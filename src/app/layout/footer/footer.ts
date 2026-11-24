import { Component, signal } from '@angular/core';
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

  readonly newsletterEmail = signal('');
  readonly newsletterConsent = signal(false);
  readonly newsletterError = signal('');
  readonly newsletterSent = signal(false);

  subscribe(event: Event): void {
    event.preventDefault();
    const email = this.newsletterEmail().trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.newsletterError.set('Escribe un email válido.');
      return;
    }

    if (!this.newsletterConsent()) {
      this.newsletterError.set('Acepta la política de privacidad para continuar.');
      return;
    }

    this.newsletterError.set('');
    const subject = encodeURIComponent('Alta en la newsletter de SURGE');
    const body = encodeURIComponent(
      `Quiero recibir la newsletter de SURGE.\n\nEmail: ${email}\n\nAcepto la política de privacidad.`,
    );

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
    }
    this.newsletterSent.set(true);
  }

  resetNewsletter(): void {
    this.newsletterSent.set(false);
    this.newsletterEmail.set('');
    this.newsletterConsent.set(false);
  }
}
