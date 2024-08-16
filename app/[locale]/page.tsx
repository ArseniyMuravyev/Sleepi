import { About } from "@/components/about/About";
import { Contacts } from "@/components/contacts/Contacts";
import { AdditionlReading } from "@/components/additional-reading/AdditionalReading";
import { Recomendations } from "@/components/recomendations/Recomendations";
import { Welcome } from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 mt-[144px]">
      <Welcome />
      <About />
      <Recomendations />
      <AdditionlReading />
      <Contacts />
    </main>
  );
}
