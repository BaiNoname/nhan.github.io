document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const menu = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(menu);

        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});