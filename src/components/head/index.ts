interface headProps {
  title:string,
  description?:string
}
export function Head({title, description =''}:headProps) {
  document.title = `Food coomerc | ${title}`
  document.querySelector(`[name=descripiton]`)?.setAttribute('content',description)
  return null
}
