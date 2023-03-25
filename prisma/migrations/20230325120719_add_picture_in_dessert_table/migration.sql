/*
  Warnings:

  - Added the required column `picture` to the `Dessert` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dessert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Dessert" ("createdAt", "description", "id", "name") SELECT "createdAt", "description", "id", "name" FROM "Dessert";
DROP TABLE "Dessert";
ALTER TABLE "new_Dessert" RENAME TO "Dessert";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
