const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  setTimeout(() => {
    const qnt = getMarsTemperature();
    const temp = `Mars temperature is: ${qnt}  degree Celsius`
    console.log(temp)
  }, 5000)
};

sendMarsTemperature();