(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'snow-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height, lastNow;
    let snowflakes = [];
    const maxSnowflakes = 150;

    function init() {
        resize();
        for (let i = 0; i < maxSnowflakes; i++) {
            snowflakes.push(new Snowflake());
        }
        requestAnimationFrame(render);
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Snowflake {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.vy = Math.random() * 1 + 0.5;
            this.vx = Math.random() * 0.5 - 0.25;
            this.radius = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y += this.vy;
            this.x += this.vx;

            if (this.y > height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(160, 176, 176, ${this.opacity})`; // Matching var(--text-faded)
            ctx.fill();
        }
    }

    function render(now) {
        ctx.clearRect(0, 0, width, height);
        snowflakes.forEach(snowflake => {
            snowflake.update();
            snowflake.draw();
        });
        requestAnimationFrame(render);
    }

    window.addEventListener('resize', resize);
    init();
})();
