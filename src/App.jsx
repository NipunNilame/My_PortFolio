import { CgDarkMode } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

//image import
import mainImage from "../src/assets/man.jpg"
import cssImage from "../src/assets/css.png"
import htmlImage from "../src/assets/html.jpg"
import reactImage from "../src/assets/react.jpg"
import img1 from "../src/assets/projectimg/img1.jpg"


function App() {

  return (
    <>
    <main className=" bg-gray-700 min-h-screen px-10"> 
      <section>
        <nav className="py-10 flex justify-between">
          <h1 className=" text-amber-300 text-2xl font-bold">DevOps Nimz</h1>
          <ul className=" flex items-center">
            <li><CgDarkMode className=" cursor-pointer text-xl mx-5" /></li>
            <li>
              <a href="https://drive.google.com/file/d/1AZQ5JvT3A1fsmIGGAZssUwoDC9rr69XZ/view?usp=sharing" 
              download={"CV Download"}
              className="bg-amber-300 px-2 py-2 border-none rounded-2xl">CV Download</a>
            </li>
          </ul>
        </nav>

        {/* main Content */}
        <div className=" text-center">
          <h2 className=" font-black text-5xl">Nipun Nilame</h2>
          <h3 className="text-3xl py-2 ">Full-stack Developer & Cloud Engineer</h3>
          <p className="py-3 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab voluptatum praesentium itaque magnam, atque natus earum alias voluptatibus, porro dignissimos corporis quidem quis placeat repellendus tempore quos? Sunt, vel.</p>
        {/* social meadia icon Content */}
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://github.com/NipunNilame"><FaGithub /></a>
          <a href="http://linkedin.com/in/nipun-nilame-"><FaLinkedin /></a>
          <a href=""><FaFacebook /></a>
        </div>
        </div>
        {/* image main content */}
        <div className=" w-100 py-3 m-auto  ">
          <img src={mainImage} alt="main image" className="rounded-b-full" />
        </div>
      </section>
      {/* services section */}
      <section>
        <div>
          <h2 className="text-5xl py-5 font-bold opacity-60">Service from Me</h2>
          <p className="py-3 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab voluptatum praesentium itaque magnam, atque natus earum alias voluptatibus, porro dignissimos corporis quidem quis placeat repellendus tempore quos? Sunt, vel.</p>

        </div>

        {/* srvice card */}

        <div className=" bg-amber-300 text-center shadow-sm p-5 rounded-xl my-5 py-2">
          <img src={cssImage} alt="css logo image" className=" w-50 h-30 py-2 inline rounded-3xl" />
          <h2 className="text-2xl py-5 font-bold ">Coloboration with CSS </h2>
          <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur distinctio voluptatibus, porro tenetur earum quaerat vel</p>
        </div>
                <div className=" bg-amber-300 text-center shadow-sm p-5 rounded-xl my-5 py-2">
          <img src={htmlImage} alt="css logo image" className=" w-50 h-30 py-2 inline rounded-3xl" />
          <h2 className="text-2xl py-5 font-bold ">Coloboration with CSS </h2>
          <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur distinctio voluptatibus, porro tenetur earum quaerat vel</p>
        </div>

        <div className=" bg-amber-300 text-center shadow-sm p-5 rounded-xl my-5 py-2">
          <img src={reactImage} alt="css logo image" className=" w-50 h-30 py-2 inline rounded-3xl" />
          <h2 className="text-2xl py-5 font-bold ">Coloboration with CSS </h2>
          <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur distinctio voluptatibus, porro tenetur earum quaerat vel</p>
        </div>

      </section>

      {/* my project */}
      <section>
        <div>
          <h2 className="text-5xl py-5 font-bold opacity-60">Projects</h2>
          <p className="py-3 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab voluptatum praesentium itaque magnam, atque natus earum alias voluptatibus, porro dignissimos corporis quidem quis placeat repellendus tempore quos? Sunt, vel.</p>
        </div>
        {/* add here my project image */}
        <div className="flex flex-col gap-10 p-10">
          <img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" width={400}/>
          <img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" width={400}/>
          <img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" width={400}/>
          <img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" width={400}/>
          <img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" width={400}/>
          <img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" width={400}/>

        </div>
      </section>



</main>
    </>
  )
}

export default App