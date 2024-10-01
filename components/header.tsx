import Link from 'next/link'

import { Logo } from './logo'

const links = [
  {
    title: 'Recursos',
    url: '/recursos',
  },
  {
    title: 'Videos',
    url: '/videos',
  },
  {
    title: 'Directos',
    url: '/directos',
  },
  {
    title: 'Comunidad',
    url: '/comunidad',
  },
]

export const Header = () => {
  return (
    <header className="fixed flex w-full items-center justify-between bg-popover-foreground/60 p-6 text-background">
      <Logo />
      <nav className="hidden items-center gap-4 md:flex">
        <ul className="flex items-center gap-4">
          {links.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>Login</div>
    </header>
  )
}
