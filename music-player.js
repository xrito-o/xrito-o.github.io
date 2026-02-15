document.addEventListener('DOMContentLoaded', () => {
    const musicFolder = 'music/';
    const tracks = [
        'distorted-love.mp3',
        'distance.mp3',
        'i remember you.mp3',
        'looking for - sped up.mp3',
        'recalling memories that never existed.mp3'
    ];

    let currentTrackIndex = -1;
    let audio = null;

    const playerContainer = document.createElement('div');
    playerContainer.className = 'music-player';
    playerContainer.innerHTML = `
        <div class="player-controls">
            <button id="play-pause" class="player-btn">play</button>
            <div class="track-info">
                <span id="track-name" class="track-name">initializing...</span>
                <div class="progress-bar">
                    <div id="progress" class="progress-fill"></div>
                </div>
            </div>
            <input type="range" id="volume" class="volume-slider" min="0" max="1" step="0.01" value="0.2">
        </div>
    `;

    document.body.appendChild(playerContainer);

    const playPauseBtn = document.getElementById('play-pause');
    const volumeSlider = document.getElementById('volume');
    const progressFill = document.getElementById('progress');
    const trackNameDisplay = document.getElementById('track-name');

    function loadRandomTrack() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * tracks.length);
        } while (newIndex === currentTrackIndex && tracks.length > 1);

        currentTrackIndex = newIndex;
        const trackFile = tracks[currentTrackIndex];

        if (audio) {
            audio.pause();
        }

        audio = new Audio(musicFolder + trackFile);
        audio.volume = volumeSlider.value;

        // Clean up display name (remove .mp3 and replace - with space)
        const displayName = trackFile.replace('.mp3', '').replace(/-/g, ' ');
        trackNameDisplay.textContent = displayName;

        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${progress}%`;
        });

        audio.addEventListener('ended', () => {
            loadRandomTrack();
            audio.play().catch(() => {
                playPauseBtn.textContent = 'play';
                playPauseBtn.classList.remove('playing');
            });
        });
    }

    playPauseBtn.addEventListener('click', () => {
        if (!audio) return;
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'pause';
            playPauseBtn.classList.add('playing');
        } else {
            audio.pause();
            playPauseBtn.textContent = 'play';
            playPauseBtn.classList.remove('playing');
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        if (audio) audio.volume = e.target.value;
    });

    // Handle initial load
    loadRandomTrack();

    // Autoplay attempt / Interaction trigger
    const startAudio = () => {
        if (!audio) return;
        audio.play().then(() => {
            playPauseBtn.textContent = 'pause';
            playPauseBtn.classList.add('playing');
            document.removeEventListener('click', startAudio);
            document.removeEventListener('keydown', startAudio);
        }).catch(err => {
            console.log("Autoplay blocked. Waiting for interaction.");
        });
    };

    // Try playing immediately
    startAudio();

    // Also listen for first interaction
    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);
});
