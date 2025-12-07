const FeatureCard = ({ icon, title, subtitle }) => {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center justify-center h-48 w-full">
            <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300 group-hover:text-purple-400">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
    )
}

export default FeatureCard