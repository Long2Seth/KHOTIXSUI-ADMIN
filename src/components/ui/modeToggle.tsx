"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [isDark, setIsDark] = React.useState(false)

    React.useEffect(() => {
        setIsDark(theme === "dark")
    }, [theme])

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
        setIsDark(!isDark)
    }

    return (
        <div
            className=" cursor-pointer border-0 mr-[34px] lg:mr-0 p-2 text-primary-color hover:bg-primary-color hover:text-white rounded-[6px] "
            onClick={toggleTheme}
        >
            {isDark ? (
                <Moon width={28} height={28} />
            ) : (
                <Sun width={28} height={28}/>
            )}
        </div>
    )
}