var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function() {
    let f = this.value;
    let i = f * 12;

    inch.value = i;
});

feet.addEventListener('input', function() {
    let f = this.value;
    let i = i / 12;

    if (!Number.isInteger(f)) {
        f = f.Fixed(2);
    }

    feet.value = f;
});