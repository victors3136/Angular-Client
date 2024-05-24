import { TestBed } from '@angular/core/testing';

import { DocumentProliferationService } from './document-proliferation.service';

describe('DocumentProliferationServiceService', () => {
  let service: DocumentProliferationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentProliferationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
