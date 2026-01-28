// Starfield background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = [];
const starCount = 200;

class Star {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random();
        this.fadeSpeed = (Math.random() - 0.5) * 0.01;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.fadeSpeed;

        if (this.opacity <= 0 || this.opacity >= 1) {
            this.fadeSpeed *= -1;
        }

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize stars
for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    
    requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
