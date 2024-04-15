import { icons } from "@/app/utils/icons";
interface IconProps {
    name: string
}

export function Icon({name} : IconProps){
    return icons.find( (icon) => name == icon.name )?.icon
}