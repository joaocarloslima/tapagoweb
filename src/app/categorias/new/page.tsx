'use client'

import { create } from "@/app/actions/categorias/create";
import { icons } from "@/app/utils/icons";
import { Icon } from "@/components/Icon";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  messageNome: '',
}

export default async function CadastrarCategoria() {
  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <NavBar active="categorias" />

      <form action={formAction} className="flex flex-col gap-3 bg-slate-900 p-6 m-6 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          variant="bordered"
          labelPlacement={"outside"}
          isInvalid={state?.messageNome != ''}
          errorMessage={state?.messageNome}
        />

        <Autocomplete
          label="Ícone"
          placeholder="procurar ícone"
          defaultItems={icons}
          variant="bordered"
          name="icone"
          labelPlacement={"outside"}
        >
          {(icon) => <AutocompleteItem key={icon.name} startContent={<Icon name={icon.name} />}>
                        {icon.name}
                      </AutocompleteItem>}

        </Autocomplete>

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
