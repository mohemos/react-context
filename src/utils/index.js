export const formatTime = (distance) => {
  
  const days = "0"+(Math.floor(distance / (1000 * 60 * 60 * 24)))+"".slice(-2);
  const hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
  const minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
  const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2);

  return {seconds, minutes, hours, days}
}