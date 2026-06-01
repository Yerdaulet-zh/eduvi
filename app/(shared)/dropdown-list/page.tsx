"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Button } from "@/components/button/button";
import { useKeyboardNavigation } from "../../../hooks/useKeyboardNavigation";
import Link from "next/link";

export default function TestPage() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Enable the mouse and touch (mobile) outside click detection to close the dropdown
    useClickOutside(dropdownRef, () => {setIsOpen(false)});

    useKeyboardNavigation({
        isOpen,
        onClose: () => setIsOpen(false),
        containerRef: dropdownRef,
        itemSelector: 'a',
    });

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <h1 className="text-2xl font-bold">Test Page</h1>
            <div ref={dropdownRef} className="w-fit">
                <Button onClick={toggleDropdown} variant="secondary">
                    Toggle Dropdown
                </Button>
                <div className={`${isOpen ? 'absolute' : 'invisible'} mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5`}>
                    <div className="py-1">
                        <Link href="#" onClick={toggleDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</Link>
                        <Link href="#" onClick={toggleDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</Link>
                        <Link href="#" onClick={toggleDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
