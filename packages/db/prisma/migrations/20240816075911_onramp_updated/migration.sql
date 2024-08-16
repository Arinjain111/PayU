/*
  Warnings:

  - The values [Success,Failure] on the enum `onRampStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "onRampStatus_new" AS ENUM ('Recieved', 'Transaction Failed', 'Processing');
ALTER TABLE "P2pTransfer" ALTER COLUMN "status" TYPE "onRampStatus_new" USING ("status"::text::"onRampStatus_new");
ALTER TABLE "onRampTransaction" ALTER COLUMN "status" TYPE "onRampStatus_new" USING ("status"::text::"onRampStatus_new");
ALTER TYPE "onRampStatus" RENAME TO "onRampStatus_old";
ALTER TYPE "onRampStatus_new" RENAME TO "onRampStatus";
DROP TYPE "onRampStatus_old";
COMMIT;
