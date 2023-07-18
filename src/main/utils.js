import { nativeImage } from 'electron'
import { join } from 'path'

export const getIcon = (status) => {
  const iconName = status === 'load' ? 'loaderTemplate.png' : 'logoTemplate.png'
  let icon = nativeImage.createFromPath(join(__dirname, `../../resources/${iconName}`))
  icon.setTemplateImage(true)
  return icon
}
