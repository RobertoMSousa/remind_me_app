import { Module } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';

import { UsersCollectionsService } from './users-collections.service';
import { UsersCollectionsResolver } from './users-collections.resolver';

@Module({
  providers: [UsersCollectionsResolver, UsersCollectionsService, PrismaService],
})
export class UsersCollectionsModule {}
