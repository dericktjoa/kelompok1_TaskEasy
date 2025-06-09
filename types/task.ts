export type Priority = "low" | "medium" | "high"
export type Status = "todo" | "in-progress" | "done"

export interface Task {
  id: string
  title: string
  description: string
  priority: Priority
  status: Status
  createdAt: Date
  updatedAt: Date
}

export interface TaskFormData {
  title: string
  description: string
  priority: Priority
  status: Status
}
