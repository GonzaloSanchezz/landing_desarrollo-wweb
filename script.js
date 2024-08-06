document.addEventListener('DOMContentLoaded', function () {
    var options = {
      strings: ["Somos un equipo de trabajo con origen en Mendoza, contamos con conocimientos de programación para la confeccion de sitios web, tales como son los lenguajes HTML5, CSS3, JavaScript, React, SAAS, Bootstrap, entre otros. Contamos con asesortes de marketing para hacer que nuestro sitios destaquen los negocios de nuetros clientes entre la competencia, que sumado a nuestros unicos diseños y estrategias de SEO (posicionamiento en la web), se convierten en herramientas indispensables de venta online."],
      typeSpeed: 15
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          new Typed("#typed-output", options);
          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target); // Deja de observar una vez que la animación comienza
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('animated-section'));
  });

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
      var data = google.visualization.arrayToDataTable([
          ['Mes', 'Ventas Antes de la Página Web', 'Ventas Después de la Página Web'],
          ['Enero', 1000, 1500],
          ['Febrero', 1100, 1600],
          ['Marzo', 1050, 1550],
          ['Abril', 1150, 1650],
          ['Mayo', 1200, 1700],
          ['Junio', 1300, 1800],
          ['Julio', 1250, 1850],
          ['Agosto', 1350, 1950],
          ['Septiembre', 1400, 2000],
          ['Octubre', 1500, 2100],
          ['Noviembre', 1600, 2200],
          ['Diciembre', 1700, 2300]
      ]);

      var options = {
          title: 'Impacto de la Página Web en las Ventas',
          curveType: 'function',
          legend: { position: 'bottom' },
          height: '100%'
      };

      var chart = new google.visualization.LineChart(document.getElementById('salesChart'));

      chart.draw(data, options);
  }


  function toggleContent() {
    const content = document.querySelector('.toggle-content');
    const showMore = document.querySelector('.show-more');
    if (content.style.display === "none") {
        content.style.display = "block";
        showMore.textContent = "Mostrar Menos...";
    } else {
        content.style.display = "none";
        showMore.textContent = "Mostrar Más...";
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.toggle-content').style.display = 'none';
});