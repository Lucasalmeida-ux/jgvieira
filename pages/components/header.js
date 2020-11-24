import Link from "next/link"

const menuItens = [
    {link: "/quem-somos", label: "Quem Somos", key: "quemsomos"},
    {link: "/produtos", label: "Produtos e Serviços", key: "produtos"},
    {link: "/contato", label: "Contato", key: "contato"},
]

const Logo = () => (
    <Link href="/"><a>
        <img src="image/jgvieiralogo.png" alt="Logo da JG Vieira" className="py-2" width={80}></img>
    </a></Link>
)

const Menu = () => (
    <nav className="p-2 flex itens-center">
        <ul className="md:p-4">
        { menuItens.map(function(item) {
            return <li key={item.key} className="inline px-4 font-semibold">
                <Link href={item.link} className="bg-black"><a className="bg-black">{item.label}</a></Link>
                </li>
        }) }
        </ul>
    </nav>
)



export default function Header() {
    return (
        <div className="bg-blue">

            <header className="p-2 container max-w-sxl m-auto flex justify-between">
                <Logo />
                <Menu />
            </header>
        </div>
    )
}