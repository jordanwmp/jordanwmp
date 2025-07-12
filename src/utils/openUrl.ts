export const EMAIL_ADDRESS:string = 'jordan.willian.mp@gmail.com';
export const WHATSAPP_NUMBER:string = 'https://wa.me/5598987180471'

export const openUrl = (url:string) => {
  if(!url) return
  window.open(url, '_blank', 'noopener')
}

export const openEmail = () =>{
  openUrl(`mailto:${EMAIL_ADDRESS}`)
}

export const openWhatsApp = () =>{
  openUrl(WHATSAPP_NUMBER)
}

