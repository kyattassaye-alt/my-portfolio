function Navbar(){
    return(
        <nav className = "border-b border-gray-800"> 
            <div className = "max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <h1 className ="test-2xl font-bold"> Kadidjatou Yattassaye</h1>
            <div className="flex gap-8">
                <a href= "#about">About</a>
                <a href = "#skills">Skills</a>
                <a href ="#projects">Projects</a> 
                <a href = "#contact">Contact</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar