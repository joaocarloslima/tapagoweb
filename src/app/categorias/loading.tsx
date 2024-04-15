import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import Link from "next/link";
import { getCategorias } from "../actions/categorias/get";
import { Suspense } from "react";

interface Categoria {
  id: number,
  nome: string,
  icone: string
}

export default async function Loading() {

  const categorias: Categoria[] = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <NavBar active="categorias" />

      <section className="bg-slate-900 rounded min-w-[500px] p-6 m-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold" >Categorias Cadastradas</h2>
          <Link href="/categorias/new">
            <Button startContent={<Plus />} color="primary">nova categoria</Button>
          </Link>
        </div>

        {/* <div id="data">
          {categorias.map(categoria => <CategoriaItem categoria={categoria} />)}
        </div> */}

        <p>carregando...</p>

      </section>

    </main>
  );
}
