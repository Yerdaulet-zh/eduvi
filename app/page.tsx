import Image from "next/image";

export default function Home() {
  return (

    <div>
      <div className="flex items-center w-auto h-auto">
        <div>
          <div className="bg-[#FFFFFF] p-2.5 rounded-xl text-base font-metropolis font-medium text-[#FF6652] w-fit">
            <h1>Never Stop Learning</h1>
          </div>

          <div>
            <h1 className="text-5xl font-bold py-5">
              Grow up your skills by online courses with Eduvi
            </h1>
          </div>

          <div>
            <h1 className="text-[14px] font-extralight text-[#5D5A6F]">
              Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.
            </h1>
          </div>

        <div className="pt-8">
          <div className="flex items-center bg-white rounded-xl p-2 pl-4 shadow-sm border border-gray-100 h-[60px] w-full">
            {/* Left Section: Category Dropdown */}
            <div className="flex items-center gap-2 pr-4 cursor-pointer select-none">
              <span className="text-gray-500 font-medium text-sm md:text-base">
                Kindergarten
              </span>
              {/* Chevron Down Arrow */}
              <svg
                className="w-4 h-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Divider Line */}
            <div className="h-6 w-px bg-gray-200" />

            {/* Middle Section: Main Text Input */}
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="Class/Course"
                className="w-full bg-transparent text-gray-700 placeholder-gray-400 font-medium text-sm md:text-base focus:outline-none"
              />
            </div>

            {/* Right Section: Action Button */}
            <button className="flex items-center justify-center gap-2 bg-[#9333EA] hover:bg-[#7e22ce] text-white font-medium px-6 h-full rounded-lg transition-colors duration-200 shadow-sm cursor-pointer">
              {/* Search Glass Icon */}
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        </div>
        <div>
          <Image
            src="/icons/school-boy-holding-a-book.svg"
            alt="school boy holding a book"
            width={830}
            height={850}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-10">

        <div className="flex flex-col text-[35px] font-bold text-center">
          <h1>High quality video, audio</h1>
          <h1>& live classes</h1>
        </div>

        <div className="flex text-center pt-5 px-10 text-[#5D5A6F]" >
          <h1>
            High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than 480 vertical scan lines or 576 vertical lines is considered high-definition.
          </h1>
        </div>

        <div className="pt-5">
            <button className="flex items-center justify-center gap-2 bg-[#9333EA] hover:bg-[#7e22ce] text-white font-medium px-6 h-full rounded-lg transition-colors duration-200 shadow-sm cursor-pointer p-4">
            Visit Courses
          </button>
        </div>

        <div className="pt-10">
          <div className="p-5 bg-white rounded-2xl">
            <Image
              src="icons/pexels-vanessa.svg"
              alt="teacher"
              width={1500}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
