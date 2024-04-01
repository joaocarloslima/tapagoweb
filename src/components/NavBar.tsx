import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "categorias" | "movimentacoes"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-pink-600 border-b-4 pb-2"

    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-slate-900 w-full">
            <h1 className="text-4xl font-bold">Tá Pago</h1>
            <ul className="flex gap-14">
                <li className={active == "dashboard"? classActive : ""}>
                    <Link href="/">dashboard</Link>
                </li>
                <li className={active == "movimentacoes"? classActive : ""}>
                    <Link href="/movimentacoes">movimentações</Link>
                </li>
                <li className={active == "categorias"? classActive : ""}>
                    <Link href="/categorias">categorias</Link>
                </li>
            </ul>
            <div className="w-16 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}