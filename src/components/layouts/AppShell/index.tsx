import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;

    const { pathname } = useRouter();

    return (
        <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            <div className="footer">
                <p>Copyright &copy; 2026 - Praktikum Next.js Pages Router</p>
            </div>
        </main>
    );
}

export default AppShell;