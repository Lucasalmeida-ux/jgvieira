import Header from "./header";

export default function Layout({ children }) {
return <div className="divide-y-2 divide-gray-100">
    <Header></Header>
    <div className>{children}</div>
    </div>
}