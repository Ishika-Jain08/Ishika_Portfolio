import SkillList from "../components/SkillList";
import checkmark from "../assets/checkmark.svg";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center text-center py-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-main-color">Skills</h1>

      <div className="flex flex-wrap justify-evenly gap-5 max-w-[26ch] mb-8">
        <SkillList src={checkmark} skill="HTML" />
        <SkillList src={checkmark} skill="CSS" />
        <SkillList src={checkmark} skill="JavaScript" />
        <SkillList src={checkmark} skill="TypeScript" />
        <SkillList src={checkmark} skill="React" />
        <SkillList src={checkmark} skill="Redux" />
        <SkillList src={checkmark} skill="SQL" />
      </div>

      <hr className="w-[100px] h-px bg-text-color my-8 mx-auto" />

      <div className="flex flex-wrap justify-evenly gap-5 max-w-[26ch] mb-8">
        <SkillList src={checkmark} skill="Node" />
        <SkillList src={checkmark} skill="Express" />
        <SkillList src={checkmark} skill="Java" />
        <SkillList src={checkmark} skill="MongoDB" />
        <SkillList src={checkmark} skill="Neon" />
        <SkillList src={checkmark} skill="Postman" />
      </div>
    </section>
  );
};

export default Skills;
