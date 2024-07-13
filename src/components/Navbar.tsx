
import logo from "../../public/societe-generale-2.svg";
import Image from 'next/image';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';
import { getSession, signOut } from 'next-auth/react';
import { Avatar } from '@radix-ui/react-avatar';
import { getUserAuth } from "@/lib/authOptions";

const Navbar = () => {
    const session=  getUserAuth();
    // console.log(session)
    // const [auth, setAuth] = useState(false)    
    return (
        <div>
        <div className='m-4 bg-slate-400 '>
            <div className='p-3 flex flex-row'> 
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        height={40}
                    />
                </div>

                <div className='flex ml-auto pr-3 items-center '>
                    <div className='pr-6 '>
                        <div className='border-solid border-2 border-red-600 rounded-lg'>
                            <ModeToggle/>
                        </div>
                    </div>
                    { session?(
                            
                        <a href="/api/auth/signin">
                            <Button className='bg-red-600 hover:bg-red-400 text-black border-solid border-2 rounded-xl border-black' >
                                Sign-up/in
                            </Button>
                        </a>
                        ):(
                            <div>
                                <Button className='bg-red-600 hover:bg-red-400 text-black border-solid border-2 rounded-xl border-black'
                                // onClick={()=>signOut()} 
                                >
                                    Sign-out
                                </Button>
                            </div>
                        )
                    }
                    
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Navbar;