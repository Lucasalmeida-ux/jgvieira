import Link from "next/link"

export default function Header() {
    return (
        <nav className=" bg-gray-lightest">
            <header className="container text-right">
                <img src="image/jgvieiralogo.png" alt="Logo da JG Vieira" className="logo"></img>
                <Link href="/"><a>Home</a></Link>
                <Link href="/quem-somos"><a>Quem Somos</a></Link>
                <Link href="/produtos"><a>Produtos e Serviços</a></Link>
                <Link href="/contato"><a>Fale Conosco</a></Link>
            </header>
        </nav>
    )
}