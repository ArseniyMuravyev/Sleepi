import { AdditionlReading } from "@/components/additional-reading/AdditionalReading";
import { Recomendations } from "@/components/recomendations/Recomendations";
import { Welcome } from "@/components/welcome/Welcome";
import { Glossary } from "@/components/glossary/Glossary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-6 md:p-12 mt-[144px] max-w-6xl">
      <Welcome />
      <Glossary />
      <Recomendations />
      <AdditionlReading />
    </main>
  );
}
