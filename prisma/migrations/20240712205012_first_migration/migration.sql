-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewSop" (
    "id" TEXT NOT NULL,
    "oldsopid" TEXT NOT NULL,
    "uploaderId" TEXT NOT NULL,
    "uploadername" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "flag" INTEGER NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "completeness" INTEGER NOT NULL,
    "relevance" INTEGER NOT NULL,

    CONSTRAINT "NewSop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oldsop" (
    "id" TEXT NOT NULL,
    "newsopid" TEXT NOT NULL,
    "uploaderid" TEXT NOT NULL,
    "uploadername" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "completeness" INTEGER NOT NULL,
    "relevance" INTEGER NOT NULL,

    CONSTRAINT "oldsop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commentbox" (
    "id" TEXT NOT NULL,
    "sopid" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "commentbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
