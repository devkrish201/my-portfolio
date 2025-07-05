"use client"

import { Calendar } from "../ui/calendar"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export default function TechyDatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    // Close calendar if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const formatted = selectedDate
        ? format(selectedDate, "[dd][MM][yyyy]")
        : "[00][00][0000]"

    return (
        <div className="relative w-fit" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="px-6 py-3 text-xl font-mono rounded-xl bg-white/10 border border-gray-700 text-white hover:bg-white/20 transition-all flex items-center gap-3 shadow-lg backdrop-blur-md"
            >
                <CalendarIcon className="w-5 h-5 text-blue-400" />
                {formatted}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 z-50 bg-black/90 border border-blue-500 rounded-xl p-4 shadow-2xl backdrop-blur-lg"
                    >

                        <div className="w-full max-w-sm mx-auto">
                            <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                className="rounded-xl shadow-lg dark:bg-black dark:text-white bg-white text-black"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
