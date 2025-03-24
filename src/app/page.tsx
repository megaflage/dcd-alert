import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubButton from "../components/login/Github";

export default function HomePage() {
  return (
    <main className="text-foreground flex min-h-screen flex-col items-center justify-center">
      <div>
        <GithubButton></GithubButton>
      </div>
    </main>
  );
}
