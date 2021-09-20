import { TestBed } from '@angular/core/testing';

import { UserServiceUserServiceService } from './user-service-user-service.service';

describe('UserServiceUserServiceService', () => {
  let service: UserServiceUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
