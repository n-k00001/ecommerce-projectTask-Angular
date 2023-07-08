import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[productCard]'
})
export class ProductCardDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addBoxShadow();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeBoxShadow();
  }

  private addBoxShadow() {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.renderer.setStyle(element, 'border-radius', '10px');
    this.renderer.setStyle(element, 'box-shadow', '0px 3px 26px 4px rgba(128,128,128,1)');
  }

  private removeBoxShadow() {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.renderer.removeStyle(element, 'border-radius');
    this.renderer.removeStyle(element, 'box-shadow');
  }
}
