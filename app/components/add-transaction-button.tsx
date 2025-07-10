"use client";

import { useState } from "react";
import UpSertTransactionDialog from "./upsert-transaction-dialog";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="flex items-center rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação <ArrowDownUpIcon />
      </Button>
      <UpSertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};
export default AddTransactionButton;
