document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica');
            const muteButton = document.getElementById('muteButton');

            function toggleMute() {
                audio.muted = !audio.muted; 
                muteButton.textContent = audio.muted ? '🔇 Som desligado' : '🔊 Som ligado'; 
            }

            muteButton.addEventListener('click', toggleMute);
  });