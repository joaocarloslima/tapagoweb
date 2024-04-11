"use client"

import { DropDownActions } from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/categorias/destroy";
interface CategoriaItemProps {
    categoria: {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem(props: CategoriaItemProps){
    const { categoria } = props

    function handleDelete(){
        toast.promise(
            destroy(categoria.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso!",
               error: "Erro ao excluir.",
             }
           );
    }

    return (
        <div key={categoria.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
           
            <DropDownActions onDelete={handleDelete} />
        </div>
    )
}