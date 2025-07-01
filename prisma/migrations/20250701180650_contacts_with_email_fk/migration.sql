/*
  Warnings:

  - You are about to drop the column `userId` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `name` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_userId_fkey`;

-- DropIndex
DROP INDEX `contacts_userId_fkey` ON `contacts`;

-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `userId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_email_fkey` FOREIGN KEY (`email`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
