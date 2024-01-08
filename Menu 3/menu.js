function toggleCategory() {
const category = document.querySelector('.resources');

if (category.classList.contains('hidden')) {
category.classList.remove('hidden');
} else {
category.classList.add('hidden');
}
}
function showMessage() {
const message = "I don't have that much time today to make all of these. I hope u like my project :)";
alert(message);
}
