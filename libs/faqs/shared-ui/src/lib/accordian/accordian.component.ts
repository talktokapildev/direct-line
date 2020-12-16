import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'direct-line-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  @Input() faqs;

  ngOnInit(): void {
    console.log('init');
  }

  onToggle(faq) {
    faq.expanded = !faq.expanded;
    console.log('toggle');
  }

  getRotateClass(faq) {
    return faq.expanded ? 'svg-plus-icon--rotate' : undefined;
  }

  getHeaderClass(faq) {
    return faq.expanded ? 'faq-header--open' : undefined;
  }
}
