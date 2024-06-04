import React from 'react';

export default function About() {
  return (
    <div className="h-full w-full bg-gray-[50] p-4">
      {/* education */}
      <div className="w-full h-max flex flex-col mt-8">
        <div className="flex flex-row justify-center text-4xl font-bold text-indigo-800">EDUCATION</div>
        <div className="p-8 flex flex-col sm:flex-row sm:flex-wrap justify-around mt-2 gap-y-8">
          {/* college */}
          <div className="p-4 flex flex-col w-full sm:w-96 h-72 border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center bg-white shadow-md">
            <span className="font-bold text-indigo-800 text-[18px]">BMS College Of Engineering-Bengaluru</span>
            <img className="w-24 h-24 my-2" src="https://static.vecteezy.com/system/resources/thumbnails/012/818/553/small_2x/graduation-cap-icon-education-symbol-and-sign-illustration-free-vector.jpg" alt="Graduation Cap" />
            <span className="text-lg font-semibold">Computer Science Engineering (2021-25)</span>
            <span className="font-semibold text-gray-500">CGPA : 8.1</span>
          </div>
          {/* highschool */}
          <div className="p-4 flex flex-col w-full sm:w-96 h-72 border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center bg-white shadow-md">
            <span className="font-bold text-indigo-800 text-[18px]">S.Tech Senior Secondary School-Rajasthan</span>
            <img className="w-24 h-24 my-2" src="https://static.vecteezy.com/system/resources/thumbnails/000/378/407/small/Education_2__28123_29.jpg" alt="Education" />
            <span className="text-lg font-semibold">CLASS XII - CBSE (2018-25)</span>
            <span className="font-semibold text-gray-500">AGGREGATE : 90.4</span>
          </div>
          {/* school */}
          <div className="p-4 flex flex-col w-full sm:w-96 h-72 border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center bg-white shadow-md">
            <span className="font-bold text-indigo-800 text-[18px]">St Paul's Senior Secondary School-Rajasthan</span>
            <img className="w-24 h-24 my-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvHDm4vqil5PshTWZXxd0Rh3Hb30kXtKM27xjeFsvqFxnxoyG4pTHPa-W7eMyaS_aeSs&usqp=CAU" alt="School" />
            <span className="text-lg font-semibold">CLASS X - CBSE (2008-18)</span>
            <span className="font-semibold text-gray-500">AGGREGATE : 91.4</span>
          </div>
        </div>
      </div>
      {/* education section over */}
      
      {/* technical skills */}
      <div className="w-full h-max flex flex-col mt-8 justify-center text-center">
        <div className="flex flex-row justify-center text-4xl font-bold text-indigo-800">TECHNICAL SKILLS</div>
        <div className="flex flex-col mt-8 items-center">
          <div className="w-5/6 border-[2px] rounded-[24px] border-gray-300 p-8 h-max flex flex-col text-lg space-y-4 bg-white shadow-md">
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-indigo-800 mr-2">FRONTEND:</h3>
              <span>HTML, CSS, JavaScript, ReactJs, NextJs, Tailwind CSS, NextUI, Bootstrap</span>
            </div>
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-indigo-800 mr-2">BACKEND:</h3>
              <span>NodeJs, ExpressJs, PHP</span>
            </div>
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-indigo-800 mr-2">DATABASE:</h3>
              <span>MongoDB, MySQL</span>
            </div>
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-indigo-800 mr-2">LANGUAGES:</h3>
              <span>C, C++, Java</span>
            </div>
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-indigo-800 mr-2">IT CONSTRUCTS:</h3>
              <span>Data Structure And Algorithms, OOPS</span>
            </div>
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-indigo-800 mr-2">TOOLS:</h3>
              <span>GitHub, Git, JIRA, Docker, Stripe, Pritunl VPN</span>
            </div>
          </div>
        </div>
      </div>
      {/* technical skill section over */}
      
      {/* projects */}
      <div className="w-full h-max flex flex-col mt-8">
        <div className="flex flex-row justify-center text-4xl font-bold text-indigo-800">PROJECTS</div>
        <div className="flex flex-wrap justify-center">
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card 1 */}
            <div className="p-4 flex flex-col border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center space-y-4 bg-white shadow-md">
              <img className="w-56 h-44 rounded-[24px]" src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1" alt="Portfolio Image" />
              <h1 className="font-bold text-xl text-indigo-800">My Portfolio</h1>
              <div className="flex flex-row items-center justify-between gap-x-4">
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Github
                </button>
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Vercel
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 flex flex-col border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center space-y-4 bg-white shadow-md">
              <img className="w-56 h-44 rounded-[24px]" src="https://cxotoday.com/wp-content/uploads/2023/02/ecommerce.png" alt="Ecommerce Image" />
              <h1 className="font-bold text-xl text-indigo-800">Shopper</h1>
              <div className="flex flex-row items-center justify-between gap-x-4">
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Github
                </button>
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Vercel
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 flex flex-col border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center space-y-4 bg-white shadow-md">
              <img className="w-56 h-44 rounded-[24px]" src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg" alt="food delivery Image" />
              <h1 className="font-bold text-xl text-indigo-800">Peetza</h1>
              <div className="flex flex-row items-center justify-between gap-x-4">
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Github
                </button>
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Vercel
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 flex flex-col border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center space-y-4 bg-white shadow-md">
              <img className="w-56 h-44 rounded-[24px]" src="https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/v0/upload/mig_gy5unxi4_smartsupp-mobile-app-cover2x.png" alt="Chatting image" />
              <h1 className="font-bold text-xl text-indigo-800">ChatterBox</h1>
              <div className="flex flex-row items-center justify-between gap-x-4">
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Github
                </button>
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Vercel
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-4 flex flex-col border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center space-y-4 bg-white shadow-md">
              <img className="w-56 h-44 rounded-[24px]" src="https://setplex.com/blog/wp-content/uploads/2021/02/video-streaming.jpg" alt="Streaming Image" />
              <h1 className="font-bold text-xl text-indigo-800">Screenfix</h1>
              <div className="flex flex-row items-center justify-between gap-x-4">
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Github
                </button>
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Vercel
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-4 flex flex-col border-[2px] border-gray-300 rounded-[24px] justify-center text-center items-center space-y-4 bg-white shadow-md">
              <img className="w-56 h-44 rounded-[24px]" src="https://www.goodnightjournal.com/screenshoot1.png" alt="Blogging Image" />
              <h1 className="font-bold text-xl text-indigo-800">ThoughtStack</h1>
              <div className="flex flex-row items-center justify-between gap-x-4">
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Github
                </button>
                <button className="rounded-full border-[1px] border-gray-400 p-2 font-bold hover:bg-indigo-800 hover:text-white transition duration-300 w-24">
                  Vercel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* projects over */}
      
      {/* work experience */}
      <div className="w-full h-max flex flex-col mt-8 pb-2">
        <div className="flex flex-row justify-center text-4xl font-bold text-indigo-800">WORK EXPERIENCE</div>
        <div className="flex flex-col mt-8 items-center">
          <div className="w-5/6 border-[2px] rounded-[24px] border-gray-300 p-8 h-max flex flex-col text-lg gap-y-2 bg-white shadow-md">
            <span className="w-full border-[2px] rounded-[24px] border-gray-300 p-4 h-max flex flex-col text-lg">
              <h3 className="font-semibold text-indigo-800 mr-1">Intern - Tejas Technological Company</h3>
              <ul className="list-disc list-inside text-left">
                <li>Spearheaded frontend feature integration for the company portal.</li>
                <li>Mastered various Next.js libraries to enhance development efficiency.</li>
                <li>Orchestrated website content design to ensure optimal user experience.</li>
              </ul>
            </span>
            <span className="w-full border-[2px] rounded-[24px] border-gray-300 p-4 h-max flex flex-col text-lg">
              <h3 className="font-semibold text-indigo-800 mr-1">Social Internship At Sitara</h3>
              <ul className="list-disc list-inside text-left">
                <li>Responsible for creating teacher instruction kits for visually impaired students.</li>
              </ul>
            </span>
            <span className="w-full border-[2px] rounded-[24px] border-gray-300 p-4 h-max flex flex-col text-lg">
              <h3 className="font-semibold text-indigo-800 mr-1">Tutor - Teachers By Choice</h3>
              <ul className="list-disc list-inside text-left">
                <li>Mentored two students, providing online guidance for the IGCSE curriculum and offline support for the ICSE syllabus.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      {/* work experience over */}
    </div>
  );
}
