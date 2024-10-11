export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);
  
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        col.innerHTML = `
            <div class="banner-text">
                <p class="large-text">Caramels gummi bears bonbon danish gummi bears gingerbread.</p>
                <p>Jelly cupcake I love I love cookie cookie bear claw.</p>
                <a class="primary-btn" href="https://www.youtube.com/@AEMGeeks" target="_blank">Muffin tiramisu</a>
                <p class="primary-text">tootsie roll gummies sweet roll.</p>
            </div>
            <div class="banner-image">
            </div>
        `
      });
    });
  }
  