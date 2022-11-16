export const convertTime = (time) => {
  const date = new Date(time * 1000);
  return date.toLocaleString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
