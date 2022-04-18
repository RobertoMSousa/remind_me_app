import { Module } from '@nestjs/common';

import { PrismaService } from './../../prisma/prisma.service';
import { NftsService } from './nfts.service';
import { NftsResolver } from './nfts.resolver';

@Module({
  providers: [NftsResolver, NftsService, PrismaService],
})
export class NftsModule {}
