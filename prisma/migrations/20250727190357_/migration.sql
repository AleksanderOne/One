-- DropIndex
DROP INDEX "Doctor_email_key";

-- DropIndex
DROP INDEX "Patient_email_key";

-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "whatsapp" DROP NOT NULL;
