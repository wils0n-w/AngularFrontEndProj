import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TelephoneService } from '../services/telephone.service';
import { Telephone } from '../models/telephone';

@Component({
  selector: 'telephone-list',
  templateUrl: './telephone-list.component.html',
  styles: [``]
})
export class TelephoneListComponent implements OnInit {
  items: Telephone[] = [];
  loading = false;

  @Output() edit = new EventEmitter<number | null>();

  constructor(private svc: TelephoneService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.svc.getAll().subscribe(res => { this.items = res; this.loading = false; }, () => this.loading = false);
  }

  doEdit(id: number) {
    this.edit.emit(id);
  }

  doDelete(id: number) {
    if (!confirm('Delete item?')) return;
    this.svc.delete(id).subscribe(() => this.load());
  }
}
