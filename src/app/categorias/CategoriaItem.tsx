import { DropDownActions } from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { ChevronDown, Utensils } from "lucide-react";

interface CategoriaItemProps {
    categoria: {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem(props: CategoriaItemProps){
    const { categoria } = props
    return (
        <div key={categoria.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
           
            <DropDownActions />
        </div>
    )
}