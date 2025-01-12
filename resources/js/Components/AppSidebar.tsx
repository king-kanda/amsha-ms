"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/layout/nav-main"
import { NavProjects } from "@/components/layout/nav-projects"
import { NavUser } from "@/components/layout/nav-user"
import { TeamSwitcher } from "@/components/layout/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {

  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [

    {
      title: "Units",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Tenants",
          url: "#",
        },
        {
          title: "Maintenance",
          url: "#",
        },
        {
          title: "Air Bnbs",
          url: "#",
        },
      ],
    },
    {
      title: "Leases",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Lease Agreements",
          url: "#",
        },
        {
          title: "Rental Payments",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Financial Reports",
          url: "#",
        },
        {
          title: "Occupancy Reports",
          url: "#",
        },
        {
          title: "Maintenance Summary",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Calendar",
      url: "#",
      icon: Frame,
    },
    {
      name: "Document Management",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Projects",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
