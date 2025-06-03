import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '~/components/ui/select'

type TProps = {}

export default function TemplateSwitcher({}: TProps) {
  return (
    <div className='fixed bottom-4 right-4 z-50 shadow-black/30 rounded-lg bg-white overflow-hidden shadow-lg'>
      <Select>
        <SelectTrigger className='w-[180px] overflow-hidden'>
          <SelectValue placeholder='Select a template' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='basic'>Basic Template</SelectItem>
          <SelectItem value='modern'>Modern Template</SelectItem>
          <SelectItem value='minimal'>Minimal Template</SelectItem>
          <SelectItem value='professional'>Professional Template</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
