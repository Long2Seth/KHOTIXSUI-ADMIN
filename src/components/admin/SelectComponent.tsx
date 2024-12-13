"use client";

import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectScrollableProps {
    options: { label: string; value: string }[];
    placeholder?: string;
    onSelect?: (value: string) => void;
}

export function SelectScrollable({
                                  options,
                                  placeholder = "Select an option",
                                  onSelect,
                              }: SelectScrollableProps) {
    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => (
                    <SelectItem key={index} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
