const isColor = (strColor: string | undefined) => {
  if(!strColor || !strColor.length) return false;
  const s = new Option().style;
  s.color = strColor;
  return s.color === strColor;
}

export { isColor }
