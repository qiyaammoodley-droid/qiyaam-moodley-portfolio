import { projects, skills } from "../data/portfolio";

test("portfolio contains real projects", () => {
  expect(projects.length).toBeGreaterThanOrEqual(4);
  expect(projects.every(project => project.title && project.stack.length > 0)).toBe(true);
});

test("core Melsoft technologies are represented", () => {
  expect(skills.Frontend).toContain("React");
  expect(skills.Backend).toContain("Node.js");
});
