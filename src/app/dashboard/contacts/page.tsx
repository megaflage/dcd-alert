"use server";

import { NewContactModal } from "@/components/contacts/NewContactModal";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { Toaster } from "sonner";

export default async function contactsPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen w-full">
      <NewContactModal userId={session.session.userId} />
      <Toaster />

      <h1>Contacts</h1>
    </div>
  );
}
