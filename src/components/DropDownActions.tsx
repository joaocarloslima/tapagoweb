'use client'

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger
} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropDownActionsProps {
    onEdit: MouseEventHandler,
    onDelete: MouseEventHandler
}

export function DropDownActions({onEdit, onDelete}: DropDownActionsProps){
    return (
        <Dropdown>
        <DropdownTrigger>
            <ChevronDown />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            
            <DropdownItem 
                key="edit" 
                startContent={<Pencil size={18} />} 
                onClick={onEdit}
            >
                editar
            </DropdownItem>


            <DropdownItem 
                key="delete" 
                startContent={<Trash size={18} />} 
                className="text-danger" 
                color="danger"
                onClick={onDelete}
            >
            apagar
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}