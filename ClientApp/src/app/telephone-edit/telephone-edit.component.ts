import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelephoneService } from '../services/telephone.service';
import { Telephone } from '../models/telephone';

@Component({
  selector: 'telephone-edit',
  templateUrl: './telephone-edit.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  styles: [``]
})
export class TelephoneEditComponent implements OnChanges {
  @Input() id: number | null = null;
  @Output() saved = new EventEmitter<void>();

  model: Telephone = { Nama_User: '', Alamat: '', No_Telp: '', kode_post: '', date_time: new Date().toISOString() };
  loading = false;

  constructor(private svc: TelephoneService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      if (this.id) this.load(this.id);
      else this.reset();
    }
  }

  load(id: number) {
    this.loading = true;
    this.svc.get(id).subscribe(res => { this.model = res; this.loading = false; }, () => this.loading = false);
  }

  reset() {
    this.model = { Nama_User: '', Alamat: '', No_Telp: '', kode_post: '', date_time: new Date().toISOString() };
  }

  save() {
    this.loading = true;
    if (this.id) {
      this.svc.update(this.id, this.model).subscribe(() => { this.loading = false; this.saved.emit(); });
    } else {
      this.svc.create(this.model).subscribe(() => { this.loading = false; this.saved.emit(); this.reset(); });
    }
  }
}
