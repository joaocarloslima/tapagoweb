import { Apple, Bus, Cigarette, GraduationCap, School } from "lucide-react";

interface IconProps {
    name: string
}

export function Icon({name} : IconProps){

    const icons = [
        {name: "graduation-cap", icon: <GraduationCap /> },
        {name: "bus", icon: <Bus /> },
        {name: "cigarette", icon: <Cigarette /> },
        {name: "apple", icon: <Apple /> },
    ]

    return icons.find( (icon) => name == icon.name )?.icon
    
}