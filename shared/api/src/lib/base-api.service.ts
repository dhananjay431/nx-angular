import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { ApiResponse } from '@workspace/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api';

  get<T>(path: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}${path}`);
  }

  post<TPayload, TResult>(
    path: string,
    payload: TPayload,
  ): Observable<ApiResponse<TResult>> {
    return this.http.post<ApiResponse<TResult>>(
      `${this.baseUrl}${path}`,
      payload,
    );
  }
}
