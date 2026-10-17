import DemoRequest from "@/app/components/DemoRequest";

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">Get Started</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to streamline your deal workflow?</h2>
                        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                            Set up a secure data room for your next transaction in under 24 hours. Flat-rate pricing with no per-page fees.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
                        <DemoRequest />
                    </div>
                </div>
            </section>
        </>
    );
}
