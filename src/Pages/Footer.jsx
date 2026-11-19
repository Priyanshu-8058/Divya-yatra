function Footer() {
  return (
    <footer className="bg-[#182735] text-white">
      

      {/* Footer links */}
      <div className="mx-auto max-w-[1215px] px-6">
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-orange-400">ॐ</span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-orange-400">
                  Divya Yatra
                </h2>
                <p className="text-[10px]">
                  Your journey. Your faith. Your divine destination.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-300">
              Thoughtful journeys to the places that move you.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <h3 className="mb-2 text-sm font-bold">Explore</h3>
            <a href="#" className="text-slate-300 hover:text-orange-400">Sacred temples</a>
            <a href="#" className="text-slate-300 hover:text-orange-400">Yatra packages</a>
            <a href="#" className="text-slate-300 hover:text-orange-400">Plan your yatra</a>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <h3 className="mb-2 text-sm font-bold">Plan well</h3>
            <a href="#" className="text-slate-300 hover:text-orange-400">Travel information</a>
            <a href="#" className="text-slate-300 hover:text-orange-400">Travel checklist</a>
            <a href="#" className="text-slate-300 hover:text-orange-400">Frequently asked questions</a>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <h3 className="mb-2 text-sm font-bold">We’re here to help</h3>
            <a href="mailto:namaste@divyayatra.in" className="text-slate-300 hover:text-orange-400">
              namaste@divyayatra.in
            </a>
            <p className="text-slate-300">Daily, 8 am – 8 pm IST</p>
            <a href="#" className="text-slate-300 hover:text-orange-400">Our story</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-600 py-4 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Divya Yatra. Made for journeys that matter.</p>
          <p>Travel with care · Respect every path</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;