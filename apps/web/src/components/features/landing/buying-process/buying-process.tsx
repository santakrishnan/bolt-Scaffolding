import { BuyingProcessCarousel } from './buying-process-carousel'

const processSteps = [
  {
    icon: 'refresh' as const,
    title: 'Fast & Simple Process',
    description: 'Clear pricing, no hidden fees. See the full breakdown before you commit.',
  },
  {
    icon: 'search' as const,
    title: 'Transparent from the Start',
    description: 'Clear pricing, no hidden fees. See the full breakdown before you commit.',
  },
  {
    icon: 'shield' as const,
    title: 'Inspected by Arrow',
    description: 'Every listing includes a detailed inspection report and full history.',
  },
  {
    icon: 'clipboard' as const,
    title: 'Buy with Confidence',
    description: 'Every listing includes a detailed condition report and full history.',
  },
]

export function BuyingProcess() {
  return (
    <section className="relative h-[680px] w-full overflow-hidden lg:h-[820px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="Family with car"
          className="h-full w-full object-cover object-[10%_85%] lg:object-[15%_90%]"
          src="/images/buying-process/buying-process-bg.png"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        {/* Title */}
        <h2 className="mb-8 text-center font-semibold text-2xl text-white lg:mb-12 lg:text-3xl">
          How to buy your next Arrow
        </h2>

        {/* Process cards carousel */}
        <BuyingProcessCarousel steps={processSteps} />
      </div>
    </section>
  )
}
