import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <tabs>
      <tab [tabTitle]="'Welcome'"> <welcome>leading...</welcome> </tab>
      <tab tabTitle="Problems">Work in progress...</tab>
      <tab tabTitle="Edit Problem">Work in progress...</tab>
      <tab tabTitle="IDE">Work in progress...</tab>
    </tabs>
  `
})
export class AppComponent {
  title = 'tabapp works!';
}
