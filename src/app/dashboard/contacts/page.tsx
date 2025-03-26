"use client";
import { useState } from "react";
import type { Contact } from "@/types/contacts";
import { NewContactModal } from "@/components/contacts/NewContactModal";
export default function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  return (
    <div className="min-h-screen w-full">
      <NewContactModal />
      <h1>Contacts</h1>
    </div>
  );
}
