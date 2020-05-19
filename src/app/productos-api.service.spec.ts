import { TestBed } from '@angular/core/testing';

import { ProductosAPIService } from './productos-api.service';

describe('ProductosAPIService', () => {
  let service: ProductosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
