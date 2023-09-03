import { useTheme } from "@/Providers/theme-provider"
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Monitor, Moon, Sun } from "lucide-react"

const ThemeModeToggle = () => {
    const {theme, setTheme} = useTheme()

    return (
        <Tabs defaultValue={theme} className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger onClick={() => setTheme('light')} className="flex items-center gap-2" value="light">
                    <Sun className="w-4 h-4"/>
                    <span>Light</span>
                </TabsTrigger>
                <TabsTrigger onClick={() => setTheme('system')} className="flex items-center gap-2" value="system">
                    <Monitor className="w-4 h-4"/>
                    <span>System</span>
                </TabsTrigger>
                <TabsTrigger onClick={() => setTheme('dark')} className="flex items-center gap-2" value="dark">
                    <Moon className="w-4 h-4"/>
                    <span>Dark</span>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ThemeModeToggle