"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { MegaMenu } from '@/components/landing/mega-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/hooks/use-theme'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const isNavItemActive = (href: string, pathname: string, isHome: boolean) => {
  if (href === '/') return isHome
  if (href.startsWith('#')) return false
  if (href === '/services') return pathname.startsWith('/services')
  return pathname === href
}

const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const isHome = pathname === '/' || pathname === '/landing'

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    if (!href.startsWith('#')) {
      if (href === '/' && isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        router.push(href)
      }
      return
    }
    if (isHome) {
      smoothScrollTo(href)
    } else {
      router.push(`/${href}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center cursor-pointer">
            <Logo size={140} />
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) =>
              item.name === 'Services' ? (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className={`h-10 px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none cursor-pointer bg-transparent ${pathname.startsWith('/services') ? 'text-primary' : ''}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none cursor-pointer ${isNavItemActive(item.href, pathname, isHome) ? 'text-primary' : ''}`}
                    onClick={(e: React.MouseEvent) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-2">
          <ModeToggle variant="ghost" />
          <Button asChild className="cursor-pointer">
            <Link href={isHome ? '#contact' : '/#contact'}>Get Started</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 gap-0 [&>button]:hidden overflow-hidden flex flex-col">
            <div className="flex flex-col h-full">
              <SheetHeader className="space-y-0 p-4 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <Logo size={120} />
                  <div className="ml-auto flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="cursor-pointer h-8 w-8"
                    >
                      <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="cursor-pointer h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-1">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer ${isNavItemActive(item.href, pathname, isHome) ? 'bg-accent text-primary' : ''}`}
                      onClick={(e) => {
                        setIsOpen(false)
                        handleNavClick(e, item.href)
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t p-6">
                <Button asChild size="lg" className="w-full cursor-pointer">
                  <Link href={isHome ? '#contact' : '/#contact'}>Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
