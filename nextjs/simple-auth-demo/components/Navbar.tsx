import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu';
import Link from 'next/link';
// import LogoutButton from './LogoutButton';
import { getSession } from '@/lib/session';

const Navbar = async () => {
    const session = await getSession();
    return (
        <NavigationMenu>
            <div>
                <Link href="/">Simple Auth PoC</Link>
                    {session ? (
                        <>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/contacts">Contacts</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {/* <LogoutButton /> */}
                        </>
                    ) : (
                        <>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/login">Login</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/register">Register</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </>
                    )}
            </div>
        </NavigationMenu>
    );
}

export default Navbar;