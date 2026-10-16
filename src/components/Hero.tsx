function Hero(){
    return(
        <section className= "min-h-[80vh] flex items-center">
            <div className= "max-w-7xl mx-auto px-6 py-20 w-full">
                <p className= "test-sm font-medium uppercase tracking-widest text-gray-400 mb-4">Computer Engineering Student</p>
                <h1 className ="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
                    Hi! I'm Kadidjatou.
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl leading relaxed">
                    I build software, cloud applications and intelligent systems.
                </p>
                <div className= "mt-10 flex gap-4">
                    <a 
                       className ="px-6 py-3 bg-white text-black font medium rounded-lg hover:bg-gray-200 transition">
                        View My Projects
                    </a>
                    <a 
                       className= "px-6 py-3 border-gray-700 font-medium rounded-lg hover:bg-gray-900 transition">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero