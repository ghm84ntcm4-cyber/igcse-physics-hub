import { PracticeProblem } from "../../types";
import { UNIT_1_PRACTICE_PROBLEMS } from "./unit1";
import { UNIT_2_PRACTICE_PROBLEMS } from "./unit2";
import { UNIT_3_PRACTICE_PROBLEMS } from "./unit3";
import { UNIT_4_PRACTICE_PROBLEMS } from "./unit4";
import { UNIT_5_PRACTICE_PROBLEMS } from "./unit5";
import { UNIT_6_PRACTICE_PROBLEMS } from "./unit6";

export const ALL_PRACTICE_PROBLEMS: PracticeProblem[] = [
  ...UNIT_1_PRACTICE_PROBLEMS,
  ...UNIT_2_PRACTICE_PROBLEMS,
  ...UNIT_3_PRACTICE_PROBLEMS,
  ...UNIT_4_PRACTICE_PROBLEMS,
  ...UNIT_5_PRACTICE_PROBLEMS,
  ...UNIT_6_PRACTICE_PROBLEMS,
];

export function getPracticeProblemsForTopic(topicId: string): PracticeProblem[] {
  return ALL_PRACTICE_PROBLEMS.filter((prob) => prob.topicId === topicId);
}
