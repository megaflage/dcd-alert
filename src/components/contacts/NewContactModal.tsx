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
import { z } from "zod";
export function NewContactModal() {
  const form = useForm({
    onSubmit: async ({}) => {
      console.log("submitted");
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New Contact</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>New Contact</DialogTitle>
          <DialogDescription>Add a new contact to your list.</DialogDescription>
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
                  {field.state.meta.errors ? (
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
                  {field.state.meta.errors ? (
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
                  {field.state.meta.errors ? (
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
        </form>
      </DialogContent>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </Dialog>
  );
}
