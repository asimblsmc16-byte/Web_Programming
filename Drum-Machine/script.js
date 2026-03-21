document.getElementById('Q_btn').addEventListener('click', () => {
  document.getElementById('Q').play();
  document.getElementById('display').textContent = 'Heater 1';
});

document.getElementById('W_btn').addEventListener('click', () => {
  document.getElementById('W').play();
  document.getElementById('display').textContent = 'Heater 2';
});

document.getElementById('E_btn').addEventListener('click', () => {
  document.getElementById('E').play();
  document.getElementById('display').textContent = 'Heater 3';
});

document.getElementById('A_btn').addEventListener('click', () => {
  document.getElementById('A').play();
  document.getElementById('display').textContent = 'Heater 4';
});

document.getElementById('S_btn').addEventListener('click', () => {
  document.getElementById('S').play();
  document.getElementById('display').textContent = 'Clap';
});

document.getElementById('D_btn').addEventListener('click', () => {
  document.getElementById('D').play();
  document.getElementById('display').textContent = 'Open-HH';
});

document.getElementById('Z_btn').addEventListener('click', () => {
  document.getElementById('Z').play();
  document.getElementById('display').textContent = "Kick-n'-Hat";
});

document.getElementById('X_btn').addEventListener('click', () => {
  document.getElementById('X').play();
  document.getElementById('display').textContent = 'Kick';
});

document.getElementById('C_btn').addEventListener('click', () => {
  document.getElementById('C').play();
  document.getElementById('display').textContent = 'Closed-HH';
});

document.addEventListener('keydown', (event) => {
  const tus = event.key.toUpperCase();
  
  const gecerliTuslar = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  
  if (gecerliTuslar.includes(tus)) {

    const audio = document.getElementById(tus);
    if (audio) {
      audio.play();
      
      const aciklamalar = {
        'Q': 'Heater 1',
        'W': 'Heater 2',
        'E': 'Heater 3',
        'A': 'Heater 4',
        'S': 'Clap',
        'D': 'Open-HH',
        'Z': 'Kick-n\'-Hat',
        'X': 'Kick',
        'C': 'Closed-HH'
      };
      
      document.getElementById('display').textContent = aciklamalar[tus];
    }
  }
});