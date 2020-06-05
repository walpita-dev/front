import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Toast, ToastType } from '../model/toast.model';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() id = 'default-toast';
  @Input() fade = true;

  toasts: Toast[] = [];
  toastSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
    // subscribe to new toast notifications
    this.toastSubscription = this.toastService.onToast(this.id)
      .subscribe(toast => {
        // clear toasts when an empty toast is received
        if (!toast.message) {
          // filter out toasts without 'keepAfterRouteChange' flag
          this.toasts = this.toasts.filter(x => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.toasts.forEach(x => delete x.keepAfterRouteChange);
          return;
        }

        // add toast to array
        this.toasts.push(toast);

        // auto close toast if required
        if (toast.autoClose) {
          setTimeout(() => this.removeToast(toast), 3000);
        }
      });

    // clear toasts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.toastService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.toastSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeToast(toast: Toast) {
    // check if already removed to prevent error on auto close
    if (!this.toasts.includes(toast)) {
      return;
    }
    if (this.fade) {
      // fade out toast
      this.toasts.find(x => x === toast).fade = true;

      // remove toast after faded out
      setTimeout(() => {
        this.toasts = this.toasts.filter(x => x !== toast);
      }, 250);
    } else {
      // remove toast
      this.toasts = this.toasts.filter(x => x !== toast);
    }
  }

  cssClass(toast: Toast) {
    if (!toast) {
      return;
    }

    const classes = ['toast', 'toast-dismissable'];
    const toastTypeClass = {
      [ToastType.Success]: 'toast toast-success',
      [ToastType.Error]: 'toast toast-danger',
      [ToastType.Info]: 'toast toast-info',
      [ToastType.Warning]: 'toast toast-warning'
    };

    classes.push(toastTypeClass[toast.type]);

    if (toast.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
