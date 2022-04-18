import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserInput });
  }

  findAll() {
    return this.prisma.userCollection.findMany();
  }

  findOne(user: Prisma.UserWhereUniqueInput) {
    this.prisma.user.findUnique({ where: user });
  }

  update(id: number, updateUserInput: Prisma.UserUncheckedUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserInput,
    });
  }

  remove(user: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where: user,
    });
  }
}
