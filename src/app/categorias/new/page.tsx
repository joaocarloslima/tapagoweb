import { create } from "@/app/actions/categorias/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default async function CadastrarCategoria() {

   return (
    <main className="flex min-h-screen flex-col items-center ">
      <NavBar active="categorias" />

      <form action={create} className="flex flex-col gap-3 bg-slate-900 p-6 m-6 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          labelPlacement={"outside"}
        />
        <div className="flex justify-around mt-4">
          <Link href="/categorias">
            <Button variant="bordered" startContent={<ArrowLeft />} >cancelar</Button>
          </Link>
          <SubmitButton />
        </div>
      </form>

    </main>
  );
}
