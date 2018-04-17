import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';
import { SomeChildComponent } from '../some-child-component/some.child-component';
import { SecondChildComponent } from '../second-child-component/second.child-component';

@Component({
  selector: 'app-some-component',
  templateUrl: './some.component.html',
})
export class SomeComponent implements OnInit {
    private firstChildFactory =
        this.componentFactoryResolver.resolveComponentFactory(SomeChildComponent);

    private secondChildFactory =
        this.componentFactoryResolver.resolveComponentFactory(SecondChildComponent);

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
    }

    public loadFirstChildComponent() {
        const viewContainerRef = this.container;
        viewContainerRef.clear();

        const componentFef = viewContainerRef.createComponent(this.firstChildFactory);
    }

    public loadSecondChildComponent() {
        const viewContainerRef = this.container;
        viewContainerRef.clear();

        const componentFef = viewContainerRef.createComponent(this.secondChildFactory);
    }
}
