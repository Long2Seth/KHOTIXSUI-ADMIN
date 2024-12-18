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
            className=" cursor-pointer border-0 mr-[35px] lg:mr-0  text-primary-color hover:text-primary-color "
            onClick={toggleTheme}
        >
            {isDark ? (
                <Moon width={25} height={25} />
            ) : (
                <Sun className=" text-primary-color hover:text-primary-color h-50 w-50" width={25} height={25}/>
            )}
        </div>
    )
}