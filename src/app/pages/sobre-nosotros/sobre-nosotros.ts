import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CONTACT_EMAIL, CONTACT_SUBJECTS, SOCIALS } from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [ReactiveFormsModule, RouterLink, Reveal],
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.scss',
})
export class SobreNosotros {
  private readonly seo = inject(SeoService);
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  readonly ui = inject(UiService);

  readonly email = CONTACT_EMAIL;
  readonly socials = SOCIALS;
  readonly subjects = CONTACT_SUBJECTS;

  readonly submitted = signal(false);
  readonly errorSummary = signal<string[]>([]);

  readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['Pedido o envío', [Validators.required]],
    mensaje: ['', [Validators.required, Validators.minLength(20)]],
    privacidad: [false, [Validators.requiredTrue]],
  });

  private readonly successTitle = viewChild<ElementRef<HTMLElement>>('successTitle');
  private readonly firstField = viewChild<ElementRef<HTMLInputElement>>('firstField');
  private readonly errorSummaryBox = viewChild<ElementRef<HTMLElement>>('errorSummaryBox');

  constructor() {
    this.seo.setPage({
      title: 'Sobre nosotros · SURGE — Energy from the earth',
      description:
        'Conoce el origen, la misión, la visión y los valores de SURGE, la bebida energética natural nacida en Canarias. Más natural, menos agresivo. Sé equilibrado.',
      path: '/sobre-nosotros',
      image: 'assets/img/inicial.webp',
    });

    const asunto = this.route.snapshot.queryParamMap.get('asunto');
    const map: Record<string, string> = {
      tienda: 'Quiero vender SURGE',
      bestial: 'Bestial Race',
      prensa: 'Colaboración o prensa',
    };
    if (asunto && map[asunto]) {
      this.form.controls.asunto.setValue(map[asunto]);
    }
  }

  showError(field: 'nombre' | 'email' | 'mensaje' | 'privacidad'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    this.form.markAllAsTouched();
    const messages: string[] = [];
    if (this.form.controls.nombre.invalid) {
      messages.push('Escribe tu nombre.');
    }
    if (this.form.controls.email.invalid) {
      messages.push('Revisa tu email.');
    }
    if (this.form.controls.mensaje.invalid) {
      messages.push('Cuéntanos un poco más (mínimo 20 caracteres).');
    }
    if (this.form.controls.privacidad.invalid) {
      messages.push('Acepta la política de privacidad para continuar.');
    }
    this.errorSummary.set(messages);
    if (messages.length > 0) {
      queueMicrotask(() => this.errorSummaryBox()?.nativeElement.focus());
      return;
    }

    this.submitted.set(true);
    queueMicrotask(() => this.successTitle()?.nativeElement.focus());
  }

  mailtoHref(): string {
    const value = this.form.getRawValue();
    const body = [
      `Nombre: ${value.nombre}`,
      `Email: ${value.email}`,
      `Asunto: ${value.asunto}`,
      '',
      value.mensaje,
      '',
      'Acepto la política de privacidad.',
    ].join('\n');
    return `mailto:${this.email}?subject=${encodeURIComponent(
      `Contacto web · ${value.asunto}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  sendAnother(): void {
    this.form.reset({
      nombre: '',
      email: '',
      asunto: 'Pedido o envío',
      mensaje: '',
      privacidad: false,
    });
    this.submitted.set(false);
    this.errorSummary.set([]);
    queueMicrotask(() => this.firstField()?.nativeElement.focus());
  }

  openPacks(): void {
    this.ui.openPack(12);
  }
}
