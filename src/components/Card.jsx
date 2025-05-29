import zomont from "../assets/zomont.png";
import xoGame from "../assets/xo-game.png";

export default function ProjectCards() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        <div className="flex justify-center w-full md:w-1/2 lg:w-1/3">
          <div className="w-full sm:w-[300px] h-full border-[0.2rem] border-[solid] border-mainBlue rounded-xl flex flex-col justify-evenly items-center gap-[15px]">
            <div className="relative w-full">
              <img
                src={zomont}
                alt="Zomont"
                className="h-[150px] w-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-stone-900/60 rounded-t-lg hover:opacity-0 transition-all duration-300 cursor-pointer"></div>
            </div>
            <div className="p-4 w-full">
              <h3 className="title">Zomont</h3>

              <div className="flex flex-col sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-lg text-white mb-4 sm:mb-0">
                    Copmany that builds custom furniture for houses
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-3">
                    <li className="bg-blue-100 text-blue-800 text-lg font-medium px-2.5 py-0.5 rounded">
                      WordPress
                    </li>
                    <li className="bg-blue-100 text-blue-800 text-lg font-medium px-2.5 py-0.5 rounded">
                      ACF Page Builder
                    </li>
                    <li className="bg-blue-100 text-blue-800 text-lg font-medium px-2.5 py-0.5 rounded">
                      Bootstrap
                    </li>
                  </ul>
                </div>

                <div className="btn-box">
                  <a className="btn" href="https://zomont.rs/" target="_blank">
                    View website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full md:w-1/2 lg:w-1/3">
          <div className="w-full sm:w-[300px] h-full border-[0.2rem] border-[solid] border-mainBlue rounded-xl flex flex-col justify-evenly items-center gap-[15px]">
            <div className="relative w-full">
              <img
                src={xoGame}
                alt="XO game"
                className="h-[150px] w-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-stone-900/60 rounded-t-lg hover:opacity-0 transition-all duration-300 cursor-pointer"></div>
            </div>
            <div className="p-4 w-full">
              <h3 className="title">XO Game</h3>

              <div className="flex flex-col sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-lg text-white mb-4 sm:mb-0">
                    A simple XO game built with modern tech stack.
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-3">
                    <li className="bg-blue-100 text-blue-800 text-lg font-medium px-2.5 py-0.5 rounded">
                      React
                    </li>
                    <li className="bg-blue-100 text-blue-800 text-lg font-medium px-2.5 py-0.5 rounded">
                      TypeScript
                    </li>
                    <li className="bg-blue-100 text-blue-800 text-lg font-medium px-2.5 py-0.5 rounded">
                      Tailwind
                    </li>
                  </ul>
                </div>

                <div className="btn-box">
                  <a
                    className="btn"
                    href="https://github.com/storiaca/react-tic-tac-toe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
