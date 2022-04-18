import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { NftsService } from './nfts.service';

@Resolver('Nft')
export class NftsResolver {
  constructor(private readonly nftsService: NftsService) {}

  @Mutation('createNft')
  create(@Args('createNftInput') createNftInput: Prisma.NftCreateInput) {
    return this.nftsService.create(createNftInput);
  }

  @Query('nfts')
  findAll() {
    return this.nftsService.findAll();
  }

  @Query('nft')
  findOne(@Args('id') id: number) {
    return this.nftsService.findOne(id);
  }

  @Mutation('updateNft')
  update(
    @Args('updateNftInput') updateNftInput: Prisma.NftUncheckedUpdateInput,
  ) {
    return this.nftsService.update(Number(updateNftInput.id), updateNftInput);
  }
}
