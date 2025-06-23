// import framer motion
import {motion} from "framer-motion"

// importicons
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
import img2 from "../src/assets/projectimg/img2.png"
import img3 from "../src/assets/projectimg/img3.jpeg"
import img4 from "../src/assets/projectimg/img4.jpeg"
import img5 from "../src/assets/projectimg/img5.jpg"
import img6 from "../src/assets/projectimg/img6.jpg"


function App() {

  return (
    <>
    <main className=" bg-gray-700 min-h-screen px-10 md:px-20 lg:px-40"> 
      <section>
        <nav className="py-10 flex justify-between">
          <h1 className=" font-serif italic text-5xl font-bold md:text-xl lg:text-6xl">DevOps Nimz</h1>
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
          <h2 className="text-amber-300 font-black text-5xl md:text-6xl lg:text-7xl lg:mb-4">Nipun Nilame</h2>
          <h3 className="text-3xl py-2 ">Full-stack Developer & Cloud Engineer</h3>
          <p className="py-3 text-sm max-w-xl mx-auto md:texxt-md "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab voluptatum praesentium itaque magnam, atque natus earum alias voluptatibus, porro dignissimos corporis quidem quis placeat repellendus tempore quos? Sunt, vel.</p>
        {/* social meadia icon Content */}
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://github.com/NipunNilame"><FaGithub /></a>
          <a href="http://linkedin.com/in/nipun-nilame-"><FaLinkedin /></a>
          <a href=""><FaFacebook /></a>
        </div>
        </div>
        {/* image main content */}
        <motion.div 
        initial = {{opacity: 0, scale: 0.5, }}
        animate= {{opacity:1, scale:1,rotate:360}} 
        transition={{duration:1}}>
        <div className=" w-100 py-3 m-auto  ">
          <img src={mainImage} alt="main image" className="rounded-b-full" />
        </div>
        </motion.div>
      </section>
      {/* services section */}
      <section>
        <div>
          <h2 className="text-5xl py-5 font-bold opacity-60">Service from Me</h2>
          <p className="py-3 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab voluptatum praesentium itaque magnam, atque natus earum alias voluptatibus, porro dignissimos corporis quidem quis placeat repellendus tempore quos? Sunt, vel.</p>

        </div>

        {/* srvice card */}
        <div className="md:flex lg:flex gap-10">
          <motion.div
          whileHover={{scale:1.1, }}
          whileTap={{scale:0.2}}
          >
          <div className=" bg-amber-300 text-center shadow-sm p-5 rounded-xl my-5 py-2 ">
            <img src={cssImage} alt="css logo image" className=" w-50 h-30 py-2 inline rounded-3xl" />
            <h2 className="text-2xl py-5 font-bold ">Coloboration with CSS </h2>
            <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur distinctio voluptatibus, porro tenetur earum quaerat vel</p>
          </div>
          </motion.div>

          <motion.div
          whileHover={{scale:1.1, }}
          whileTap={{scale:0.2}}
          >
          <div className=" bg-amber-300 text-center shadow-sm p-5 rounded-xl my-5 py-2">
            <img src={htmlImage} alt="css logo image" className=" w-50 h-30 py-2 inline rounded-3xl" />
            <h2 className="text-2xl py-5 font-bold ">Coloboration with HTML </h2>
            <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur distinctio voluptatibus, porro tenetur earum quaerat vel</p>
          </div></motion.div>


          <motion.div
          whileHover={{scale:1.1, }}
          whileTap={{scale:0.2}}
          >
          <div className=" bg-amber-300 text-center shadow-sm p-5 rounded-xl my-5 py-2">
            <img src={reactImage} alt="css logo image" className=" w-50 h-30 py-2 inline rounded-3xl" />
            <h2 className="text-2xl py-5 font-bold ">Coloboration with REACT </h2>
            <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur distinctio voluptatibus, porro tenetur earum quaerat vel</p>
          </div>
          </motion.div>
        </div>

      </section>

      {/* my project */}
      <section>
        <div>
          <h2 className="text-5xl py-5 font-bold opacity-60">Projects</h2>
          <p className="py-3 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab voluptatum praesentium itaque magnam, atque natus earum alias voluptatibus, porro dignissimos corporis quidem quis placeat repellendus tempore quos? Sunt, vel.</p>
        </div>
        {/* add here my project image */}
        <div className="flex flex-col gap-5 p-10 lg:flex-row lg:flex-wrap ">
          <motion.div
          whileHover={{scale:1.1,rotate:10}}
          whileTap={{scale:0.8}}
          ><div className=" basis-1/3 flex-1 max-w-xl"><img src={img2} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" /></div></motion.div>
          
          <motion.div
          whileHover={{scale:1.1,rotate:10}}
          whileTap={{scale:0.8}}
          ><div className=" basis-1/3 flex-1 max-w-xl"><img src={img4} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" /></div></motion.div>
          
          <motion.div
          whileHover={{scale:1.1,rotate:10}}
          whileTap={{scale:0.8}}
          ><div className=" basis-1/3 flex-1 max-w-xl"><img src={img5} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" /></div></motion.div>
          
          <motion.div
          whileHover={{scale:1.1,rotate:10}}
          whileTap={{scale:0.8}}
          ><div className=" basis-1/3 flex-1 max-w-xl"><img src={img6} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" /></div></motion.div>

          <motion.div
          whileHover={{scale:1.1,rotate:10}}
          whileTap={{scale:0.8}}
          ><div className=" basis-1/3 flex-1 max-w-xl"><img src={img1} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" /></div></motion.div>
          
          <motion.div
          whileHover={{scale:1.1,rotate:10}}
          whileTap={{scale:0.8}}
          ><div className=" basis-1/3 flex-1 max-w-xl"><img src={img3} alt="project image 1"  layout = "responsive" className=" rounded-lg object-cover" /></div></motion.div>
        </div>
      </section>



</main>
    </>
  )
}

export default App