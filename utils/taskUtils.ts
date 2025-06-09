import type { Task, Priority } from "@/types/task"

const priorityOrder: Record<Priority, number> = {
  high: 3,
  medium: 2,
  low: 1,
}

export const sortTasksByPriority = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority]
    if (priorityDiff !== 0) return priorityDiff
    return b.createdAt.getTime() - a.createdAt.getTime()
  })
}

export const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case "high":
      return {
        backgroundColor: "#ef4444",
        color: "white",
        borderColor: "#dc2626",
      }
    case "medium":
      return {
        backgroundColor: "#f59e0b",
        color: "white",
        borderColor: "#d97706",
      }
    case "low":
      return {
        backgroundColor: "#10b981",
        color: "white",
        borderColor: "#059669",
      }
  }
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "todo":
      return {
        backgroundColor: "#6b7280",
        color: "white",
        borderColor: "#4b5563",
      }
    case "in-progress":
      return {
        backgroundColor: "#3b82f6",
        color: "white",
        borderColor: "#2563eb",
      }
    case "done":
      return {
        backgroundColor: "#10b981",
        color: "white",
        borderColor: "#059669",
      }
    default:
      return {
        backgroundColor: "#6b7280",
        color: "white",
        borderColor: "#4b5563",
      }
  }
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}
