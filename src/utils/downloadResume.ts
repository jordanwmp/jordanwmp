export const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'Jordan_Willian_Resume.pdf'
  link.click()
}
