import { Label } from "@radix-ui/react-dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export default function EventCard() {
  return (
    <Card className="mt-10 w-1/2">
      <CardHeader>
        <CardTitle>Oops I dropped something!</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="">
          <div className="grid w-full items-center gap-4">
            <div className="grid gap-2">
              <Label>What did you drop?</Label>
              <Input type="text" id="name" placeholder="Name" />
            </div>
            <div className="grid gap-2">
              <Label>What happened?</Label>
              <Input type="text" id="name" placeholder="Name" />
            </div>
            <div className="grid gap-2">
              <Label>Who do you want to notify?</Label>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
