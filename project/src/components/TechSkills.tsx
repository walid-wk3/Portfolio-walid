import React from 'react';

interface SkillProps {
  name: string;
  icons: string[];
  level: number;
}

export function TechSkills({ skills }: { skills: SkillProps[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="p-4 glass-effect rounded-xl text-center">
          <div className="flex justify-center gap-2 mb-2">
            {skill.icons.map((icon, iconIndex) => (
              <img 
                key={iconIndex}
                src={icon} 
                alt={`${skill.name} logo`} 
                className="w-12 h-12"
              />
            ))}
          </div>
          <h4 className="text-lg font-semibold text-sky-400">{skill.name}</h4>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-sky-400 h-2 rounded-full" 
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}