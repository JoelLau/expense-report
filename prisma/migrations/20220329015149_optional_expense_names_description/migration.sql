-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expense" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "category" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Expense" ("amount", "category", "date", "description", "id", "name") SELECT "amount", "category", "date", "description", "id", "name" FROM "Expense";
DROP TABLE "Expense";
ALTER TABLE "new_Expense" RENAME TO "Expense";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
