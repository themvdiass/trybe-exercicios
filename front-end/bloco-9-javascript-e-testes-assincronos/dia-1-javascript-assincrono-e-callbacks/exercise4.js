const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const qnt = getMarsTemperature();
  const temp = `Mars temperature is: ${qnt}  degree Celsius`
  console.log(temp)
};

setTimeout(sendMarsTemperature, 5000);