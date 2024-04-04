'use client'

import {  
    Dropdown,  
    DropdownTrigger,  
    DropdownMenu,  
    DropdownSection,  
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

export function DropDownActions(){
    return (
        <Dropdown>
        <DropdownTrigger>
            <ChevronDown />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit">editar</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
            apagar
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}