"use client";

import { Button } from "@/components/button/button";

export default function ButtonPage() {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Button Components</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-5">
            <div>
                <Button variant="primary" size="lg">
                    Primary Button
                </Button>
            </div>
            <div>
                <Button variant="highlight" size="lg">
                    Highlight Button
                </Button>
            </div>
            <div>
                <Button variant="secondary" size="lg">
                    Secondary Button
                </Button>
            </div>
            <div>
                <Button variant="no-style" size="lg">
                    No Style Button
                </Button>
            </div>
        </div>
    </div>
  );
}
