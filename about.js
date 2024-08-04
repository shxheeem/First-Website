
$(document).ready(function() {
    $('.specific-column').hover(
        function() {
            var $currentRow = $(this).closest('.dim-row');
            // Add dimming effect to all rows
            $('.dim-row').addClass('dimmed-effect');
            // Remove dimming effect from the current row
            $currentRow.removeClass('dimmed-effect');
        },
        function() {
            // Remove dimming effect from all rows
            $('.dim-row').removeClass('dimmed-effect');
        }
    );
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
