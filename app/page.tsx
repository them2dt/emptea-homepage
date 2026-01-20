import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <main className="h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="px-12 py-6 flex items-center justify-center gap-2">
        <span className="text-xl font-bold tracking-tight">Emptea</span>
        <span className="text-xl font-serif italic tracking-tight">Studios</span>
      </nav>

      {/* Main Content */}
      <div className="flex-1 px-6 lg:px-12 pb-12 flex items-center lg:items-start justify-center">
        <div className="h-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-center w-full max-w-7xl">

          {/* Left Side - Content */}
          <div className="flex justify-center lg:justify-end items-center lg:items-end w-full lg:w-96 gap-6">
            <h1 className="text-5xl lg:text-8xl font-serif text-center lg:text-right leading-tight">
              Workout,<br className="lg:hidden" /> Level up.
            </h1>
          </div>

          {/* Center - iPhone Mockup */}
          <div className="flex justify-center items-center shrink-0">
            {/* iPhone Frame */}
            <div className="bg-black w-64 rounded-[48px] p-3 shadow-2xl transform scale-100 lg:scale-110 transition-transform duration-500">
              {/* Screen with proper aspect ratio */}
              <img
                src="/assets/mock-up.png"
                alt="Crank App Demo"
                className="w-full rounded-[36px]"
                style={{ aspectRatio: '1290 / 2796' }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-96 gap-6 text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl font-serif">
              Crank
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              A gamified lifting tracker that turns your gym sessions into RPG progression.
              Earn XP, level up muscles, and visualize your progress with a dynamic body map.
            </p>

            {/* TestFlight Link */}
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="w-fit font-bold text-white lg:mt-4 px-8 py-4 rounded-full bg-black shadow-lg">
                Join TestFlight
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="px-12 py-6 text-sm text-muted-foreground text-center">
        © 2025 Emptea. All rights reserved.
      </footer>
    </main>
  );
}
