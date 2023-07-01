
import Lottie from 'react-lottie';
import animationData from '../../assets/hiringlottie.json'

const Banner = () => {
   
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
        
      };
    return (
    
<div className="mt-5 cabin flex justify-center items-center">
   <aside className="w-1/2 mt-10">
   <h1 className="text-xl font-semibold tracking-wide">
   Empower Your Workforce with EliteHire: 
   </h1>
   <p className="text-6xl bg-gradient-to-tl from-blue-700 to-violet-700 bg-clip-text text-transparent  leading-tight tracking-wide text-left font-bold"> The Ultimate Digital Recruitment Solution for MNCs !</p>
   </aside>
   <aside className="w-1/2 h-full">
   <Lottie options={options}  
   height={400}
        width={400} />
    
   </aside>
</div>
);
};
export default Banner;