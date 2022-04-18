import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from './../../prisma/prisma.service';

import { NftsResolver } from './nfts.resolver';
import { NftsService } from './nfts.service';

describe('NftsResolver', () => {
  let resolver: NftsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftsResolver, NftsService, PrismaService],
    }).compile();

    resolver = module.get<NftsResolver>(NftsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
