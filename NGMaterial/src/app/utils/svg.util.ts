import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/svg/菜单.svg'));
};
