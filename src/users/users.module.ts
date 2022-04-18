import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from './../../prisma/prisma.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
