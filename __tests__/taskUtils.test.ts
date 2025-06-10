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
          status: "todo",
          createdAt: new Date("2024-01-01"),
          updatedAt: new Date("2024-01-01"),
        },
        {
          id: "2",
          title: "High priority task",
          description: "",
          priority: "high",
          status: "todo",
          createdAt: new Date("2024-01-02"),
          updatedAt: new Date("2024-01-02"),
        },
        {
          id: "3",
          title: "Medium priority task",
          description: "",
          priority: "medium",
          status: "todo",
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
    it("should return correct color objects for each priority", () => {
      expect(getPriorityColor("high")).toEqual({
        backgroundColor: "#ef4444",
        color: "white",
        borderColor: "#dc2626",
      })

      expect(getPriorityColor("medium")).toEqual({
        backgroundColor: "#f59e0b",
        color: "white",
        borderColor: "#d97706",
      })

      expect(getPriorityColor("low")).toEqual({
        backgroundColor: "#10b981",
        color: "white",
        borderColor: "#059669",
      })
    })
  })

  describe("getStatusColor", () => {
    it("should return correct color objects for each status", () => {
      expect(getStatusColor("todo")).toEqual({
        backgroundColor: "#6b7280",
        color: "white",
        borderColor: "#4b5563",
      })

      expect(getStatusColor("in-progress")).toEqual({
        backgroundColor: "#3b82f6",
        color: "white",
        borderColor: "#2563eb",
      })

      expect(getStatusColor("done")).toEqual({
        backgroundColor: "#10b981",
        color: "white",
        borderColor: "#059669",
      })
    })
  })
})
