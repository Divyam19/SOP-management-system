import { Background } from "@/components/Background";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default function Home() {

  
  return (
    <div>
      
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Background/>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen"><Navbar/></div>
      <div>
        <div>

        </div>
      </div>
    </div>
  );
}
