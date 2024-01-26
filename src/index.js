document.getElementById('dropdown-js').addEventListener('click', function () {
    var dropdownContent = this.querySelectorAll('.dropdown-content');
    dropdownContent.forEach(function (content) {
        content.classList.toggle('hidden');
    });
});
