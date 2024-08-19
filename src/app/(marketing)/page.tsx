
import React from "react";
import { Home, Work, Features, Pricing, Reviews} from "@/components";



const HomePage = () => {

    
    return (
        <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
            
            <Home/>


            {/* How it works */}

            <Work />

            {/* Features */}

            <Features />

            {/* Pricing */}

            <Pricing />

            {/* our Customers */}
            <Reviews/>

            {/* news */}
            
        </section>
    )
};

export default HomePage;

