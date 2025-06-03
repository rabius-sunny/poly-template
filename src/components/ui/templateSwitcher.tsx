'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '~/components/ui/select'

type TTemplate =
  | 'DEFAULT'
  | 'FASHION'
  | 'ELECTRONICS'
  | 'FOOD'
  | 'PHARMACEUTICALS'
  | 'BEAUTY'
  | 'CLOTHING'
  | 'FLOWER_SHOP'
  | 'FRUIT'
  | 'GROCERY'
  | 'HARDWARE'
  | 'HOME'
  | 'JEWELRY'
  | 'PET'
  | 'SPORTS'
  | 'TOYS'

type TProps = {}

type TemplateOption = {
  name: TTemplate
  displayName: string
}

export default function TemplateSwitcher({}: TProps) {
  const [currentTemplate, setCurrentTemplate] = useState<TTemplate>('DEFAULT')
  const [templates, setTemplates] = useState<TemplateOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetch available templates and current template on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch all templates
        const templatesRes = await fetch('/api/get-all-templates')
        const templatesData = await templatesRes.json()
        setTemplates(templatesData.templates || [])

        // Fetch current template
        const currentRes = await fetch('/api/get-current-template')
        const currentData = await currentRes.json()
        setCurrentTemplate(currentData.template || 'DEFAULT')
      } catch {
        toast.error('Failed to load templates')
      }
    }

    fetchData()
  }, [])

  const handleTemplateChange = async (templateName: TTemplate) => {
    if (templateName === currentTemplate) return

    setIsLoading(true)

    try {
      const response = await fetch('/api/get-current-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ template: templateName })
      })

      if (!response.ok) {
        throw new Error('Failed to switch template')
      }

      setCurrentTemplate(templateName)
      toast.success(`Switched to ${templateName.toLowerCase().replace('_', ' ')} template`)

      // Use URL parameter approach as fallback for reliable switching
      window.location.href = `${window.location.pathname}?template=${templateName}`
    } catch {
      toast.error('Failed to switch template')
    } finally {
      setIsLoading(false)
    }
  }

  const formatDisplayName = (name: string) => {
    return name
      .toLowerCase()
      .replace('_', ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
  }

  return (
    <div className='fixed bottom-4 right-4 z-50 shadow-black/30 rounded-lg bg-white overflow-hidden shadow-lg'>
      <Select value={currentTemplate} onValueChange={handleTemplateChange} disabled={isLoading}>
        <SelectTrigger className='w-[180px] overflow-hidden'>
          <SelectValue placeholder='Select a template'>
            {formatDisplayName(currentTemplate)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {templates.map((template) => (
            <SelectItem key={template.name} value={template.name}>
              {formatDisplayName(template.name)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isLoading && (
        <div className='absolute inset-0 bg-white/80 flex items-center justify-center'>
          <div className='w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin' />
        </div>
      )}
    </div>
  )
}
