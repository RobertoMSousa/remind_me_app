import { UpdateUsersCollectionInput } from './../graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { UsersCollectionsService } from './users-collections.service';

@Resolver('UsersCollection')
export class UsersCollectionsResolver {
  constructor(
    private readonly usersCollectionsService: UsersCollectionsService,
  ) {}

  @Mutation('subscribeCollection')
  subscribeCollection(
    @Args('updateUsersCollectionInput')
    updateCollectionInput: UpdateUsersCollectionInput,
  ) {
    return this.usersCollectionsService.subscribeCollection(
      updateCollectionInput.collectionId,
      updateCollectionInput.userEmail,
    );
  }

  @Mutation('unsubscribeCollection')
  unsubscribeCollection(
    @Args('updateUsersCollectionInput')
    updateCollectionInput: Prisma.UserCollectionMaxAggregateOutputType,
  ) {
    return this.usersCollectionsService.unsubscribeCollection(
      updateCollectionInput.collectionId,
      updateCollectionInput.userId,
    );
  }
}
