import { Injectable } from '@nestjs/common';

import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class UsersCollectionsService {
  constructor(private prisma: PrismaService) {}

  async subscribeCollection(collectionId: number, userEmail: string) {
    // check if the collection exists
    const collection = await this.prisma.collection.findUnique({
      where: { id: collectionId },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    const user = await this.prisma.user.upsert({
      where: { email: userEmail },
      update: {},
      create: { email: userEmail },
    });

    // subscribe the user to the collection
    return this.prisma.userCollection.create({
      data: {
        userId: user.id,
        collectionId,
      },
    });
  }

  async unsubscribeCollection(collectionId: number, userId: number) {
    const deleteSubscription = await this.prisma.userCollection.deleteMany({
      where: {
        userId,
        collectionId,
      },
    });
    if (deleteSubscription.count === 0) {
      throw new Error('User not subscribed to collection');
    }
    return deleteSubscription;
  }
}
