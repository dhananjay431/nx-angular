import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'lib-login',
  imports: [FormsModule, RouterLink],
  template: `
    <main class="min-vh-100 d-flex align-items-center bg-body-tertiary py-5">
      <section class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <div class="card border-0 shadow rounded-4">
              <div class="card-body p-4 p-md-5">
                <div class="text-center mb-4">
                  <span class="badge text-bg-primary rounded-pill mb-3">
                    Enterprise Workspace
                  </span>
                  <h1 class="h3 fw-bold">Sign in</h1>
                  <p class="text-body-secondary mb-0">
                    Access your customer-enabled modules.
                  </p>
                </div>

                <form (ngSubmit)="submit()">
                  <label class="form-label" for="email">Email</label>
                  <input
                    id="email"
                    class="form-control form-control-lg mb-3"
                    type="email"
                    name="email"
                    [(ngModel)]="email"
                    autocomplete="email"
                    required
                  />

                  <label class="form-label" for="password">Password</label>
                  <input
                    id="password"
                    class="form-control form-control-lg mb-3"
                    type="password"
                    name="password"
                    [(ngModel)]="password"
                    autocomplete="current-password"
                    required
                  />

                  <div
                    class="d-flex justify-content-between align-items-center mb-4"
                  >
                    <div class="form-check">
                      <input
                        id="rememberMe"
                        class="form-check-input"
                        type="checkbox"
                        name="rememberMe"
                        [(ngModel)]="rememberMe"
                      />
                      <label class="form-check-label" for="rememberMe"
                        >Remember me</label
                      >
                    </div>
                    <a routerLink="/login" class="small">Forgot password?</a>
                  </div>

                  <button class="btn btn-primary btn-lg w-100" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  email = 'admin@example.com';
  password = 'password';
  rememberMe = true;
  readonly submitting = signal(false);

  submit(): void {
    this.submitting.set(true);
    this.authService.login(this.email, this.password, this.rememberMe);
    void this.router.navigateByUrl('/dashboard');
  }
}
