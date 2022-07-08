import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[animation]'
})
export class AnimationDirective {
  @HostListener('window:scroll')
  onScroll(): void {
    if (this.elementRef && !this.isAnimated) {
      const rect: DOMRect = (this.elementRef.nativeElement as HTMLDivElement).getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        (this.elementRef.nativeElement as HTMLDivElement).classList.add('animation');

        this.isAnimated = true;
      }
    }
  }

  private isAnimated: boolean = false;

  constructor(private elementRef: ElementRef) {}
}

