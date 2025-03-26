import { listSkills } from "./list-skills.js";
import { introduceEmployee } from "./introduce-employee.js";

export const summarizeEmployee = (employee) => {
  // 👉 Add your codes here

  return `${introduceEmployee(employee)}\n${listSkills(employee.skills)}`
};
