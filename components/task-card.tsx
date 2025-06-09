"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Calendar, Save, X, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Task, Priority, Status } from "@/types/task"
import { getPriorityColor, getStatusColor, formatDate } from "@/utils/taskUtils"

interface TaskCardProps {
  task: Task
  onUpdate: (id: string, data: any) => void
  onDelete: (id: string) => void
}

export function TaskCard({ task, onUpdate, onDelete }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
  })

  const handleSave = () => {
    onUpdate(task.id, editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
    })
    setIsEditing(false)
  }

  const handleDelete = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus task ini?")) {
      onDelete(task.id)
    }
  }

  // Check if description is long (more than 100 characters)
  const isLongDescription = task.description && task.description.length > 100

  return (
    <Card className="w-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          {isEditing ? (
            <Input
              value={editData.title}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              className="text-lg font-semibold border-2 border-blue-300 focus:border-blue-500 flex-1"
            />
          ) : (
            <h3
              className="text-lg font-bold text-gray-800 leading-tight break-words hyphens-auto flex-1 min-w-0"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              {task.title}
            </h3>
          )}

          <div className="flex gap-2 flex-shrink-0">
            {isEditing ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSave}
                  className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                >
                  <Save className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCancel}
                  className="h-8 w-8 p-0 text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDelete}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mt-3">
          {isEditing ? (
            <div className="flex gap-2 w-full flex-wrap">
              <Select
                value={editData.priority}
                onValueChange={(value: Priority) => setEditData({ ...editData, priority: value })}
              >
                <SelectTrigger className="w-32 min-w-fit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">🔴 High</SelectItem>
                  <SelectItem value="medium">🟡 Medium</SelectItem>
                  <SelectItem value="low">🟢 Low</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={editData.status}
                onValueChange={(value: Status) => setEditData({ ...editData, status: value })}
              >
                <SelectTrigger className="w-36 min-w-fit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">📋 To Do</SelectItem>
                  <SelectItem value="in-progress">⚡ In Progress</SelectItem>
                  <SelectItem value="done">✅ Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <>
              <Badge
                style={getPriorityColor(task.priority)}
                className="font-semibold px-3 py-1 border text-xs whitespace-nowrap"
              >
                {task.priority === "high" ? "🔴 HIGH" : task.priority === "medium" ? "🟡 MEDIUM" : "🟢 LOW"}
              </Badge>
              <Badge
                style={getStatusColor(task.status)}
                className="font-semibold px-3 py-1 border text-xs whitespace-nowrap"
              >
                {task.status === "todo" ? "📋 TO DO" : task.status === "in-progress" ? "⚡ IN PROGRESS" : "✅ DONE"}
              </Badge>
            </>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {isEditing ? (
          <Textarea
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            placeholder="Deskripsi task..."
            className="mb-4 border-2 border-blue-300 focus:border-blue-500 resize-none"
            rows={3}
          />
        ) : (
          task.description && (
            <div className="mb-4">
              <p
                className={`text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg break-words hyphens-auto ${
                  !isExpanded && isLongDescription ? "line-clamp-3" : ""
                }`}
                style={{
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {task.description}
              </p>
              {isLongDescription && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-1" />
                      Tampilkan lebih sedikit
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-1" />
                      Tampilkan lebih banyak
                    </>
                  )}
                </Button>
              )}
            </div>
          )
        )}

        <div className="flex items-center text-xs text-gray-500 bg-gray-100 p-2 rounded-lg">
          <Calendar className="h-3 w-3 mr-2 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="truncate">📅 Dibuat: {formatDate(task.createdAt)}</div>
            {task.updatedAt.getTime() !== task.createdAt.getTime() && (
              <div className="mt-1 truncate">🔄 Diupdate: {formatDate(task.updatedAt)}</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
