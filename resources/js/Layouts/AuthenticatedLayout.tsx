import { usePage } from '@inertiajs/react';
import { AppSidebar } from "@/Components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { PropsWithChildren, ReactNode } from 'react';
import { Bell } from 'lucide-react';


export default function Authenticated({ children }: PropsWithChildren<{ header?: ReactNode }>) {

  const user = usePage().props.auth.user;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-accent">
          <div className="flex items-center justify-between w-full px-4">
            <div className='left flex items-center gap-2 '>
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className='flex items-center gap-4'>
                <button className=''>
                    <Bell className='h-5 w-5' />
                </button>
                <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src="" alt="s" />
                    <AvatarFallback className="rounded-lg text-sm">CN</AvatarFallback>
                </Avatar>
            </div>
          </div>
        </header>
        <main>
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

