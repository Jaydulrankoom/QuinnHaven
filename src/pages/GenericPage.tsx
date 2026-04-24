export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">{title}</h1>
        <p className="text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
          Currently under development as part of the dynamic CMS rollout. Check back shortly to view {title?.toLowerCase()} details.
        </p>
      </div>
    </div>
  );
}
