"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newContactSchema } from "@/types/schemas";
import { useForm } from "@tanstack/react-form";
import { createContact } from "@/lib/create-contact";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  userId: string;
};

export function NewContactModal({ userId }: Props) {
  const [open, setOpen] = useState(false);
  const form = useForm({
    onSubmit: async ({ value }) => {
      try {
        await createContact({
          userId: userId,
          name: value.name,
          email: value.email,
          phone: value.phone,
        });
        setOpen(false);
        toast.success("Contact created successfully");
      } catch (error) {
        toast.error("Failed to create contact");
      }
    },
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    validators: {
      onBlur: newContactSchema,
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New Contact</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>New Contact</DialogTitle>
          <DialogDescription>Add a new contact to your list:</DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <div className="grid gap-4 py-4">
            <form.Field name="name">
              {(field) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    className="col-span-3"
                    id="name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={() => field.handleBlur()}
                  />
                  {field.state.meta.errors && field.state.meta.isTouched ? (
                    <h1
                      role="alert"
                      className="col-span-3 text-sm text-red-500"
                    >
                      {field.state.meta.errors[0]?.message}
                    </h1>
                  ) : null}
                </div>
              )}
            </form.Field>
            <form.Field name="email">
              {(field) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    className="col-span-3"
                    id="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={() => field.handleBlur()}
                  />
                  {field.state.meta.errors && field.state.meta.isTouched ? (
                    <h1
                      role="alert"
                      className="col-span-3 text-sm text-red-500"
                    >
                      {field.state.meta.errors[0]?.message}
                    </h1>
                  ) : null}
                </div>
              )}
            </form.Field>
            <form.Field name="phone">
              {(field) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    className="col-span-3"
                    id="phone"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={() => field.handleBlur()}
                  />
                  {field.state.meta.errors && field.state.meta.isTouched ? (
                    <h1
                      role="alert"
                      className="col-span-3 text-sm text-red-500"
                    >
                      {field.state.meta.errors[0]?.message}
                    </h1>
                  ) : null}
                </div>
              )}
            </form.Field>
          </div>
          <DialogFooter>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="border"
                    disabled={!canSubmit}
                  >
                    {isSubmitting ? "..." : "Submit"}
                  </Button>
                  <Button
                    type="reset"
                    className="border"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                </div>
              )}
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
