import { db } from "../lib/prisma";
import { DataTable } from "../components/ui/data-table";
import { trasactionColumns } from "./_columns";
import AddTransactionButton from "../components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* título e botão */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>

      {/* tabela */}
      <DataTable columns={trasactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
