import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { cancelJob, scheduleJob } from 'node-schedule';

import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async create(createCollectionInput: Prisma.CollectionCreateInput) {
    // generate a random number beween 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const nfts: Prisma.NftCreateWithoutCollectionInput[] = [];
    for (let counter = 0; counter < randomNumber; counter++) {
      nfts.push({
        name: `NftName_${counter}`,
        description: `NftDesc_${counter}`,
      });
    }

    const releaseDate = createCollectionInput.launchDate
      ? new Date(createCollectionInput.launchDate)
      : null;

    const collection = await this.prisma.collection.create({
      data: {
        ...createCollectionInput,
        launchDate: releaseDate,
        nfts: { create: nfts },
      },
      include: { nfts: true, subscribers: true },
    });

    if (releaseDate) {
      const jobNameLaunchDate = `collection_${collection.id}_lauch_date`;
      const jobName1HourBefore = `collection_${collection.id}_1_hour_before`;
      const jobName1DayBefore = `collection_${collection.id}_1_day_before`;

      const releaseDateMinus1Hour = new Date(releaseDate.getTime() - 3600000);
      const releaseDateMinus1Day = new Date(releaseDate.getTime() - 86400000);

      scheduleJob(jobNameLaunchDate, releaseDate, function () {
        console.log('🚀 -  this will be sent on the launch date'); // roberto
      });

      scheduleJob(jobName1HourBefore, releaseDateMinus1Hour, function () {
        console.log('🚀 -  this will be sent one hour before the release date'); // roberto
      });

      scheduleJob(jobName1DayBefore, releaseDateMinus1Day, function () {
        console.log('🚀 -  this will be sent one day before the release date'); // roberto
      });
    }

    return collection;
  }

  findAll() {
    return this.prisma.collection.findMany();
  }

  findOne(id: number) {
    return this.prisma.collection.findUnique({
      where: { id },
      include: { nfts: true, subscribers: true },
    });
  }

  update(updateCollectionInput: Prisma.CollectionUncheckedUpdateInput) {
    const releaseDate =
      typeof updateCollectionInput.launchDate === 'string'
        ? new Date(updateCollectionInput.launchDate)
        : null;

    const jobNameLaunchDate = `collection_${updateCollectionInput.id}_lauch_date`;
    const jobName1HourBefore = `collection_${updateCollectionInput.id}_1_hour_before`;
    const jobName1DayBefore = `collection_${updateCollectionInput.id}_1_day_before`;

    if (!releaseDate && typeof updateCollectionInput.launchDate === undefined) {
      // cancel the notification
      cancelJob(jobNameLaunchDate);
      cancelJob(jobName1HourBefore);
      cancelJob(jobName1DayBefore);
    }

    if (releaseDate) {
      // if the job already exists, reschedule it by cancelling it and creating a new one in order to pass callback
      const releaseDateMinus1Hour = new Date(releaseDate.getTime() - 3600000);
      const releaseDateMinus1Day = new Date(releaseDate.getTime() - 86400000);
      cancelJob(jobNameLaunchDate);
      cancelJob(jobName1HourBefore);
      cancelJob(jobName1DayBefore);

      scheduleJob(jobNameLaunchDate, releaseDate, function () {
        console.log('🚀 -  this will be sent on the launch date'); // roberto
      });

      scheduleJob(jobName1HourBefore, releaseDateMinus1Hour, function () {
        console.log('🚀 -  this will be sent one hour before the release date'); // roberto
      });

      scheduleJob(jobName1DayBefore, releaseDateMinus1Day, function () {
        console.log('🚀 -  this will be sent one day before the release date'); // roberto
      });
    }

    const { id, ...rest } = updateCollectionInput;

    const collectionId = Number(id);

    return this.prisma.collection.update({
      where: {
        id: collectionId,
      },
      data: { ...rest, launchDate: releaseDate },
    });
  }

  remove(id: number) {
    return this.prisma.collection.delete({
      where: {
        id: id,
      },
    });
  }
}
