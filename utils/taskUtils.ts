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

export const getPriorityColor = (priority: Priority): string => {
  switch (priority) {
    case "high":
      return "bg-red-500 text-white"
    case "medium":
      return "bg-yellow-500 text-white"
    case "low":
      return "bg-green-500 text-white"
  }
}

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "todo":
      return "bg-gray-500 text-white"
    case "in-progress":
      return "bg-blue-500 text-white"
    case "done":
      return "bg-emerald-500 text-white"
    default:
      return "bg-gray-500 text-white"
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
