import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FLAVORS, SOCIALS } from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-bestial-race',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './bestial-race.html',
  styleUrl: './bestial-race.scss',
})
export class BestialRace {
  private readonly seo = inject(SeoService);
  private readonly fb = inject(FormBuilder);
  readonly ui = inject(UiService);

  readonly socials = SOCIALS;
  readonly flavors = FLAVORS;
  readonly submitted = signal(false);
  readonly sendError = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    privacidad: [false, [Validators.requiredTrue]],
  });

  constructor() {
    this.seo.setPage({
      title: 'Bestial Race 2027 · SURGE — Energy from the earth',
      description:
        'SURGE × Bestial Race. La carrera de obstáculos de Canarias vuelve en junio–julio de 2027. Energía natural para antes, durante y después.',
      path: '/bestial-race',
      image: 'assets/img/inicial.webp',
    });
  }

  subscribe(): void {
    this.form.markAllAsTouched();
    this.sendError.set(this.form.invalid);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
  }

  openPacks(): void {
    this.ui.openPack(12);
  }
}
