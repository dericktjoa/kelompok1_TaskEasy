"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Plus, X } from "lucide-react"
import type { TaskFormData, Priority, Status } from "@/types/task"

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void
  onCancel?: () => void
  initialData?: TaskFormData
  isEditing?: boolean
}

export function TaskForm({ onSubmit, onCancel, initialData, isEditing = false }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>(
    initialData || {
      title: "",
      description: "",
      priority: "medium",
      status: "todo",
    },
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    onSubmit(formData)

    if (!isEditing) {
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        status: "todo",
      })
    }
  }

  return (
    <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          {isEditing ? (
            <>
              <X className="h-5 w-5" />
              Edit Task
            </>
          ) : (
            <>
              <Plus className="h-5 w-5" />
              Buat Task Baru
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-semibold text-gray-700">
              Judul Task *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Masukkan judul task..."
              className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
              Deskripsi
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Masukkan deskripsi task..."
              className="border-2 border-gray-200 focus:border-blue-500 transition-colors min-h-[100px]"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Prioritas</Label>
              <Select
                value={formData.priority}
                onValueChange={(value: Priority) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">🔴 High Priority</SelectItem>
                  <SelectItem value="medium">🟡 Medium Priority</SelectItem>
                  <SelectItem value="low">🟢 Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: Status) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">📋 To Do</SelectItem>
                  <SelectItem value="in-progress">⚡ In Progress</SelectItem>
                  <SelectItem value="done">✅ Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
            >
              {isEditing ? "💾 Update Task" : "➕ Buat Task"}
            </Button>
            {isEditing && onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="border-2 border-gray-300 hover:bg-gray-50"
              >
                ❌ Batal
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
