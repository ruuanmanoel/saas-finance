"use server";

import { db } from "@/app/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

// pensei em criar uma interface para os parametros, mas nao vale a pena
interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (
  //   params: Omit<Prisma.TransactionCreateInput, "userId">,
  params: AddTransactionParams,
) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthotized");
  }
  await db.transaction.create({
    data: { ...params, userId },
  });
  revalidatePath("/transactions");
};
