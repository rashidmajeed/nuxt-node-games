import { helpers } from 'vuelidate/lib/validators'

export const allowedFilesExtensions = (value) => {
  if (!helpers.req(value)) return true

  const allowedExtensions = ['jpg', 'png', 'jpeg']
  const extension = value.split('.').pop()
  return allowedExtensions.includes(extension)
}