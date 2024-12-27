/* eslint-disable react/prop-types */
const  SkillList=({ src, skill })=> {
    return (
      <span className="flex items-center gap-2">
        <img src={src} alt="Checkmark icon" className="w-5" />
        <p className="text-lg">{skill}</p>
      </span>
    );
  }
  
  export default SkillList;
  