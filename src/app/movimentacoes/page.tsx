import { CategoriaSelect } from "@/components/CategoriaSelect";
import { MesesSelect } from "@/components/MesesSelect";
import NavBar from "@/components/NavBar";
import { Button, Pagination } from "@nextui-org/react";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { getCategorias } from "../actions/categorias/get";
import { get } from "../actions/movimentacoes/get";
import { MovimentacaoItem } from "./MovimentacaoItem";

export default async function Movimentacoes() {
  const movimentacoes: Array<Movimentacao> = await get()
  const categorias: Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="movimentacoes" />

      <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] mt-4 p-6 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Movimentações</h2>
          <Link href="/movimentacoes/new">
            <Button color="primary" startContent={<Plus />}>nova movimentação</Button>
          </Link>
        </div>

        <div className="flex gap-4 items-center border-1 border-white/10 p-4 rounded">
          <Filter size={44} />
          <CategoriaSelect categorias={categorias} />
          <MesesSelect />
        </div>

        {movimentacoes.map(movimentacao =>
          <MovimentacaoItem movimentacao={movimentacao} />
        )}

      </section>

      <Pagination isCompact showControls total={10} initialPage={1} className="mt-6" />

    </main>


  );
}
