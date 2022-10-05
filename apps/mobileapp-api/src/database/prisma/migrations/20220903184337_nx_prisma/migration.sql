/*
  Warnings:

  - You are about to drop the column `userType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userImage` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userProfileName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userType",
ADD COLUMN     "userImage" TEXT NOT NULL,
ADD COLUMN     "userProfileName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Food";

-- CreateTable
CREATE TABLE "Posting" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postingTitle" TEXT NOT NULL,
    "postingDescription" TEXT NOT NULL,
    "postingCategory" TEXT NOT NULL,
    "postingLocation" TEXT NOT NULL,
    "postingImage" TEXT NOT NULL,

    CONSTRAINT "Posting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postingId" INTEGER NOT NULL,
    "commentTime" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Posting" ADD CONSTRAINT "Posting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postingId_fkey" FOREIGN KEY ("postingId") REFERENCES "Posting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
