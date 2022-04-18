import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { CollectionsService } from './collections.service';

@Resolver('Collection')
export class CollectionsResolver {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Mutation('createCollection')
  create(
    @Args('createCollectionInput')
    createCollectionInput: Prisma.CollectionCreateInput,
  ) {
    return this.collectionsService.create(createCollectionInput);
  }

  @Query('collections')
  findAll() {
    return this.collectionsService.findAll();
  }

  @Query('collection')
  findOne(@Args('id') id: number) {
    return this.collectionsService.findOne(id);
  }

  @Mutation('updateCollection')
  update(
    @Args('updateCollectionInput')
    updateCollectionInput: Prisma.CollectionUncheckedUpdateInput,
  ) {
    console.log(
      '🚀 ~ file: collections.resolver.ts ~ line 32 ~ CollectionsResolver ~ updateCollectionInput',
      updateCollectionInput,
    );
    return this.collectionsService.update(updateCollectionInput);
  }

  @Mutation('removeCollection')
  remove(@Args('id') id: number) {
    return this.collectionsService.remove(id);
  }
}
