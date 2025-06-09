import { describe, it, expect } from "@jest/globals"
import { sortTasksByPriority, getPriorityColor, getStatusColor } from "@/utils/taskUtils"
import type { Task } from "@/types/task"

describe("taskUtils", () => {
  describe("sortTasksByPriority", () => {
    it("should sort tasks by priority (high to low)", () => {
      const tasks: Task[] = [
        {
          id: "1",
          title: "Low priority task",
          description: "",
          priority: "low",
          status: "to-do",
          createdAt: new Date("2024-01-01"),
          updatedAt: new Date("2024-01-01"),
        },
        {
          id: "2",
          title: "High priority task",
          description: "",
          priority: "high",
          status: "to-do",
          createdAt: new Date("2024-01-02"),
          updatedAt: new Date("2024-01-02"),
        },
        {
          id: "3",
          title: "Medium priority task",
          description: "",
          priority: "medium",
          status: "to-do",
          createdAt: new Date("2024-01-03"),
          updatedAt: new Date("2024-01-03"),
        },
      ]

      const sorted = sortTasksByPriority(tasks)

      expect(sorted[0].priority).toBe("high")
      expect(sorted[1].priority).toBe("medium")
      expect(sorted[2].priority).toBe("low")
    })
  })

  describe("getPriorityColor", () => {
    it("should return correct colors for each priority", () => {
      expect(getPriorityColor("high")).toContain("red")
      expect(getPriorityColor("medium")).toContain("yellow")
      expect(getPriorityColor("low")).toContain("green")
    })
  })

  describe("getStatusColor", () => {
    it("should return correct colors for each status", () => {
      expect(getStatusColor("to-do")).toContain("gray")
      expect(getStatusColor("in-progress")).toContain("blue")
      expect(getStatusColor("done")).toContain("green")
    })
  })
})
