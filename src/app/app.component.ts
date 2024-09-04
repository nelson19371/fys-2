import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] // Asegúrate de incluir CommonModule aquí
})
export class AppComponent {
  alerta = {
    lat: "-23.749273",
    lng: "-70.108439",
    mapa: "https://maps.google.com/?t=h&q=-23.749273,-70.108439",
    patente: "RBXB38",
    tipo_alerta: "Fatiga y Somnolencia",
    detalle_alerta: "Conductor Bostezando",
    fecha: "03-09-2024 12:42:58",
    nombre_contacto: "John Connor",
    nombre_responsable: "Sin Asignar",
    cargo_responsable: "",
    empresa: "INGENIERIA ERR SPA",
    estado: "Por Gestionar"
  };

  mapUrl: SafeResourceUrl;
  isLoading = true;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.getSafeUrl(this.alerta.lat, this.alerta.lng);
  }

  getSafeUrl(lat: string, lng: string): SafeResourceUrl {
    const url = `https://maps.google.com/?t=h&q=${lat},${lng}&z=10&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onMapLoad(): void {
    this.isLoading = false;
  }
}
