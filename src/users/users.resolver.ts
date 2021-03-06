import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: Prisma.UserCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('updateUserInput') updateUserInput: Prisma.UserUncheckedUpdateInput,
  ) {
    return this.usersService.update(
      Number(updateUserInput.id),
      updateUserInput,
    );
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove({ id });
  }
}
