const SkillCategory = ({ title, icon, skills }) => (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">{icon}</span>
            {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-2 bg-blue-900 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default SkillCategory