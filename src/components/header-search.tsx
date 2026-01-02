
"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { sectionItems } from "@/lib/docs-data"

export function HeaderSearch({ className }: { className?: string }) {
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const router = useRouter()

    const allItems = React.useMemo(() => {
        return Object.values(sectionItems).flat()
    }, [])

    const filteredItems = React.useMemo(() => {
        if (!query) return []
        return allItems.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, allItems])

    const handleSelect = (href: string) => {
        setOpen(false)
        setQuery("")
        router.push(href)
    }

    return (
        <Popover open={open && filteredItems.length > 0} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className={`relative ${className}`}>
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                        placeholder="Search docs..."
                        className="pl-9 h-9 bg-secondary border-border/60 focus-visible:ring-1 focus-visible:ring-ring"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                            setOpen(true)
                        }}
                        onFocus={() => {
                            if (query) setOpen(true)
                        }}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[--radix-popover-trigger-width]" align="start" onOpenAutoFocus={(e) => e.preventDefault()}>
                <div className="max-h-[300px] overflow-y-auto p-1">
                    {filteredItems.map((item) => (
                        <div
                            key={item.href + item.title}
                            className="flex items-start gap-3 p-2 rounded-sm hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                            onClick={() => handleSelect(item.href)}
                        >
                            <div className="mt-1 p-1.5 rounded-md bg-primary/10 text-primary">
                                <item.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="font-medium text-sm">{item.title}</span>
                                <span className="text-xs text-muted-foreground line-clamp-2 leading-tight">{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}
