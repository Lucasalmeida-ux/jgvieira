import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const menuItens = [
    {link: "/quem-somos", label: "Quem Somos", key: "quemsomos"},
    {link: "/produtos", label: "Produtos e Serviços", key: "produtoseservicos"},
    {link: "/contato", label: "Contato", key: "contato"},
]
const socialsItens = [
    {link: "facebook", label: "@jgvieira", key: "instagram"},
    {link: "instagram", label: "@jgvieira", key: "facebook"},
]

const ContactBar = () => (
    <div className="flex">
        <nav>
            <a href="facebook.com.br" className="text-blue-900 py-5"><FontAwesomeIcon icon={['fab', 'facebook']} /><span>@jgvieira</span></a>
            <a href="instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} /><span>@jgvieira</span></a>
        </nav>
    </div>
)

const Logo = () => (
    <Link href="/"><a>
        <img src="image/jgvieiralogo.png" alt="Logo da JG Vieira" className="py-2" width={80}></img>
    </a></Link>
)

const Menu = () => (
    <nav className="p-2 flex itens-center">
        <ul className="md:p-4">
        { menuItens.map(function(item) {
            return  <Link key={item.key} href={item.link}>
                        <a className="hover:bg-blue-500 inline px-4 py-2 mx-2 rounded-md font-semibold bg-gray-100 hover:text-white text-gray-600">{item.label}</a>
                    </Link>
        }) }
        </ul>
    </nav>
)



export default function Header() {
    return (
        <div className="bg-blue">

            <header className="p-2 max-w-sxl m-auto flex justify-between">
                <ContactBar />
                <Logo />
                <Menu />
            </header>
        </div>
    )
}