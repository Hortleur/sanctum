/*
  Warnings:

  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `countryId` on the `Dessert` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Profile_userId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Country";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Profile";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dessert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Dessert" ("description", "id", "name") SELECT "description", "id", "name" FROM "Dessert";
DROP TABLE "Dessert";
ALTER TABLE "new_Dessert" RENAME TO "Dessert";
CREATE TABLE "new_Subscribers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Subscribers" ("email", "id") SELECT "email", "id" FROM "Subscribers";
DROP TABLE "Subscribers";
ALTER TABLE "new_Subscribers" RENAME TO "Subscribers";
CREATE UNIQUE INDEX "Subscribers_email_key" ON "Subscribers"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
