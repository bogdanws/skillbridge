/*
  Warnings:

  - A unique constraint covering the columns `[currentMeetingId]` on the table `Class` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "currentMeetingId" INTEGER,
ADD COLUMN     "stripeProductId" TEXT;

-- CreateTable
CREATE TABLE "Meeting" (
    "id" SERIAL NOT NULL,
    "twilioId" TEXT NOT NULL,
    "chatId" INTEGER,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "twilioId" TEXT NOT NULL,
    "isMeetingChat" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChatToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Meeting_twilioId_key" ON "Meeting"("twilioId");

-- CreateIndex
CREATE UNIQUE INDEX "Meeting_chatId_key" ON "Meeting"("chatId");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_twilioId_key" ON "Chat"("twilioId");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatToUser_AB_unique" ON "_ChatToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatToUser_B_index" ON "_ChatToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Class_currentMeetingId_key" ON "Class"("currentMeetingId");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_currentMeetingId_fkey" FOREIGN KEY ("currentMeetingId") REFERENCES "Meeting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
