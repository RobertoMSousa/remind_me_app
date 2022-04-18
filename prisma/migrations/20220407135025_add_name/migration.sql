/*
  Warnings:

  - A unique constraint covering the columns `[collectionId,userId]` on the table `UserCollection` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_collectionId_userId_key" ON "UserCollection"("collectionId", "userId");
