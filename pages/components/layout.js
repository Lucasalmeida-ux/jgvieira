import Header from "./header";

export default function Layout({ children }) {
return <div>
    <Header></Header>
    <div className="container divide-x-3 divide-gray-300 bg-black"></div>
    {children}
    </div>
}