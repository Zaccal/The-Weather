import ThemeModeToggle from '@/components/ThemeModeToggle/ThemeModeToggle'
import Divider from '@/components/ui/Divider'
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const SettingsSheetContent = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-2">Settings</SheetTitle>
        <Divider />
        <div className="!mt-4 border-border">
          <h4 className="font-bold mb-3">Theme</h4>
          <ThemeModeToggle />
        </div>
      </SheetHeader>
    </SheetContent>
  )
}

export default SettingsSheetContent
