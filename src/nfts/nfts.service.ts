import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class NftsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNftInput: Prisma.NftCreateInput) {
    return this.prisma.nft.create({ data: createNftInput });
  }

  // get all the nfts
  findAll() {
    return this.prisma.nft.findMany();
  }

  // get all the nfts by collection
  findAllByCollection(collectionId: number) {
    return this.prisma.nft.findMany({
      where: { collectionId: collectionId },
    });
  }

  findOne(id: number) {
    return this.prisma.nft.findUnique({ where: { id: id } });
  }

  // TODO: mint a new nft
  update(id: number, updateNftInput: Prisma.NftUncheckedUpdateInput) {
    return `This action updates a #${id} nft`;
  }
}
